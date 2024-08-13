import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThreeScene from "./ThreeScene"; // Import the ThreeScene component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<ThreeScene />} />
        {/* You can add other routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
