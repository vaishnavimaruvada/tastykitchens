import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import RestaurantDetailsRoute from './components/RestaurantDetailsRoute'
import ProtectedRoute from './components/ProtectedRoute'
import CartRoute from './components/CartRoute'
import NotFound from './components/NotFoundRoute/index'
import './App.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginRoute} />
        <ProtectedRoute exact path="/" component={HomeRoute} />
        <ProtectedRoute
          exact
          path="/restaurant/:id"
          component={RestaurantDetailsRoute}
        />
        <ProtectedRoute exact path="/cart" component={CartRoute} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    )
  }
}

export default App
