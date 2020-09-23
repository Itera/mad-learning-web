import React, { useState } from 'react';
import { CreateEventWrapper, Label, Grid } from './styled';

function CreateEvent() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("16:00");
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
        time: "2020-09-23T10:35:08.398Z",
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
    if (name !== "" && description !== "") {
      return true
    } else {
      return false
    }
  }

  return (
    <CreateEventWrapper>
      <h3>Create new event</h3>
      <Grid>
        <div><Label htmlFor="name">Event name:</Label></div>
        <div><input name="name" type="text" value={name} onChange={(event) => setName(event.target.value)}/></div>

        <div><Label htmlFor="time">Date and time:</Label></div>
        <div>
          <div><input name="date" type="date" value={date} onChange={(event) => setDate(event.target.value)}/></div>
          <input name="time" type="time" value={time} onChange={(event) => setTime(event.target.value)}/>
        </div>
        
        <div><Label htmlFor="description">Description:</Label></div>
        <div><textarea name="description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea></div>
      
        <div><Label htmlFor="image">Image link:</Label></div>
        <div><input name="image" type="text" value={image} onChange={(event) => setImage(event.target.value)}/></div>

        <div><Label htmlFor="imageAlt">Image text:</Label></div>
        <div><input name="imageAlt" type="text" value={imageAlt} onChange={(event) => setImageAlt(event.target.value)}/></div>

        <div><Label htmlFor="eventType">Event type:</Label></div>
        <div>
          <select name="eventType" value={eventType} onChange={(event) => setEventType(event.target.value)}>
            <option value="Subject matter event">Subject matter event</option>
            <option value="Coding event">Coding event</option>
            <option value="Project presentation">Project presentation</option>
            <option value="Workshop">Workshop</option>
          </select>
        </div>

        <div><Label htmlFor="firstName">Owner first name:</Label></div>
        <div><input name="firstName" type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/></div>

        <div><Label htmlFor="lastName">Owner last name:</Label></div>
        <div><input name="lastName" type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}/></div>

        <div><Label htmlFor="email">Owner email:</Label></div>
        <div><input name="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/></div>
      </Grid>
      <div><button disabled={!isFormFilled()} onClick={create}>Create</button></div>
      
    </CreateEventWrapper>
  );
}

export default CreateEvent;
