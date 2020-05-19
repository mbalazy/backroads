import React, { useState } from 'react';
import axios from 'axios';
import Section from 'templates/Section.templete';
import { Formik } from 'formik';
import styled from 'styled-components';
import { ButtonMain } from 'components/atoms/Buttons.component';

const StyledInnerFormWrapper = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  input,
  textarea {
    width: 80vw;
    max-width: 600px;
    padding: 0.6rem 1.2rem;
    border: 1px solid black;
    border-radius: 5px;
    margin: 0.6rem 0;
  }

  label {
    display: flex;
    flex-direction: column;
  }
`;

const SuccesMessage = styled.h3`
  font-size: 1rem;
  text-transform: uppercase;
  border: 2px solid var(--primaryColor);
  padding: 1.2rem 3rem;
  display: inline-block;
  color: var(--primaryColor);
  text-align: center;
  background-color: var(--mainWhite);
`;

const ContactForm = () => {
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  return (
    <Section title="contact us" backgroundGrey>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Your email is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          } else if (!values.message) {
            errors.message = 'Your message is required';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          axios({
            method: 'POST',
            url: 'https://formspree.io/mknqozej',
            data: values,
          })
            .then((response) => {
              actions.setSubmitting(false);
              actions.resetForm();
              handleServerResponse(true, 'Thanks!');
            })
            .catch((error) => {
              actions.setSubmitting(false);
              handleServerResponse(false, error.response.data.error);
            });
        }}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <StyledInnerFormWrapper>
              <label htmlFor="name">
                Name
                <input
                  type="name"
                  name="name"
                  placeholder="John Smith"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </label>

              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email@email.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </label>
              {errors.email}

              <label htmlFor="message">
                Message
                <textarea
                  name="message"
                  rows="10"
                  placeholder="Please enter your Message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {errors.message}

              {serverState ? (
                <SuccesMessage>{serverState.msg}</SuccesMessage>
              ) : (
                <ButtonMain inverted type="submit" disabled={isSubmitting}>
                  <>Submit</>
                </ButtonMain>
              )}
            </StyledInnerFormWrapper>
          </form>
        )}
      </Formik>
    </Section>
  );
};

export default ContactForm;
