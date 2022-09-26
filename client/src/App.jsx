import Navbar from "./components/Navbar";
import Sidebar from "./routes/Sidebar";

import Beranda from "./routes/Beranda";
import Chart from "./components/Chart";
import Test from "./components/Test";
import Maps from "./components/Maps";

function App() {
  return (
    <div className="App">
      <div className="md:mx-20">
        <Navbar />
        <div className="w-[100%]  flex flex-col sm:flex-row">
          <Beranda />
          <Sidebar />
        </div>
        <Maps />
      </div>
    </div>
  );
}

export default App;
