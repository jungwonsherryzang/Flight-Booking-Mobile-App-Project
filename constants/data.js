//In real mobile app development, it should be dynamic with database design
//but I will just set the data in advance and read from this file to just show as a demo

import assets from "./assets";

const FlightData = [
  {
    id: "Flight01",
    name: "Cora-01",
    price: 23.45,
    maxppl: 4,
    image: assets.flight1,
    description: " "
  },
  
  {
    id: "Flight02",
    name: "Cora-02",
    price: 7.25,
    maxppl: 3,
    description: " ",
    image: assets.flight2,
  },
  
  {
    id: "Flight03",
    name: "Cora-03",
    price: 11.56,
    maxppl: 3,
    description: " ",
    image: assets.flight3,
  },
  
  {
    id: "Flight04",
    name: "Cora-04",
    price: 54.25,
    maxppl: 4,
    description: " ",
    image: assets.flight4,
  },
  
  {
    id: "Flight05",
    name: "Cora-05",
    price: 10.25,
    maxppl: 3,
    description: " ",
    image: assets.flight5,
  },
  
  {
    id: "Flight06",
    name: "Cora-06",
    price: 20.25,
    maxppl: 2
    description:" ",
    image: assets.flight6,
  },
  
  {
    id: "Flight07",
    name: "Cora-07",
    price: 18.25,
    maxppl: 4,
    description: " ",
    image: assets.flight7,
  },
  
];

export { FlightData };
