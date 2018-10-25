import React , {Component} from 'react';
import update from 'immutability-helper'
import math from 'mathjs'
import Button from './components/Button';
import Buttons from './components/Buttons';
import Display from './components/Display';

class App extends Component {
  constructor() {
    super()
    this.state = { operations: [] }
  }



  calculateOperations = () => {
    let result = this.state.operations.join('')
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      this.setState({
        operations: [result],
      })
    }
  }


  handleClick = e => {
    const value = e.target.getAttribute('data-value')
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        })
        break
      case 'equal':
        this.calculateOperations()
        break
      default:
        const newOperations = update(this.state.operations, {
          $push: [value],
        })
        this.setState({
          operations: newOperations,
        })
        break
    }
  }
  render() {
    return (
      <div className="App">
        <Display data={this.state.operations} />
        <Buttons handleClick={this.handleClick}>
        </Buttons>
      </div>
    )
  }
}

export default App;
