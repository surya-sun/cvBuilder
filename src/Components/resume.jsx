import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
                        <Col md={5}>
                             <p className="h5 text-light fw-bold"> {selector.name} </p> 
                             <p className="h6 text-light"> Software Engineering </p>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
            </div>

            {/* Summary */}

        </div>
    )
}

export default Resume;