import Form from 'react-bootstrap/Form';
import { CartWidget } from './CartWidget';
import { Link, useNavigate } from "react-router-dom";

export const Navbar = ({
    allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal, 
}) => {
    return(
        <>
            <div className="container-hero">
                <div className="container hero">
                    <div className="container-logo">
                        <h1 className="logo">
                            {/* Home */}
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>High Records</Link>
                            </li>
                        </h1>
                    </div>
                    <div className="container-navbar">
                        <nav className="navbar container">
                            <ul className="menu">
                                {/* Vinilos */}
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/category/Vinilos'}>Vinilos</Link>
                                </li>
                                {/* CDs */}
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/category/CDs'}>CDs</Link>
                                </li>
                                {/* Vinilos */}
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/category/Ropa'}>Ropa</Link>
                                </li>
                            </ul>
                            <CartWidget
                                allProducts={allProducts}
                                setAllProducts={setAllProducts}
                                total={total}
                                setTotal={setTotal}
                                countProducts={countProducts}
                                setCountProducts={setCountProducts}/>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}