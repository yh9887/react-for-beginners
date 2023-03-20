import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
          <Routes>
            <Route path="/react-for-beginners" element={<Home />} />
            <Route path="/react-for-beginners/movie/:id" element={<Detail />} />
          </Routes>
        </Router>
  
};

export default App;
