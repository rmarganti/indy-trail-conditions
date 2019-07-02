import React from 'react';
import styled from 'styled-components';

import { getTrailSystemsExcluding } from '../../common/helpers';

interface AddTrailSystemSelectProps {
    onAdd: (trailSystem: string) => void;
    visibleTrailSystems: string[];
}

const AddTrailSystemSelect: React.FunctionComponent<
    AddTrailSystemSelectProps
> = ({ onAdd, visibleTrailSystems }) => {
    const options = getTrailSystemsExcluding(visibleTrailSystems);

    if (options.length < 1) {
        return null;
    }

    return (
        <label>
            <Heading>Select a Trail System to Add:</Heading>
            <SelectBox value="" onChange={e => onAdd(e.target.value)}>
                <option value="" disabled />
                {options.map(option => (
                    <option key={option.key} value={option.key}>
                        {option.name}
                    </option>
                ))}
            </SelectBox>
        </label>
    );
};

const Heading = styled.h3`
    margin-top: 2em;
    margin-bottom: 0.5em;
`;

const SelectBox = styled.select`
    width: 100%;
    padding: 0.5em;
    font-size: 1em;

    @media screen and (min-width: 40em) {
        width: 25em;
    }
`;

export default AddTrailSystemSelect;
