import React from "react";

const Details = (props) => {
  return (
    <div className='popup' id='popup'>
      <a href='#listings' className='popup__close'>
        <i className='fa fa-times' aria-hidden='true'></i>
      </a>
      <div className='popup__content'>
        <div className='popup__left'>
          <div
            className='popup__image'
            style={{
              backgroundImage: `${props.state.image}`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className='popup__right'>
          <div className='popup__info'>
            <p className='popup__info--item cost'>
              ${props.state.price}
              <span> |</span>
            </p>
            <p className='popup__info--item'>
              {props.state.rooms}
              <span>bd |</span>
            </p>
            <p className='popup__info--item'>
              {props.state.bathrooms}
              <span>ba |</span>
            </p>
            <p className='popup__info--item'>
              {props.state.floorSpace}
              <span> Square Feet</span>
            </p>
            <p>{props.state.address}</p>
          </div>
          <div className='popup__buttons'>
            <a href='#' className='popup__btn'>
              Request a tour
            </a>
            <a href='#' className='popup__btn apply'>
              Request to apply
            </a>
          </div>
          <hr />
          <h2 className='popup__heading'>Rental facts and features</h2>
          <ul className='amenities__list'>
            <li className='amenities__item'>
              <i className='fa fa-calendar' aria-hidden='true'></i>
              <h4 className='amenities__item--heading'>Available: </h4>
              <p className='amenities__item--paragraph'>
                {props.state.dateAvailable}
              </p>
            </li>
            <li className='amenities__item'>
              <i className='fa fa-home' aria-hidden='true'></i>
              <h4 className='amenities__item--heading'>Type: </h4>
              <p className='amenities__item--paragraph'>
                {props.state.homeType}
              </p>
            </li>
            <li className='amenities__item'>
              <i className='fa fa-thermometer-full' aria-hidden='true'></i>
              <h4 className='amenities__item--heading'>Cooling: </h4>
              <p className='amenities__item--paragraph'>
                {props.state.cooling}
              </p>
            </li>
            <li className='amenities__item'>
              <i className='fa fa-paw' aria-hidden='true'></i>
              <h4 className='amenities__item--heading'>Pets: </h4>
              <p className='amenities__item--paragraph'>{props.state.pets}</p>
            </li>
            <li className='amenities__item'>
              <i className='fa fa-car' aria-hidden='true'></i>
              <h4 className='amenities__item--heading'>Parking: </h4>
              <p className='amenities__item--paragraph'>
                {props.state.parking}
              </p>
            </li>
            <li className='amenities__item'>
              <i className='fa fa-plug' aria-hidden='true'></i>
              <h4 className='amenities__item--heading'>Laundry: </h4>
              <p className='amenities__item--paragraph'>
                {props.state.laundry}
              </p>
            </li>
            <li className='amenities__item'>
              <i className='fa fa-key' aria-hidden='true'></i>

              <h4 className='amenities__item--heading'>Deposit/fees: </h4>
              <p className='amenities__item--paragraph'>
                {props.state.deposit}
              </p>
            </li>
          </ul>
          <div className='popup__contact'>
            <a href='#' className='popup__btn '>
              Contact Realtor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
