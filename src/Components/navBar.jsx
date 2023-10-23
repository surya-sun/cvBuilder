import React from "react";
import Navbar  from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import orginalImage from "../assets/orginalImage.png";
import Badge from 'react-bootstrap/Badge';


let NavBar = ()=>{
    return(
            <Navbar bg="dark" expand='xl' data-bs-theme="dark" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <img src={orginalImage} height={12} width={100} className="img-fluid" />
                    </Navbar.Brand>
                </Container>
            </Navbar>
    )
}

export default NavBar;

