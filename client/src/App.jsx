import Sidebar from "./routes/Sidebar";
import Navbar from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";
import Beranda from "./routes/Beranda";
import StrukturOrganisasi from "./routes/pemerintah desa/StrukturOrganisasi";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="lg:mx-20">
          <Navbar />
          <div className="w-[100%]  flex flex-col sm:flex-row sm:mx-5">
            <Beranda />
            <Sidebar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
