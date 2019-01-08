function produceDrivingRange(range) {
  return function (start, finish) {
    let diff = (parseInt(finish) - parseInt(start))
    if (diff > range) {
      return `${diff - range} blocks out of range`
    } else {
      return `within range by ${range - diff}`
    }
  }
}

function produceTipCalculator(tip) {
  return function (percent) {
    return percent * tip
  }
}

function createDriver() {
  let id = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++id
    }
  }
}
