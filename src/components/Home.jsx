import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store', 'routing')
@observer
class Home extends Component {
  render() {
    return (
      <div>홈, 스위트 홈</div>
    )
  }
}

export default Home;