import { Hidden } from '@material-ui/core';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import {
    siteNoticeHeader
} from './headerImage.module.css';

const HeaderImage = ({ image, text, textPartTwo, className }) => {
    return (
        <BackgroundImage Tag="section" fluid={image} className={className}>
            <h1>{text}{textPartTwo == null ? null : <Hidden only={['xs']}> - {textPartTwo}</Hidden>}</h1>
        </BackgroundImage>
    )
}

HeaderImage.defaultProps = {
    className: siteNoticeHeader,
    textPartTwo: null
};

export default HeaderImage