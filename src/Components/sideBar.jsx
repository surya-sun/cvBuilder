import React from "react";
import  { BrowserRouter , Routes , Route ,  Link } from "react-router-dom";
import { Sidebar , Menu , MenuItem ,useProSidebar } from "react-pro-sidebar";
import  Container   from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skills from "../screens/skils";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import routes from "./routesJson";
import Resume from "./resume";

export default function SideBar_(){

    const { collapseSidebar , rtl } = useProSidebar();
    const [closeOpenIcon , setcloseOpenIcon] = React.useState(true);
    const [showSideBar , setShowSideBar] = React.useState(false);
    const [width , setWidth] = React.useState();

    const getSizeOfWindow = ()=>{
      setWidth(window.innerWidth);
    }

    React.useEffect(()=>{
      window.addEventListener('resize' , getSizeOfWindow);
      if(width < 850){
        setShowSideBar(true);
        setcloseOpenIcon(!closeOpenIcon);
      }
      else{
        setShowSideBar(false);
      }
      return()=>{ window.removeEventListener('resize' , getSizeOfWindow)} 
    },[window.innerWidth])

    return(
      <div style={{display : 'flex' }} >
          <Sidebar style={{ height: "85.9vh"}}  backgroundColor="white" collapsed={showSideBar}>
            <Menu>
                <MenuItem icon={ closeOpenIcon ? <i className="bi bi-caret-left-square-fill"></i> :  <i className="bi bi-caret-right-square-fill"></i>   } onClick={() => { setcloseOpenIcon(!closeOpenIcon); setShowSideBar(!showSideBar);}} style={{ textAlign: "center" }}>{" "}<p className="h4" >Admin</p></MenuItem>
                  {
                    routes.map(e=><MenuItem 
                      component={generateLink(e.path)} 
                      key={e.name} icon={generateIcon(e.icon)}>{e.name}</MenuItem>)
                    }
           </Menu>
          </Sidebar>
           <div className={`${width < 850 ? "" : "routes_and_resume_paper"}`}>
              <div className="routes" >
                    <Routes>{routes.map((e,index)=> { return <Route key={index} path={e.path} element={<e.element />} /> } )}</Routes>
              </div>
                <div className={`resume_layout d-none  d-lg-block`}>
                     <Resume />
                </div>
           </div>
      </div>
    )
}

const generateLink = (path)=><Link to={path} />
const generateIcon = (icon)=><i className={icon}></i>