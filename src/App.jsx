import { useState } from "react";
import { DisplayDifficulty } from "./Components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./Components/MenuList/MenuList";
import { MenuListItem } from "./Components/MenuListItem/MenuListItem";
import s from "./style.module.css"
import { Square } from "./Squares";

export function App(){
    const [currentDifficulty, setCurrentDifficulty]= useState("");

function updateDifficulty(difficulty){
    setCurrentDifficulty(difficulty);
}

    return (<>
        <div>
            <h1 className={s.titre}>Select your React difficulty</h1>
            <div className={s.workspace}>
                    <MenuList
                    onItemClick={updateDifficulty}
                    difficulty ={currentDifficulty} 
                />
                <DisplayDifficulty difficulty= {currentDifficulty} />
            </div>
        </div>
        <Square />
    </>)
}