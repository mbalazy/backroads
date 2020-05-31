import React from 'react';
import MainLayout from 'templates/MainLayout.component';
import Hero from 'templates/Hero.template';
import { graphql } from 'gatsby';
import ContactForm from 'components/organisms/Contact/ContactForm.component';
import SEO from 'components/atoms/SEO';

const contact = ({ data }) => {
  const backgroungImage = data.backgroundImage.childImageSharp.fluid;
  return (
    <MainLayout>
      <SEO title="Contact" description="Contact Us" />
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
export default contact;
