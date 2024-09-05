// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickedEmojiItem} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    clickedEmojiItem(id)
  }

  return (
    <li>
      <button className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} className="img" alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
