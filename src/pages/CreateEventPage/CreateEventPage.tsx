import React, { useState, useCallback } from 'react';
import { formatISO, format } from 'date-fns';

import Alert from 'src/components/Alert';
import Button from 'src/components/inputs/Button';
import DateField from 'src/components/fields/DateField';
import SelectField from 'src/components/fields/SelectField';
import TextAreaField from 'src/components/fields/TextAreaField';
import TextField from 'src/components/fields/TextField';
import TimeField from 'src/components/fields/TimeField';
import { CreateEventWrapper, Form } from './styled';
import { createEvent } from 'src/api/events';
import { EVENT_OPTIONS } from './constants';

function CreateEvent() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [date, setDate] = useState(format(Date.now(), 'yyyy-MM-dd'));
  const [startTime, setStartTime] = useState(format(Date.now(), 'HH:mm'));
  const [endTime, setEndTime] = useState(format(Date.now(), 'HH:mm'));
  const [description, setDescription] = useState('');
  const [eventType, setEventType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isFormValid = name && description && eventType;
  const isSubmitDisabled = !isFormValid || isSubmitting;

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      await createEvent(
        formatISO(Date.parse(date + ' ' + startTime)),
        formatISO(Date.parse(date + ' ' + endTime)),
        name,
        description,
        image,
        imageAlt,
        location,
        firstName,
        lastName,
        email
      );
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
    image,
    imageAlt,
    location,
    firstName,
    lastName,
    email,
    setIsSubmitting,
    setError,
  ]);

  return (
    <CreateEventWrapper>
      <h1>Create new event</h1>
      <Form>
        <TextField
          name="name"
          label="Event name"
          value={name}
          onChange={setName}
        />
        <DateField
          name="date"
          label="Date"
          value={date}
          onChange={(date: string) => setDate(date)}
        />
        <TimeField
          name="time"
          label="Start time"
          value={startTime}
          onChange={setStartTime}
        />
        <TimeField
          name="time"
          label="End time"
          value={endTime}
          onChange={setEndTime}
        />
        <TextAreaField
          name="description"
          label="Description"
          value={description}
          onChange={setDescription}
        />
        <TextField
          name="location"
          label="Location"
          value={location}
          onChange={setLocation}
        />
        <TextField
          name="image"
          label="Image link"
          value={image}
          onChange={setImage}
        />
        <TextField
          name="imageAlt"
          label="Image text"
          value={imageAlt}
          onChange={setImageAlt}
        />
        <SelectField
          name="eventType"
          label="Event type"
          value={eventType}
          onChange={setEventType}
          options={EVENT_OPTIONS}
        />
        <TextField
          name="firstName"
          label="Owner first name"
          value={firstName}
          onChange={setFirstName}
        />
        <TextField
          name="lastName"
          label="Owner last name"
          value={lastName}
          onChange={setLastName}
        />
        <TextField
          name="email"
          label="Owner email"
          value={email}
          onChange={setEmail}
        />
        <div>
          <Button disabled={isSubmitDisabled} onClick={handleSubmit}>
            Create
          </Button>
        </div>
        {hasSubmitted &&
          (error == null ? (
            <div>Event created</div>
          ) : (
            <Alert
              heading="Failed to create event"
              description={<p></p>}
              headingAs="h2"
            />
          ))}
      </Form>
    </CreateEventWrapper>
  );
}

export default CreateEvent;
