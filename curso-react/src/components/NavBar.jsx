import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  const cartItemCount = 3; 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        
        <a className="navbar-brand" href="/">tu tienda online</a>

      
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

    
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item">
              <a className="nav-link" href="/categoria1">libros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categoria2">ropa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categoria3">alimentos</a>
            </li>
           
          </ul>

          {/* CartWidget */}
          <CartWidget itemCount={cartItemCount} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
