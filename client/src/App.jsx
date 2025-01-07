import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/post" element={<CreatePost />} exact/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
