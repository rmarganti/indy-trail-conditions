import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import styled from 'styled-components';

import { TrailSystemConfig } from '../../config/trailSystems';
import TrailSystemItem from './TrailSystemItem';

interface TrailSystemsListProps {
    onRemove: (key: string) => void;
    trailSystems: TrailSystemConfig[];
}

const TrailSystemsList: React.FunctionComponent<TrailSystemsListProps> = ({
    onRemove,
    trailSystems
}) => (
    <TrailSystemsListContainer>
        {trailSystems.map((trailSystem, index) => (
            <TrailSystemItem
                key={`trailSystem-${index}`}
                index={index}
                details={trailSystem}
                onRemove={() => onRemove(trailSystem.key)}
            />
        ))}
    </TrailSystemsListContainer>
);

const TrailSystemsListContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export default SortableContainer(TrailSystemsList);
