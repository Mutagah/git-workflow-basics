import { Routes, Route } from "react-router-dom";
import Owen from "./components/Owen";
import Githuba from "./components/Githuba"
function App() {
  return (
    <>
      <h1>This is the Git group project exercise</h1>

      {/* Route configuration */}
      <Routes>
        <Route path="/Owen" element={<Owen />} />
        <Route path="/Githuba" element={<Githuba />} />
      </Routes>
    </>
  );
}

export default App;
