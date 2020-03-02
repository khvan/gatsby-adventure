import React from 'react';
import {Link} from 'gatsby';
import Layout from './components/Layout';

const blog = () => {
  return (
    <Layout>
    Blog
      <Link to="/">Home </Link>
      <Link to="/tours/">Tours</Link>
      <Link to="/blog/">Blog</Link>
      <Link to="/contact/">Contact</Link>
    </Layout>
  );
};

export default blog;
