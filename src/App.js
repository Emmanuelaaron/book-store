import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Categories from './componets/categories';
import Books from './componets/books';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/">
            <Books />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
