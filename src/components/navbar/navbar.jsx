import React from "react";
import { useState } from "react";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";


function NavbarComponent() {
  const [query,setQuery] = useState('')
  const history = useHistory()

  const handleOnChange = (event)=>{
    setQuery(event.target.value)
  }
  const handleOnSubmit = (event) =>{
    history.push(`/search/${query}`)
    event.preventDefault();
  }
  return (
    <Navbar className="justify-content-between bg-light" sticky="top">
      <div className="container">
        <Navbar.Brand  href="/" style={{
          fontFamily:"Modak",color:'#E8505B'
        }}>MangaMint</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="m-2">
          <Nav className="mr-auto"></Nav>
          <Nav className="mr-5">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="https://github.com/febryardiansyah/manga_mint/releases/tag/v.1.0-fix">Download App</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline onSubmit={handleOnSubmit}>
          <FormControl onChange={handleOnChange} type="text" placeholder="Search manga.." className="mr-sm-2" onc/>
          <Button variant="outline-success" as ={Link} to={`/search/${query}`}>Search</Button>
        </Form>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
