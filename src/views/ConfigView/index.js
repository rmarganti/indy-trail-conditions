import React from 'react';
import styled from 'styled-components';
import { arrayMove } from 'react-sortable-hoc';

import { 
    getVisibleTrailSystems,
    getTrailSystemsByKeys,
    saveVisibleTrailSystems
} from '../../common/helpers';
import TrailSystemsList from './TrailSystemsList';

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

class ConfigView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibleTrailSystems: getVisibleTrailSystems(),
        };

        this.onSortEnd = this.onSortEnd.bind(this);
    }

    onSortEnd({oldIndex, newIndex}) {
        const newOrder = arrayMove(this.state.visibleTrailSystems, oldIndex, newIndex);
        console.log(newOrder);

        this.setState({ visibleTrailSystems: newOrder });
        saveVisibleTrailSystems(newOrder);
    }

    render() {
        return (
            <Container>
                <TrailSystemsList
                    trailSystems={getTrailSystemsByKeys(this.state.visibleTrailSystems)}
                    onSortEnd={this.onSortEnd}
                />
                <button>Add Trail System</button>     
            </Container>
        );
    }
}

export default ConfigView;
