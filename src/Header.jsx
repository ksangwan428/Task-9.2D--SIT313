import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      authenticated: false
    };
  }

  componentDidMount() {
    const loggedIn = localStorage.getItem("authenticated");

    if(loggedIn === 'true'){
      this.setState({
        authenticated: true
      });
    }
 }

 logOutClick = () => {
  this.setState({authenticated: false});
  localStorage.setItem("authenticated", false)
};

  render() {

    return (

      <Menu>

        <Link to="/"><Menu.Item><h1>Dev @ Deakin</h1></Menu.Item></Link>

        
        <Input className="headerSearch" icon='search' placeholder='Search...' />
             

        <Menu.Menu position="right">

        <Menu.Item 
          name='findQuestion'
        >
          <Link to="/find_question">Find Question</Link>
        </Menu.Item>

        <Menu.Item 
          name='posts'
        >
          <Link to="/postpage">Post</Link>
          
        </Menu.Item>

        <Menu.Item 
          name='plans'
        >
          <Link to="/plan">Plans</Link>
          
        </Menu.Item>

        <Menu.Item 
          name='login'
        >
        {this.state.authenticated === true && <span onClick={this.logOutClick}>Log Out</span>}
        {this.state.authenticated === false && <Link to="/login">Login</Link>}
          
        </Menu.Item>

        </Menu.Menu>
      </Menu>

    )
  }
} export default Header
