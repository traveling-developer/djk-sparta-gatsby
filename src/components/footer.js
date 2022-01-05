import { AppBar, Hidden, Toolbar, Typography } from '@mui/material';
import { Link } from 'gatsby';
import * as React from 'react';
import * as styles from "./footer.module.css";

const Footer = () => {
    return <AppBar position="static" className={styles.footer}>
        <Toolbar>
            <Typography variant="body1" className={styles.logo}>
                © DJK Sparta Noris Nürnberg e.V.
            </Typography>
            <Hidden xsDown>
                <Link to="/siteNotice">
                    <a className={styles.link}>Impressum</a>
                </Link>
                <Link to="/privacy">
                    <a className={styles.link}>Datenschutzerklärung</a>
                </Link>
            </Hidden>
        </Toolbar>
    </AppBar>
}

export default Footer;