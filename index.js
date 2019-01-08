function produceDrivingRange(blockrange) {
  return function (block1, block2) {
    let difference = parseInt(block2) - parseInt(block1)
      if (difference > blockrange) {
        return `${difference - blockrange} blocks out of range`
      }
        return `within range by ${blockrange - difference}`
  }
}

function produceTipCalculator( percentage ) {
  return function ( rideFare ) {
    return rideFare * percentage;
  }
}

function createDriver() {
  let driverId = 0
    return class {
      constructor(name) {
        this.name = name
        this.id = ++driverId;
    }
  }
}
