import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import styles from '../css/error.module.css';
import Banner from '../components/Banner';


export default function error () {
  return (
    <Layout>
      <header className={styles.error}>
      <Banner title="OOOPS OOOPS OOOPS">
        <Link to="/" className="btn-white">
          Go Back Home
        </Link>
      </Banner>
      </header>
  
    </Layout>
  );
}
