import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Todo from "../src/Pages/Todo";
import ProgressBar from "./Pages/ProgressBar";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/progress" element={<ProgressBar />} />
      </Routes>
    </Router>
  );
}

export default App;
