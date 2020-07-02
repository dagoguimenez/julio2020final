import React from "react";
import { Container } from "react-bootstrap";
import banderaUY from './img/Bandera.png';

import AgregarContacto from '../components/contacto.jsx';
import VentanaModal from '../components/modal.jsx';



function Header() {
    const [modalShow, setModalShow] = React.useState(false);
    
    

        return(
        <>    
            <header>
                
                <nav className="navbar navbar-expand-lg fixed-top bg-white">
                    <Container>
                        
                        <a className="navbar-brand">
                            <img src={banderaUY} alt="Logo Website" height="50vh"/>
                        </a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav justify-content-end w-100 clearfix">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#home">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" onClick={() => setModalShowMap(true)}>Moto Uruguay</a> */}
                                    <a className="nav-link" href="mapauruguay.html" target="_blank" rel="noopener noreferrer">Moto Uruguay</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.imtbike.com/motorcycle-rentals/locations/barcelona/" target="_blank" rel="noopener noreferrer">Moto España</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="misexperiencias.html" target="_blank" rel="noopener noreferrer">Mis Experiencias</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => setModalShow(true)}>Contacto</a>
                                </li>
                            </ul>
                        </div>

                        
                    </Container>
                </nav>
               
            </header>

                
                      

            <VentanaModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            >   
                <AgregarContacto />
                
            </VentanaModal>
        </>   
        );
    
}
export default Header;