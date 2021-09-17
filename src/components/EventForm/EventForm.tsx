import React from 'react';
import { Formik, Form } from 'formik';
import { addDays, format, set, startOfDay } from 'date-fns';

import Button from '../inputs/Button';
import FormikInputField from '../FormikFields/FormikInputField/FormikInputField';
import FormikTextAreaField from '../FormikFields/FormikTextAreaField/FormikTextAreaField';
import FormikSelectorField from '../FormikFields/FormikSelectorField/FormikSelectorField';
import { EventFormSchema, EventOptions } from './constants';
import { ButtonWrapper, EventFormWrapper } from './styled';
import { EventStatus } from 'src/utils/constants';

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

function EventForm({ onSubmit, ...rest }: EventFormProps) {
  // Utilities
  const setHours = (date: Date, hours: number) =>
    set(date, { hours: hours, minutes: 0, seconds: 0, milliseconds: 0 });
  const parseDate = (date: string, time: string) => new Date(date + 'T' + time);

  // Declartions used in form
  const now = new Date();
  const tomorrow = addDays(startOfDay(now), 1);
  const eventDate = format(tomorrow, 'yyyy-MM-dd');
  const eventStartTime = format(setHours(tomorrow, 16), 'HH:mm');
  const eventEndTime = format(setHours(tomorrow, 17), 'HH:mm');

  // Initiation of form values
  const initialValues = {
    name: rest.name || '',
    eventType: rest.eventType || '',
    date: eventDate,
    startTime: eventStartTime,
    endTime: eventEndTime,
    description: rest.description || '',
    location: rest.location || '',
    teamsUrl: rest.teamsUrl || '',
    imageUrl: rest.imageUrl || '',
    imageAlt: rest.imageAlt || '',
    eventStatus: rest.eventStatus || EventStatus.DRAFT,
  };

  // Helper function for Formik --> onSubmit
  async function submitEventData(values: any, setSubmitting : any): Promise<void> {
    var promise;
    setSubmitting(true);
    try {
      promise = onSubmit({
        id: rest.id,
        name: values.name,
        description: values.description,
        startTime: parseDate(values.date, values.startTime),
        endTime: parseDate(values.date, values.endTime),
        imageUrl: values.imageUrl,
        imageAlt: values.imageAlt,
        location: values.location,
        eventType: values.eventType,
        eventStatus: values.eventStatus,
        teamsUrl: values.teamsUrl,
      });
    } catch (error) {}
    setSubmitting(false);
    return promise;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EventFormSchema}
      onSubmit={ async (values, { setSubmitting }) => {
        await submitEventData(values, setSubmitting);
      }}
    >
      <EventFormWrapper>
        <h1>{rest.headerTitle}</h1>
        <Form>
          <FormikInputField label="Event name *" name="name" type="text" />
          <FormikSelectorField
            label="Event type *"
            name="eventType"
            options={EventOptions}
          />
          <FormikInputField label="Date *" name="date" type="date" />
          <FormikInputField
            label="Start time *"
            name="startTime"
            type="time"
          />
          <FormikInputField label="End time *" name="endTime" type="time" />
          <FormikTextAreaField
            label="Description *"
            name="description"
            type="text"
          />
          <FormikInputField label="Location" name="location" type="text" />
          <FormikInputField
            label="Teams URL"
            name="teamsUrl"
            type="text"
            placeholder="https://teams.microsoft.com/..."
          />
          <FormikInputField label="Image Link" name="imageUrl" type="text" />
          <FormikInputField label="Image Text" name="imageAlt" type="text" />
          <ButtonWrapper>
            <Button type="submit">{rest.submitTitle}</Button>
          </ButtonWrapper>
        </Form>
      </EventFormWrapper>
    </Formik> 
  );
}

export default EventForm;
