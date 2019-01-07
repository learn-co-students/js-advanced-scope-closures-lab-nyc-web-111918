function produceDrivingRange(blockRange){
  return function (start, end) {
    let proposedBlocks = Math.abs(parseInt(start) - parseInt(end))
    if (proposedBlocks > blockRange){
      return `${proposedBlocks - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange -  proposedBlocks}`
    }
  }
}

function produceTipCalculator(percent){
  return function (bill){
    return bill * percent
  }
}

function createDriver(name){
  let DriverID = 0;
  return class {
      constructor(name){
        this.name = name;
        this.id = ++DriverID
    }
  }
}
