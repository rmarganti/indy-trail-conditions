import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 1em;
    text-align: center;
`;

const Link = styled.a`
    color: #b0bacd;
    text-decoration: none;
`;

const PoweredByText = styled.span`
    margin-right: 0.5em;
`;

const Logo = styled.img`
    height: 25px;
    vertical-align: middle;
`;

const MtbProjectFooter = () => (
    <Container>
        <Link href="https://www.mtbproject.com" target="_blank">
            <PoweredByText>Powered By</PoweredByText>
            <Logo 
                alt="MTBProject"
                src="https://cdn.apstatic.com/img/mtb/logoHex2.svg"
            />
        </Link>
    </Container>
);

export default MtbProjectFooter;
