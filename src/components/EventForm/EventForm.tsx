import React, { useState, useCallback } from 'react';
import { addDays, format, set, startOfDay } from 'date-fns';

import Alert from 'src/components/Alert';
import Button from 'src/components/inputs/Button';
import DateField from 'src/components/fields/DateField';
import SelectField from 'src/components/fields/SelectField';
import TextAreaField from 'src/components/fields/TextAreaField';
import TextField from 'src/components/fields/TextField';
import TimeField from 'src/components/fields/TimeField';
import { EventFormWrapper, Form } from './styled';
import { EVENT_OPTIONS } from './constants';

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
};

type EventFormProps = {
  headerTitle: string;
  submitTitle: string;
  onSubmit: (data: EventDataOutput) => Promise<void>;
} & EventDataInput;

function EventForm({ onSubmit, ...rest }: EventFormProps) {
  const [name, setName] = useState(rest.name || '');
  const [imageUrl, setImageUrl] = useState(rest.imageUrl || '');
  const [imageAlt, setImageAlt] = useState(rest.imageAlt || '');
  const eventDate = rest.startTime || addDays(startOfDay(new Date()), 1);
  const [date, setDate] = useState(
    format(
      eventDate,
      'yyyy-MM-dd'
    )
  );

  const [startTime, setStartTime] = useState(
    format(rest.startTime || set(eventDate, { hours: 16, minutes: 0, seconds: 0, milliseconds: 0 }), 'HH:mm')
  );
  const [endTime, setEndTime] = useState(
    format(rest.endTime || set(eventDate, { hours: 17, minutes: 0, seconds: 0, milliseconds: 0 }), 'HH:mm')
  );
  const [description, setDescription] = useState(rest.description || '');
  const [eventType, setEventType] = useState(rest.eventType || '');
  const [location, setLocation] = useState(rest.location || '');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isFormValid = name && description && eventType && startTime && endTime &&
    new Date(date + 'T' + startTime) > new Date() && new Date(date + 'T' + endTime) > new Date();
  const isSubmitDisabled = !isFormValid || isSubmitting;

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      await onSubmit({
        id: rest.id,
        name,
        description,
        startTime: new Date(date + 'T' + startTime),
        endTime: new Date(date + 'T' + endTime),
        imageUrl,
        imageAlt,
        location,
        eventType,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
    setHasSubmitted(true);
  }, [
    name,
    description,
    date,
    startTime,
    endTime,
    imageUrl,
    imageAlt,
    location,
    eventType,
    setIsSubmitting,
    setError,
    onSubmit,
    rest,
  ]);

  return (
    <EventFormWrapper>
      <h1>{rest.headerTitle}</h1>
      <Form>
        <TextField
          name="name"
          label="Event name *"
          value={name}
          onChange={setName}
        />
        <SelectField
          name="eventType"
          label="Event type *"
          value={eventType}
          onChange={setEventType}
          options={EVENT_OPTIONS}
        />
        <DateField
          name="date"
          label="Date *"
          value={date}
          onChange={setDate}
        />
        <TimeField
          name="time"
          label="Start time *"
          value={startTime}
          onChange={setStartTime}
        />
        <TimeField
          name="time"
          label="End time *"
          value={endTime}
          onChange={setEndTime}
        />
        <TextAreaField
          name="description"
          label="Description *"
          value={description}
          onChange={setDescription}
        />
        <TextField
          name="location"
          label="Location"
          value={location}
          placeholder="Teams"
          onChange={setLocation}
        />
        <TextField
          name="image"
          label="Image link"
          value={imageUrl}
          placeholder="https://.../img.png"
          onChange={setImageUrl}
        />
        <TextField
          name="imageAlt"
          label="Image text"
          value={imageAlt}
          onChange={setImageAlt}
        />
        <div>
          <Button disabled={isSubmitDisabled} onClick={handleSubmit}>
            {rest.submitTitle}
          </Button>
        </div>
        {hasSubmitted && error != null && (
          <Alert
            heading="Failed to submit"
            description={<p></p>}
            headingAs="h2"
          />
        )}
      </Form>
    </EventFormWrapper>
  );
}

export default EventForm;
