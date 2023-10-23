import { useState } from 'react'
import {ProSidebarProvider} from "react-pro-sidebar";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SideBar_ from './Components/sideBar'
import NavBar from './Components/navBar'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* navbar */}
          <NavBar />
        {/* sidebar */}
        <ProSidebarProvider>
            <SideBar_ />
        </ProSidebarProvider>

    </>
  )
}

export default App
