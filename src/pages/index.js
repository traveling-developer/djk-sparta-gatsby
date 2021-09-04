import "@fontsource/indie-flower"
import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import "../styles/global.css"

const IndexPage = ({ data }) => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <h1>Welcome to my Gatsby site!</h1>
        <Link to="/siteNotice">About</Link>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <ul>
          {
            data.allContentfulTeam.edges.map(node => (
              <li key={node.name}>
                {node.node.name}
              </li>
            ))
          }
        </ul>
      </Layout>
    </main>
  )
}

export const query = graphql`
query  {
  allContentfulTeam(filter: {node_locale: {eq: "de"}}) {
    edges {
      node {
        id
        name
        league
      }
    }
  }
}

`

export default IndexPage