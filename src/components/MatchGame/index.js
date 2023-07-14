import {Component} from 'react'

import TabTitle from '../TabTitle'

import TabItems from '../TabItems'

import GameOver from '../GameOver'

class MatchGame extends Component {
  state = {
    imgUrlId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    category: 'FRUIT',
    score: 0,
    seconds: 60,
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {seconds} = this.state
    if (seconds === 0) {
      clearInterval(this.timerId)
    } else {
      this.setState(prev => ({seconds: prev.seconds - 1}))
    }
  }

  onTabListId = id => {
    this.setState({category: id})
  }

  onChangeImg = id => {
    const {imgUrlId} = this.state
    const {imagesList} = this.props
    if (imgUrlId === id) {
      const randomIndex = Math.ceil(Math.random() * imagesList.length)
      const randomImgId = imagesList[randomIndex].id
      console.log(randomImgId)
      this.setState(prev => ({score: prev.score + 1, imgUrlId: randomImgId}))
    }
  }

  onPlayAgain = () => {
    this.setState({
      score: 0,
      seconds: 60,
      imgUrlId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
      category: 'FRUIT',
    })
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {imgUrlId, category, score, seconds} = this.state
    const filteredimg = imagesList.filter(each => each.id === imgUrlId)
    const filteredtabItems = imagesList.filter(
      each => each.category === category,
    )
    console.log(imgUrlId)
    return (
      <div className="">
        <div className="">
          <img
            className="website_logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
          <div className="">
            <p className="">score:{score}</p>
            <div className="">
              <img
                className=""
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p className="">{seconds} sec</p>
            </div>
          </div>
        </div>
        <div className="">
          {seconds !== 0 && (
            <img
              className="filter_img"
              src={filteredimg[0].imageUrl}
              alt="match"
            />
          )}
          <ul className="TabCategory_ul">
            {seconds !== 0 &&
              tabsList.map(each => (
                <TabTitle
                  details={each}
                  key={each.tabId}
                  isTrue={category === each.tabId}
                  onTabListId={this.onTabListId}
                />
              ))}
          </ul>
          <ul className="tabItems_ul">
            {seconds !== 0 &&
              filteredtabItems.map(each => (
                <TabItems
                  details={each}
                  key={each.id}
                  onChangeImg={this.onChangeImg}
                />
              ))}
          </ul>
          <ul>
            {seconds === 0 && (
              <GameOver score={score} onPlayAgain={this.onPlayAgain} />
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default MatchGame
