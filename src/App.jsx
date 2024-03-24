import { Outlet } from 'react-router-dom'
import './App.css'
import Aside from '../src/components/Aside'
import Navbar from '../src/components/Navbar'
function App() {

  return (
    <>
      <Aside />
      <div className='main-content'>
        <Navbar />
        <section style={{ scrollBehavior: "smooth" }}>
          <Outlet />
        </section>
      </div>
    </>
  )
}

export default App
