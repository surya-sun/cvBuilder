

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


let Resume = ()=>{
    return(
        <div className="w-100 h-100 mt-2 ml-4 border border-2 rounded">
            
            
            {/* header => details */}
            
            <div className="w-100 p-0 pt-1 bg-dark">
                {/* name */}

                <p className="text-light text-center display-6 semibold lh-1">Surya Teja </p>

                <p className="text-light mx-4 semibold font-monospace">
                            <i class="bi bi-telephone-fill"></i> : 8309062031 <br />
                            <i class="bi bi-envelope-fill"></i> : tejaksurya@gmail.com , suryahk@hotmail.com <br />
                            <i class="bi bi-houses-fill"></i> : 7-16-6/1 , old Gajuwaka , Gajuwaka , Vizag ,Andhra Pradesh , India-530026 <br />
                            <i class="bi bi-linkedin"></i> : suryahk@hotmail.com
                   </p>


            </div>

            {/* Summary */}

        </div>
    )
}

export default Resume;
