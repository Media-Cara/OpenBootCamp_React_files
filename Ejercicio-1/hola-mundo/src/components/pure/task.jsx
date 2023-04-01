import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// Le pasas el argumento como ({ argumento }) porque en jsx le estas pasando un prop
// Esto significa que le estas pasando una lista de "variables" (whatever type), no solamente una variable/instancia/funcion, etc.
// Por esto tienes que deconstruir "task", porque realmente pasaste "props" y de props = {task}
// Así que para trabajar con task... parametros = {task : task}, por lo que ahora si tienes un parametro de task!
// Para acceder a los demás cosas que le pases puedes hacer props.algo (si es que el parametro de la función es props)
// En este caso sería task.task.name, si el parametro no tiene {}
const TaskComponent = ({ task }) => {
    return (
        <div>
            <h2>Nombre: {task.name}</h2>
            <h3>Descripción: {task.description}</h3>
            <h4>Level: {task.level}</h4>
            <h5>This task is: {task.completed ? "COMPLETED" : "PENDING"}</h5>
        </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
