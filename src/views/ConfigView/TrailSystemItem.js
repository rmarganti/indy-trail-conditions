import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import styled from 'styled-components';

import draggableIcon from '../../media/icon-draggable.svg';
import removeIcon from '../../media/icon-remove.svg';

const Container = styled.div`
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

const TrailSystemItem = ({ details, onRemove }) => (
    <Container>
        <Draggable alt="(draggable)" src={draggableIcon} />
        <Name>{ details.name }</Name>
        <RemoveButton
            alt={`Remove ${details.name}`}
            src={removeIcon}
            onClick={onRemove}
        />
    </Container>
);

TrailSystemItem.propTypes = {
    details: React.PropTypes.object,
    onRemove: React.PropTypes.func,
}

export default SortableElement(TrailSystemItem);
