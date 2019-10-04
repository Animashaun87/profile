import React, { useEffect } from "react";
import ContactMe from "../components/contact/contact-me";

function Contact() {
  useEffect(() => {
    document.title = "Contact";
  });
  return (
    <>
      <ContactMe />
    </>
  );
}

export default Contact;
