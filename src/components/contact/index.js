import React from "react";

import {
  Container,
  Section,
  Title,
  Description,
  Form,
  FormBox,
  Input,
  Label,
  Submit,
  Image,
  SubSection,
  Support,
  Companies,
  Column,
  Columns,
} from "./styles/contact";

export default function Contact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Section = function ContactSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Contact.Title = function ContactTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Contact.Description = function ContactDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Contact.Form = function ContactForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

Contact.FormBox = function ContactFormBox({ type, children, ...restProps }) {
  return (
    <FormBox {...restProps}>
      <input type={type} name="" autocomplete="off" required {...restProps} />
      <label>{children}</label>
    </FormBox>
  );
};

Contact.Submit = function ContactSubmit({ children, ...restProps }) {
  return (
    <Submit type="submit" {...restProps}>
      Submit
    </Submit>
  );
};

Contact.Image = function ContactImage({ src, children, ...restProps }) {
  return (
    <Image {...restProps}>
      <img src={`/images/${src}.png`} alt="Food Display" />
    </Image>
  );
};

Contact.SubSection = function ContactSubSection({ children, ...restProps }) {
  return <SubSection {...restProps}>{children}</SubSection>;
};

Contact.Support = function ContactSupport({ children, ...restProps }) {
  return (
    <Support {...restProps}>
      <h2>Support</h2>
      <p>faoutlets@gmail.com</p>
      <p>+123-123-1234</p>
    </Support>
  );
};

Contact.Companies = function ContactCompanies({ children, ...restProps }) {
  return (
    <Companies {...restProps}>
      <h2>Companies</h2>
      <Columns>
        <Column>
          <p>
            Birkett Mills <i class="fas fa-link"></i>
          </p>
          <p>
            Bob's Red Mill <i class="fas fa-link"></i>
          </p>
          <p>
            Cherry Brook Kitchen <i class="fas fa-link"></i>
          </p>
          <p>
            Earth Balance <i class="fas fa-link"></i>
          </p>
          <p>
            Enjoy Life <i class="fas fa-link"></i>
          </p>
        </Column>

        <Column>
          <p>
            Ians Natural Food <i class="fas fa-link"></i>
          </p>
          <p>
            Follow Your Heart <i class="fas fa-link"></i>
          </p>
          <p>
            Arrowhead Mills <i class="fas fa-link"></i>
          </p>
          <p>
            Sun Butter <i class="fas fa-link"></i>
          </p>
          <p>
            King Arthur <i class="fas fa-link"></i>
          </p>
        </Column>
      </Columns>
    </Companies>
  );
};
