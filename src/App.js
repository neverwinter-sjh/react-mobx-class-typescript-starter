import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { observer, inject } from 'mobx-react';
import Sample from 'components/Sample';
import Home from 'components/Home';
import About from 'components/About';

@inject('store', 'routing')
@observer
class App extends Component {
  render() {
    const { store } = this.props;
    console.log(store.color);
    const bgColor = store.color.join(',');
    const style = {
      backgroundColor: `rgba(${bgColor})`
    };

    const { location, push, goBack } = this.props.routing;

    return (
      <div>
        <h1>숫자: {store.number}</h1>
        <h1>컬러: <span style={style}>{bgColor}</span></h1>
        <Sample />
        <hr />
        <span>Current pathname: {location.pathname}</span>
        <hr />
        <button onClick={() => push('/')}>Home</button>
        <button onClick={() => push('/about')}>About</button>
        <button onClick={() => goBack()}>Go Back</button>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;