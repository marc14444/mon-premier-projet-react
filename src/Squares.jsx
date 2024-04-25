import s from "./style.module.css"
export function Square(){
    const colors = ["blue", "green", "yellow", "purple"]
    const  SquareList = []

    for(const couleur of colors){
        SquareList.push(
            <div style={{width:100, height:100, backgroundColor: couleur, display: "flex",justifyContent:"space-evenly"}}></div>
        )
    }
    return (
        <div className={s.carrerCouleur}>
            {SquareList}
        </div>
    )
}