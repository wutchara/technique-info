import React from "react";
import { Canvas } from "@react-three/fiber";

import logo from "./logo.svg";
import "./App.css";
import Box from "./components/box";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          {/* <Box position={[-1.2, 0, 0]} /> */}
          <Box position={[0, 0, 0]} />
        </Canvas>
      </header>
    </div>
  );
}

export default App;
