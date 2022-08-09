import { Routes,Route } from "react-router-dom";
import Main from "./Main";
import Erreur from "./Componenets/Erreur";
import Amine from "./Componenets/MovieCard/Amine";

function App() {
  
  return (
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Main/>}/>
    <Route path='/description' element={<Amine/>}/>
    <Route exact path='*' element={<Erreur/>}/> 
    </Routes>
    </div>
  );
  }

export default App;