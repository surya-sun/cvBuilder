import React from "react";
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import  Container from "react-bootstrap/Container";
import Heading from "../Components/heading";

function Detailes(){
    return(
        <>
        <Container>
            <Heading heading="Detailes" />
            <Form>
                <Form.Group className="md-3">
                    <Form.Label>First Name</Form.Label>
                   <Form.Control className='w-75'  size='sm' type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="md-3">
                    <Form.Label>Last Name</Form.Label>
                   <Form.Control className='w-75'  size='sm' type="text" placeholder="Enter Name" />
                </Form.Group>
            </Form>
        </Container>
        </>
    )
}

export default Detailes;