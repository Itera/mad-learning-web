import React, { useState } from 'react';
import { CreateEventWrapper, Form } from './styled';
import { parseISO, formatISO, format } from 'date-fns';


function CreateEvent() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  // const [date, setDate] = useState(Date.now());
  const [time, setTime] = useState(formatISO(Date.now()));
  const [description, setDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  
  function create () {
    // TODO fix url in env variable
    fetch("https://localhost:5001/api/Event", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
    headers: {
        "Content-Type": "application/json",
    },
      body: JSON.stringify({
        id: "5f6b241978964f06faa3185b",
        time: time,
        name: name,
        description: description,
        owner: {
          id: "5f6b242580090096cfb631a1",
          firstName: firstName,
          lastName: lastName,
          email: email
        },
        participants: [{
          id: "5f6b242580090096cfb631a1",
          firstName: firstName,
          lastName: lastName,
          email: email
        }]
      })
    })
    .then(() => {
      console.log('Event created');
    })
    .catch(error => { console.log(error)})
  }

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
        <label htmlFor="name">
          Event name
          <input name="name" type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        </label>

        <label htmlFor="time">
          Date and time
          <input name="time" type="date" value={format(parseISO(time), 'yyyy-MM-dd')} onChange={(event) => setTime(formatISO(Date.parse(event.target.value + ' ' + format(parseISO(time), 'HH:mm'))))}/>
          <input name="time" type="time" value={format(parseISO(time), 'HH:mm')} onChange={(event) => setTime(formatISO(Date.parse(format(parseISO(time), 'yyyy-MM-dd') + ' ' + event.target.value)))}/>
        </label>

        <label htmlFor="description">
          Description
          <textarea name="description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
        </label>
      
        <label htmlFor="image">
          Image link
          <input name="image" type="text" value={image} onChange={(event) => setImage(event.target.value)}/>
        </label>

        <label htmlFor="imageAlt">
          Image text
          <input name="imageAlt" type="text" value={imageAlt} onChange={(event) => setImageAlt(event.target.value)}/>
        </label>

        <label htmlFor="eventType">
          Event type
          <select name="eventType" value={eventType} onChange={(event) => setEventType(event.target.value)}>
            <option value="" disabled={eventType !== ""}>Choose event type</option>
            <option value="Subject matter event">Subject matter event</option>
            <option value="Coding event">Coding event</option>
            <option value="Project presentation">Project presentation</option>
            <option value="Workshop">Workshop</option>
          </select>
        </label>

        <label htmlFor="firstName">
          Owner first name
          <input name="firstName" type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
        </label>

        <label htmlFor="lastName">
          Owner last name
          <input name="lastName" type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
        </label>

        <label htmlFor="email">
          Owner email
          <input name="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
        </label>
        <div><button disabled={!isFormFilled()} onClick={create}>Create</button></div>
      </Form>
      
    </CreateEventWrapper>
  );
}

export default CreateEvent;
