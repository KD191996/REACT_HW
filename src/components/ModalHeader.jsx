import React from 'react';
import classNames from 'classnames';


class ModalHeader extends React.Component {

    render() {


        const { toggle, children } = this.props;
        return (
            <div className="modal-header">
                <div className="modal-title">{children}</div>
                <button type="button" className="btn-close" onClick={toggle} aria-label="Close"></button>
            </div>
        );
    }
}

export default ModalHeader