import PropTypes from 'prop-types';
import React from 'react';
import MainLayout from 'templates/MainLayout.component';
import Hero from 'templates/Hero.template';
import { graphql } from 'gatsby';
import ContactForm from 'components/organisms/Contact/ContactForm.component';

const contact = ({ data }) => {
  const backgroungImage = data.backgroundImage.childImageSharp.fluid;
  return (
    <MainLayout>
      <Hero backgroundImage={backgroungImage} />
      <ContactForm />
    </MainLayout>
  );
};

export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

contact.propTypes = {
  data: PropTypes.shape({
    backgroundImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }),
    }),
  }),
};
export default contact;
