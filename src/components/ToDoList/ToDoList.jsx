import { useState }  from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ToDoForm from '../ToDoForm';
import ToDoItem from '../ToDoItem';

const ToDoList = () => {
    const [data, setData] = useState([]);

    const handleSubmit = (item) => {
        setData([...data, item]);
    };

    return (
        <div className="todo-list">
            <div className="text-center">
                <h1>To-do list</h1>
            </div>
            <Container>
                <Row>
                    <Col xs={6}>
                        <ToDoForm onSubmit={handleSubmit} />
                    </Col>
                    <Col xs={6}>
                        <Row>
                            {data.map(({ title, description }, index) => (
                                <Col
                                    xs={4}
                                    key={`${title}_${index}`}
                                    data-id={`${title}_${index}`}
                                    className="mb-4"
                                >
                                    <ToDoItem title={title} body={description} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ToDoList;