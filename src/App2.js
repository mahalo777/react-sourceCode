import { useEffect, useState, React, useLayoutEffect, useContext, createContext, useCallback, useTransition, Component } from 'react';

// 测试setState
export default class App extends Component {
  state = {
    count: 0,
  };

  changeState = () => {
    const newCount = this.state.count + 1;
    this.setState({
      count: this.state.count + 1,
    });
    if (newCount === this.state.count) {
      console.log('ag-同步执行render',);
    } else {
      console.log('ag-异步执行render');
    }
  };

  changeState2 = () => {
    const newCount = this.state.count + 1;
    Promise.resolve().then(() => {
      this.setState({
        count: this.state.count + 1,
      });
      if (newCount === this.state.count) {
        console.log('ag-同步执行render',);
      } else {
        console.log('ag-异步执行render');
      }
    });
  };

  render() {
    return (
      <div>
        <p>当前count={this.state.count}</p>
        <button onClick={this.changeState}>异步+1</button>
        <button onClick={this.changeState2}>同步+1</button>
      </div>
    );
  }
}