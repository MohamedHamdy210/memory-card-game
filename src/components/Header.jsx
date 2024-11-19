export default function Header({ score, highScore }) {
  return (
    <header>
      <h1>Ben 10: Memory Card Game</h1>
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </header>
  );
}
