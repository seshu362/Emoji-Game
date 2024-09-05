/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    isGameIsProgress: true,
    clickedEmojis: [],
    topScore: 0,
  }

  resultCardWinOrLose = () => {
    const {clickedEmojis} = this.state
    const {emojisList} = this.props
    const isWon = clickedEmojis.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojis.length}
        resetGame={this.resetGame}
      />
    )
  }

  finishGameAndTopScoreSet = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameIsProgress: false})
  }

  clickedEmojiItem = id => {
    const {clickedEmojis} = this.state
    const {emojisList} = this.props
    const isClickedEmojiPresent = clickedEmojis.includes(id)
    const lengthIsClickedEmoji = clickedEmojis.length

    if (isClickedEmojiPresent) {
      this.finishGameAndTopScoreSet(lengthIsClickedEmoji)
    } else {
      if (emojisList.length - 1 === lengthIsClickedEmoji) {
        this.finishGameAndTopScoreSet(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  getRandomEmojiLists = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiLists = () => {
    const shuffledEmojisList = this.getRandomEmojiLists()

    return (
      <ul className="emoji-list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickedEmojiItem={this.clickedEmojiItem}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    this.setState({clickedEmojis: [], isGameIsProgress: true})
  }

  render() {
    const {isGameIsProgress, clickedEmojis, topScore} = this.state
    console.log(clickedEmojis)
    return (
      <div className="bg-container">
        <NavBar
          currentScore={clickedEmojis.length}
          topScore={topScore}
          isGameIsProgress={isGameIsProgress}
        />
        <div className="emoji-game-container">
          {isGameIsProgress
            ? this.renderEmojiLists()
            : this.resultCardWinOrLose()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
