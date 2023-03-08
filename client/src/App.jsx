import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Activities from "./components/Activity/Activities";
import axios from "axios";
import CreateHotel from "./views/Forms/CreateHotel/CreateHotel";
import DetailActivity from "./views/Details/DetailACtivity/DetailActivity";
import DetailBooking from "./views/Details/DetailBooking/DetailBooking";
import DetailCity from "./views/Details/DetailCity/DetailCity";
import DetailHotel from "./views/Details/DetailHotel/DetailHotel";
import Home from "./views/Home/Home";
import Hotels from "./components/Hotel/Hotels";
// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const server = loadStripe(import.meta.env.SERVER);
axios.defaults.baseURL = server;
axios.defaults.baseURL = "http://localhost:3001";

function callApi() {
	axios
		.get(server)
		.then((response) => console.log(response.data))
		.catch((error) => console.log(error.message));
}

async function callProtectedApi(route) {
	try {
		const token = await getAccessTokenSilently();
		const response = await axios.get(`${server}/profile`, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
		console.log(response.data);
	} catch (error) {
		console.log(error.message);
	}
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />  
        <Route path="/home" element={<Home />} /> 
        <Route path="/home/:city" element={<DetailCity />} /> 
        <Route path="/home/:city/hotels" element={<Hotels />} /> 
        <Route path="/home/:city/activities" element={<Activities />} /> 
        <Route path="/home/:city/hotel/:hotel" element={<DetailHotel />} /> 
        <Route path="/home/:city/activity/:activity" element={<DetailActivity />} /> 
        <Route path="/detail/booking" element={<DetailBooking />} /> 
        <Route path="/backoffice/hotel/create" element={<CreateHotel />} />
      </Routes>
    </div>
  );
}

export default App;
