import React from 'react';
import styled from 'styled-components';

import { getTrailSystemsByKeys, getVisibleTrailSystems } from '../../common/helpers';
import TrailSystems from './TrailSystems';
import MtbProjectFooter from './MtbProjectFooter';

const Container = styled.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`;

class MainView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibleTrailSystems: getVisibleTrailSystems(),
        };
    }

    render() {
        return (
            <Container>
                <TrailSystems trailSystems={getTrailSystemsByKeys(this.state.visibleTrailSystems)} />
                <MtbProjectFooter />
            </Container>
        )
    }
}

export default MainView;
