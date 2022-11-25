import logo from './gatoperro.jpg';

function Inicio(props){
    return(
        <header className="App-header">
        <img src={logo} className="" alt="logo" />
        <h1>ALIMENTA BIEN A TU MASCOTA</h1>
        <p>
        ¿Cual es la mejora comida para tu mascota?
        </p>
        
      </header>
    );
}
export default Inicio;