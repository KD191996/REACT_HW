import { Component } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, body } = this.props;
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{body}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

ToDoItem.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

export default ToDoItem;