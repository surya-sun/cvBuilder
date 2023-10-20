import React from "react";
import { Sidebar , Menu , MenuItem ,useProSidebar } from "react-pro-sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function SideBar_(){

    const { collapseSidebar , rtl } = useProSidebar();
    const [closeOpenIcon , setcloseOpenIcon] = React.useState(true);
    return(
        <React.Fragment>
            <div style={({ height: "90vh" }, { display: "flex"} )}>
            <Sidebar style={{ height: "90vh" , background : "red" }}>
        <Menu>
          <MenuItem icon={ closeOpenIcon ? <i class="bi bi-caret-left-square-fill"></i> : <i class="bi bi-caret-right-square-fill"></i>   } onClick={() => { setcloseOpenIcon(!closeOpenIcon);  collapseSidebar();}} style={{ textAlign: "center" }}>{" "}<p className="h4" >Admin</p></MenuItem>
          <MenuItem icon={<i class="bi bi-ticket-detailed"></i>}> detailes </MenuItem>
        </Menu>
      </Sidebar>
      <main>
          hello

      </main>
            </div>
        </React.Fragment>
    )
}




