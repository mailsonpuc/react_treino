import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/Nopages";
import Login from "./pages/Login";
import Footer from "./pages/Footer"
import Containe from "./pages/Containe";
import ControlledCarousel from "./pages/Carrouse"



function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ControlledCarousel />} />

          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Footer/>} />
          <Route path="containe" element={<Containe/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
 

    </div>
  );
}

export default App;
