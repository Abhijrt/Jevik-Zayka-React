import React, { Component } from 'react';
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
    this.state = {
      progress: true,
    };
  }

  handleOnClick = () => {
    this.setState({
      progress: !this.state.progress,
    });
  };

  render() {
    const { progress } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          {progress ? (
            <div className="blank-progress-bar"></div>
          ) : (
            <ProgressBar />
          )}
          <div
            style={{
              textAlign: 'center',
              cursor: 'pointer',
              fontSize: '1.5rem',
            }}
            onClick={this.handleOnClick}
          >
            Click here
          </div>
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

export default App;
