import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import ChatButton from "./components/CahtButton";

function Home() {
  return <h1 className="">صفحه اصلی</h1>;
}

function About() {
  return <h1 className="">درباره ما</h1>;
}

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Headers />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ChatButton />
    </div>
  );
}

export default App;
