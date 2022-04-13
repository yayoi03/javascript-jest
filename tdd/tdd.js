class ClosedInterval {
  constructor(lowerArg, upperArg) {
    if (lowerArg>upperArg){
      throw new Error('上端より下端が大きい')
    }
    
    this.lower = lowerArg;
    this.upper = upperArg;
  }

  outputMyClosedInterval(){
    return `[${this.lower},${this.upper}]`
  }

  isNumberIncluded(num){
    if (num >= this.lower && num <= this.upper ){
      return true
    }else {
      return false
    }
  }
  compairClosedInterval (otherClosedInterval) {
    const otherLower = otherClosedInterval.lower
    const otherUpper = otherClosedInterval.upper

    if (otherLower == this.lower&&otherUpper == this.upper) {
      return '等価の閉区間'
    } else if (otherLower>=this.lower&&otherUpper<=this.upper) {
      return '完全に含まれている'
    } else {
      return '等価でもないし、完全に含まれているわけでもない'
    }
  }
}
module.exports = ClosedInterval;