import { Card, CardContent, Container, Grid, Hidden } from '@material-ui/core';
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from "react";
import Layout from "../../components/layout";
import "../../styles/teams.css";

export default function Player(props) {
    const player = props.data.allContentfulPlayer.nodes[0];

    return <Layout pageTitle={player.name}>
        <Container maxWidth="md">
            <Card className="singlePlayerCard">
                <CardContent>
                    <Grid container spacing={2}>
                        <Hidden only={['xs']}>
                            <Grid item xs={6} className="playerImageContainer" >
                                {player.imageBig == null ?
                                    <StaticImage src="../../images/player_empty.webp" className="playerImage" alt="Default Image" placeholder="blurred" width={300} />
                                    :
                                    <GatsbyImage image={player.imageBig.gatsbyImageData} alt="Default Image" />}
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={6} className="playerContent">
                            <h2>{player.firstName} {player.lastName} {player.captian && "👨‍✈️"}</h2>

                            QTTR: {player.qttr} <br />
                            Geburtsjahr: {player.yearOfBirth} <br />
                            Herkunft: {player.origion} <br />
                            Holz: {player.racket} <br />
                            Vorhand-Belag: {player.forehandRubber} <br />
                            Rückhand-Belag: {player.backhandRubber} <br />
                            Spielweise: {player.style} <br />
                            Bisherige Vereine:  <br />
                            <ul>
                                {player.previousClubs.split(',').map((element, index) =>
                                    <li key={index}>{element}</li>
                                )}
                            </ul>
                            Spartaner seit: {new Date(player.spartiatSince).getFullYear()} <br />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    </Layout>
}

export const query = graphql`
query ($rank: Float) {
    allContentfulPlayer(
      filter: {rank: {eq: $rank}, node_locale: {eq: "de"}}
    ) {
      nodes {
        captian
        firstName
        lastName
        qttr
        rank
        yearOfBirth
        origion
        racket
        forehandRubber
        backhandRubber
        style
        previousClubs
        spartiatSince
        imageBig {
            gatsbyImageData(
                width: 300
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
        }
      }
    }
  }
`