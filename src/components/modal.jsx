import React from "react";

import {
    Modal,
    Button,
 
} from 'react-bootstrap';
import '../styles/contacto.css';

function VentanaModal(props) {
    
    return (
        
        <Modal
          onHide={props.onHide}
          show={props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
                
                {/* <div className="container-admin"> */}
                {props.text}
                {props.children}
                
                {/* </div> */}
                
                <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
        </Modal>
            
      );
}

export default VentanaModal;