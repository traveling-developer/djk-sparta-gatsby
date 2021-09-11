import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import {
    siteNoticeHeader
} from './headerImage.module.css';

const HeaderImage = ({ image, text, className }) => {
    return (
        <BackgroundImage Tag="section" fluid={image} className={className}>
            <h1>{text}</h1>
        </BackgroundImage>
    )
}

HeaderImage.defaultProps = {
    className: siteNoticeHeader,
};

export default HeaderImage