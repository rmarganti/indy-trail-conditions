import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import styled from 'styled-components';

import TrailSystemItem from './TrailSystemItem';

const TrailSystemsListContainer = styled.ul`
    margin: 0;
    padding: 0;
`;

const TrailSystemsList = ({ trailSystems }) => (
    <TrailSystemsListContainer>
        {
            trailSystems.map((trailSystem, index) =>
                <TrailSystemItem key={`trailSystem-${index}`} index={index} details={trailSystem} />
            )
        }     
    </TrailSystemsListContainer>
);

TrailSystemsList.propTypes = {
    trailSystems: React.PropTypes.array,
};

export default SortableContainer(TrailSystemsList);
