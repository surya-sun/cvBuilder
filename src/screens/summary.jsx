import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector , useDispatch } from "react-redux";
import  Container from "react-bootstrap/Container";
import Heading from "../Components/heading";
import { changeDetailes  } from "../store/detailesReducer";


function Summary(){

    const dispatch = useDispatch();

    let selector = useSelector((selector)=>selector.detailes);

    let onChangeDetailes = (event)=>{
    let data = { name : event.target.name   , value : event.target.value /* ? event.target.value : Object.values(event.target.dataset)[0] */ };
        //console.log(data);
       dispatch(changeDetailes(data));
    }


    return(
        <Container>
            <Heading heading="Summary" />

         <Form>
             <Form.Group className="md-3">
                <Form.Label className="small">Summary</Form.Label>
                <Form.Control size='sm' name="summary"   as='textarea' rows={5} 
                    placeholder="Summary"
                    onChange={onChangeDetailes} value={selector.summary}  />
            </Form.Group>
        </Form>
      </Container>
    )
}

export default Summary;