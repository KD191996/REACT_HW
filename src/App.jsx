import React from 'react';
import Alert from './components/Alert.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Alert type="warning" text="what is love?" />
                <Alert type="success" text="Operation successful!" />
                <Alert type="danger" text=" Error " />
            </div>
        );
    }
}


export default App
