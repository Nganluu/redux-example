import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {updateUser} from './actions/user-action'
import {connect} from 'react-redux'
class App extends Component {
  onUpdateUser = () => {
    this.props.updateUser()
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div onClick={this.onUpdateUser}>Show all</div>
      </div>
    );
  }
}
const mapStatetoProps = (state, props) => {
  return {
    products: state.products,
    userMail: state.userMail,
  }

}

const mapActiontoProps = (dispatch) => ({
  updateUser: ()=> dispatch(updateUser)
})
export default connect(mapStatetoProps, mapActiontoProps)(App);
