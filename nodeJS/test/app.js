[
  {
    name: "resturant1",
    address: {
      city: "a",
      street: "aa",
    },
    coordinates: [5, 3, 6, 8],
    cuisine: "Fast food",
    kosher: false,
    reviews: [],
  },
  {
    name: "resturant2",
    address: {
      city: "b",
      street: "bb",
    },
    coordinates: [5, 1, 6, 8],
    cuisine: "Vegetarian",
    kosher: true,
    reviews: [],
  },
  {
    name: "resturant3",
    address: {
      city: "c",
      street: "cc",
    },
    coordinates: [0, 1, 6, 8],
    cuisine: "Fusion",
    kosher: true,
    reviews: [],
  },
  {
    name: "resturant4",
    address: {
      city: "d",
      street: "dd",
    },
    coordinates: [5, 3, 6, 8],
    cuisine: "Nouvelle",
    kosher: false,
    reviews: [],
  },
  {
    name: "resturant4",
    address: {
      city: "d",
      street: "dd",
    },
    coordinates: [5, 3, 6, 8],
    cuisine: "Nouvelle",
    kosher: false,
    reviews: [],
  },
];

// db.resturants.find().pretty()
// db.resturants.find({cusine : 'Nouvelle'}).pretty()
// db.resturants.find({kosher : true}).pretty()
// db.resturants.find({city : ["d"]}).pretty()
// db.resturants.find({address : {city: "d",street: "dd"}}).pretty()
// db.resturants.find({coordinates : [5, 3, 6, 8]}).pretty()
// db.resturants.find().sort({name : 1 })
// db.resturants.find().sort({name : -1 })

//
