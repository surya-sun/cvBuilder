import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SideBar_ from './Components/sideBar'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* navbar */}

        {/* sidebar */}
      <SideBar_ />

    </>
  )
}

export default App
