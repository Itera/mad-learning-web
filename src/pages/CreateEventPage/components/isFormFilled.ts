function isFormFilled (name: string, description: string, eventType: string) {
    if (name !== "" && description !== "" && eventType !== "") {
      return true
    } else {
      return false
    }
  }

  export default isFormFilled