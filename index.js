function blockToNumber(block){
  return parseInt(block.slice(0, 2))
}
function produceDrivingRange(blocks){
  return function(block1, block2){
    distance=Math.abs(blockToNumber(block1)-blockToNumber(block2));
    if (distance>blocks){
      return `${distance-blocks} blocks out of range`
    }else{
      return `within range by ${blocks-distance}`
    }
  }
}
function produceTipCalculator(percent){
  return function(test){
    return test*percent;
  }
}

function createDriver(){
  let DriverId=0;
  return class {
    constructor(name){
      this.name=name;
      this.id=++DriverId;
    }
  }
}
