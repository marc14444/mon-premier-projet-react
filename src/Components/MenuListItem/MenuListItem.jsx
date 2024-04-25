import { useState } from "react"
import s from "./style.module.css"
export function MenuListItem({onClick, difficulty, isSelected}){
    const [isHovered, setHovered]= useState(false);
    console.log("mon hover est", isHovered);
    function getBackgroundColor(){
        if(isHovered){
            return "#a5e9ff"
        }else if(isSelected){
            return "#26baea"
        }else{
            return "#eff0ef"
        }
    }
    return (<>
        <div 
            onClick={() => onClick(difficulty)}
            style={{
                 background: getBackgroundColor(),
                }}
            className={s.container} 
            onMouseEnter={()=>setHovered(true)} 
            onMouseLeave={()=>setHovered(false)}
        >
            set to : {difficulty}
        </div>
    </>)
}