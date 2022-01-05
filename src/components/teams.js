
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid } from '@mui/material';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import HeaderImage from './headerImage';
import { button, media, teamsSection } from './teams.module.css';

const TeamsComponent = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "teams.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        allContentfulTeam(
            sort: {fields: name, order: ASC}
            filter: {node_locale: {eq: "de"}}
          ) {
            nodes {
              name
              description {
                description
              }
              image {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                  )
              }
            }
        }
        image: file(relativePath: { eq: "team_empty.webp" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            publicURL
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid;
  const emptyTeam = data.image;
  const teams = data.allContentfulTeam.nodes;

  return <div>
    <HeaderImage image={imageData} text='Teams'></HeaderImage>
    <div className={teamsSection}>
      <Grid container spacing={3}>
        {teams.map((element, index) =>
          <Grid item xs={12} sm={12} md={4} key={index}>
            <Card className="overview-card" elevation={3}>
              {element.image == null ?
                <CardMedia className={media} image={emptyTeam.publicURL} />
                :
                <CardMedia className={media}>
                  <GatsbyImage image={element.image.gatsbyImageData} alt='Team' />
                </CardMedia>
              }
              <CardHeader className="overview-card-title"
                title={element.name} disableTypography={true}
              />
              <CardContent className="overview-card-content">
                {element.description.description}
              </CardContent>
              <CardActions>
                <Link to={"/teams/" + element.name.replace(". ", "-").toLowerCase()}>
                  <Button className={button} size="small">Mehr</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        )}
      </Grid>
    </div>
  </div>
}

export default TeamsComponent;