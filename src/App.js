import Navbar from './Navbar';
import Home from './Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>


            {/* Use of 'exact' means React will only load this endpoint if it's an exact match, vs
          scanning through the route and matching it based on what the endpoint contains. Here, '/' would match '/create'
          because they both have the slash - all the home endpoint needs is the slash, so any page with the slash in the endpoint
          would load the Home page, which we don't want. That's where the 'exact' keyword comes in handy. */}
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
