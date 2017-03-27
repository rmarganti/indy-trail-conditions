import React from 'react';
import styled from 'styled-components';
import { arrayMove } from 'react-sortable-hoc';

import { 
    getVisibleTrailSystems,
    getTrailSystemsByKeys,
    saveVisibleTrailSystems
} from '../../common/helpers';
import AddTrailSystemSelect from './AddTrailSystemSelect';
import TrailSystemsList from './TrailSystemsList';

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem;
`;

class ConfigView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibleTrailSystems: getVisibleTrailSystems(),
        };

        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onSortEnd = this.onSortEnd.bind(this);
    }

    onAdd(key) {
        this.onUpdate([ ...this.state.visibleTrailSystems, key]);
    }

    onRemove(key) {
        this.onUpdate(this.state.visibleTrailSystems.filter(item => item !== key));
    }

    onSortEnd({oldIndex, newIndex}) {
        this.onUpdate(arrayMove(this.state.visibleTrailSystems, oldIndex, newIndex));
    }

    onUpdate(newOrder = []) {
        this.setState({ visibleTrailSystems: newOrder });
        saveVisibleTrailSystems(newOrder);      
    }

    render() {
        return (
            <Container>
                <TrailSystemsList
                    trailSystems={getTrailSystemsByKeys(this.state.visibleTrailSystems)}
                    onRemove={this.onRemove}
                    onSortEnd={this.onSortEnd}
                    pressDelay={200}
                />
                
                <AddTrailSystemSelect
                    onAdd={this.onAdd}
                    visibleTrailSystems={this.state.visibleTrailSystems}
                />
            </Container>
        );
    }
}

export default ConfigView;
