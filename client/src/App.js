import React from "react";
import Title from "./components/title/Title";
import BarContainer from "./components/bar/BarContainer";
import CupContainer from "./components/cup/CupContainer";
import "./index.css";
import {SelectedDrinkProvider} from "./contexts/SelectedDrinkContext";

function App() {

    return (
        <SelectedDrinkProvider>
            <div className="flex flex-col h-screen">
                <Title/>
                <div className="mx-4 flex ">
                    <BarContainer/>
                    <CupContainer />
                </div>
            </div>
        </SelectedDrinkProvider>
    );
}

export default App;
