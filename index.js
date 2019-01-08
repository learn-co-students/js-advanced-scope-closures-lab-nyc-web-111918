function produceDrivingRange(range){
  return function(start, end){
    const blocks = parseInt(end.slice(0,2)) - parseInt(start.slice(0,2));
    if (blocks > range){
      return `${blocks - range} blocks out of range`
    } else {
      return `within range by ${range-blocks}`
    }
  };
}

function produceTipCalculator(tip){
  return function(cost){
    return cost * tip
  }
}

function createDriver(){
  let DriverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++DriverId
    }
  }
}
