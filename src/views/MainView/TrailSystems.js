import React from 'react';

import TrailSystem from './TrailSystem';

const TrailSystems = ({ trailSystems }) => (
    <div>
        {
            trailSystems.map((trailSystem, index) => <TrailSystem key={index} details={trailSystem} />)
        }
    </div>
);

TrailSystems.propTypes = {
    trailSystems: React.PropTypes.array,
};

export default TrailSystems;
