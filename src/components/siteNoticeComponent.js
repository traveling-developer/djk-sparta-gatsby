
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import HeaderImage from './headerImage';
import {
    siteNoticeCard
} from './siteNoticeComponent.module.css';

const SiteNoticeComponent = () => {
    const data = useStaticQuery(
        graphql`
      query {
        desktop: file(relativePath: { eq: "sitenotice.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
    )

    const imageData = data.desktop.childImageSharp.fluid

    return <div>
        <HeaderImage image={imageData} text='Impressum'></HeaderImage>
        <Container maxWidth="md">
            <Card className={siteNoticeCard} elevation={3}>
                <CardHeader className="overview-card-title" title="Angaben gemäß § 5 TMG:" disableTypography={true} />
                <CardContent className="overview-card-content">
                    DJK Sparta Noris Nürnberg e. V.<br />
                    Wacholderweg 60<br />
                    90441 Nürnberg
                </CardContent>
                <CardHeader className="overview-card-title" title="Vertreten durch:" disableTypography={true} />
                <CardContent className="overview-card-content">
                    Herrn Dieter Wolfsberger (1. Vorsitzender)
                </CardContent>
                <CardHeader className="overview-card-title" title="Kontakt:" disableTypography={true} />
                <CardContent className="overview-card-content">
                    Telefon: +49 911 480 59 55<br />
                    Telefax: +49 911 480 59 56
                </CardContent>
                <CardHeader className="overview-card-title" title="Registereintrag:" disableTypography={true} />
                <CardContent className="overview-card-content">
                    Eintragung im Vereinsregister<br />
                    Registergericht:Nürnberg<br />
                    Registernummer: 1023
                </CardContent>
                <CardHeader className="overview-card-title" title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:" disableTypography={true} />
                <CardContent className="overview-card-content">
                    Jürgen Fietz<br />
                    <Grid container>
                        <Grid item>
                            <EmailIcon />
                        </Grid>
                        <Grid item>
                            <a href="mailto:juergen_fietz@web.de">juergen_fietz(at)web.de</a>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardHeader className="overview-card-title" title="Haftungsausschluss (Disclaimer):" disableTypography={true} />
                <CardContent className="overview-card-content">
                    <strong>Haftung für Inhalte</strong>
                    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach § 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
                    <p>
                        <strong>Haftung für Links</strong>
                    </p>
                    <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                    <p>
                        <strong>Urheberrecht</strong>
                    </p>
                    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p><p />
                </CardContent>
            </Card>

        </Container>
    </div >
}

export default SiteNoticeComponent;