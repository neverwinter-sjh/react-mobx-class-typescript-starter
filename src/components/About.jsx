import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store', 'routing')
@observer
class About extends Component {
  render() {
    return (
      <div>About, 페이지</div>
    )
  }
}

export default About;