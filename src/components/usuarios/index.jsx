import Table from "../table/Table";
import getData from "../../js/getData";

function UsuariosIndex(props){
    let datosTabla = getData("url", {},"get", {} );
  
    return (
        <div>
            <h3>
                USUARIOS
            </h3>
            <p >Bienvenidos a la pagina de administracion de usuarios de alimenta bien a tu mascota</p>
            <Table
            data={datosTabla} 
            name={"Tabla de usuarios"}
            columns={["id", "firsname", "email", "username", "password"]} />
            columnsAlias={["ID", "Nombre", "Correo", "Usuario", "Contrasena"]}
            tools={["update","eliminar"]}
        </div>
    );
}

export default UsuariosIndex;