import React, { Component } from "react";
import Navbar from "./Navbar";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  handleClick = () => {};
  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <Navbar />

        <div className='hero'>
          <div className='hero__heading'>
            <h1>Home has never been more important</h1>
          </div>
          <div className='hero__search'>
            <select
              name='city'
              text='search'
              value={this.props.globalState.city}
              onChange={this.props.change}
              placeholder='Search'
            >
              <option></option>
              <option>Chicago</option>
              <option>Aurora</option>
              <option>Naperville</option>
              <option>Joliet</option>
              <option>Springfield</option>
            </select>
            <a href='#listings'>Search</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
