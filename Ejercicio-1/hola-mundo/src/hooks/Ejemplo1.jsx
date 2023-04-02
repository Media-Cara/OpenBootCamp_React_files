/* Ejemplo del Hook useState

Crear componenete de tipo función y acceder a su estado
privado a través de un hook, y además poder modificarlo

Todos los Hooks empiezan por "use"

*/

import React, { useState } from "react";

const Ejemplo1 = () => {
    const valorInicial = 0;

    const personaInicial = {
        nombre: "Martin",
        email: "margin@email.com",
    };

    // Ambas variables son parte del estado para que si se cambian, se cambia el HTML
    // const[nombreVariable, funcionParaCambiar] = useState(valorIncial)

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    // Actuailzar el estado del contador
    function incrementarContador() {
        setContador(contador + 1);
    }

    /**
     * Actualizar persona de componente
     * @param {string} nombre
     */
    function actualizarPersona(nombre) {
        setPersona({
            nombre: "Pepe",
            email: "pepe@newemail.com",
        });
    }

    return (
        <div>
            <h1>Ejemplo de useState()</h1>
            <h2>Contador: {contador}</h2>
            <h3>Persona: </h3>
            <h4>
                Nombre: {persona.nombre}
                Email: {persona.email}
            </h4>

            {/* Botones para activar esto */}
            <button onClick={incrementarContador}>Contador++</button>
            <button onClick={actualizarPersona}>Persona change++</button>
        </div>
    );
};

export default Ejemplo1;
