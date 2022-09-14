import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/home/Home.jsx";
import News from "./pages/news/News.jsx";
import Loading from "./Components/loadingScreen/Loading.jsx"

function App() {
  return (
    <div>
      <Loading />
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<News />} />
            <Route path="home" element={<Home />} />
            <Route  path="login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
