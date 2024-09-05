// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameIsProgress} = props

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="titles-headings">Emoji Game</h1>
      </div>
      {isGameIsProgress && (
        <div className="score-containers">
          <p className="titles-headings-score">Score: {currentScore}</p>
          <p className="titles-headings-Top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
