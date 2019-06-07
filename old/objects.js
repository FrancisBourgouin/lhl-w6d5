/* Object with properties */

    let waterBottle = {
        volume: 300,
        carbonated: false,
        type: 'glass',
        brand: 'Rise',
        fillPercentage:50
    }

/* Object with properties and methods */

    let anotherWaterBottle = {
        volume: 1000,
        carbonated: true,
        type: 'plastic',
        brand: 'Nestlé',
        fillPercentage: 70,

        refill(amount){
            this.fillPercentage += amount
        }
    }

/* Adding methods to an object */

    anotherWaterBottle.drink = function (amount) {
        this.fillPercentage -= amount
    }

/* Object constructors */

function WaterBottle(volume, carbonated, type, brand, fillPercentage) {
    this.volume = volume
    this.carbonated = carbonated
    this.type = type
    this.brand = brand
    this.fillPercentage = fillPercentage

    this.refill = function (amount) {
        this.fillPercentage += amount
    }

    this.drink = function (amount) {
        this.fillPercentage -= amount
    }
}