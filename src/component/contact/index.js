import React, { Fragment } from "react";
import {
  Drop,
  DropTitle,
  Span,
  Form,
  InputText,
  FormInput,
  InputSubmit,
  InputExp,
  TextArea,
  InputEmail,
} from "./style";
import Footer from "../Footer";
const Contact = () => {
  return (
    <Fragment>
      <Drop>
        <div className="container">
          <DropTitle>
            <Span>Drop </Span>Me A line
          </DropTitle>
          <Form>
            <FormInput>
              <InputText type="text" placeholder="Your Name" />
              <InputEmail type="email" placeholder="Your Email" />
            </FormInput>
            <InputExp type="text" placeholder="Your Subject" />
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <InputSubmit type="submit" value="Send Message" />
          </Form>
        </div>
      </Drop>
      <Footer />
    </Fragment>
  );
};

export default Contact;
