/* Build a basic ES6 Class */

class WaterBottle{
    constructor(volume, carbonated, type, brand, fillPercentage) {
        this.volume = volume
        this.carbonated = carbonated
        this.type = type
        this.brand = brand
        this.fillPercentage = fillPercentage
    }
}

/* Adding Setters and Getters */
class WaterBottle {
    constructor(volume, carbonated, type, brand, fillPercentage) {
        this.volume = volume
        this.carbonated = carbonated
        this.type = type
        this.brand = brand
        this.fillPercentage = fillPercentage
    }

    set refill(amount) {
        this.fillPercentage += amount
    }

    get waterRemaining(){
        return `There's ${this.fillPercentage} remaining`
    }
}

let randomFunction = function(param){
    console.log(param)
}
let randomObject = {
    randomFunction: function (param) {
        console.log(param)
    }
}
/* Extending */

class VirgilesBottles extends WaterBottle {
    constructor(volume, carbonated, type, brand, fillPercentage, color){
        super()
    }
}