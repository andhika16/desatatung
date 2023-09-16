import Navbar from "./components/Navbar";
import Beranda from "./routes/HalamanUtama/Headline";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Beranda />
      </div>
    </Router>
  );
}

export default App;
