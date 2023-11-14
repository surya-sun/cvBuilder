import React from "react";
import { useSelector , useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import  Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Heading from "../Components/heading";
import { changeDetailes  } from "../store/detailesReducer";

function Education(){

    const dispatch = useDispatch();
    let selector = useSelector((selector)=>selector.detailes);

    let [edu,setEdu] = React.useState([])

    React.useEffect(()=>{
        setEdu(selector.education);
    },[])

    let addEducation = ()=>{
        edu = [...edu , {title : "" , name : '' , course : ''}];
        let data = { name : 'education' , value : edu };
        dispatch(changeDetailes(data));
        setEdu(edu);
    }

    let deleatEducation = (index)=>{
         console.log(index);
        // edu.splice(index , 1);
        console.log({edu});
    }   

    return(
        <Container>
              <Heading heading="Education" />
              <Button size='sm' variant='primary' className="rounded rounded-3" onClick={addEducation} ><i class="bi bi-plus-circle-fill"></i>&nbsp;   Add</Button>
             {
                edu && edu.length > 0 &&
                edu.map((e,index)=>(<div key={index}>surya <i class="bi bi-trash-fill" onClick={()=>{deleatEducation(index)}} ></i></div>))
             }
        </Container>
    )
}

export default Education;