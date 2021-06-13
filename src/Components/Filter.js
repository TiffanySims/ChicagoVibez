import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalProvider";

function Filter() {
  const { state, populateAction, change } = useContext(GlobalContext);

  useEffect(() => {
    populateAction();
  }, []);

  function cities() {
    if (state.populateFormsData.cities !== undefined) {
      let { cities } = state.populateFormsData;

      return cities.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  function homeType() {
    if (state.populateFormsData.homeType !== undefined) {
      let { homeType } = state.populateFormsData;

      return homeType.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  function bedrooms() {
    if (state.populateFormsData.bedrooms !== undefined) {
      let { bedrooms } = state.populateFormsData;

      return bedrooms.map((item) => {
        return (
          <option key={item} value={item}>
            {item}+ BR
          </option>
        );
      });
    }
  }

  function bathrooms() {
    if (state.populateFormsData.bathrooms !== undefined) {
      let { bathrooms } = state.populateFormsData;

      return bathrooms.map((item) => {
        return (
          <option key={item} value={item}>
            {item}+{" "}
          </option>
        );
      });
    }
  }

  return (
    <section id='filter'>
      <label htmlFor='city'>City</label>
      <select name='city' className='filters neigboorhood' onChange={change}>
        <option value='all'>All</option>
        {cities()}
      </select>
      <label htmlFor='homeType'>HomeType</label>
      <select name='homeType' className='filters home_type' onChange={change}>
        <option value='all'>All</option>
        {homeType()}
      </select>
      <label htmlFor='bedrooms'>Bedrooms</label>
      <select name='rooms' className='filters bedrooms' onChange={change}>
        {bedrooms()}
      </select>
      <label htmlFor='bathrooms'>Bathrooms</label>

      <select name='bathrooms' className='filters bathrooms' onChange={change}>
        {bathrooms()}
      </select>

      <div className='filters price'>
        <span className='title'>Price</span>
        <input
          type='text'
          name='min_price'
          className='min-price'
          onChange={change}
          value={state.min_price}
        />
        <input
          type='text'
          name='max_price'
          className='max-price'
          onChange={change}
          value={state.max_price}
        />
      </div>

      <div className='filters floor-space'>
        <span className='title'>Floor Space</span>
        <input
          type='text'
          name='min_floor_space'
          className='min-floor-space'
          onChange={change}
          value={state.min_floor_space}
        />
        <input
          type='text'
          name='max_floor_space'
          className='max-floor-space'
          onChange={change}
          value={state.max_floor_space}
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
            onChange={change}
          />
        </label>
        <label htmlFor='extras'>
          <span>Finished Basement</span>
          <input
            name='finished_basement'
            value='finished_basement'
            type='checkbox'
            onChange={change}
          />
        </label>
        <label htmlFor='extras'>
          <span>3 Car Garage</span>
          <input
            name='garage'
            value='garage'
            type='checkbox'
            onChange={change}
          />
        </label>
      </div>
      <div className='filter__close'>
        <a href='#listings'>Close</a>
      </div>
    </section>
  );
}

export default Filter;
