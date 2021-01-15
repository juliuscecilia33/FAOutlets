import React from "react";
import { Contact } from "../components";

export function ContactContainer() {
  return (
    <Contact>
      <Contact.Section>
        <Contact.Title>Contact Us</Contact.Title>
        <Contact.Description>
          We'll get back to you as soon as we can! :)
        </Contact.Description>
        <Contact.Form>
          <Contact.FormBox type="text">name</Contact.FormBox>
          <Contact.FormBox type="email">email address</Contact.FormBox>
          <Contact.FormBox type="text">description</Contact.FormBox>
        </Contact.Form>
      </Contact.Section>

      <Contact.Section></Contact.Section>
    </Contact>
  );
}
