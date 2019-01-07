function produceDrivingRange (range) {
  return function (loc1, loc2) {
    distance = Math.abs(parseInt(loc1) - parseInt(loc2))
    if (range < distance) {
      return `${Math.abs(distance - range)} blocks out of range`
    }
    else {
      return `within range by ${Math.abs(distance - range)}`
      }
    }
  }

function produceTipCalculator (percentage) {
  return function (fare) {
    return percentage * fare
  }
}

function createDriver () {
  let driverID = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = driverID++
    }
  }
}
