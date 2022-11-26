
import './css/App.css';
//components
import Navbar from "./components/navbar/Navbar";
import Nosotros from "./components/Nosotros";
import Inicio from "./components/Inicio";
import Footer from "./components/footer";
import ComidaIndex from "./components/comidaparamascotas";
import Gatos from "./components/comidaparamascotas/gatos";
import Perros from "./components/comidaparamascotas/perros";
import {Route, Routes} from "react-router-dom";
import NoticiasIndex from "./components/noticias";
import UsuariosIndex from "./components/usuarios";
import ContactosIndex from "./components/contactos";
import LoginView from "./components/usuarios/login";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar logged={false} />
        <Routes>
            <Route path="/"element={<Inicio />}/>
            <Route path="/Nosotros"element={<Nosotros />}/>
            <Route path="/Contactos"element={<ContactosIndex />}/>
            <Route path="/Noticias"element={<NoticiasIndex />}/>
            <Route path="/Usuarios"element={<UsuariosIndex />}/>
            <Route path="/login"element={<LoginView />}/>

            <Route path="/comidaparamascotas"element={<ComidaIndex />}/>
            <Route path="/comidaparamascotas/gatos"element={<Gatos />}/>
            <Route path="/comidaparamascotas/perros"element={<Perros />}/>
        </Routes>
        
        
        <Footer />
     </div>
    </div>
    
  );
}

export default App;
