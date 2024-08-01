import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ToDoItem = ({ title, body }) => (
    <Card>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{body}</Card.Text>
        </Card.Body>
    </Card>
);

ToDoItem.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

export default ToDoItem;
