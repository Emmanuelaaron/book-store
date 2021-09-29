import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Categories from './componets/categories';
import Books from './componets/books';
import Header from './componets/Header';
import './styles/App.css';
import store from './redux/cofigureStore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Header />
        <Provider store={store}>
          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/">
              <Books />
            </Route>
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default App;
