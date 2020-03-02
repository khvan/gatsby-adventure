import React, {Component} from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';

export default class tours extends Component {
  render () {
    return (
    <Layout>
      Tours
        <Link to="/">Home </Link>
        <Link to="/tours/">Tours</Link>
        <Link to="/blog/">Blog</Link>
        <Link to="/contact/">Contact</Link>
      </Layout>
    );
  }
}
