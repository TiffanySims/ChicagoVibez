import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalProvider";
import Details from "./Details";

function Listings() {
  const { state, change } = useContext(GlobalContext);

  //default details page
  const [details, setDetails] = useState({
    detail: {
      image: "url(../img/h3.jpeg)",
      rooms: 4,
      bathrooms: 3,
      price: 280000,
      floorSpace: 1600,
    },
  });
  function loop() {
    //loop through listings
    const data = state.filteredData;
    if (data === undefined || data === 0) {
      return "Sorry your filter did not match any listings";
    }

    return data.map((item, index) => {
      return (
        <div className='col-md-2' key={index}>
          <div className='listing' id='listing'>
            <div
              className='listing-img'
              style={{
                backgroundImage: `${item.image}`,
                backgroundSize: "cover",
              }}
            >
              <span className='address'>{item.address}</span>
              <div className='details'>
                <div className='col-md-3'>
                  <div className='user-img'></div>
                </div>
                <div className='col-md-9'>
                  <div className='user-details'>
                    <span className='user-name'> {item.name}</span>
                  </div>
                  <div className='listing-details'>
                    <div className='floor-space'>
                      {" "}
                      <i className='far fa-square' aria-hidden='true' />{" "}
                      <span>{item.floorSpace} ft&sup2;</span>{" "}
                    </div>
                    <div className='bedrooms'>
                      <i className='fa fa-bed' aria-hidden='true' />
                      <span>{item.rooms}</span>
                    </div>
                    <div className='bathrooms'>
                      <i className='fa fa-bath' aria-hidden='true' />
                      <span>{item.bathrooms}</span>
                    </div>
                  </div>
                  <a
                    href='#popup'
                    className='view-btn'
                    onClick={() => setDetails({ detail: item })}
                  >
                    View Property
                  </a>
                </div>
              </div>
            </div>
            <div className='bottom-info'>
              <span className='price'>${item.price}</span>
              <span className='location'>
                <i className='fa fa-map-marker'></i>
                {item.city}, {item.state}
              </span>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section id='listings'>
      <section className='search-area'>
        <input
          type='text'
          name='search'
          onChange={change}
          placeholder='Search'
        />
      </section>
      <section className='sortby-area'>
        <div className='results'>{state.filteredData.length} results found</div>
        <div className='sort-options'>
          <select name='sortby' className='sortby' onChange={change}>
            <option value='price-des'> Lowest Price</option>

            <option value='price-asc'> Highest Price</option>
          </select>
          <a href='#filter' className='filter__toggle'>
            Filter
          </a>
          <div className='view'></div>
        </div>
      </section>
      <section className='listings-results'>{loop()}</section>
      <Details state={details.detail} />
    </section>
  );
}
export default Listings;
