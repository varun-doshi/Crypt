import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NFTs from "./pages/NFTs";
import Admin from "./pages/Admin";
import { ContractProvider } from "./context/ContractContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <ContractProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nfts" element={<NFTs />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </ContractProvider>
    </>
  );
}

export default App;
