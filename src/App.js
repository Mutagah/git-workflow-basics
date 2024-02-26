import { Routes, Route } from "react-router-dom";
import Owen from "./components/Owen";
function App() {
  return (
    <>
      <h1>This is the Git group project exercise</h1>

      {/* Route configuration */}
      <Routes>
        <Route path="/Owen" element={<Owen />} />
      </Routes>
    </>
  );
}

export default App;
