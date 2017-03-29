import React from 'react';

import { getTrailSystemsByKeys, getVisibleTrailSystems } from '../../common/helpers';
import Centered from '../../components/Centered';
import Content from '../../components/Content';
import TrailSystems from './TrailSystems';
import MtbProjectFooter from './MtbProjectFooter';

class MainView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibleTrailSystems: getVisibleTrailSystems(),
        };
    }

    render() {
        return (
            <Content>
                <Centered padding="0.25rem">
                    <TrailSystems trailSystems={getTrailSystemsByKeys(this.state.visibleTrailSystems)} />
                    <MtbProjectFooter />
                </Centered>
            </Content>
        )
    }
}

export default MainView;
