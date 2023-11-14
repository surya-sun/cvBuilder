import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";


import { useSelector  , connect } from "react-redux";

let Resume = (props)=>{

    let selector = useSelector((selector)=>selector.detailes);
    
    
    React.useEffect(()=>{
 
    },[])

    return(
        <div className="m-1 border border-2 overflow-scroll" style={{width : '100%' ,height : '533px'}}>
                            {/* header => details */}
            <div className="w-100 p-3 bg-dark">
                    <Row>
                        <Col md={6}>
                             <p className="h5 text-light fw-bold"> {selector.name || selector.name_ } </p> 
                             <p className="h6 text-light"> {selector.designation || selector.designation_ } </p>

                             <Table  hover variant="dark">
                                <tbody>
                                    <tr>
                                        <td> <i class="bi bi-github"></i>  </td>
                                        <td> { selector.githumProfile || selector.githumProfile_ } </td>
                                    </tr>
                                    <tr>
                                        <td> <i class="bi bi-linkedin"></i>  </td>
                                        <td> { selector.linkdinProfile || selector.linkdinProfile_ } </td>
                                    </tr>
                                </tbody>
                            </Table>
                             
                        </Col>
                        <Col>
                            <Table  hover variant="dark" >
                                <tbody>
                                    <tr>
                                        <td> <i class="bi bi-envelope-at-fill"></i>  </td>
                                        <td> { selector.email || selector.email_ } </td>
                                    </tr>

                                    <tr>
                                        <td> <i class="bi bi-telephone-fill"></i>  </td>
                                        <td> { selector.phoneNumber || selector.phoneNumber_ } </td>
                                    </tr>

                                    <tr>
                                        <td> <i class="bi bi-geo-alt-fill"></i>  </td>
                                        <td> { selector.address || selector.address_ } </td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Col>
                    </Row>
            </div>

            {/* Summary */}

                {
                    selector.summary &&
                        <div className="m-3">
                            <div className="d-flex justify-content-center">
                                <p className="fw-bold p-1 border border-3 border-dark w-25 text-center rounded-1">Summary</p>
                            </div>
                            <p>{selector.summary}</p>
                        </div>
                }
        </div>
    )
}

export default Resume;

{/* <i class="bi bi-telephone-fill"></i> */}