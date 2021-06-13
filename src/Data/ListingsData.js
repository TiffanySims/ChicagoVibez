const data = [
  {
    id: 1,
    name: "Nina Jones",
    date: "05/13/2019",

    address: "2034 Grand Ave",
    city: "Aurora",
    state: "IL",
    rooms: 3,
    bathrooms: 3,
    price: 420000,
    floorSpace: 2300,
    dateAvailable: "Contact Manager",
    cooling: "Central",
    parking: "2 spaces",
    pets: "Dogs and Cats",
    laundry: "Contact Manager",
    deposit: "$2,500",
    swimming_pool: true,
    finished_basement: true,
    homeType: "House",
    image: "url(../img/real.jpeg)",
  },
  {
    id: 2,
    name: "Rain Gordon",
    date: "06/30/2019",
    address: "55034 Maple Rd ",
    city: "Springfield",
    state: "IL",
    rooms: 4,
    bathrooms: 4,
    price: 536000,
    floorSpace: 2800,
    dateAvailable: "11/1",
    cooling: "Central",
    parking: "3 spaces",
    pets: "Dogs and Cats",
    laundry: "Contact Manager",
    deposit: "Contact Manager",
    garage: true,
    swimming_pool: true,
    finished_basement: true,
    homeType: "House",
    image: "url(../img/h1.jpeg)",
  },
  {
    id: 3,
    name: "Nina Jones",
    date: "07/02/2019",
    address: "19500 Perry Rd",
    city: "Naperville",
    state: "IL",
    rooms: 2,
    bathrooms: 2,
    price: 250000,
    floorSpace: 1100,
    dateAvailable: "Available Now",
    cooling: "Other",
    parking: "Off street",
    pets: "No",
    laundry: "Shared",
    deposit: "$1,800",
    homeType: "Condo",
    image: "url(../img/condo.jpeg)",
  },
  {
    id: 4,
    name: "Ken White",
    date: "07/13/2019",
    address: "10034 N MLK Blvd",
    city: "Chicago",
    state: "IL",
    rooms: 3,
    bathrooms: 2,
    price: 225000,
    floorSpace: 2000,
    dateAvailable: "Contact Manager",
    cooling: "Central",
    parking: "2 spaces",
    pets: "Dogs and Cats",
    laundry: "Contact Manager",
    deposit: "Contact Manager",
    finished_basement: true,
    homeType: "House",
    image: "url(../img/h4.jpeg)",
  },
  {
    id: 5,
    name: "Ken White",
    date: "07/20/2019",
    address: "9292 S Monroe Ave",
    city: "Chicago",
    state: "IL",
    rooms: 4,
    bathrooms: 3,
    price: 360000,
    floorSpace: 2500,
    dateAvailable: "9/26",
    cooling: "Central",
    parking: "2 spaces",
    pets: "Dogs and Cats",
    laundry: "In Unit",
    deposit: "$2,200",
    garage: true,
    finished_basement: true,
    homeType: "House",
    image: "url(../img/h2.jpeg)",
  },
  {
    id: 6,
    name: "Nina Jones",
    date: "07/23/2019",
    address: "43455 W Lafyette St",
    city: "Chicago",
    state: "IL",
    rooms: 2,
    price: 1400,
    bathrooms: 1,
    floorSpace: 1200,
    dateAvailable: "Available Now",
    cooling: "Other",
    parking: "1 space",
    pets: "No",
    laundry: "Shared",
    deposit: "$1,000",
    homeType: "Apartment",
    image: "url(../img/apt.jpeg)",
  },

  {
    id: 7,
    name: "Nina Jones",
    date: "07/23/2019",
    address: "59693 Wabash Ave",
    city: "Aurora",
    state: "IL",
    rooms: 4,
    bathrooms: 3,
    price: 280000,
    floorSpace: 1600,
    dateAvailable: "Contact Manager",
    cooling: "Central",
    parking: "2 spaces",
    pets: "Dogs and Cats",
    laundry: "Contact Manager",
    deposit: "Contact Manager",
    finished_basement: true,
    homeType: "House",
    image: "url(../img/h3.jpeg)",
  },
  {
    id: 8,
    name: "Nina Jones",
    date: "08/23/2019",
    address: "1023 Randolph St",
    city: "Chicago",
    state: "IL",
    rooms: 2,
    bathrooms: 1.5,
    price: 290000,
    floorSpace: 1400,
    dateAvailable: "Available Now",
    cooling: "Other",
    parking: "2 spaces",
    pets: "No",
    laundry: "In Unit",
    deposit: "$2,500",

    homeType: "Condo",
    image: "url(../img/h5.jpg)",
  },
  {
    id: 9,
    name: "Ken White",
    date: "08/23/2019",
    address: "1333 Cherry Lane",
    city: "Aurora",
    state: "IL",
    rooms: 2,
    bathrooms: 2,
    price: 2800,
    floorSpace: 1500,
    dateAvailable: "Available Now",
    cooling: "Contact Manager",
    parking: "2 spaces",
    pets: "No",
    laundry: "Shared",
    deposit: "Contact Manager",

    homeType: "Apartment",
    image: "url(../img/h6.jpg)",
  },
  {
    id: 10,
    name: "Nina Jones",
    date: "07/23/2019",
    address: "59693 Ogden Rd",
    city: "Naperville",
    state: "IL",
    rooms: 5,
    bathrooms: 4,
    price: 980000,
    floorSpace: 3600,
    dateAvailable: "Contact Manager",
    cooling: "Central",
    parking: "3 spaces",
    pets: "Dogs and Cats",
    laundry: "Contact Manager",
    deposit: "Contact Manager",
    homeType: "House",
    image: "url(../img/h7.jpg)",
  },
  {
    id: 11,
    name: "Rain Gordon",
    date: "09/13/2019",
    address: "14334 Paxel St",
    city: "Joliet",
    state: "IL",
    rooms: 4,
    bathrooms: 3,
    price: 690000,
    floorSpace: 2800,
    dateAvailable: "10/4",
    cooling: "Central",
    parking: "Contact Manager",
    pets: "Dogs and Cats",
    laundry: "Contact Manager",
    deposit: "Contact Manager",

    homeType: "House",
    image: "url(../img/h8.jpg)",
  },
  {
    id: 12,
    name: "Rain Gordon",
    date: "09/25/2019",
    address: "23 E Gordey Rd",
    city: "Springfield",
    state: "IL",
    rooms: 5,
    bathrooms: 4,
    price: 700000,
    floorSpace: 3400,
    dateAvailable: "11/1",
    cooling: "Central",
    parking: "Contact Manager",
    pets: "Dogs and Cats",
    laundry: "In Unit",
    deposit: "Contact Manager",
    homeType: "House",
    image: "url(../img/h9.jpg)",
  },
  {
    id: 13,
    name: "Rain Gordon",
    date: "09/25/2019",
    address: "17 W Erie Rd",
    city: "Joliet",
    state: "IL",
    rooms: 4,
    bathrooms: 4,
    price: 720000,
    floorSpace: 3400,
    dateAvailable: "10/1",
    cooling: "Central",
    parking: "2 Spaces",
    pets: "Dogs and Cats",
    laundry: "In Unit",
    deposit: "Contact Manager",
    homeType: "House",
    image: "url(../img/h10.jpg)",
  },
  {
    id: 14,
    name: "Ken White",
    date: "09/27/2019",
    address: "1200 Perry Blvd",
    city: "Springfield",
    state: "IL",
    rooms: 4,
    bathrooms: 3,
    price: 650000,
    floorSpace: 3000,
    dateAvailable: "Available Now",
    cooling: "Central",
    parking: "Contact Manager",
    pets: "Dogs and Cats",
    laundry: "Contact Manager",
    deposit: "Contact Manager",
    homeType: "House",
    image: "url(../img/h11.jpg)",
  },
  {
    id: 14,
    name: "Ken White",
    date: "10/05/2019",
    address: "6232 S Wexel St",
    city: "Schaumburg",
    state: "IL",
    rooms: 4,
    bathrooms: 3,
    price: 450000,
    floorSpace: 2400,
    dateAvailable: "Contact Manager",
    cooling: "Central",
    parking: "Contact Manager",
    pets: "Dogs and Cats",
    laundry: "In Unit",
    deposit: "Contact Manager",
    homeType: "House",
    image: "url(../img/h12.jpg)",
  },
  {
    id: 15,
    name: "Rain Gordon",
    date: "09/25/2019",
    address: "111 N Hickley St",
    city: "Springfield",
    state: "IL",
    rooms: 3,
    bathrooms: 2.5,
    price: 400000,
    floorSpace: 2400,
    dateAvailable: "Available Now",
    cooling: "Central",
    parking: "Contact Manager",
    pets: "Dogs and Cats",
    laundry: "Contact Manager",
    deposit: "Contact Manager",
    homeType: "House",
    image: "url(../img/h13.jpg)",
  },
  {
    id: 16,
    name: "Rain Gordon",
    date: "10/12/2019",
    address: "2400 W 12 St",
    city: "Chicago",
    state: "IL",
    rooms: 3,
    bathrooms: 2,
    price: 330000,
    floorSpace: 1400,
    dateAvailable: "Available Now",
    cooling: "Other",
    parking: "Contact Manager",
    pets: "small dogs",
    laundry: "In Unit",
    deposit: "Contact Manager",
    homeType: "Condo",
    image: "url(../img/h14.jpg)",
  },
  {
    id: 16,
    name: "Ken White",
    date: "10/14/2019",
    address: "2400 W 12 St",
    city: "Joliet",
    state: "IL",
    rooms: 2,
    bathrooms: 2,
    price: 2300,
    floorSpace: 1400,
    dateAvailable: "Available Now",
    cooling: "Other",
    parking: "Contact Manager",
    pets: "No",
    laundry: "Shared",
    deposit: "Contact Manager",
    homeType: "Apartment",
    image: "url(../img/h15.jpg)",
  },
];

export default data;