import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingsF = (props) => {
    // Intro a useState
    // const [variable, método para actualizarla] = useState(valor incial)
    const [age, setAge] = useState(29);

    const birthday = () => {
        // Actualizamos el state
        setAge(age + 1);
    };

    return (
        <div>
            <h1>HOLA {props.name} desde componente funcional!</h1>
            <h2>Tienes {age} años :D</h2>
            <div>
                <button onClick={birthday}>Cumplir años</button>
            </div>
        </div>
    );
};

GreetingsF.propTypes = {
    name: PropTypes.string,
};

export default GreetingsF;
