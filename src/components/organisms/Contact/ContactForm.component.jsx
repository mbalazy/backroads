import React from 'react';
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

const ContactForm = () => {
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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

              {errors.email && errors.email}

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
              {errors.message && errors.message}

              <ButtonMain inverted type="submit" disabled={isSubmitting}>
                Submit message
              </ButtonMain>
            </StyledInnerFormWrapper>
          </form>
        )}
      </Formik>
    </Section>
  );
};

export default ContactForm;
