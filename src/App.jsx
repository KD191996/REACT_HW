import { Col, Container, Row } from 'react-bootstrap';
import PostCatalog from './components/PostCatalog';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    async fetchPosts() {
        const request = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await request.json();
        this.setState({ posts: data });
    }

    componentDidMount() {
        this.fetchPosts();
    }

    render() {
        return (
            <div className="App">
                <h1 className='text-center mb-5 mt-5'>Post Catalog</h1>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <PostCatalog
                                data={this.state.posts}
                                itemTitle="title"
                                itemBody="body"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;

