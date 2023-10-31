import { useState } from 'react'
import {ProSidebarProvider} from "react-pro-sidebar";
import  { BrowserRouter , Routes , Route ,  Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SideBar_ from './Components/sideBar'
import NavBar from './Components/navBar'

 import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        {/* navbar */}
          <NavBar />
        {/* sidebar */}
        <ProSidebarProvider>
            <SideBar_ />
        </ProSidebarProvider>
    </BrowserRouter>

    </>
  )
}

export default App
