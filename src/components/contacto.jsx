import React from 'react';
import '../styles/contacto.css';

function AgregarContacto() {

    
    const [formulario, editarFormulario] = React.useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''
    });

    const [grabado, avisarExito] = React.useState(false);
    
    const enviarForm = function(evento) {
        evento.preventDefault();
        if (!formulario.nombre || !formulario.apellido || !formulario.email || !formulario.telefono) {
            console.error('Falta algún dato');
        } else {
            fetch('http://localhost:4000/contactos', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(formulario)
            }).then(() => {
                // poner aca codigo para el ok de enviado el form
                console.log("AGREGADO OK") 
                
                // grabado = this.useState(true);
                
                                  
            });
        }
    };

    
    const manejarCambioNombre = function(evento) {
        editarFormulario({...formulario, nombre: evento.target.value});
    }

    const manejarCambioApellido = function(evento) {
        editarFormulario({...formulario, apellido: evento.target.value});
    }

    const manejarCambioEmail = function(evento) {
        editarFormulario({...formulario, email: evento.target.value});
    }

    const manejarCambioTelefono = function(evento) {
        editarFormulario({...formulario, telefono: evento.target.value});
    }

    return (
        <>
        <section id="contacto">
        <div className="container-admin">
            <h1>Agregar datos de contacto</h1>

            
            {/* {grabado && despliegoAviso()}             */}
            
            <form onSubmit={enviarForm}>
                <div className="bloque-formulario">
                    <label htmlFor="nombre">Nombre: </label>
                    <input type="text" onChange={manejarCambioNombre} value={formulario.nombre} />
                </div>

                <div className="bloque-formulario">
                    <label htmlFor="apellido">Apellido: </label>
                    <input type="text" onChange={manejarCambioApellido} value={formulario.apellido}/>
                </div>

                <div className="bloque-formulario">
                    <label htmlFor="email">Email:</label>
                    <input type="text" onChange={manejarCambioEmail} value={formulario.email} />
                </div>

                <div className="bloque-formulario">
                    <label htmlFor="telefono">Telefono:</label>
                    <input type="text"  onChange={manejarCambioTelefono} value={formulario.telefono}/>
                </div>

                <button type="submit">Enviar...</button>
            </form>
        </div>
        
        </section>

        
        </>

    )

    
}

export default AgregarContacto;