import React from "react";
import  { BrowserRouter , Routes , Route ,  Link } from "react-router-dom";
import { Sidebar , Menu , MenuItem ,useProSidebar } from "react-pro-sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import routes from "./routesJson";
import Resume from "./resume";
import { Container } from "react-bootstrap";

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
         <BrowserRouter>
         <div class="row" >
            <Sidebar style={{ height: "85.9vh" }}  backgroundColor="white" collapsed={showSideBar} class="col-2">
              <Menu>
                  <MenuItem icon={ closeOpenIcon ? <i class="bi bi-caret-left-square-fill"></i> :  <i class="bi bi-caret-right-square-fill"></i>   } onClick={() => { setcloseOpenIcon(!closeOpenIcon); setShowSideBar(!showSideBar);}} style={{ textAlign: "center" }}>{" "}<p className="h4" >Admin</p></MenuItem>
                    {
                      routes.map(e=><MenuItem 
                        component={generateLink(e.path)} 
                        key={e.name} icon={generateIcon(e.icon)}>{e.name}</MenuItem>)
                      }
             </Menu>
            </Sidebar>
            <main class="col-2">
              surya teja
            </main>
                      </div>
        </BrowserRouter>
    )
}

const generateLink = (path)=><Link to={path} />
const generateIcon = (icon)=><i className={icon}></i>