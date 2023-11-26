// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./componen/Dashboard";
import Navbar from "./componen/Navbar";
import Footers from "./componen/Footers";
import Mybutton from "./componen/Mybutton";
import React, { useState, useEffect, useRef } from "react";
import About from "./pages/About";

import Contact from "./pages/Contanct";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
// import React, { useRef } from "react";

import { Routes, Route } from "react-router-dom";

function App() {
  // kiri -> getter
  // kanan -> setter
  const [ayamBakar, setAyamBakar] = useState(0);

  const kurangiAyam = () => {
    // Memeriksa apakah nilai prev sudah 0 sebelum dikurangi
    if (ayamBakar > 0) {
      setAyamBakar((prev) => prev - 1);
    }
    // Agar State ketika sudah bernilai 0 maka nilai tidak akan minus
  };

  const [namaAyam, setNamaAyam] = useState("");
  useEffect(() => {
    if (ayamBakar > 0) {
      setNamaAyam("Wilson");
    } else {
      setNamaAyam("Rembow");
    }
  }, [ayamBakar]);
  const fotTexs = "Bebek Cimahi Raya ";
  const footText = "Saya Sukanya Di Bakar";

  const clicked = () => {
    return alert("Halo, Apa Kabar Kamu?");
  };

  const paragraf = () => {
    return (
      <div>
        <p>Halo Saya adalah anak pemula react JS</p>
        <h3>Halooo saya upin</h3>
      </div>
    );
  };

  const [getNavbarValue, setNavbarValue] = useState("");

  const klikaku = () => {
    setNavbarValue("My State ON");
  };

  const Linkref = useRef(null);

  const goto = (ref) => {
    console.log(ref);
    window.scrollTo({
      top: ref.offsetTop,
      Left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h2>Saya membeli : {ayamBakar} ekor</h2>
      <h4>Nama Ayam : {namaAyam}</h4>

      <button onClick={() => setAyamBakar((prev) => prev + 1)}>
        Tambah Ayam
      </button>
      <button onClick={kurangiAyam}>Kurangi Ayam</button>
      <Navbar navValue={getNavbarValue} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <div>
        <button onClick={() => goto(Linkref.current)}>
          Penggunaan Use Ref
        </button>
      </div>
      <Dashboard name="Yusuf" />
      <button onClick={() => klikaku()}>
        Tombol klik untuk penggunaan state
      </button>
      {/* membuat button dengan state merubah tulisan */}
      <Dashboard name="Satria" />
      <Mybutton clicked={clicked} />
      {/* membuat button menggunakan props */}
      <Dashboard name="Borneo" />
      <a ref={Linkref}>Use ref menuju ke sini</a>
      <Mybutton clicked={clicked} />
      <Footers fotText={fotTexs} footText={footText} paragraf={paragraf} />
    </div>
  );
}

export default App;
