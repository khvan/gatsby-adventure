import React from 'react';
import Title from '../Title';
import styles from '../../css/about.module.css';
import img from '../../images/defaultBcg.jpeg';
import {useStaticQuery, graphql} from 'gatsby';

const getAbout = graphql`
query aboutImage {
  aboutImage: file (relativePath:{eq: "defaultBcg.jpeg"}){
    childImageSharp{
      fluid(maxWidth: 500){
        src
      }
    }
  }
  
}

`;

const About = () => {
  const {aboutImage} = useStaticQuery(getAbout);

  return (
    <section className={styles.about}>
      Hello from About
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>
            Explore the Hello World
          </h4>
          <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet vitae orci.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet vitae orci.
          </p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
