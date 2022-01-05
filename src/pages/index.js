import "@fontsource/indie-flower";
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { graphql } from "gatsby";
import * as React from 'react';
import ContactComponent from "../components/contact";
import EventsComponent from "../components/events";
import IndexHeader from "../components/indexHeader";
import Layout from '../components/layout';
import NewsComponent from "../components/news";
import SponsorsComponent from "../components/sponsors";
import TeamsComponent from "../components/teams";
import "../styles/global.css";
import FilmMp4 from "../videos/tt-film.mp4";
import FilmWebm from "../videos/tt-film.webm";

const IndexPage = ({ data }) => {
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <main>
      <Layout pageTitle="DJK Sparta Noris Nürnberg">
        <IndexHeader className="sparta-home-header" image={imageData} />
        <div className="sparta-home-section">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} >
              <Card elevation={3} className="video">
                <video controls autoPlay width="100%">
                  <source src={FilmMp4} type="video/mp4"></source>
                  <source src={FilmWebm} type="video/webm"></source>
                  Leider unterstützt dein Browser keine Videos.
                </video>
              </Card>

            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Card className="overview-card" elevation={3}>
                <CardHeader className="overview-card-title"
                  title="Trainingszeiten" disableTypography={true}
                />
                <CardContent className="overview-card-content">
                  Mittwochs ab 18 Uhr<br />
                  Freitags ab 18 Uhr
                </CardContent>
                <CardHeader className="overview-card-title"
                  title="Termine" disableTypography={true}
                />
                <CardContent className="overview-card-content">
                  <EventsComponent />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <NewsComponent />
        <TeamsComponent />
        <SponsorsComponent />
        <ContactComponent />
      </Layout>
    </main>
  )
}

export default IndexPage

export const query = graphql`
query {
    desktop: file(relativePath: {eq: "rackets.jpg"}) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`