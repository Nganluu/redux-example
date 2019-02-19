import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {updateUser} from './actions/user-action'
import {connect} from 'react-redux'
class App extends Component {
  state = {
    mail: ''
  }

  onUpdateUser = () => {
    this.props.updateUser(this.state.mail);
  }

  changeMail(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.mail);
  }
  render() {
    console.log(this.props);
    const user = this.props.userMail;
    console.log(user);
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
        <input type="text" name="mail" onChange={this.changeMail.bind(this)}></input>
        <button onClick={this.onUpdateUser}>Show User Infor</button>
        {user.map(({email}) => (
          <p key={email}>{email}</p>
        ))}
    
      </div>
    );
  }
}
const mapStatetoProps = (state, props) => {
  return {
    products: state.products,
    userMail: state.user,
  }

}

// const mapActiontoProps = (dispatch) => ({
//   updateUser: ()=> dispatch(updateUser())
// })
export default connect(mapStatetoProps, {updateUser})(App);
