import React, { useState } from 'react';
import { formatISO, format } from 'date-fns';

import { CreateEventWrapper, Form } from './styled';
import { createEvent } from 'src/api/events';
import TextField from 'src/components/fields/TextField';
import DateField from 'src/components/fields/DateField';
import TimeField from 'src/components/fields/TimeField';
import SelectField from 'src/components/fields/SelectField';
import TextAreaField from 'src/components/fields/TextAreaField';
import Alert from 'src/components/Alert';

function CreateEvent() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [date, setDate] = useState(format(Date.now(), 'yyyy-MM-dd'));
  const [starttime, setStarttime] = useState(format(Date.now(), 'HH:mm'));
  const [endtime, setEndtime] = useState(format(Date.now(), 'HH:mm'));
  const [description, setDescription] = useState('');
  const [eventType, setEventType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [createWasSuccess, setCreateWasSuccess] = useState(false);
  const [createFailed, setCreateFailed] = useState('');
  const [clicked, setClicked] = useState(false);
  const eventOptions: string[] = [
    '',
    'Subject matter event',
    'Coding event',
    'Project presentation',
    'Workshop',
  ];

  function submitEvent() {
    setCreateFailed('');
    setCreateWasSuccess(false);
    createEvent(
      formatISO(Date.parse(date + ' ' + starttime)),
      formatISO(Date.parse(date + ' ' + endtime)),
      name,
      description,
      image,
      imageAlt,
      location,
      firstName,
      lastName,
      email
    )
      .then((result) => {
        if (result) {
          setCreateWasSuccess(true);
        } else {
          setCreateFailed('');
        }
      })
      .catch((error) => {
        setCreateFailed(error.message);
      })
      .finally(() => {
        setClicked(false);
      });
  }

  function isFormFilled(name: string, description: string, eventType: string) {
    return name && description && eventType;
  }

  return (
    <CreateEventWrapper>
      {createFailed ? (
        <Alert
          heading="Failed to create event"
          description={<p></p>}
          headingAs="h2"
        />
      ) : null}
      <h3>Create new event</h3>
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
          onChange={(date: string) => {
            setDate(date);
          }}
        />

        <TimeField
          name="time"
          label="Start time"
          value={starttime}
          onChange={(time: string) => {
            setStarttime(time);
          }}
        />

        <TimeField
          name="time"
          label="End time"
          value={endtime}
          onChange={(time: string) => {
            setEndtime(time);
          }}
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
          options={eventOptions}
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
          <button
            disabled={!isFormFilled(name, description, eventType) && !clicked}
            onClick={(e) => {
              e.preventDefault();
              setClicked(true);
              submitEvent();
            }}
          >
            Create
          </button>
        </div>
        <div>{createWasSuccess ? 'Event created' : ''}</div>
      </Form>
    </CreateEventWrapper>
  );
}

export default CreateEvent;
