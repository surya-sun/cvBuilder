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
                    <Form.Label className="small">First Name</Form.Label>
                   <Form.Control className='w-75' name='FirstName
                   ' size='sm' type="text" placeholder="First Name"/>
                </Form.Group>

                <Form.Group className="md-3">
                    <Form.Label className="small">Last Name</Form.Label>
                   <Form.Control className='w-75'  size='sm' type="text" placeholder="Last Name" />
                </Form.Group>

                <Form.Group className="md-3">
                    <Form.Label className="small">Phone Number</Form.Label>
                   <Form.Control className='w-75'  size='sm' type='phone' placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="md-3">
                    <Form.Label className="small">Email</Form.Label>
                   <Form.Control className='w-75'  size='sm' type='email' placeholder="krishna@example.com" />
                </Form.Group>

                <Form.Group className="md-3">
                    <Form.Label className="small">Address</Form.Label>
                   <Form.Control className='w-75' size='sm'  as='textarea' row={3} placeholder="Vizag-530026 , Andhra Pradesh , India" />
                </Form.Group>

            </Form>
        </Container>
        </>
    )
}

export default Detailes;