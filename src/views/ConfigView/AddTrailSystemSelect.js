import React from 'react';
import styled from 'styled-components';

import { getTrailSystemsExcluding } from '../../common/helpers';

const Heading = styled.h3`
    margin-top: 2em;
    margin-bottom: 0.5em;
`;

const SelectBox = styled.select`
    padding: 0.5em;
    font-size: 1em;
`;

const AddTrailSystemSelect = ({ onAdd, visibleTrailSystems }) => {
    const options = getTrailSystemsExcluding(visibleTrailSystems);

    if (options.length < 1) { return null; }

    return (
        <label> 
            <Heading>Select a Trail System to Add</Heading>       
            <SelectBox value="" onChange={e => onAdd(e.target.value)}>
                <option value="" disabled />
                {
                    options.map(option =>
                        <option key={option.key} value={option.key}>{option.name}</option>
                    )
                }
            </SelectBox>
        </label>
    );
};

AddTrailSystemSelect.propTypes = {
    onAdd: React.PropTypes.func,
    visibleTrailSystems: React.PropTypes.arrayOf(React.PropTypes.string),
}

export default AddTrailSystemSelect;
