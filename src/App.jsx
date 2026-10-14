import { Routes, Route, Link } from "react-router-dom";
import Nav from "./views/Nav";
import CounterPage from "./views/CounterPage";

function App() {
  return (
    <section className="px-4">
      <div className="flex gap-4 p-4 items-center justify-center">
        <Link to="/">
          <button className="bg-transparent rounded-2xl hover:bg-white/20 transition-all duration-300 ease-in-out font-bold cursor-pointer text-white px-4 py-2">
            Counter
          </button>
        </Link>

        <Link to="/navbar">
          <button className="bg-transparent rounded-2xl hover:bg-white/20 transition-all duration-300 ease-in-out font-bold cursor-pointer text-white px-4 py-2">
            Navbar
          </button>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/navbar" element={<Nav />} />
      </Routes>
    </section>
  );
}

export default App;