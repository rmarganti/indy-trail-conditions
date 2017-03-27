import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const Header = styled.h2`
    margin: 0.5em;
    font-size: 1.5em;
    font-weight: normal;
    letter-spacing: 1px;
`;

const TrailSystemStatus = styled.iframe`
    width: 100%;
    height: ${props => `${props.trailCount * 78}px`};

    @media only screen and (min-width: 783px) {
        height: ${props => `${props.trailCount * 48}px`};
    }
`;

const TrailSystem = ({ details }) => (
    <Container>
        <Header>{ details.name }</Header>
        <TrailSystemStatus
            src={details.url}
            frameBorder="0"
            scrolling="no"
            trailCount={details.trailCount}
        >
        </TrailSystemStatus>
    </Container>
);
    
export default TrailSystem;
