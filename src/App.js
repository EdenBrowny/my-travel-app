import "./App.css";
import images_04 from "./assets/images_04.jpg";
import images_06 from "./assets/images_06.jpg";
import images_07 from "./assets/images_07.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";

const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "Trips" },
  { url: "#", title: "Reward" },
];

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={images_04} />

      <Slider
        imageSrc={images_06}
        title={"Be an explorer!"}
        subtitle={"Our platform offers wide variety of unique travel locations"}
      />

      <Slider
        imageSrc={images_07}
        title={"Memories of a lifetime"}
        subtitle={"Your dream vacations is only a few clicks away"}
        flipped={true}
      />
    </div>
  );
}

export default App;
