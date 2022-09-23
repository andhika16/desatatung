import Navbar from "./components/Navbar";
import Sidebar from "./routes/Sidebar";

import Beranda from "./routes/Beranda";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="App">
      <div className="md:mx-20">
        <Navbar />
        <div className="w-[100%] bg-gray-200 flex flex-col sm:flex-row">
          <Beranda />
          <SideNav />
        </div>
      </div>
    </div>
  );
}

export default App;
