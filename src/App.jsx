import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import qr from "./assets/img/qr.png";

function App() {
  return (
    <>
      <div className="flex justify-center flex-col text-center items-center h-screen">
        <h1 className="font-Nova font-medium text-xl">
          Scan Qr Dibawah Untuk Absensi
        </h1>
        <img src={qr} alt="" className="w-4/5 md:w-2/4 " />
      </div>
    </>
  );
}

export default App;
