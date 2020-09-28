function createEvent (time: string, name: string, description: string, firstName: string, lastName: string, email: string) {
    // TODO fix url in env variable
    fetch("https://localhost:5001/api/Event", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
    headers: {
        "Content-Type": "application/json",
    },
      body: JSON.stringify({
        time: time,
        name: name,
        description: description,
        owner: {
          firstName: firstName,
          lastName: lastName,
          email: email
        },
        participants: []
      })
    })
    .then(() => {
      return true
    })
    .catch(error => { return false })
  }

  export default createEvent