import React from "react";
import ContactPerson from "../ContactPerson";
import { FooterTitle, PageFooter, PersonContaier } from "./styled";

function Footer(props : any) {
  var {pageText} = props;
  return(
    <PageFooter>
      <FooterTitle>{pageText}</FooterTitle>
      <PersonContaier>  
        <ContactPerson image='https://as1.ftcdn.net/v2/jpg/01/26/91/78/1000_F_126917812_XlWgkaV9f81Hde4wvmvJWM3huJRvy5EM.jpg' name='Lars Erik Røyse' email='leroise@itera.com'/>
      </PersonContaier>
    </PageFooter>
  )
}

export default Footer;