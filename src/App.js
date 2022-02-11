import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters.jsx";

function App() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results));
  }, []);

  console.log(characterList);
  return (
    <div className="App">
      
        <Characters characterList={characterList} />
      
    </div>
  );
}

export default App;
