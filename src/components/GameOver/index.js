import './index.css'

const GameOver = props => {
  const {score, onPlayAgain} = props

  const Reset = () => {
    onPlayAgain()
  }

  return (
    <div className="GameOver_container">
      <img
        className="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p>YOUR SCORE</p>
      <p>{score}</p>
      <button className="Play_again_btn" type="button" onClick={Reset}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}
export default GameOver
