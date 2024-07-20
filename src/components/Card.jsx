import React from 'react';
import Title from "./Title.jsx";
import Body from "./Body.jsx";
import Text from './Text.jsx';

class Card extends React.Component {
    static Body = Body;
    static Title = Title;
    static Text = Text


    render() {
        return <div className="card container mt-5">{this.props.children}</div>;
    }
}

export default Card;

