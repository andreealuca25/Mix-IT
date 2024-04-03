import React, {useState, useEffect} from "react";
import BarMenu from "./BarMenu";
import BarSearchbar from "./BarSearchbar";
import BarContent from "./BarContent";
import PourButton from "./PourButton";
import {
    otherBeverages,
    nonAlcoholicBeverages,
    alcoholicBeverages,
} from "../../utils/beverages";

const barData = {
    "Alcoholic": alcoholicBeverages,
    "Non Alcoholic": nonAlcoholicBeverages,
    "Other": otherBeverages
}
function BarContainer() {
    const [menuOption, setMenuOption] = useState('Alcoholic');
    const [filteredBarData, setFilteredBarData] = useState(barData[menuOption]);

    const [searchText, setSearchText] = useState("");
    useEffect(() => {

        if (searchText === "") {
            setFilteredBarData(barData[menuOption])
        } else {
            const filteredData = barData[menuOption].filter(item =>
                item.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredBarData(filteredData);
        }
    }, [searchText]);
    useEffect(() => {
        setFilteredBarData(barData[menuOption])
    },[menuOption])
    console.log("RERENDER")
    return (
        <div className="flex flex-col h-full bg-gray-100 rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-300">
                <BarSearchbar
                    sendSearchText={(searchText) => {
                        setSearchText(searchText);
                    }}
                />
            </div>
            <div className="flex p-6 border-b border-gray-300">
                <BarMenu menuOption={menuOption} setMenuOption={setMenuOption}/>

                <BarContent barData={filteredBarData}/>
            </div>
            <PourButton/>

        </div>
    );
}

export default BarContainer;
