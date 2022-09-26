import Navbar from "./components/Navbar";
import Sidebar from "./routes/Sidebar";
import LoadingSpinner from "./components/LoadingSpinner";
import Beranda from "./routes/Beranda";

function App() {
  return (
    <div className="App">
      <div className="md:mx-20">
        <Navbar />
        <div className="w-[100%]  flex flex-col sm:flex-row">
          <Beranda />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
