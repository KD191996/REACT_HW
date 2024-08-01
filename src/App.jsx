import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import PostCatalog from './components/PostCatalog';

const App = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const request = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await request.json();
        setPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="App">
            <h1 className='text-center mb-5 mt-5'>Post Catalog</h1>
            <Container>
                <Row>
                    <Col xs={12}>
                        <PostCatalog data={posts} itemTitle="title" itemBody="body" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default App;