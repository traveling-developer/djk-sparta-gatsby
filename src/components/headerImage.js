import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import {
    siteNoticeHeader
} from './headerImage.module.css';

const HeaderImage = ({ image, text }) => {
    return (
        <BackgroundImage Tag="section" fluid={image} className={siteNoticeHeader}>
            <h1>{text}</h1>
        </BackgroundImage>
    )
}

export default HeaderImage