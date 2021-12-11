import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./features/About/About";
import GameOver from "./features/GameOver/GameOver";
import Menu from "./features/Menu/Menu";
import Quiz from "./features/Quiz/Quiz";

function App() {
  return (
    <BrowserRouter>
      <main className="pt-10">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/game-over" element={<GameOver />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
