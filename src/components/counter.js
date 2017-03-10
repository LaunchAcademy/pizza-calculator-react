import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.incrementCounter = this.incrementCounter.bind(this)
  }
  incrementCounter(){
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1>The count is: {this.state.count}</h1>
        <a onClick={this.incrementCounter}>+</a>
      </div>
    )
  }
}
