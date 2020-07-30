import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Sample extends Component {
  @observable test = 5;
  @action setTest = () => {
    this.test += 1;
  }

  setRandomColor = () => {
    const { store } = this.props;
    const color = [
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200)
    ];

    store.setColor(color);
  }

  increaseNumber = () => {
    const { store } = this.props;
    store.increase();
  }

  decreaseNumber = () => {
    const { store } = this.props;
    store.decrease();
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.increaseNumber}>+1</button>
        <button type="button" onClick={this.decreaseNumber}>-1</button>
        <button type="button" onClick={this.setRandomColor}>Random Color</button>
        <br />
        <p>{this.test}</p>
        <button type="button" onClick={this.setTest}>+1</button>
      </div>
    );
  }
}

export default Sample;