import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import StyledHero from '../components/StyledHero';


export default function contact ({data}) {
  return (
    <Layout>
    <StyledHero img={data.contactBcg.childImageSharp.fluid} />
    Contact
  
    </Layout>
  );
}



export const query = graphql`
query{
  contactBcg: file(relativePath: {eq: "defaultBcg.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
