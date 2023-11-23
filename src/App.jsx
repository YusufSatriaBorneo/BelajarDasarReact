// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./componen/Dashboard";
import Navbar from "./componen/Navbar";
import Footer from "./componen/Footer";
import Mybutton from "./componen/Mybutton";

function App() {
  const navText = "Ayam Kuda Merah";
  const fotTexs = "Bebek Cimahi Raya ";
  const footText = "Saya Sukanya Di Bakar";

  const clicked = () => {
    return alert("Halo, Apa Kabar Kamu?");
  };

  const paragraf = () => {
    return (
      <div>
        <p>Halo Saya adalah anak pemula react JS</p>
        <h3>Halooo</h3>
      </div>
    );
  };

  return (
    <div>
      <Navbar navText={navText} />
      <Dashboard name="Yusuf" />
      <Dashboard name="Satria" />
      <Mybutton clicked={clicked} />
      <Dashboard name="Borneo" />
      <Mybutton clicked={clicked} />
      //membuat button menggunakan props
      <Footer fotText={fotTexs} footText={footText} paragraf={paragraf} />
    </div>
  );
}

export default App;
