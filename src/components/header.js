import { Menu } from '@mui/icons-material';
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import {
    drawerLink, drawerTitle, link, root,
    title
} from './header.module.css';


const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulTeam(
          sort: {fields: name, order: ASC}
          filter: {node_locale: {eq: "de"}}
        ) {
          nodes {
            name
          }
        }
    }
  `)
    const [state, setState] = React.useState({
        drawer: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, drawer: open });
    };


    return (
        <div className={root} >
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={title}>
                        DJK Sparta Noris Nürnberg
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Link to="/">
                            <a className={link}>Home</a>
                        </Link>
                        <Link to="/news">
                            <a className={link}>News</a>
                        </Link>
                        <Link to="/teams">
                            <a className={link}>Mannschaften</a>
                        </Link>
                        <Link to="/sponsors">
                            <a className={link}>Sponsoren</a>
                        </Link>
                        <Link to="/club">
                            <a className={link}>Verein</a>
                        </Link>
                        <Box sx={{ display: { xs: 'none', lg: 'inline' } }}>
                            <Link to="/contact">
                                <a className={link}>Kontakt / Anfahrt</a>
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer open={state.drawer} onClose={toggleDrawer(false)}>
                <div className={drawerTitle}>
                    <StaticImage src="../images/sparta.png" alt="Sparta Logo" placeholder="blurred"
                        width={100}
                        height={100} />
                </div>
                <List>
                    <ListItem button>
                        <Link to="/">
                            <a className={drawerLink}>Home</a>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/news">
                            <a className={drawerLink}>News</a>
                        </Link>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <Link to="/teams">
                            <a className={drawerLink}>Mannschaften</a>
                        </Link>
                    </ListItem>
                    {data.allContentfulTeam.nodes.map((element, index) =>
                        <ListItem button key={index} >
                            <Link to={"/teams/" + element.name.replace(". ", "-").toLowerCase()}>
                                <a className={drawerLink}>{element.name}</a>
                            </Link>
                        </ListItem>
                    )}
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <Link to="/sponsors">
                            <a className={drawerLink}>Sponsoren</a>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/club">
                            <a className={drawerLink}>Verein</a>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/contact">
                            <a className={drawerLink}>Kontakt / Anfahrt</a>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/siteNotice">
                            <a className={drawerLink}>Impressum</a>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/privacy">
                            <a className={drawerLink}>Datenschutz</a>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default Header