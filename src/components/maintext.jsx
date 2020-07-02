import React from 'react';

import {
  Modal,
  Text,
  View,
  Button,
  StyleSheet,
  } from 'react-bootstrap';

  
  import "../styles/estilos.css"

// import textBenelli from '../components/textBEN.jsx';
// import textBmw  from '../components/textBMW.jsx';
// import textKawa from '../components/textKAWA.jsx';
// import textKTM from '../components/textKTM.jsx';

function MyVerticallyCenteredModal(props) {
    
  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName=""
        centered
      >
        
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Modal.Text}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


function MainText(){
    const [modalShow, setModalShow] = React.useState(false);
    
    return(
      <>  
        <div className="grilla-principal">
            <textBenelli />
            
        </div>

            
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
      </>         
        
    );

}

export default MainText;
