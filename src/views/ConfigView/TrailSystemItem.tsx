import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import styled from 'styled-components';

import { TrailSystemConfig } from '../../config/trailSystems';
import draggableIcon from '../../media/icon-draggable.svg';
import removeIcon from '../../media/icon-remove.svg';

interface TrailSystemItemProps {
    details: TrailSystemConfig;
    onRemove: () => void;
}
const TrailSystemItem: React.FunctionComponent<TrailSystemItemProps> = ({
    details,
    onRemove
}) => (
    <Root>
        <Draggable alt="(draggable)" src={draggableIcon} />
        <Name>{details.name}</Name>
        <RemoveButton
            alt={`Remove ${details.name}`}
            src={removeIcon}
            onClick={onRemove}
        />
    </Root>
);

const Root = styled.div`
    display: flex;
    margin-bottom: 2px;
    padding: 1em;
    background-color: #b0bacd;
    color: #252b39;
`;

const Draggable = SortableHandle(styled.img`
    flex-grow: 0;
    margin-right: 0.75em;
    cursor: move;
`);

const Name = styled.h2`
    flex: 1;
    margin: 0;
    font-size: 1.25em;
`;

const RemoveButton = styled.img`
    flex-grow: 0;
    margin-left: 0.75em;
    cursor: pointer;
`;

export default SortableElement(TrailSystemItem);
