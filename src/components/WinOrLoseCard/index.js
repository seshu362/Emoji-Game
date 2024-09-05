// Write your code here.
import './index.css'

const WIN_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, resetGame} = props
  const gameSatus = isWon ? 'You Won' : 'You Lose'
  const resultImage = isWon ? WIN_IMAGE : LOSE_IMAGE
  const scoreName = isWon ? 'Best Score' : 'Score'

  const onClickResetGame = () => {
    resetGame()
  }

  return (
    <div className="win-bg-container">
      <div className="details-container">
        <h1 className="heading">{gameSatus}</h1>
        <p className="best-score-para">{scoreName}</p>
        <p className="score">{score}/12</p>
        <button className="button" onClick={onClickResetGame}>
          Play Again
        </button>
      </div>
      <img src={resultImage} className="won-img" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
