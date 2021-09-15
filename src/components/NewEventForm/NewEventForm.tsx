import React from 'react';
import { Formik, Form } from 'formik';
import { addDays, format, set, startOfDay } from 'date-fns';
import * as Yup from 'yup';

import Button from '../inputs/Button';
import FormikInputField from '../FormikFields/FormikInputField/FormikInputField';
import FormikTextAreaField from '../FormikFields/FormikTextAreaField/FormikTextAreaField';
import FormikSelectorField from '../FormikFields/FormikSelectorField/FormikSelectorField';
import {EventFormWrapper} from './styled';
import { EVENT_STATUS_OPTIONS } from 'src/utils/constants';
import { EVENT_OPTIONS } from '../EventForm/constants';

export type EventDataInput = {
  id?: string;
  name?: string;
  description?: string;
  startTime?: Date;
  endTime?: Date;
  imageUrl?: string;
  imageAlt?: string;
  location?: string;
  eventType?: string;
  eventStatus?: string;
  teamsUrl?: string;
};

export type EventDataOutput = {
  id?: string;
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  imageUrl?: string;
  imageAlt?: string;
  location?: string;
  eventType: string;
  eventStatus: string;
  teamsUrl?: string;
};

type EventFormProps = {
  headerTitle: string;
  submitTitle: string;
  onSubmit: (data: EventDataOutput) => Promise<void>;
} & EventDataInput;

function NewEventForm({ onSubmit, ...rest }: EventFormProps) {

  // Declartions
  const now = new Date();
  const tomorrow = addDays(startOfDay(now), 1);

  // Utilities
  const setHours = (date: Date, hours: number) =>
    set(date, { hours: hours, minutes: 0, seconds: 0, milliseconds: 0 });
  const parseDate = (date: string, time: string) => new Date(date + 'T' + time);

  // Functions
  const eventDate = format(tomorrow, 'yyyy-MM-dd');
  const eventStartTime = format(setHours(tomorrow, 16), 'HH:mm');
  const eventEndTime = format(setHours(tomorrow, 17), 'HH:mm');


  // Initiation of values
  const InitialValues = { 
    name: rest.name || "",
    eventType: rest.eventType || "",
    date: eventDate,
    startTime: eventStartTime,
    endTime: eventEndTime,
    description: rest.description || "",
    location: rest.location || "", 
    teamsUrl: rest.teamsUrl || "",
    imageUrl: rest.imageUrl || "",
    imageAlt: rest.imageAlt || "",
    eventStatus: rest.eventStatus || EVENT_STATUS_OPTIONS.Draft
  };
  
  // Validation
  const EventFormSchema = Yup.object().shape({
    name: Yup
      .string()
      .max(100, "Event name is too long")
      .required("Event name is required"),
    eventType: Yup
      .string()
      .oneOf(EVENT_OPTIONS)
      .required('Event type is required'),
    date: Yup
      .date()
      .required('Event date is required'),
    startTime: Yup
      .string()
      .required("Start time is required")
      .test("Start Time", "Start time cannot be later than end time", function(startTime) {
        const startTimeHour = parseInt(this.parent.startTime.toString().substring(0,2));
        const endTimeHour = parseInt(this.parent.endTime.toString().substring(0,2));
        return startTimeHour < endTimeHour;
      }),
    endTime: Yup
      .string()
      .required("End time is required")
      /*
      .test("End Time", "End time cannot be earlier than start time", function(endTime) {
        const startTimeHour = parseInt(this.parent.startTime.toString().substring(0,2));
        const endTimeHour = parseInt(this.parent.endTime.toString().substring(0,2));
        return endTimeHour > startTimeHour;
      }) */,
    description: Yup
      .string()
      .max(5000, "Description text is too long")
      .required('Description of event is required'),
    location: Yup
      .string()
      .max(200, "Location text is too long"),
    imageUrl: Yup
      .string()
      .url("URL not valid"),
    eventStatus: Yup
      .string()
      .oneOf([EVENT_STATUS_OPTIONS.Draft, EVENT_STATUS_OPTIONS.Published])
      .required('Event status is required')
  });

  return (
    <div>
      <Formik
        initialValues={InitialValues}
        validationSchema = {EventFormSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => {
            setSubmitting(true);
      
            try {
              onSubmit ({
                id : rest.id,
                name : values.name,
                description : values.description,
                startTime : parseDate(eventDate, values.startTime),
                endTime : parseDate(eventDate, values.endTime),
                imageUrl : values.imageUrl,
                imageAlt : values.imageAlt,
                location : values.location,
                eventType : values.eventType,
                eventStatus : values.eventStatus,
                teamsUrl : values.teamsUrl,    
              });    
            } catch (error) {}
          });
          setSubmitting(false);
        }}
      >
        <EventFormWrapper>
          <h1>{rest.headerTitle}</h1>
          <Form>
            <FormikInputField
              label = "Event name *"
              name = "name"
              type = "text"
            />
            <FormikSelectorField
              label="Event type *"
              name = "eventType"
              options={EVENT_OPTIONS}
            />
            <FormikInputField
              label = "Date *"
              name = "date"
              type = "date"
            />
            <FormikInputField
              label = "Start time *"
              name = "startTime"
              type = "time"
            />
            <FormikInputField
              label = "End time *"
              name = "endTime"
              type = "time"
            />
            <FormikTextAreaField
              label = "Description *"
              name = "description"
              type = "text"
            />
            <FormikInputField
              label = "Location"
              name = "location"
              type = "text"
            />
            <FormikInputField
              label = "Teams URL"
              name = "teamsUrl"
              type = "text"
              placeholder = "https://teams.microsoft.com/..."
            />
            <FormikInputField
              label = "Image Link"
              name = "imageUrl"
              type = "text"
            />
            <FormikInputField
              label = "Image Text"
              name = "imageAlt"
              type = "text"
            />
            <div style={{justifyContent:'center', display:'flex', alignItems: 'center', marginTop:'1rem'}}> 
              <Button type="submit">{rest.submitTitle}</Button>
            </div>
          </Form>
        </EventFormWrapper>
      </Formik>
    </div>
  );
}

export default NewEventForm;