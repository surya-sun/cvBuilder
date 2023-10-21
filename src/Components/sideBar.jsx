import React from "react";
import  { BrowserRouter , Routes , Route ,  Link } from "react-router-dom";
import { Sidebar , Menu , MenuItem ,useProSidebar } from "react-pro-sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import routes from "./routesJson";
// import "../styles/sidebar.scss";
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
      }
      else{
        setShowSideBar(false);
      }
      return()=>{ window.removeEventListener('resize' , getSizeOfWindow)} 
    },[window.innerWidth])

    return(
       <React.Fragment>
        <BrowserRouter>
          <div style={({ height: "90vh" }, { display: "flex"} )}>
            <Sidebar style={{ height: "90vh" , background : ""  }} collapsed={showSideBar}>
              <Menu>
                  <MenuItem icon={ closeOpenIcon ? <i class="bi bi-caret-left-square-fill"></i> : <i class="bi bi-caret-right-square-fill"></i>   } onClick={() => { setcloseOpenIcon(!closeOpenIcon); setShowSideBar(!showSideBar);}} style={{ textAlign: "center" }}>{" "}<p className="h4" >Admin</p></MenuItem>
                      {/* sidebar links */}
                    {
                        routes.map(e=><MenuItem component={generateLink(e.path)} key={e.name} icon={generateIcon(e.icon)}>{e.name}</MenuItem>)
                    }
             </Menu>
            </Sidebar>
            <main>
                {/* routing */}
                <Routes>
                    {
                      routes.map(e=><Route path={e.path} key={e.path} element={<e.element/>}  />)
                    }
                </Routes>
            </main>
         </div>
       </BrowserRouter>
      </React.Fragment>
    )
}

const generateLink = (path)=><Link to={path} />
const generateIcon = (icon)=><i className={icon}></i>