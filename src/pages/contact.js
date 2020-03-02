import React from 'react';
import {Link} from 'gatsby';
import Layout from './components/Layout';

export default function contact () {
  return (
    <Layout>
    Contact
      <Link to="/">Home </Link>
      <Link to="/tours/">Tours</Link>
      <Link to="/blog/">Blog</Link>
      <Link to="/contact/">Contact</Link>
    </Layout>
  );
}
