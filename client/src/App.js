import Title from "./components/title/Title";
import BarContainer from "./components/bar/BarContainer";
import CupContainer from "./components/cup/CupContainer";
import "./index.css";
import { DrinkProvider } from "./contexts/DrinkContext";

function App() {
  return (
    <DrinkProvider>
      <div className="flex flex-col h-screen">
        <Title />
        <div className="mx-4 flex ">
          <BarContainer />
          <CupContainer />
        </div>
      </div>
    </DrinkProvider>
  );
}

export default App;
