import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.scss';
// importing different component from component directory
import {
  Home,
  Navbar,
  Footer,
  SignUp,
  SignIn,
  ContactUs,
  AboutUs,
  ProgressBar,
} from './';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error404 from './Error/Error404';

//rendering app component
//using router to perform routing
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // rendering main component based on different routes
  render() {
    const { isLoading } = this.props;
    return (
      <Router>
        <div className="App">
          <div className="blank-nav"></div>
          <Navbar />
          <div className="blank-progress-bar"></div>
          {isLoading && <ProgressBar />}
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
          <div className="padded-div"></div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.progress.isLoading,
  };
}

export default connect(mapStateToProps)(App);
