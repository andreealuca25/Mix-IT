import Title from "./components/title/Title";
import BarContainer from "./components/bar/BarContainer";
import CupContainer from "./components/cup/CupContainer";
import "./index.css";
import { DrinkProvider } from "./contexts/DrinkContext";
import PreviouslySavedContainer from "./components/previouslySaved/PreviouslySavedContainer";

function App() {
  return (
    <DrinkProvider>
      <div className="flex flex-col h-screen">
        <Title />
        <div className="flex justify-evenly">
          <BarContainer />
          <PreviouslySavedContainer />
        </div>
        <div>
          <CupContainer />
        </div>
      </div>
    </DrinkProvider>
  );
}

export default App;
