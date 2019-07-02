import React from 'react';

import {
    getTrailSystemsByKeys,
    getVisibleTrailSystems
} from '../../common/helpers';
import Centered from '../../components/Centered';
import Content from '../../components/Content';
import TrailSystems from './TrailSystems';
import MtbProjectFooter from './MtbProjectFooter';

const MainView: React.FunctionComponent = () => (
    <Content>
        <Centered padding="0.25rem">
            <TrailSystems
                trailSystems={getTrailSystemsByKeys(getVisibleTrailSystems())}
            />
            <MtbProjectFooter />
        </Centered>
    </Content>
);

export default MainView;
