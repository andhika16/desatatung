import Navbar from "./components/Navbar";
import Headline from "./routes/HalamanUtama/Headline";
import { BrowserRouter as Router } from "react-router-dom";
const [isLoading, setLoading] = useState(true);
const [data, setShowData] = useState([]);
const url = "https://imdb8.p.rapidapi.com/actors/get-all-news?nconst=nm0001667";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "49805673bdmshf7dbdfd1b2374e1p110fdajsnedd9d28c0881",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

useEffect(() => {
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      setShowData(json.items);
      setLoading(false);
    })
    .catch((err) => console.error("error:" + err));
}, []);

if (isLoading) return <LoadingSpinner />;
function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Headline />
        </div>
    </Router>
  );
}

export default App;
