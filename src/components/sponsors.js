
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';
import HeaderImage from './headerImage';
import { button, media, sponsorsSection } from './sponsors.module.css';



export default function SponsorsComponent(props) {
    const data = useStaticQuery(
        graphql`
      query {
        desktop: file(relativePath: {eq: "sponsors.jpg"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        allContentfulSponsor (filter: {node_locale: {eq: "de"}}) {
          nodes {
            name
            link
            image {
                file {
                  url
                }
              }
          }
        }
      }
    `
    )

    const imageData = data.desktop.childImageSharp.fluid

    return <div>
        <HeaderImage image={imageData} text='Sponsoren'></HeaderImage>
        <div className={sponsorsSection}>
            <Grid container spacing={3}>
                {data.allContentfulSponsor.nodes.map((element, index) =>
                    <Grid item xs={12} sm={12} md={4} key={index}>
                        <Card className="overview-card" elevation={3}>
                            <CardMedia className={media}
                                image={element.image.file.url}
                            />
                            <CardHeader className="overview-card-title"
                                title={element.name} disableTypography={true}
                            />
                            <CardActions>
                                <Link to={element.link}>
                                    <Button className={button} size="small">Mehr erfahren</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </div>
    </div>
}