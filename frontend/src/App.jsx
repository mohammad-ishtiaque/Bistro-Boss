import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
