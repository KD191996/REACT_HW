import React from 'react';
import classNames from 'classnames';
import ModalBody from './ModalBody.jsx';
import ModalFooter from './ModalFooter.jsx';
import ModalHeader from './ModalHeader.jsx';
import PropTypes from 'prop-types';

 class Modal extends React.Component {

     static Body = ModalBody;
     static Footer = ModalFooter;
     static Header = ModalHeader;

     render() {
         const { isOpen, toggle, children } = this.props;
         const modalClass = classNames('modal', { 'fade show': isOpen });
         const modalStyle = isOpen ? { display: 'block' } : { display: 'none' };

         return (
             <div className={modalClass} style={modalStyle} role="dialog">
                 <div className="modal-dialog">
                     <div className="modal-content">
                         {children}
                     </div>
                 </div>
             </div>
         );
     }
 }


Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func,
    children: PropTypes.node.isRequired,
};
Modal.defaultProps = {
    toggle: true,
};
export default Modal