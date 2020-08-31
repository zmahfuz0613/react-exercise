import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Header.css';

const Header = () => {
    return(
      <>
    <Navbar className="nav">
      <Link to="/" className="navbar-brand-custom">ProductsApp</Link>   
    </Navbar>
    
        </>
    )
}

export default Header;