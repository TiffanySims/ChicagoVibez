import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className='footer' id='footer'>
        <div className='footer__left'>
          <h3 className='footer__heading'>Popular Cities</h3>
          <ul className='footer__list'>
            <li className='footer__list--item'>Chicago</li>
            <li className='footer__list--item'>New York City</li>
            <li className='footer__list--item'>Los Angeles</li>
            <li className='footer__list--item'>San Francisco</li>
            <li className='footer__list--item'>Las Vegas</li>
            <li className='footer__list--item'>Atlanta</li>
            <li className='footer__list--item'>Baltimore</li>
          </ul>
        </div>
        <div className='footer__right'>
          <p className='footer__paragraph'>
            Submit your email address and we will have an agent contact you
            within 24 hours.
          </p>
          <input
            className='footer__input'
            type='text'
            placeholder='Email Address'
          />
          <a href='#'>Submit</a>
        </div>
      </div>
    );
  }
}
export default Contact;
