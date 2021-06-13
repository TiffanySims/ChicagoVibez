import React, { useState, createContext, useEffect } from "react";

import data from "../Reducers/ListingsData";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [state, setState] = useState({
    name: "",
    city: "all",
    homeType: "all",
    rooms: 0,
    bathrooms: 0,
    min_price: 0,
    max_price: 10000000,
    min_floor_space: 0,
    max_floor_space: 40000,
    finished_basement: false,
    swimming_pool: false,
    garage: false,
    data: data,
    filteredData: data,
    populateFormsData: "",
    sortby: "price-dsc",
    search: "",
  });
  useEffect(() => {
    filteredData();
  }, [
    state.city,
    state.homeType,
    state.rooms,
    state.bathrooms,
    state.min_price,
    state.max_price,
    state.min_floor_space,
    state.max_floor_space,
    state.finished_basement,
    state.swimming_pool,
    state.garage,
    state.sortby,
    state.search,
  ]);

  function change(event) {
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  function filteredData() {
    let newData = state.data.filter((item) => {
      return (
        item.price >= state.min_price &&
        item.price <= state.max_price &&
        item.floorSpace >= state.min_floor_space &&
        item.floorSpace <= state.max_floor_space &&
        item.rooms >= state.rooms &&
        item.bathrooms >= state.bathrooms
      );
    });
    if (state.city !== "all") {
      newData = newData.filter((item) => {
        return item.city === state.city;
      });
    }
    if (state.homeType !== "all") {
      newData = newData.filter((item) => {
        return item.homeType === state.homeType;
      });
    }

    if (state.swimming_pool !== false) {
      newData = newData.filter((item) => {
        return item.swimming_pool === state.swimming_pool;
      });
    }

    if (state.garage !== false) {
      newData = newData.filter((item) => {
        return item.garage === state.garage;
      });
    }

    if (state.finished_basement !== false) {
      newData = newData.filter((item) => {
        return item.finished_basement === state.finished_basement;
      });
    }

    if (state.sortby === "price-dsc") {
      newData = newData.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (state.sortby === "price-asc") {
      newData = newData.sort((a, b) => {
        return b.price - a.price;
      });
    }

    if (state.search !== "") {
      newData = newData.filter((item) => {
        let city = item.city.toLowerCase();
        let searchText = state.search.toLowerCase();
        let isMatch = city.match(searchText);

        if (isMatch != null) {
          return true;
        }
      });
    }

    setState((prevState) => ({ ...prevState, filteredData: newData }));
  }

  function populateForms() {
    // Populate filter
    //city

    let cities = state.data.map((item) => {
      return item.city;
    });
    cities = new Set(cities);

    // turns set into array
    cities = [...cities];

    cities = cities.sort();

    //homeType

    let homeType = state.data.map((item) => {
      return item.homeType;
    });
    homeType = new Set(homeType);
    homeType = [...homeType];
    homeType = homeType.sort();

    //bedrooms

    let bedrooms = state.data.map((item) => {
      return item.rooms;
    });
    bedrooms = new Set(bedrooms);
    bedrooms = [...bedrooms];
    bedrooms = bedrooms.sort();

    let bathrooms = state.data.map((item) => {
      return item.bathrooms;
    });
    bathrooms = new Set(bathrooms);
    bathrooms = [...bathrooms];

    setState((prevState) => ({
      ...prevState,
      populateFormsData: {
        cities,
        homeType,
        bedrooms,
        bathrooms,
      },
    }));
  }

  return (
    <GlobalContext.Provider
      value={{
        state: state,
        change,
        populateAction: populateForms,
        filteredData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
