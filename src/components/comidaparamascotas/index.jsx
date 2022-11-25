import { Link } from "react-router-dom";

function ComidaIndex(props){
    return(<div>
        <ul>
            <li>
                <Link to={"/comidaparamascotas/gatos"}>Gatos
                </Link>
            </li>
            <li>
                <Link to={"/comidaparamascotas/perros"}>Perros
                </Link>
            </li>
        </ul>
    </div>
    );
}
export default ComidaIndex;
