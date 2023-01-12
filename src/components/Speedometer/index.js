import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    this.setState(prevState =>
      prevState.speed < 200 ? {speed: prevState.speed + 10} : {speed: 200},
    )
  }

  onDecrement = () => {
    this.setState(prevState =>
      prevState.speed > 0 ? {speed: prevState.speed - 10} : {speed: 0},
    )
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="title"> Speedometer </h1>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="speedometer-img"
            alt="speedometer"
          />
        </div>
        <h1 className="speed-description">Speed is {speed}mph</h1>
        <p className="limit-indicator">
          Min limit is 0mph, Max limit is 200mph
        </p>
        <div className="button-container">
          <button
            className="button accelerate-button"
            onClick={this.onIncrement}
          >
            {' '}
            Accelerate{' '}
          </button>
          <button
            className="button apply-brakes-button"
            onClick={this.onDecrement}
          >
            {' '}
            Apply Brake{' '}
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
