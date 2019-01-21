import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { UpDown, UpDownWide, RotateAnimation } from '../styles/animations'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 style={{ textAlign: 'center' }}>Dev Portfolio</h1>
    <p>Click on a cloud to learn more.</p>
    <div
      style={{
        maxWidth: `80vw`,
        marginBottom: `1.45rem`,
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      <RotateAnimation length={'14s'}>
        <UpDown>
          <Image text="About Me" />
        </UpDown>
      </RotateAnimation>
      <UpDownWide length="10s">
        <RotateAnimation length={'12s'} left>
          <Image text="Projects" />
        </RotateAnimation>
      </UpDownWide>
      <UpDownWide>
        <Image text="Contact" />
      </UpDownWide>
    </div>
    <Link style={{ position: 'absolute', bottom: '3px' }} to="/page-2/">
      Go to page 2
    </Link>
  </Layout>
)

export default IndexPage
