import React, { Component } from "react";
import PropTypes from "prop-types";

class Greetings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 29,
        };
    }

    render() {
        return (
            <div>
                <h1>HOLA {this.props.name} !</h1>
                <h2>Tienes {this.state.age} años :D</h2>
                <div>
                    <button onClick={this.birthday}>Cumplir años</button>
                </div>
            </div>
        );
    }

    birthday = () => {
        // Usamos una funcion tipo flecha porque nos permite usar el this. para referirnos a las
        // propiedades de la clase, y no de la función esta
        this.setState((prevState) => ({
            age: prevState.age + 1,
        }));
    };
}

Greetings.propTypes = {
    name: PropTypes.string,
};

export default Greetings;
