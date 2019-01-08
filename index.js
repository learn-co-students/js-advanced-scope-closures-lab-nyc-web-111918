function produceDrivingRange(blocks){
  return function(r1, r2){
    let start = parseInt(r1);
    let end = parseInt(r2);
    if (blocks >= (end - start)){
      return `within range by ${blocks - (end - start)}`;
    }else{
      return `${(end - start) - blocks} blocks out of range`;
    }
  }
}

function produceTipCalculator(tip){
  return function(test){
    return test*tip;
  }
}

function createDriver(){
  let DriverId = 0;
  let Driver = class{
    constructor(name){
    this.name = name;
    this.id = DriverId++;
    DriverId++;
  }
  }
  return Driver;
}
