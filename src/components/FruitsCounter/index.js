import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    count1: 0,
    count2: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="main-container">
        <div className="card">
          <h1>
            Bob ate {count1} mangoes {count2} bananas
          </h1>
          <div className="images-container">
            <div className="img-1-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img"
                alt="mango"
              />
              <button
                type="button"
                className="button"
                onClick={this.onIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="img-2-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img"
                alt="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.onDecrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
