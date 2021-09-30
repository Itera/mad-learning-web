import React from "react";
import { ContactPersonContainer, ContactPersonField, ContactPersonImage, FieldsContainer } from "./styled";

type ContactPersonProps = {
  image: string;
  name: string;
  email: string;
}

function ContactPerson({ image, name, email} : ContactPersonProps) {
  return (
    <ContactPersonContainer>
      <ContactPersonImage src={image}/>
      <FieldsContainer>
        <ContactPersonField>{name}</ContactPersonField>
        <ContactPersonField>{email}</ContactPersonField>
      </FieldsContainer>
    </ContactPersonContainer>
    
  )

}

export default ContactPerson;