import React, { useCallback, useState, useEffect } from 'react';
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

const ConfigView: React.FunctionComponent = () => {
    const [visibleTrailSystems, setVisibleTrailSystems] = useState(
        getVisibleTrailSystems()
    );

    const onAdd = useCallback(
        (key: string) => setVisibleTrailSystems(current => [...current, key]),
        []
    );

    const onRemove = useCallback(
        (key: string) =>
            setVisibleTrailSystems(current =>
                current.filter(item => item !== key)
            ),
        []
    );

    const onSortEnd = useCallback(
        ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) =>
            setVisibleTrailSystems(current =>
                arrayMove(current, oldIndex, newIndex)
            ),
        []
    );

    useEffect(() => saveVisibleTrailSystems(visibleTrailSystems), [
        visibleTrailSystems
    ]);

    return (
        <Content>
            <Centered padding="0.75rem">
                <TrailSystemsList
                    trailSystems={getTrailSystemsByKeys(visibleTrailSystems)}
                    onRemove={onRemove}
                    onSortEnd={onSortEnd}
                    useDragHandle={true}
                />

                <AddTrailSystemSelect
                    onAdd={onAdd}
                    visibleTrailSystems={visibleTrailSystems}
                />
            </Centered>
        </Content>
    );
};

export default ConfigView;
