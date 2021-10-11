import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './component/Not Math/NotFound';
import Review from './component/Review/Review';

function App() {

  return (
    <div>
      <Header> </Header>
      <Router>
        <Switch>
        <Route axact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path ="*">
              <NotFound></NotFound>
          </Route>
          <Route path="/review">
              <Review></Review>
          </Route>
        </Switch>
      </Router>
      </div>
    
  );
}

export default App;
