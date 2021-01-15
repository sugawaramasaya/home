/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>ここやで</Container>
    </Layout>
  );
};

export default About;
