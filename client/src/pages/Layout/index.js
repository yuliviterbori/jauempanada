import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/logo_horizontal_transparente.png`} alt="DON OSO" height="24"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon navbar-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link text-light active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light" to="/cart">Ordenes</Link>
                            </li>
                            <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mi cuenta
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#">Editar</Link></li>
                                <li><Link className="dropdown-item" href="#">Salir</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            
        </nav>
        <div className="container">
            <Outlet />
        </div>
    </>
  )
};

export default Layout;