import React, { useState } from 'react';
import { CreateEventWrapper, Form } from './styled';
import { parseISO, formatISO, format } from 'date-fns';
import createEvent from './components/createEvent';
import isFormFilled from './components/isFormFilled';
import { InputField, TextArea, Select } from './components/FormFields';

function CreateEvent() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [time, setTime] = useState(formatISO(Date.now()));
  const [description, setDescription] = useState('');
  const [eventType, setEventType] = useState('Choose event type');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  let createWasSuccess = false;
  const eventOptions: string[] = [
    "Subject matter event",
    "Coding event",
    "Project presentation",
    "Workshop"
  ]

  function submitEvent() {
    createEvent(time, name, description, firstName, lastName, email)
      .then((result) => {
        createWasSuccess = true;
      })
      .catch(() => {
        console.log('Create failed');
      });
  }

  return (
    <CreateEventWrapper>
      <h3>Create new event</h3>
      <Form>
        <InputField
          id="name"
          name="name"
          label="Event name"
          type="text"
          value={name}
          onChange={setName}
        />

        <InputField
          id="date"
          name="date"
          label="Date"
          type="date"
          value={format(parseISO(time), 'yyyy-MM-dd')}
          onChange={(e: HTMLInputElement) =>
            setTime(
              formatISO(Date.parse(e + ' ' + format(parseISO(time), 'HH:mm')))
            )
          }
        />

        <InputField
          id="time"
          name="time"
          label="Time"
          type="time"
          value={format(parseISO(time), 'HH:mm')}
          onChange={(e: HTMLInputElement) =>
            setTime(
              formatISO(
                Date.parse(format(parseISO(time), 'yyyy-MM-dd') + ' ' + e)
              )
            )
          }
        />

        <TextArea id="description" name="description" label="Description" value={description} onChange={setDescription} />

        <InputField
          id="image"
          name="image"
          label="Image link"
          type="text"
          value={image}
          onChange={setImage}
        />

        <InputField
          id="imageAlt"
          name="imageAlt"
          label="Image text"
          type="text"
          value={imageAlt}
          onChange={setImageAlt}
        />

        <Select id="eventType" name="eventType" label="Event type" value={eventType} onChange={setEventType} options={eventOptions} />

        <InputField
          id="firstName"
          name="firstName"
          label="Owner first name"
          type="text"
          value={firstName}
          onChange={setFirstName}
        />

        <InputField
          id="lastName"
          name="lastName"
          label="Owner last name"
          type="text"
          value={lastName}
          onChange={setLastName}
        />

        <InputField
          id="email"
          name="email"
          label="Owner email"
          type="email"
          value={email}
          onChange={setEmail}
        />

        <div>
          <button
            disabled={!isFormFilled(name, description, eventType)}
            onClick={(e) => {
              e.preventDefault();
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
