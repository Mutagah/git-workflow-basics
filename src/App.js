import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Owen from "./components/Owen/Owen";
import Githuba from "./components/Githuba";
import Mutaga from "./components/Mutaga/Mutaga";
import Emilly from "./components/Emilly";
import Wesley from "./components/Wesley";
import Reuben from "./components/Reuben"
import Mbithuka from "./components/Mbithuka"
import Stephanie from "./components/Stephanie";
function App() {
  let navigate = useNavigate();
  const names = [
    "Emilly",
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
        <Route path="/emilly" element={<Emilly />} />
        <Route path="/stephen" element={<Mbithuka />} />
        <Route path="/michael" element={<Owen />} />
        <Route path="/wesley" element={<Wesley />} />
        <Route path="/jeremy" element={<Githuba />} />
        <Route path="/reuben" element={<Reuben />} />
        <Route path="/mutaga" element={<Mutaga />} />
        <Route path="/stephanie" element={<Stephanie/>}/>
      </Routes>
    </main>
  );
}

export default App;
