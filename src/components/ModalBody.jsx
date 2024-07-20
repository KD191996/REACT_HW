import React from 'react';
import Modal from './Modal.jsx';

class ModalBody extends React.Component {
    render() {
        return (
            <div className="modal-body">
                {this.props.children}
            </div>
        );
    }
}

export default ModalBody



