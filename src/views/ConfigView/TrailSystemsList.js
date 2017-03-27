import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import styled from 'styled-components';

import TrailSystemItem from './TrailSystemItem';

const TrailSystemsListContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const TrailSystemsList = ({ trailSystems, onRemove }) => (
    <TrailSystemsListContainer>
        {
            trailSystems.map((trailSystem, index) =>
                <TrailSystemItem
                    key={`trailSystem-${index}`}
                    index={index}
                    details={trailSystem}
                    onRemove={() => onRemove(trailSystem.key)}
                />
            )
        }     
    </TrailSystemsListContainer>
);

TrailSystemsList.propTypes = {
    onRemove: React.PropTypes.func,
    trailSystems: React.PropTypes.array,
};

export default SortableContainer(TrailSystemsList);
