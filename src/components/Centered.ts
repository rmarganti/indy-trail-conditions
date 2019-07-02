import styled from 'styled-components';

interface CenteredProps {
    padding?: string;
}
const Centered = styled.div<CenteredProps>`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: ${props => props.padding || '0rem'};
`;

export default Centered;
