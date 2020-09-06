import React, { Component } from "react";
import Listings from "./Components/Listings";
import Filter from "./Components/Filter";
import Footer from "./Components/Footer";
import "./App.css";
import data from "./Reducers/ListingsData";
import Header from "./Components/Header";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Tiffany",

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
      data,
      filteredData: data,
      populateFormsData: "",
      sortby: "price-dsc",
      search: "",
    };
    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
  }

  componentWillMount() {
    let data = this.state.data.sort((a, b) => {
      return a.price - b.price;
    });
    this.setState({
      data,
    });
  }
  change(event) {
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.filteredData();
      }
    );
  }

  filteredData() {
    let newData = this.state.data.filter((item) => {
      return (
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.floorSpace >= this.state.min_floor_space &&
        item.floorSpace <= this.state.max_floor_space &&
        item.rooms >= this.state.rooms &&
        item.bathrooms >= this.state.bathrooms
      );
    });
    if (this.state.city !== "all") {
      newData = newData.filter((item) => {
        return item.city === this.state.city;
      });
    }
    if (this.state.homeType !== "all") {
      newData = newData.filter((item) => {
        return item.homeType === this.state.homeType;
      });
    }

    if (this.state.swimming_pool !== false) {
      newData = newData.filter((item) => {
        return item.swimming_pool === this.state.swimming_pool;
      });
    }

    if (this.state.garage !== false) {
      newData = newData.filter((item) => {
        return item.garage === this.state.garage;
      });
    }

    if (this.state.finished_basement !== false) {
      newData = newData.filter((item) => {
        return item.finished_basement === this.state.finished_basement;
      });
    }

    if (this.state.sortby === "price-dsc") {
      newData = newData.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (this.state.sortby === "price-asc") {
      newData = newData.sort((a, b) => {
        return b.price - a.price;
      });
    }

    if (this.state.search !== "") {
      newData = newData.filter((item) => {
        let city = item.city.toLowerCase();
        let searchText = this.state.search.toLowerCase();
        let n = city.match(searchText);

        if (n != null) {
          return true;
        }
      });
    }
    this.setState({
      filteredData: newData,
    });
  }

  populateForms() {
    //city

    let cities = this.state.data.map((item) => {
      return item.city;
    });
    cities = new Set(cities);
    cities = [...cities];

    cities = cities.sort();

    //homeType

    let homeType = this.state.data.map((item) => {
      return item.homeType;
    });
    homeType = new Set(homeType);
    homeType = [...homeType];
    homeType = homeType.sort();

    //bedrooms

    let bedrooms = this.state.data.map((item) => {
      return item.rooms;
    });
    bedrooms = new Set(bedrooms);
    bedrooms = [...bedrooms];
    bedrooms = bedrooms.sort();

    let bathrooms = this.state.data.map((item) => {
      return item.bathrooms;
    });
    bathrooms = new Set(bathrooms);
    bathrooms = [...bathrooms];

    this.setState({
      populateFormsData: {
        cities,
        homeType,
        bedrooms,
        bathrooms,
      },
    });
  }

  render() {
    return (
      <div>
        <Header change={this.change} globalState={this.state} />

        <section id='content-area'>
          <Filter
            change={this.change}
            globalState={this.state}
            populateAction={this.populateForms}
          />

          <Listings
            data={this.state.filteredData}
            change={this.change}
            globalState={this.state}
          />
        </section>
        <Footer />
      </div>
    );
  }
}
