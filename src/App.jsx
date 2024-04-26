
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Navbar> </Navbar>
    <div className='w-[1250px] mx-auto' >
    <Outlet> </Outlet>
    </div>
    <Footer> </Footer>
    </>
  )
}

export default App
