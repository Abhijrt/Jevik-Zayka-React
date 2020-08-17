import React, { Component } from 'react';
import '../assets/css/App.css';
// importing different component from component directory
import { Home, Navbar, Footer, SignUp, SignIn, ContactUs, AboutUs } from './';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error404 from './Error/Error404';

//rendering app component
//using router to perform routing
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/contact" component={ContactUs}></Route>
            <Route
              path="/about"
              render={(props) => {
                return <AboutUs {...props} name={'Dheeraj'} />;
              }}
            ></Route>
            <Route component={Error404}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
