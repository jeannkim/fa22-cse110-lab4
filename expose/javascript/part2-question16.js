let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 50,
    rareCars: 2
};

// print value of property
// if the property starts with the letter r,
// or if the value of that property is an odd number
for (let property in statistics) {
  if (property[0] === 'r' || statistics[property] % 2 === 1) {
    console.log(`${property}: ${statistics[property]}`);
  }
}