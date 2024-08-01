import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ToDoForm = ({ onSubmit }) => {
    // State for form data
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    // Handle change in form inputs
    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Validate form inputs
        for (const key in formData) {
            if (formData[key].trim() === '') {
                return alert(`${key} is empty`);
            }
        }
        // Call onSubmit function passed as a prop
        onSubmit({ ...formData });
    };

    const { title, description } = formData;

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="todoItemTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    name="title"
                    type="text"
                    placeholder="Enter title"
                    onChange={handleChange}
                    value={title}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="todoItemDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    name="description"
                    as="textarea"
                    type="description"
                    placeholder="Enter description"
                    onChange={handleChange}
                    value={description}
                />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    );
};

ToDoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ToDoForm;
