import React from "react";
import ContactPerson from "../ContactPerson";
import { FooterTitle, PageFooter, PersonContaier } from "./styled";

function Footer(props : any) {
  var {pageText} = props;
  return(
    <PageFooter>
      <FooterTitle>{pageText}</FooterTitle>
      <PersonContaier>  
        <ContactPerson image="https://www.iconninja.com/files/592/204/968/communication-male-cyber-avatar-man-person-crime-human-profile-head-anonymous-hacker-creative-icon.svg" name="Erlend Stenlund" email="erlend.stenlund@itera.com"/>
        <ContactPerson image="https://www.iconninja.com/files/592/204/968/communication-male-cyber-avatar-man-person-crime-human-profile-head-anonymous-hacker-creative-icon.svg" name="Test Testy" email="test.testy@itera.com"/>
      </PersonContaier>
    </PageFooter>
  )
}

export default Footer;