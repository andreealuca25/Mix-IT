import { useContext } from "react";
import DrinkContext from "../../contexts/DrinkContext";
import Bottle from "./Bottle";
export default function SelectedBottles() {
  const { cupContent } = useContext(DrinkContext);

  return (
    <div>
      {Object.keys(cupContent).length !== 0 && (
        <>
          <h2>So far you have poured: </h2>
          <div className="grid grid-cols-5">
            {Object.entries(cupContent).map(([name, ingredient], index) => {
              return (
                <Bottle
                  key={index}
                  name={name}
                  quantity={ingredient.quantity}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
