import React from 'react';
import Hero from 'templates/Hero.template';
import { useStaticQuery, graphql } from 'gatsby';

const MainHero = () => {
  const { backgroundImage } = useStaticQuery(
    graphql`
      query {
        backgroundImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `,
  );

  return (
    <Hero
      home
      backgroundImage={backgroundImage.childImageSharp.fluid}
      title="continue exploring"
      info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sapiente id sit ut
    soluta quam."
    />
  );
};

export default MainHero;
