// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(previousState => {
      if (previousState.count < 200) {
        return previousState.count + 10
      } else if (previousState.count === 200) {
        return previousState.count
      }
    })
  }
  onDecrement = () => {
    this.setState(previousState => {
      if (previousState.count > 0) {
        return previousState.count - 10
      } else if (previousState.count === 0) {
        return previousState.count
      }
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="Speedometer"
        />
        <p className="para">Speed is {count}mph</p>
        <p className="para2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="container2">
          <button className="button1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button className="button2" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
