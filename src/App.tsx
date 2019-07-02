import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import AppBar from './components/AppBar';
import ConfigView from './views/ConfigView';
import MainView from './views/MainView';

const App: React.FunctionComponent = () => {
    const [configuring, setConfiguring] = useState(false);
    const toggleConfiguring = useCallback(() => {
        setConfiguring(current => !current);
    }, []);

    return (
        <Root>
            <AppBar onToggleConfig={toggleConfiguring} />
            {configuring ? <ConfigView /> : <MainView />}
        </Root>
    );
};

const Root = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export default App;
