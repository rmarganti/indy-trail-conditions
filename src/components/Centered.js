import styled from 'styled-components';

const Centered = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: ${props => props.padding || '0rem'};
`;

export default Centered;
