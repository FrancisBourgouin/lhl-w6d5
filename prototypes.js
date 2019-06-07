/* Comparing the constructor */

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

/* Adding prototypes */

Thermos.prototype.newRefill = function (amountInml) {
    this.fillPercentage = amountInml / this.volume * 100
}


/* What is __proto__ */



//vs


