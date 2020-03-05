import React from 'react';
import Layout from '../components/Layout';
// import Images from '../examples/Images';
import StyledHero from '../components/StyledHero';
import {graphql} from 'gatsby';


const blog = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
    </Layout>
  );
};

export const query = graphql`
query{
  contactBcg: file(relativePath: {eq: "connectBcg.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}

`;

export default blog;
