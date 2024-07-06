import Card from './components/Card.jsx'
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Card title="hello 1" />
                <Card text="how are you? 2" />
                <Card title="hello" text="how are you? 3" />
            </div>
        );
    }
}


export default App
