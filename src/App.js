import "./App.css";
import Container from "./components/Container";
import { WeatherProvider } from "./context/WeatherContext";
import coldBg from "./assets/cold.jpg";

function App() {
  return (
    <div className="wrapper" style={{ backgroundImage: `url(${coldBg})` }}>
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </div>
  );
}
export default App;
