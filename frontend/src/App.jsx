import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
