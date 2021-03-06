
import { Card, CardContent, Container } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import HeaderImage from './headerImage';
import { privacyCard } from './privacy.module.css';

const PrivacyComponent = () => {
    const data = useStaticQuery(
        graphql`
      query {
        desktop: file(relativePath: { eq: "privacy.jpg" }) {
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
        <HeaderImage image={imageData} text='Datenschutzerklärung'></HeaderImage>
        <Container maxWidth="md">
            <Card className={privacyCard} elevation={3}>
                <CardContent className="overview-card-content">
                    <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                    <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p>
                    <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p><br />
                    <p>
                        <strong>Datenschutzerklärung für die Nutzung von Facebook-Plugins (Like-Button)</strong>
                    </p>
                    <p>Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook, Anbieter Facebook Inc., 1 Hacker Way, Menlo Park, California 94025, USA, integriert. Die Facebook-Plugins erkennen Sie an dem Facebook-Logo oder dem "Like-Button" ("Gefällt mir") auf unserer Seite. Eine Übersicht über die Facebook-Plugins finden Sie hier:
                        <a href="http://developers.facebook.com/docs/plugins/">Facebook-Plugins</a>.
                    </p>
                    <p>Wenn Sie unsere Seiten besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den Facebook "Like-Button" anklicken während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte unserer Seiten auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter
                        <a href="http://de-de.facebook.com/policy.php">Facebook-Datenschutzerklärung</a>.
                    </p>
                    <p>
                        Wenn Sie nicht wünschen, dass Facebook den Besuch unserer Seiten Ihrem Facebook- Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.
                    </p>
                    <p>
                        <strong>Datenschutzerklärung für die Nutzung von Google Analytics</strong>
                    </p>
                    <p>
                        Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc. 1600 Amphitheatre Parkway Mountain View, CA 94043, USA. Google Analytics verwendet sog. "Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                    </p>
                    <p>
                        Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
                    </p>
                    <p>
                        Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren:
                        <a href="http://tools.google.com/dlpage/gaoptout?hl=de">Browser-Plugin</a>
                    </p>
                    <p>
                        <strong>Datenschutzerklärung für die Nutzung von Google +1</strong>
                    </p>
                    <p>
                        Unsere Seiten nutzen Funktionen von Google +1. Anbieter ist die Google Inc. 1600 Amphitheatre Parkway Mountain View, CA 94043, USA.</p>
                    <p>
                        Erfassung und Weitergabe von Informationen: Mithilfe der Google +1-Schaltfläche können Sie Informationen weltweit veröffentlichen. über die Google +1-Schaltfläche erhalten Sie und andere Nutzer personalisierte Inhalte von Google und unseren Partnern. Google speichert sowohl die Information, dass Sie für einen Inhalt +1 gegeben haben, als auch Informationen über die Seite, die Sie beim Klicken auf +1 angesehen haben. Ihre +1 können als Hinweise zusammen mit Ihrem Profilnamen und Ihrem Foto in Google-Diensten, wie etwa in Suchergebnissen oder in Ihrem Google-Profil, oder an anderen Stellen auf Websites und Anzeigen im Internet eingeblendet werden. Google zeichnet Informationen über Ihre +1-Aktivitäten auf, um die Google-Dienste für Sie und andere zu verbessern. Um die Google +1-Schaltfläche verwenden zu können, benötigen Sie ein weltweit sichtbares, öffentliches Google-Profil, das zumindest den für das Profil gewählten Namen enthalten muss. Dieser Name wird in allen Google-Diensten verwendet. In manchen Fällen kann dieser Name auch einen anderen Namen ersetzen, den Sie beim Teilen von Inhalten über Ihr Google-Konto verwendet haben. Die Identität Ihres Google- Profils kann Nutzern angezeigt werden, die Ihre E-Mail-Adresse kennen oder über andere identifizierende Informationen von Ihnen verfügen.
                    </p>
                    <p>
                        Verwendung der erfassten Informationen: Neben den oben erläuterten Verwendungszwecken werden die von Ihnen bereitgestellten Informationen gemäß den geltenden Google-Datenschutzbestimmungen genutzt. Google veröffentlicht möglicherweise zusammengefasste Statistiken über die +1-Aktivitäten der Nutzer bzw. gibt diese an Nutzer und Partner weiter, wie etwa Publisher, Inserenten oder verbundene Websites.
                    </p>
                    <p>
                        <strong>Datenschutzerklärung für die Nutzung von etracker</strong>
                    </p>
                    <p>
                        Unsere Webseite nutzt den Analysedienst etracker. Anbieter ist die etracker GmbH, Erste Brunnenstraße 1 20459 Hamburg Germany.<br />
                        Aus den Daten können unter einem Pseudonym Nutzungsprofile erstellt werden. Dazu können Cookies eingesetzt werden. Bei Cookies handelt es sich um kleine Textdateien, die lokal im Zwischenspeicher Ihres Internet-Browsers gespeichert werden. Die Cookies ermöglichen es, Ihren Browser wieder zu erkennen. Die mit den etracker-Technologien erhobenen Daten werden ohne die gesondert erteilte Zustimmung des Betroffenen nicht genutzt, Besucher unserer Website persönlich zu identifizieren und werden nicht mit personenbezogenen Daten über den Träger des Pseudonyms zusammengeführt.
                    </p>
                    <p>
                        Der Datenerhebung und -speicherung können Sie jederzeit mit Wirkung für die Zukunft widersprechen. Um einer Datenerhebung und -speicherung Ihrer Besucherdaten für die Zukunft zu widersprechen, können Sie unter nachfolgendem Link ein Opt-Out-Cookie von etracker beziehen, dieser bewirkt, dass zukünftig keine Besucherdaten Ihres Browsers bei etracker erhoben und gespeichert werden:
                        <a href="http://www.etracker.de/privacy?et=V23Jbb">etracker</a>
                    </p>
                    <p>
                        Dadurch wird ein Opt-Out-Cookie mit dem Namen "cntcookie" von etracker gesetzt. Bitte l&oouml;schen diesen Cookie nicht, solange Sie Ihren Widerspruch aufrecht erhalten möchten. Weitere Informationen finden Sie in den Datenschutzbestimmungen von etracker:
                        <a href="http://www.etracker.com/de/datenschutz.html">etracker</a>
                    </p>
                    <p>
                        <strong>Datenschutzerklärung für die Nutzung von Twitter</strong>
                    </p>
                    <p>
                        Auf unseren Seiten sind Funktionen des Dienstes Twitter eingebunden. Diese Funktionen werden angeboten durch die Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA. Durch das Benutzen von Twitter und der Funktion "Re-Tweet" werden die von Ihnen besuchten Webseiten mit Ihrem Twitter-Account verknüpft und anderen Nutzern bekannt gegeben. Dabei werden auch Daten an Twitter übertragen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Twitter erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Twitter unter
                        <a href="http://twitter.com/privacy">twitter</a>.
                    </p>
                    <p>
                        Ihre Datenschutzeinstellungen bei Twitter können Sie in den Konto-Einstellungen unter
                        <a href="http://twitter.com/account/settings">twitter</a> ändern.
                    </p>
                    <p>
                        <strong>Datenschutzerklärung für die Nutzung von Xing</strong>
                    </p>
                    <p>
                        Unsere Webseite nutzt Funktionen des Netzwerks XING. Anbieter ist die XING AG, Dammtorstraße 29-32, 20354 Hamburg, Deutschland. Bei jedem Abruf einer unserer Seiten, die Funktionen von Xing enthält, wird eine Verbindung zu Servern von Xing hergestellt. Eine Speicherung von personenbezogenen Daten erfolgt dabei nach unserer Kenntnis nicht. Insbesondere werden keine IP-Adressen gespeichert oder das Nutzungsverhalten ausgewertet.
                    </p>
                    <p>
                        Weitere Information zum Datenschutz und dem Xing Share-Button finden Sie in der Datenschutzerklärung von Xing unter
                        <a href="https://www.xing.com/app/share?op=data_protection">xing</a>
                    </p>
                    <p>
                        Widerspruch Werbe-Mails
                    </p>
                    <p>
                        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                    </p>
                    <p>
                        <strong>Datenschutzerklärung für die Nutzung von Pinterest</strong>
                    </p>
                    <p>
                        Auf unserer Seite verwenden wir Social Plugins des sozialen Netzwerkes Pinterest, das von der Pinterest Inc., 635 High Street, Palo Alto, CA, 94301, USA ("Pinterest") betrieben wird. Wenn Sie eine Seite aufrufen die ein solches Plugin enthält, stellt Ihr Browser eine direkte Verbindung zu den Servern von Pinterest her. Das Plugin übermittelt dabei Protokolldaten an den Server von Pinterest in die USA. Diese Protokolldaten enthalten möglicherweise Ihre IP-Adresse, die Adresse der besuchten Websites, die ebenfalls Pinterest-Funktionen enthalten, Art und Einstellungen des Browsers, Datum und Zeitpunkt der Anfrage, Ihre Verwendungsweise von Pinterest sowie Cookies.
                    </p>
                    <p>
                        Weitere Informationen zu Zweck, Umfang und weiterer Verarbeitung und Nutzung der Daten durch Pinterest sowie Ihre diesbezüglichen Rechte und Möglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in den den Datenschutzhinweisen von Pinterest:
                        <a href="https://about.pinterest.com/de/privacy-policy">pinterest</a>
                    </p>
                    <p>
                        <strong>Datenschutzerklärung für die Nutzung von Tumblr</strong>
                    </p>
                    <p>
                        Unsere Seiten nutzen Schaltflächen des Dienstes Tumblr. Anbieter ist die Tumblr, Inc., 35 East 21st St, 10th Floor, New York, NY 10010, USA. Diese Schaltflächen ermöglichen es Ihnen, einen Beitrag oder eine Seite bei Tumblr zu teilen oder dem Anbieter bei Tumblr zu folgen. Wenn Sie eine unserer Webseiten mit Tumblr-Button aufrufen, baut der Browser eine direkte Verbindung mit den Servern von Tumblr auf. Wir haben keinen Einfluss auf den Umfang der Daten, die Tumblr mit Hilfe dieses Plugins erhebt und übermittelt. Nach aktuellem Stand werden die IP-Adresse des Nutzers sowie die URL der jeweiligen Webseite übermittelt.
                    </p>
                    <p>
                        Weitere Informationen hierzu finden sich in der Datenschutzerklärung von Tumblr unter
                        <a href="http://www.tumblr.com/policy/de/privacy">tumblr</a>.
                    </p>
                    <p>
                        <strong>Auskunft, Löschung, Sperrung</strong>
                    </p>
                    <p>
                        Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                    </p>
                    <p>
                        <strong>Server-Log-Files</strong>
                    </p>
                    <p>
                        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul>
                        <li>
                            Browsertyp/ Browserversion</li>
                        <li>
                            verwendetes Betriebssystem</li>
                        <li>
                            Referrer URL</li>
                        <li>
                            Hostname des zugreifenden Rechners</li>
                        <li>
                            Uhrzeit der Serveranfrage</li>
                    </ul>
                    <p>
                        Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
                    </p>
                    <p>
                        <strong>Cookies</strong>
                    </p>
                    <p>
                        Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
                    </p>
                    <p>
                        Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
                    </p>
                    <p>
                        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                    </p>
                    <p>
                        <strong>Kontaktformular</strong>
                    </p>
                    <p>
                        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                    <p>
                        <strong>Widerspruch Werbe-Mails</strong>
                    </p>
                    <p>
                        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                    </p>
                    <p>
                        <strong>Newsletterdaten</strong>
                    </p>
                    <p>
                        Wenn Sie den auf der Webseite angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben sie nicht an Dritte weiter.
                    </p>
                    <p>
                        Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen , etwa über den „Austragen“-Link im Newsletter.
                    </p>
                </CardContent>
            </Card>
        </Container>
    </div >
}

export default PrivacyComponent;