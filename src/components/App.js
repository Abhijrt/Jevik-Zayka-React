import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as jwtDecode from 'jwt-decode';
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
  PrivateRoute,
  Verification,
  Profile,
  AdminRoute,
  VerifyEmail,
  ForgetPassword,
  AddProduct,
  Fruits,
  Vegetables,
  ProductDetail,
} from './';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { signInSuccess } from '../actions';
import Error404 from './Error/Error404';
import { getToken } from '../helpers';

//rendering app component
//using router to perform routing
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // setting up the user if user already logged in and token present in local storage
  componentDidMount() {
    const { dispatch } = this.props;
    let token = getToken();
    if (token) {
      token = jwtDecode(token);
      dispatch(signInSuccess(token, token.is_admin, token.is_verified));
    }
  }

  // rendering main component based on different routes
  render() {
    const { isLoading } = this.props;
    return (
      <Router>
        <div className="App">
          <div className="app-background">
            <div className="blank-nav"></div>
            <Navbar />
            <div className="blank-progress-bar"></div>
            {isLoading && <ProgressBar />}
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/fruits" component={Fruits}></Route>
              <Route exact path="/vegetables" component={Vegetables}></Route>
              <Route path="/signin" component={SignIn}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <PrivateRoute path="/profile" component={Profile} />
              <AdminRoute path="/add-product" component={AddProduct} />
              <Route path="/contact" component={ContactUs} />
              <Route path="/verification" component={Verification} />
              <Route path="/forgetpassword" component={ForgetPassword} />
              <Route path="/product/:product_id" component={ProductDetail} />
              <Route
                path="/verifyemail/:verification_token"
                component={VerifyEmail}
              />
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
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.alert.message,
    error: state.alert.error,
    isLoading: state.progress.isLoading,
  };
}

export default connect(mapStateToProps)(App);
