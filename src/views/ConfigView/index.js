import React from 'react';
import { arrayMove } from 'react-sortable-hoc';

import {
    getVisibleTrailSystems,
    getTrailSystemsByKeys,
    saveVisibleTrailSystems
} from '../../common/helpers';
import Centered from '../../components/Centered';
import Content from '../../components/Content';
import AddTrailSystemSelect from './AddTrailSystemSelect';
import TrailSystemsList from './TrailSystemsList';

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
            <Content>
                <Centered padding="0.75rem">
                    <TrailSystemsList
                        trailSystems={getTrailSystemsByKeys(this.state.visibleTrailSystems)}
                        onRemove={this.onRemove}
                        onSortEnd={this.onSortEnd}
                        useDragHandle={true}
                    />

                    <AddTrailSystemSelect
                        onAdd={this.onAdd}
                        visibleTrailSystems={this.state.visibleTrailSystems}
                    />
                </Centered>
            </Content>
        );
    }
}

export default ConfigView;
