// function retailPriceMaker(manufacturePrice) {
//   return function(marketMultiplier) {
//     return marketMultiplier * manufacturePrice;
//   };
// }

function produceDrivingRange(range){
  return function(a, b){
    let distance = (parseInt(b) - parseInt(a));
    // debugger;
    if(distance > range){
      return `${distance - range} blocks out of range`
    }
    else{
      return `within range by ${range - distance}`
    }
  }
}

function produceTipCalculator(ratio){
  return function(bill){
    return bill*ratio
  }
}

// function createItem() {
//   let ItemId = 0;
//   // return the class
//   return class {
//     constructor(name, manufacturePrice) {
//       this.name = name;
//       this.manufacturePrice = manufacturePrice;
//       this.id = ++ItemId;
//     }
//     retailPrice(marketMultiplier) {
//       return marketMultiplier * this.manufacturePrice;
//     }
//   };
// }

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
