import React, { Component } from "react";
import Details from "./Details";

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {
        image: "url(../img/h3.jpeg)",
        rooms: 4,
        bathrooms: 3,
        price: 280000,
        floorSpace: 1600,
      },
    };
    this.loop = this.loop.bind(this);
  }

  loop() {
    const { data } = this.props;

    if (data === undefined || data === 0) {
      return "Sorry your filter did not match any listings";
    }

    return data.map((d, index) => {
      return (
        <div className='col-md-2' key={index}>
          <div className='listing' id='listing'>
            <div
              className='listing-img'
              style={{
                backgroundImage: `${d.image}`,
                backgroundSize: "cover",
              }}
            >
              <span className='address'>{d.address}</span>
              <div className='details'>
                <div className='col-md-3'>
                  <div className='user-img'></div>
                </div>
                <div className='col-md-9'>
                  <div className='user-details'>
                    <span className='user-name'> {d.name}</span>
                  </div>
                  <div className='listing-details'>
                    <div className='floor-space'>
                      {" "}
                      <i className='far fa-square' aria-hidden='true' />{" "}
                      <span>{d.floorSpace} ft&sup2;</span>{" "}
                    </div>
                    <div className='bedrooms'>
                      <i className='fa fa-bed' aria-hidden='true' />
                      <span>{d.rooms}</span>
                    </div>
                    <div className='bathrooms'>
                      <i className='fa fa-bath' aria-hidden='true' />
                      <span>{d.bathrooms}</span>
                    </div>
                  </div>
                  <a
                    href='#popup'
                    className='view-btn'
                    onClick={() => this.setState({ detail: d })}
                  >
                    View Property
                  </a>
                </div>
              </div>
            </div>
            <div className='bottom-info'>
              <span className='price'>${d.price}</span>
              <span className='location'>
                <i className='fa fa-map-marker'></i>
                {d.city}, {d.state}
              </span>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section id='listings'>
        <section className='search-area'>
          <input
            type='text'
            name='search'
            onChange={this.props.change}
            placeholder='Search'
          />
        </section>
        <section className='sortby-area'>
          <div className='results'>
            {" "}
            {this.props.globalState.filteredData.length} results found
          </div>
          <div className='sort-options'>
            <select
              name='sortby'
              className='sortby'
              onChange={this.props.change}
            >
              <option value='price-des'> Lowest Price</option>

              <option value='price-asc'> Highest Price</option>
            </select>
            <a href='#filter' className='filter__toggle'>
              Filter
            </a>
            <div className='view'></div>
          </div>
        </section>
        <section className='listings-results'>{this.loop()}</section>
        <Details state={this.state.detail} />
      </section>
    );
  }
}

export default Listings;
