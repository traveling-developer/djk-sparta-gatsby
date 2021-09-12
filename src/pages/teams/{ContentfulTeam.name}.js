import { Button, Card, CardActions, CardContent, Container, Grid } from '@material-ui/core';
import { graphql, Link } from "gatsby";
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from "react";
import HeaderImage from "../../components/headerImage";
import Layout from "../../components/layout";
import "../../styles/teams.css";

export default function Team(props) {
    const team = props.data.allContentfulTeam.nodes[0];
    const imageData = props.data.desktop.childImageSharp.fluid;
    const player = props.data.allContentfulPlayer.nodes;

    return <Layout pageTitle={team.name}>
        <HeaderImage image={imageData} text={team.name} className="header" textPartTwo={team.league}></HeaderImage>
        <Container maxWidth="sm">
            {player.map((element, index) =>
                <Card key={index} className="playerCard">
                    <CardContent className="sparta-player-title">
                        <Grid container spacing={2}>
                            <Grid item className="sparta-player-title">
                                {element.imageSmall == null ? <StaticImage src="../../images/head_empty.jpg" alt="Default Image" placeholder="blurred" width={120} /> : <GatsbyImage image={element.imageSmall.gatsbyImageData} alt="Default Image" />}
                            </Grid>
                            <Grid item >
                                <h2>{element.firstName} {element.lastName} {element.captian && "👨‍✈️"}</h2>

                                <span>QTTR: {element.qttr} </span>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Link to={"/player/" + element.rank}>
                            <Button className="playerButton" size="small">Mehr über {element.firstName}</Button>
                        </Link>
                    </CardActions>
                </Card>
            )}
        </Container>
    </Layout>
}

export const query = graphql`
query ($name: String) {
    allContentfulTeam(filter: {name: {eq: $name}, node_locale: {eq: "de"}}) {
      nodes {
        name
        league
      }
    }
    desktop: file(relativePath: {eq: "mountain.jpg"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allContentfulPlayer(
      sort: {order: ASC, fields: rank}
      filter: {team: {name: {eq: $name}}, node_locale: {eq: "de"}}
    ) {
      nodes {
        captian
        firstName
        lastName
        qttr
        rank
        imageSmall {
            gatsbyImageData(
                width: 120
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
        }
      }
    }
  }
`