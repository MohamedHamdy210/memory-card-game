import { useState } from "react";
import cards from "./pics";

export default function GameBoard({ setScore }) {
  const [shuffledCards, setShuffledCards] = useState(shuffleArray(cards));
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScoreState] = useState(0);

  // Shuffle the array
  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  // Handle card click
  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      // Game over
      alert("Game Over! Try Again.");
      resetGame();
    } else {
      // Update clicked cards and score
      setClickedCards([...clickedCards, id]);
      const newScore = score + 1;
      setScoreState(newScore);
      setScore(newScore);

      // Shuffle cards
      setShuffledCards(shuffleArray(cards));
    }
  };

  // Reset the game
  const resetGame = () => {
    setClickedCards([]);
    setScoreState(0);
    setScore(0);
    setShuffledCards(shuffleArray(cards));
  };

  return (
    <div className="game-board">
      <div className="card-grid">
        {shuffledCards.map((card) => (
          <div
            className="card"
            key={card.id}
            onClick={() => handleCardClick(card.id)}
          >
            <img src={card.img} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
