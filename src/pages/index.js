import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import {useStaticQuery, graphql} from 'gatsby';


export default ({data}) => (
  <Layout>
    <StyledHero home="true" img ={data.defaultBcg.childImageSharp.fluid} >
      <Banner
        title="hello world"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar."
      >
      <Link to="/tours" className = "btn-white">
        Explore Hello World
      </Link>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
);



export const query = graphql`
query{
  defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
