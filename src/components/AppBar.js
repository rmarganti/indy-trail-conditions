import React from 'react';
import styled from 'styled-components';

import settingsIcon from '../media/settings-icon.svg';

const Container = styled.div`
    display: flex;
    padding: 0.55em;
    background-color: #546e7a;
    color: #fff;
    flex-grow: 0;
`;

const Title = styled.h1`
    flex: 1;
    margin: 0;
    font-size: 1em;
    letter-spacing: 1px;
    font-weight: normal;
`;

const SettingsIcon = styled.img`
    flex: 0;
    cursor: pointer;
`;

const AppBar = ({ onToggleConfig }) => (
    <Container>
        <Title>Indiana Trail Status</Title>
        <SettingsIcon 
            src={settingsIcon}
            alt="Settings"
            height="20"
            width="20"
            onClick={onToggleConfig}
        />
    </Container>
);

AppBar.propTypes = {
    onToggleConfig: React.PropTypes.function,
};

export default AppBar;
