
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import * as React from 'react';
import HeaderImage from './headerImage';
import { button, imageHeader, media, newsSection } from './news.module.css';

const NewsComponent = () => {
    const data = useStaticQuery(
        graphql`
      query {
        desktop: file(relativePath: {eq: "typewriter.jpg"}) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        allContentfulNews(
          sort: {fields: date, order: ASC}
          filter: {node_locale: {eq: "de"}}
        ) {
          nodes {
            date
            title
            content {
              content
            }
            contentfulid
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
    )

    const imageData = data.desktop.childImageSharp.fluid;
    const newsImage = data.image.childImageSharp.fluid;
    const news = data.allContentfulNews.nodes;

    return <div>
        <HeaderImage image={imageData} text='Neuigkeiten'></HeaderImage>
        <div className={newsSection}>
            <Grid container spacing={3}>
                {news.map((element, index) =>
                    <Grid item xs={12} sm={12} md={4} key={index}>
                        <Card className="overview-card" elevation={3}>
                            <CardMedia className={media}>
                                <BackgroundImage className={imageHeader} fluid={newsImage} alt="Default Image" placeholder="blurred" />
                            </CardMedia>
                            <CardHeader className="overview-card-title"
                                title={element.title} disableTypography={true}
                            />
                            <CardContent className="overview-card-content">
                                {element.content.content.split(' ').slice(0, 30).join(' ')}...
                            </CardContent>
                            <CardActions>
                                <Link to={"/news/" + element.contentfulid}>
                                    <Button className={button} size="small">Weiterlesen</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </div>
    </div>
}

export default NewsComponent;