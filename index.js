  function produceDrivingRange(blockRange){
                                //8
  return function (start, end){
    let x = parseInt(start);
    let y = parseInt(end);
    let distance = Math.abs(y - x) //20, 10 = 10
    let difference = Math.abs(distance - blockRange)

    { if ( distance > blockRange) {
          debugger;
          return `${difference} blocks out of range`;
        } else { (distance < blockRange)
          return `within range by ${difference}`;
        }
      }
  }
}

function produceTipCalculator(tip){
  return function(multiplier){
    return tip * multiplier
  }
}

function createDriver(){
    let driverId = 0;
    return class{ constructor(name){
      this.name = name;
      this.id = ++driverId
    }
  }
}
