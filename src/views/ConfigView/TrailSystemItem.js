import React from 'react';
import {SortableElement} from 'react-sortable-hoc';

const TrailSystemItem = ({ details }) => (
    <h2>{ details.name }</h2>
);

TrailSystemItem.propTypes = {
    details: React.PropTypes.object,
}

export default SortableElement(TrailSystemItem);
