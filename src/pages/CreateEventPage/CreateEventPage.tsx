import React, { useState } from 'react';
import { CreateEventWrapper, Form } from './styled';
import { parseISO, formatISO, format } from 'date-fns';
import createEvent from './components/createEvent'


function CreateEvent() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [time, setTime] = useState(formatISO(Date.now()));
  const [description, setDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  
  

  function isFormFilled () {
    if (name !== "" && description !== "" && eventType !== "") {
      return true
    } else {
      return false
    }
  }

  return (
    <CreateEventWrapper>
      <h3>Create new event</h3>
      <Form>
        <label>
          Event name
          <input name="name" type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        </label>

        <label>
          Date and time
          <input name="time" type="date" value={format(parseISO(time), 'yyyy-MM-dd')} onChange={(event) => setTime(formatISO(Date.parse(event.target.value + ' ' + format(parseISO(time), 'HH:mm'))))}/>
          <input name="time" type="time" value={format(parseISO(time), 'HH:mm')} onChange={(event) => setTime(formatISO(Date.parse(format(parseISO(time), 'yyyy-MM-dd') + ' ' + event.target.value)))}/>
        </label>

        <label>
          Description
          <textarea name="description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
        </label>
      
        <label>
          Image link
          <input name="image" type="text" value={image} onChange={(event) => setImage(event.target.value)}/>
        </label>

        <label>
          Image text
          <input name="imageAlt" type="text" value={imageAlt} onChange={(event) => setImageAlt(event.target.value)}/>
        </label>

        <label>
          Event type
          <select name="eventType" value={eventType} onChange={(event) => setEventType(event.target.value)}>
            <option value="" disabled={eventType !== ""}>Choose event type</option>
            <option value="Subject matter event">Subject matter event</option>
            <option value="Coding event">Coding event</option>
            <option value="Project presentation">Project presentation</option>
            <option value="Workshop">Workshop</option>
          </select>
        </label>

        <label>
          Owner first name
          <input name="firstName" type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
        </label>

        <label>
          Owner last name
          <input name="lastName" type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
        </label>

        <label>
          Owner email
          <input name="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
        </label>
        <div><button disabled={!isFormFilled()} onClick={createEvent(time, name, description, firstName, lastName, email)}>Create</button></div>
      </Form>
      
    </CreateEventWrapper>
  );
}

export default CreateEvent;
