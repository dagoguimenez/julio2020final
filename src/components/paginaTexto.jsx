import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/estilos.css';
import '../styles/otros.css';

import imagenBenelli from './img/Benelli.png';
import imagenKawa from './img/Kawasaki3.png';
import imagenBmw from './img/BMW.png';
import imagenKtm from './img/ktm.jpg';
import VentanaModal from './modal';


function TextBenelli(){
    const [modalShowBEN, setModalShowBEN] = React.useState(false);
    
    
    return(
      <>  
        
        <div className="grilla-elemento">
            
            <div className="grilla-interna-elemento centrar elemento-imagen">
                <a href="https://uruguay.benelli.com/" rel="noopener noreferrer" target="_blank"><img src={imagenBenelli} alt="Benelli" width="120vh"></img></a>
            </div>
            
            <div className="grilla-interna-elemento texto-izquierda" onClick={() => setModalShowBEN(true)}>

                Benelli S.p.A. es una de empresa italiana fabricantes de motocicletas, fundada en 1911 en Pésaro por Teresa Benelli y seis 
                de sus hijos. Durante gran parte del siglo XX 
                se dedicó al desarrollo de motocicletas de alto rendimiento, las cuales fueron vendidas y exportadas 
                a mercados como el Reino Unido y los Estados Unidos.
                La firma tuvo grandes éxitos a partir de su modelo insignia, la Benelli Tornado, pero a fines de los años 1970, 
                vivió su primer cierre a causa de la apertura del mercado europeo a los productos japoneses.
                Tras varios intentos de refundar la marca, en 1997 volvió a salir al mercado gracias a su principal inversor, Andrea Merloni.
                Desde el año 2005, Benelli forma parte del consorcio chino Qianjiang.'

                <img className="img1" src="https://4.bp.blogspot.com/-9oHZxsJjqFs/Vn-uneGrNDI/AAAAAAAAG6E/I9WIY126VHM/s640/Benelli-TRK502.jpg" title="Benelli" width="300vw" alt=""></img>
                                                            
            </div>
            
        </div>

            
        <VentanaModal
                text='Representante en Uruguay: DECELESTE, Colombia 1329.Montevideo

                T: (+598) 2924 8849 | F: (+598) 2924 4229'
                show={modalShowBEN}
                onHide={() => setModalShowBEN(false)}
                
                
        />
            
      </>         
        
    );

}


function TextBmw() {
    const [modalShowBMW, setModalShowBMW] = React.useState(false);
    
    return(
      <>  

        <div className="grilla-elemento">
                <div className="grilla-interna-elemento centrar elemento-imagen">

                <a href="https://www.bmwmotorcycles.com/en/home.html" target="_blank" rel="noopener noreferrer"><img src={imagenBmw} alt="BMW" width="120vh"></img></a>
                
                </div>

                <div className="grilla-interna-elemento texto-izquierda" onClick={() => setModalShowBMW(true)}>
        
                    BMW (siglas en alemán de: Bayerische Motoren Werke, «Fábricas de motores bávara») es un fabricante alemán de automóviles de lujo y motocicletas, 
                    cuya sede se encuentra en Múnich.
                    Concebida sobre el papel a lo largo de 1922, la primera motocicleta BMW R 32 es furor durante su presentación en la Exposición de Berlín de 1923. 
                    Con el fin de mejorar la refrigeración por aire, el ingeniero jefe Max Friz coloca el motor plano de forma transversal y la potencia 
                    se transmite directamente a la rueda a través de un eje de cardán: un principio de diseño que se sigue utilizando en las motocicletas de BMW hoy en día.
                    A partir de 1924 se volvieron a producir motores de avión. El Schienenzeppelin fabricado en 1930 fue propulsado con un motor BMW.

                    <img className="elemento-imange" src="https://www.motofichas.com/images/phocagallery/BMW_Motorrad/r-1250-gs-2019/01-bmw-r-1250-gs-2019-estaticas.jpg" title="BMW" width="300vw" alt=""></img>

                </div>
        </div>

        <VentanaModal
                text="Representante en Uruguay: AUTOMOTORES MOTOR HAUS SA, Alberdi y Cooper - T:(+598)26018011 | M:(+598)97759959"
                show={modalShowBMW}
                onHide={() => setModalShowBMW(false)}
                
        />
    </>
    );
    
}

