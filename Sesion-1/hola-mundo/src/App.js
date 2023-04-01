import logo from "./logo.svg";
import "./App.css";
import TaskListComponent from "./components/container/task_list";
import ContactList from "./components/container/contact_list";
// import Greetings from "./components/pure/greetings";
// import GreetingsF from "./components/pure/greetingsF";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* Componente propio greetings.jsx */}
                {/* <Greetings name="José"></Greetings> */}
                {/* Componente ejemplo funcional */}
                {/* <GreetingsF name="Martinoli"></GreetingsF> */}

                {/* Componente de listado de tareas */}
                {/* <TaskListComponent></TaskListComponent> */}

                {/* Componente de contactos */}
                <ContactList></ContactList>
            </header>
        </div>
    );
}

export default App;
