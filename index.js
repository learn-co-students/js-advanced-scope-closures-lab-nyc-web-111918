function produceDrivingRange(range) {
  return function (distanceStart, distanceEnd) {
    let start = parseInt(distanceStart);
    let end = parseInt(distanceEnd);
    let totalDistance = Math.abs(end - start);
    let diff = range - totalDistance;

    if (diff > 0) {
      return `within range by ${diff}`
    } else {
      return `${Math.abs(diff)} blocks out of range`
    }
  }
}
function produceTipCalculator(percent) {
  return function (fare) {
    return fare * percent;
  }
}
function createDriver() {
  let id = 0;
  return class {
    constructor (name) {
      this.id = ++id;
      this.name = name;
    }
  }
}
