import React from 'react';
import Progress from './assets/components/Progress.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Progress Bar Example</h1>
                <Progress percentage={40} />
                <Progress percentage={25} />
            </div>
        );
    }
}


export default App