function TextKtm(){
    const [modalShowKTM, setModalShowKTM] = React.useState(false);
    

    return(
      <>  

        <div className="grilla-elemento">
            <div className="grilla-interna-elemento centrar elemento-imagen">
                <a href="https://www.ktm.com/uy/" target="_blank" rel="noopener noreferrer"><img src={imagenKtm} alt="KTM" width="250vh"></img></a>
            </div>
            <div className="grilla-interna-elemento texto-izquierda" onClick={() => setModalShowKTM(true)}>
                
                    KTM Sportmotorcycle AG es un fabricante de motocicletas y escudería de motocicletas de Austria, formada en 1992, pero remonta su fundación a 1934.
                    En 1992 se separa de su matriz KTM cuando tuvo problemas financieros.KTM se ha dividido en cuatro empresas, todas las cuales comparten 
                    la misma marca KTM y en la actualidad tienen muchas más filiales con la misma marca. Sin embargo, KTM-Sportmotorcycle es más comúnmente asociado con 
                    la marca KTM.
                    KTM es conocida por sus motocicletas todo terreno, aunque en los últimos años se ha expandido a la producción de motocicletas de calle, 
                    así como el desarrollo de un coche deportivo y bicicletas.

                    <img src="https://4.bp.blogspot.com/-n0h7iNyK024/Vn-zZmziLuI/AAAAAAAAG60/Qr683nv3i5A/s640/KTM-1050-Adventure-EICMA-08.jpg" title="KTM" width="300vw" alt=""></img>
            </div>
        </div>
        
        <VentanaModal
                text="Representante en Uruguay: KTM URUGUAY, Rafael Barradas 1709"
                show={modalShowKTM}
                onHide={() => setModalShowKTM(false)}
                
        />
    </>
    );
    
}

function TextKawa(){
    const [modalShowKW, setModalShowKW] = React.useState(false);
    
    return(
      <>  
            
        <div className="grilla-elemento">
            <div className="grilla-interna-elemento centrar elemento-imagen">
                <a href="https://www.kawasaki.com" target="_blank" rel="noopener noreferrer"><img src={imagenKawa} alt="Kawasaki" width="120vh"></img></a>
            </div>
            <div className="grilla-interna-elemento texto-izquierda" onClick={() => setModalShowKW(true)} >
            
                    La compañía toma el nombre de su fundador, Shozo Kawasaki, y no tiene conexión con la ciudad de Kawasaki, (Kanagawa).
                    Fuera de Kōbe, Japón, Kawasaki se conoce principalmente por la producción de motocicletas y vehículos todoterreno, a pesar que la 
                    compañía y sus subsidiarias también fabrican motos de agua, barcos, plantas industriales, tractores, trenes, 
                    pequeños motores y equipamiento aeroespacial (incluyendo aviones militares).Ha sido subcontratista para trabajos en aviones a reacción 
                    (incluyendo los jumbo jets) para Boeing, Embraer, y Bombardier.

                    <img src="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/19KLE300C_44SGN1DRS1CG_A.png" title="Kawasaki" width="300vw" alt=""></img>
            </div>
        </div>

        
        <VentanaModal
                 text="Representante en Uruguay: KENILME S.A., Avda.Italia 5186 - T: (598) 26184303 / 2618 4304 / 2618 4307"
                show={modalShowKW}
                onHide={() => setModalShowKW(false)}
        />   
        
      </>         
       

    );

}

export {TextBenelli, TextKtm, TextBmw, TextKawa};




