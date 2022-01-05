import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Card, CardContent, CardHeader, Container, Typography } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import HeaderImage from '../components/headerImage';
import Layout from '../components/layout';

const Club = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "club.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        allContentfulClubHistory (filter: {node_locale: {eq: "de"}}) {
            nodes {
              year
              event {
                event
              }
            }
          }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid
  const history = data.allContentfulClubHistory.nodes;

  return <Layout pageTitle="Verein">
    <HeaderImage image={imageData} text='Über den Verein'></HeaderImage>
    <Container className="club-card">
      <Card elevation={3}>
        <CardHeader className="overview-card-title" title="Die Geschichte unseres Vereins" disableTypography={true}
        />
        <CardContent className="overview-card-content">
          <Timeline align="alternate">
            {history.map((element, index) =>
              <TimelineItem key={index}>
                <TimelineOppositeContent>
                  <Typography color="textSecondary">{element.year}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className="red-timeline-dot" />
                  {index != (Object.keys(history).length - 1) &&
                    <TimelineConnector />
                  }
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>{element.event.event}</Typography>
                </TimelineContent>
              </TimelineItem>
            )}
          </Timeline>
        </CardContent>
      </Card>
    </Container>
  </Layout>
}

export default Club
