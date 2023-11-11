import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector , useDispatch } from "react-redux";
import  Container from "react-bootstrap/Container";
import Heading from "../Components/heading";
import { changeDetailes  } from "../store/detailesReducer";

function Detailes(){

    const dispatch = useDispatch();

    let onChangeDetailes = (event)=>{
    let data = { name : event.target.name   , value : event.target.value /* ? event.target.value : Object.values(event.target.dataset)[0] */ };
        //console.log(data);
       dispatch(changeDetailes(data));
    }

    function  surya(){
        alert(1);
    }

    return(
        <>
        <Container>
            <Heading heading="Detailes" />
            <Form>
                
                <Form.Group className="mb-1">
                    <Form.Label className="small">First Name</Form.Label>
                   <Form.Control name='name' size='sm' type="text" placeholder="First Name" data-name="krishna" onChange={onChangeDetailes}  />
                </Form.Group>

                <Form.Group className="mb-1">
                    <Form.Label className="small">Designation</Form.Label>
                   <Form.Control  size='sm' name='designation' type="text" placeholder="Designation" data-name="Software Engineering" onChange={onChangeDetailes} />
                </Form.Group>

                <Form.Group className="mb-1">
                    <Form.Label className="small">Phone Number</Form.Label>
                   <Form.Control  size='sm' name="phoneNumber" type='number' placeholder="Phone Number" data-phoneNumber="12345678998" onChange={onChangeDetailes} />
                </Form.Group>

                <Form.Group className="mb-1">
                    <Form.Label className="small">Email</Form.Label>
                   <Form.Control name="email"  size='sm' type='email' placeholder="krishna@example.com"  data-email="krishna@example.com" onChange={onChangeDetailes} />
                </Form.Group>

            <InputGroup className="mb-1">
                         <InputGroup.Text id="basic-addon1"><i class="bi bi-github"></i></InputGroup.Text>
                         <Form.Control name="githumProfile" size='sm' type='email' placeholder="krishna@example.com" data-githumProfile="example@githum.com" onChange={onChangeDetailes}  />
            </InputGroup>


                <InputGroup className="mb-1">
                         <InputGroup.Text id="basic-addon1"><i class="bi bi-linkedin"></i></InputGroup.Text>
                         <Form.Control name="linkdinProfile" size='sm' type='email' placeholder="krishna@example.com" data-linkdinProfile="example@linkdin.com" onChange={onChangeDetailes}  />
              </InputGroup>


                <Form.Group className="md-3">
                    <Form.Label className="small">Address</Form.Label>
                   <Form.Control size='sm' name="address"   as='textarea' row={3} placeholder="Dwarka , Gujarat , India" data-address="dwarka,gujarat,india" onChange={onChangeDetailes} />
                </Form.Group>

            </Form>
        </Container>
        </>
    )
}

export default Detailes;