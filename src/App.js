import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Resorts from "./components/Resorts";
import Selects from "./components/Selects";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Resorts />
      <Booking />
      <Selects />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
