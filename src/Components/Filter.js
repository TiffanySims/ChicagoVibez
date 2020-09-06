import React, { Component } from "react";

class Filter extends Component {
  constructor() {
    super();
    this.cities = this.cities.bind(this);
    this.homeType = this.homeType.bind(this);
    this.bedrooms = this.bedrooms.bind(this);
  }
  componentWillMount() {
    this.props.populateAction();
  }

  cities() {
    if (this.props.globalState.populateFormsData.cities !== undefined) {
      let { cities } = this.props.globalState.populateFormsData;

      return cities.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  homeType() {
    if (this.props.globalState.populateFormsData.homeType !== undefined) {
      let { homeType } = this.props.globalState.populateFormsData;

      return homeType.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms !== undefined) {
      let { bedrooms } = this.props.globalState.populateFormsData;

      return bedrooms.map((item) => {
        return (
          <option key={item} value={item}>
            {item}+ BR
          </option>
        );
      });
    }
  }

  bathrooms() {
    if (this.props.globalState.populateFormsData.bathrooms !== undefined) {
      let { bathrooms } = this.props.globalState.populateFormsData;

      return bathrooms.map((item) => {
        return (
          <option key={item} value={item}>
            {item}+{" "}
          </option>
        );
      });
    }
  }

  render() {
    return (
      <section id='filter'>
        <label htmlFor='city'>City</label>
        <select
          name='city'
          className='filters neigboorhood'
          onChange={this.props.change}
        >
          <option value='all'>All</option>
          {this.cities()}
        </select>
        <label htmlFor='homeType'>HomeType</label>
        <select
          name='homeType'
          className='filters home_type'
          onChange={this.props.change}
        >
          <option value='all'>All</option>
          {this.homeType()}
        </select>
        <label htmlFor='bedrooms'>Bedrooms</label>
        <select
          name='rooms'
          className='filters bedrooms'
          onChange={this.props.change}
        >
          {this.bedrooms()}
        </select>
        <label htmlFor='bathrooms'>Bathrooms</label>

        <select
          name='bathrooms'
          className='filters bathrooms'
          onChange={this.props.change}
        >
          {this.bathrooms()}
        </select>

        <div className='filters price'>
          <span className='title'>Price</span>
          <input
            type='text'
            name='min_price'
            className='min-price'
            onChange={this.props.change}
            value={this.props.globalState.min_price}
          />
          <input
            type='text'
            name='max_price'
            className='max-price'
            onChange={this.props.change}
            value={this.props.globalState.max_price}
          />
        </div>

        <div className='filters floor-space'>
          <span className='title'>Floor Space</span>
          <input
            type='text'
            name='min_floor_space'
            className='min-floor-space'
            onChange={this.props.change}
            value={this.props.globalState.min_floor_space}
          />
          <input
            type='text'
            name='max_floor_space'
            className='max-floor-space'
            onChange={this.props.change}
            value={this.props.globalState.max_floor_space}
          />
        </div>
        <span className='title'>Extras</span>
        <div className='filter extras'>
          <label htmlFor='extras'>
            <span>Swimming Pool</span>
            <input
              name='swimming_pool'
              value='swimming_pool'
              type='checkbox'
              onChange={this.props.change}
            />
          </label>
          <label htmlFor='extras'>
            <span>Finished Basement</span>
            <input
              name='finished_basement'
              value='finished_basement'
              type='checkbox'
              onChange={this.props.change}
            />
          </label>
          <label htmlFor='extras'>
            <span>3 Car Garage</span>
            <input
              name='garage'
              value='garage'
              type='checkbox'
              onChange={this.props.change}
            />
          </label>
        </div>
        <div className='filter__close'>
          <a href='#listings'>Close</a>
        </div>
      </section>
    );
  }
}

export default Filter;
