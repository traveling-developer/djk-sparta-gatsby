import { Card, CardContent, CardHeader, CardMedia, Container } from '@material-ui/core';
import { graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import React from "react";
import Layout from "../../components/layout";
import "../../styles/news.css";

export default function News(props) {
  const news = props.data.allContentfulNews.nodes[0];
  const newsImage = props.data.image.childImageSharp.fluid;

  return <Layout pageTitle={news.title}>
    <Container maxWidth="lg" className="newsContainer">
      <Card className="overview-card" elevation={3}>
        <CardMedia className="newsImage">
          <BackgroundImage className="imageHeader" fluid={newsImage} alt="Default Image" placeholder="blurred" />
        </CardMedia>
        <CardHeader className="overview-card-title"
          title={news.title} disableTypography={true}
        />
        <CardContent className="overview-card-content">
          {news.content.content}
        </CardContent>
      </Card>
    </Container>
  </Layout>
}

export const query = graphql`
query ($id: String) {
    allContentfulNews(
      filter: {id: {eq: $id}, node_locale: {eq: "de"}}
    ) {
      nodes {
        date
        title
        content {
          content
        }
        id
      }
    }
    image: file(relativePath: {eq: "news.jpg"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        publicURL
      }
  }
`