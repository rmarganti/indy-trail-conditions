import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
    margin: 0.5em;
    font-size: 1.5em;
    font-weight: normal;
    letter-spacing: 1px;

    @media only screen and (min-width: 1220px) {
        margin-left: 0;
    }
`;

const TrailSystemStatus = styled.iframe`
    width: 100%;
    height: ${props => `${props.trailCount * 78}px`};

    @media only screen and (min-width: 783px) {
        height: ${props => `${props.trailCount * 48}px`};
    }
`;

const TrailSystem = ({ details }) => (
    <div>
        <Header>{ details.name }</Header>
        <TrailSystemStatus
            src={details.url}
            frameBorder="0"
            scrolling="no"
            trailCount={details.trailCount}
        >
        </TrailSystemStatus>
    </div>
);
    
export default TrailSystem;
