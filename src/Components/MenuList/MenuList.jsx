import { MenuListItem } from "../MenuListItem/MenuListItem"
import s from "./style.module.css"
import { DIFFICULTY } from "./constantes"
export function MenuList({difficulty, onItemClick}){
    return (<>
        <div className={s.container}>
            {
                DIFFICULTY.map((diff)=>{
                    console.log("Mini projets terminer avec succès");
                    return (
                        <MenuListItem 
                            onClick={onItemClick}
                            difficulty={diff}
                            isSelected={difficulty === diff}
                        />
                    )
                })
            }
        </div>
    </>)
}