import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./features/About/About";
import GameOver from "./features/GameOver/GameOver";
import Menu from "./features/Menu/Menu";
import NotFound from "./features/NotFound/NotFound";
import Quiz from "./features/Quiz/Quiz";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/game-over" element={<GameOver />} />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
