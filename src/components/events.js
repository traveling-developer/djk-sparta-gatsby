
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

const EventsComponent = () => {
    const data = useStaticQuery(
        graphql`
      query {
        allContentfulEvent(
          sort: {fields: date, order: DESC}
          filter: {node_locale: {eq: "de"}}
        ) {
          nodes {
            title
            date
          }
        }
      }
    `
    )

    const events = data.allContentfulEvent.nodes;
    var now = new Date();
    var upcomingEvents = events.filter(event => new Date(event.date) > now);
    upcomingEvents = upcomingEvents.map(event => {
        event.date = new Date(event.date);
        return event;
    });
    var options = { weekday: 'long', month: 'long', day: 'numeric' };

    return <div>
        {upcomingEvents.length == 0 &&
            <div>Derzeit stehen keine Termine an.</div>
        }
        <TableContainer>
            <Table>
                <TableBody>
                    {upcomingEvents.map((element, index) =>
                        <TableRow key={index}>
                            <TableCell>
                                {element.date.toLocaleDateString('de', options)} um {element.date.getHours()}:{element.date.getMinutes() < 10 ? '0' : ''}{element.date.getMinutes()} Uhr:
                            </TableCell>
                            <TableCell>
                                {element.title}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
}

export default EventsComponent;