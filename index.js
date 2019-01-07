function produceDrivingRange(blockRange) {
  return function(start, end) {
    range = Math.abs(parseInt(start) - parseInt(end));
    diff = Math.abs(range - blockRange);
    if (range > blockRange) {
      return `${diff} blocks out of range`;
    } else {
      return `within range by ${diff}`;
    };
  };
};

function produceTipCalculator(decimal) {
  return function(amount) {
    return amount * decimal;
  };
};

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    };
  };
};
