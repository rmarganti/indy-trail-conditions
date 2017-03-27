import React, { Component } from 'react';
import styled from 'styled-components';

import AppBar from './components/AppBar';
import ConfigView from './views/ConfigView';
import MainView from './views/MainView';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            configuring: true,
        };

        this.onToggleConfig = this.onToggleConfig.bind(this);
    }

    onToggleConfig() {
        this.setState({
            configuring: !this.state.configuring,
        });
    }

    render() {
        return (
            <Container>
                <AppBar onToggleConfig={this.onToggleConfig} />
                {
                    (this.state.configuring)
                        ? <ConfigView />
                        : <MainView />
                }
            </Container>
        );
    }
}

export default App;
