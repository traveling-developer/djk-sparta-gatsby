import { Loader } from '@googlemaps/js-api-loader';
import { Email, Phone, PhoneIphone } from '@mui/icons-material';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { contactCard, contactSection, directionsCard, header, map } from './contact.module.css';
import HeaderImage from './headerImage';


const ContactComponent = () => {
    const data = useStaticQuery(
        graphql`
      query {
        desktop: file(relativePath: { eq: "contact.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        allContentfulContact (filter: {node_locale: {eq: "de"}}, sort: {fields: title, order: ASC}) {
            nodes {
                mail1
                mail2
                mobile
                name
                phone
                title
            }
          }
      }
    `
    )

    const imageData = data.desktop.childImageSharp.fluid
    const contacts = data.allContentfulContact.nodes;

    const googlemap = useRef(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
            version: 'weekly',
        });

        let map;

        loader.load().then(() => {
            const google = window.google;
            map = new google.maps.Map(googlemap.current, {
                center: { lat: 49.432442, lng: 11.089308 },
                zoom: 17,
            });
            const infowindow = new google.maps.InfoWindow({
                content: 'DJK Sparta Noris Nürnberg e.V.',
            });
            const marker = new google.maps.Marker({
                position: { lat: 49.432442, lng: 11.089308 },
                map: map,
                title: 'DJK Sparta Noris Nürnberg e.V.',
            });
            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
        });
    });

    return <div>
        <HeaderImage image={imageData} text='Kontakt' className={header}></HeaderImage>
        <div className={contactSection} >
            <Grid container spacing={3}>
                {contacts.map((element, index) =>
                    <Grid item xs={12} sm={12} md={4} key={index}>
                        <Card className={contactCard} elevation={3}>
                            <CardHeader className="overview-card-title" title={element.title + ': ' + element.name} disableTypography={true} />
                            <CardContent className="overview-card-content">
                                {element.phone != null &&
                                    <Grid container>
                                        <Grid item>
                                            <Phone />
                                        </Grid>
                                        <Grid item>
                                            {element.phone}
                                        </Grid>
                                    </Grid>
                                }
                                {element.mobile != null &&
                                    <Grid container>
                                        <Grid item>
                                            <PhoneIphone />
                                        </Grid>
                                        <Grid item>
                                            {element.mobile}
                                        </Grid>
                                    </Grid>
                                }
                                {element.mail1 != null &&
                                    <Grid container>
                                        <Grid item>
                                            <Email />
                                        </Grid>
                                        <Grid item>
                                            <a href={'mailto:' + element.mail1}>{element.mail1.replace('@', '(at)')}</a>
                                        </Grid>
                                    </Grid>
                                }
                                {element.mail2 != null &&
                                    <Grid container>
                                        <Grid item>
                                            <Email />
                                        </Grid>
                                        <Grid item>
                                            <a href={'mailto:' + element.mail2}>{element.mail2.replace('@', '(at)')}</a>
                                        </Grid>
                                    </Grid>
                                }
                            </CardContent>
                        </Card>
                    </Grid>
                )}

            </Grid>
            <Card className={directionsCard} elevation={3}>
                <CardHeader className="overview-card-title" title="Anfahrt" disableTypography={true} />
                <CardContent className="overview-card-content">
                    Schulsporthalle<br />
                    Sperberstr. 85<br />
                    Eingang über Langobardenstr.<br />
                    Nürnberg<br /><br />
                    <div id="map" className={map} ref={googlemap}></div>
                </CardContent>
            </Card>
        </div>
    </div>
}

export default ContactComponent
