import Header from "./components/Header";
import { useState } from "react";
import GameBoard from "./components/GameBoard";
function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const updateScore = (newScore) => {
    setScore(newScore);
    if (newScore > highScore) {
      setHighScore(newScore);
    }
  };

  return (
    <div>
      <Header score={score} highScore={highScore} />
      <main>
        <GameBoard setScore={updateScore} />
      </main>
    </div>
  );
}

export default App;
