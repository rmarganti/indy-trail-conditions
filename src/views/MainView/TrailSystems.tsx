import React from 'react';

import { TrailSystemConfig } from '../../config/trailSystems';
import TrailSystem from './TrailSystem';

interface TrailSystemsProps {
    trailSystems: TrailSystemConfig[];
}
const TrailSystems: React.FunctionComponent<TrailSystemsProps> = ({
    trailSystems
}) => (
    <div>
        {trailSystems.map((trailSystem, index) => (
            <TrailSystem key={index} details={trailSystem} />
        ))}
    </div>
);

export default TrailSystems;
