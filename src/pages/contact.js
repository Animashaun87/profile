import React, { useEffect } from "react";
import ContactMe from "../components/contact/contact-me";
import ContctBanner from "../components/contact/contactBanner";

function Contact() {
  useEffect(() => {
    document.title = "Contact";
  });
  return (
    <>
      <ContctBanner />
      <ContactMe />
    </>
  );
}

export default Contact;
