
import { Link } from "react-router-dom";

function Footer (props) {
    return (
        <div class="container">
        <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
          <Link
            to="/"
            className="me-3 py-2 text-dark text-decoration-none" >
          Inicio
        </Link>
      
            </li>
        </ul>
        <p class="text-center text-muted">© 2022 Mintic ciclo 4 grupo 6. All rights reserved. </p>
      </footer>
      </div>
    );
}

export default Footer;
