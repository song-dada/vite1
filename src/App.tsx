import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./com/Navbar";
import Home from "./pages/Home";


function App() {

  // 라우터는 명령이라. 뒤에 슬래쉬가 없음. 주로를 명칭시 슬래쉬 넣어야됨
  return (
    <Router basename="/vite1"> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
