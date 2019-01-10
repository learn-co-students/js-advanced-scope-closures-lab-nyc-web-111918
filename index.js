function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    let start = parseInt(startBlock);
    let end = parseInt(endBlock)

    let distance = Math.abs(start - end)
    let difference = blockRange - distance

    if(difference > 0){
      return `within range by ${difference}`
    }else if (difference < 0){
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(num){
      return percentage*num
  }
}

function createDriver(){
  let driverId= 0
  return class Hero {
    constructor(driverName, driverId){
      this.name = driverName;
      this.id = ++driverId
    }
  }
}
