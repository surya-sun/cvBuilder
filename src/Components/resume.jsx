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
        <div className=" ml-4 border border-2" style={{width : '103%' , height : '100%' }} >
            {/* header => details */}
            <div className="w-100 p-1 bg-dark">
                    <Row>
                        <Col md={6}>
                             <p className="h5 text-light fw-bold"> {selector.name || selector.name_ } </p> 
                             <p className="h6 text-light"> {selector.designation || selector.designation_ } </p>

                             <Table  hover variant="dark" >
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

        </div>
    )
}

export default Resume;

{/* <i class="bi bi-telephone-fill"></i> */}