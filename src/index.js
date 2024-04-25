//importer les outils React
import ReactDOM from "react-dom";

// importer notre composant react
import { App } from "./App";

//cibler la div dont l'id est root
const divRoot = document.getElementById("root");

//creer un noeud racine react a partir de la div react
const reactRoot = ReactDOM.createRoot(divRoot);

//injecter notre premier composant le noeud racine
reactRoot.render(<App/>);