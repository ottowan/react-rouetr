import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component{
render(){
return(
    <div>
        <h1>USER LIST</h1>    
        <Nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link to="/" className="navbar-brand text-white" >LOGO</Link>
          <NavItem>
            <NavLink activeClassName="active"><Link to="/" className="nav-link  text-white">Home</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName="active" ><Link to="/user" className="nav-link  text-white">Photo</Link></NavLink>
          </NavItem>
        </Nav>      
    </div>
)
}
}
export default Header


