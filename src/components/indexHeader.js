import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';

const IndexHeader = ({ image, className }) => {
    return (
        <BackgroundImage Tag="section" fluid={image} className={className}>
        </BackgroundImage>
    )
}

const StyledBackgroundSection = styled(IndexHeader)`
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection