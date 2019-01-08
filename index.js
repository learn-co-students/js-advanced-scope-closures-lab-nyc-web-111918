const produceDrivingRange = (blockRange) => {
	return (origin, destination) => {
		// account for - ints, distance can only be +
		let absDrivingRange = Math.abs(parseInt(destination) - parseInt(origin));
		let drivingRangeDiff = blockRange - absDrivingRange;
		if (drivingRangeDiff > 0) {
			return `within range by ${drivingRangeDiff}`
		} else {
			return `${Math.abs(drivingRangeDiff)} blocks out of range`
		}
	}
}

const produceTipCalculator = (percentage) => {
  return (fare) => {
    return fare*percentage;
  }
}

const createDriver = () => {
  let driverId = 0;
  return class {
    constructor (name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
