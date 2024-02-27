import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Owen from "./components/Owen";
import Githuba from "./components/Githuba";
import Mutaga from "./components/Mutaga/Mutaga";
import Stephanie from "./components/Stephanie";
function App() {
  let navigate = useNavigate();
  const names = [
    "Emily",
    "Stephen",
    "Michael",
    "Wesley",
    "Reuben",
    "Mutaga",
    "Stephanie",
    "Jeremy",
  ];
  const mappedButtonNames = names.map((name) => {
    return (
      <button className="button-names" onClick={() => navigate(`/${name.toLowerCase()}`)}>
        {name}
      </button>
    );
  });
  return (
    <main className="main-container">
      <h1>Git group project practice exercise</h1>
      {mappedButtonNames}
      {/* Route configuration */}
      <Routes>
        <Route path="/michael" element={<Owen />} />
        <Route path="/jeremy" element={<Githuba />} />
        <Route path="/mutaga" element={<Mutaga />} />
        <Route path="/stephanie" element={<Stephanie/>}/>
      </Routes>
    </main>
  );
}

export default App;
