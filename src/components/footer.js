import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'gatsby';
import * as React from 'react';
import * as styles from "./footer.module.css";

const Footer = () => {
    return <AppBar position="static" className={styles.footer}>
        <Toolbar>
            <Typography variant="body1" className={styles.logo}>
                © DJK Sparta Noris Nürnberg e.V.
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Link to="/siteNotice">
                    <a className={styles.link}>Impressum</a>
                </Link>
                <Link to="/privacy">
                    <a className={styles.link}>Datenschutzerklärung</a>
                </Link>
            </Box>
        </Toolbar>
    </AppBar>
}

export default Footer;