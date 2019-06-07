/* Build a basic ES6 Class */

function Thermos(look, materials, cap, volume) {
    this.look = look
    this.materials = materials
    this.cap = cap
    this.volume = volume
    this.fillPercentage = 0
    this.refill = function (amountInPercentage) {
        return this.fillPercentage += amountInPercentage
    }
    this.drink = function (amountInPercentage) {
        return this.fillPercentage -= amountInPercentage
    }
}

class Thermos{
    constructor(look, materials, cap, volume) {
        this.look = look
        this.materials = materials
        this.cap = cap
        this.volume = volume
        this.fillPercentage = 0
        this.refill = function (amountInPercentage) {
            return this.fillPercentage += amountInPercentage
        }
        this.drink = function (amountInPercentage) {
            return this.fillPercentage -= amountInPercentage
        }
    }
}

let delaneysJudgeyThermos = new Thermos()
/* Adding Setters (of Katan) and Getters */



/* Extending */

