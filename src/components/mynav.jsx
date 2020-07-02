import React from 'react';

function MyNav(){

    return(
        <nav>
            <ul className="ul">
                <li><a href="javascript:alert('Hello');">Home</a></li>
                <li><a href="javascript:alert('Hello');">En Uruguay</a></li>
                
                <li><a href="javascript:alert('AVENTURAS');">Aventuras</a>
                        <ul>
                            <li><a href="https://www.eaglerider.com/" target="_blank" rel="noopener noreferrer">USA</a></li>
                            <li><a href="https://www.imtbike.com/motorcycle-rentals/locations/barcelona/" target="_blank" rel="noopener noreferrer">España</a></li>
                            <li><a href="https://twowheelsmotorcycletours.com.au/" target="_blank" rel="noopener noreferrer"> Australia </a></li>
                            <li><a href="AventurasUruguay.html" target="_blank" rel="noopener noreferrer">Uruguay</a></li>
                        </ul>
                </li>
                <li><a href="javascript:alert('CONTACTO');">Contacto</a></li>
            </ul>
        </nav>

    );

}

export default MyNav;