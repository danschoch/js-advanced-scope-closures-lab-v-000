function produceDrivingRange(range) {
    return function(start, end) {
        let startNum = parseInt(start.split('').slice(0,-2).join(''));
        let endNum = parseInt(end.split('').slice(0,-2).join(''));

        let neededRange = Math.abs(startNum - endNum);

        if (neededRange > range) {
            return `${Math.abs(neededRange-range)} blocks out of range`
        } else {
            return `within range by ${Math.abs(range - neededRange)}`
        }
    }
}

function produceTipCalculator(tipPercent) {
    return function(billAmount) {
        return tipPercent * billAmount;
    }
}

function createDriver() {
    let driverId = 0;

    return class Driver {
        constructor(name) {
            this.id = ++driverId;
            this.name = name;
        }
    }
}