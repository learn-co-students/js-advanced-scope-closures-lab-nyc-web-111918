function produceDrivingRange(blockRange) {
  return function (pickup, destination) {
    let distance = Math.abs(parseInt(pickup) - parseInt(destination))
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`
    }
    else {
      return `within range by ${distance}`
    }
  }
}

function produceTipCalculator(integer) {
  return function (bill) {
    return bill * integer
  }
}

function createDriver() {
  let DriverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}

// let ItemId = 0;
// class Item {
//   constructor(name, manufacturePrice) {
//     this.name = name;
//     this.manufacturePrice = manufacturePrice;
//     this.id = ++ItemId;
//   }
//   retailPrice(marketMultiplier) {
//     return marketMultiplier * this.manufacturePrice;
//   }
// }
