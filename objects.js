/* Object with properties */
    let joshsThermos = {
        look: 'oldschool',
        materials: ['stainless', 'plastic'],
        cap: 'flipcap',
        volume: 300
    }

/* Object with properties and methods */

    let stephsThermos = {
        look: 'modern & pwetty',
        materials: ['stainless'],
        cap: 'twist',
        volume: 250,
        fillPercentage:0,
        refill: function(amountInPercentage){
            return this.fillPercentage += amountInPercentage
        }    
    }


/* Adding methods to an object */

stephsThermos.drink = function (amountInPercentage) {
    return this.fillPercentage -= amountInPercentage
}  

/* Object constructors */

function Thermos(look, materials, cap, volume){
    this.look = look
    this.materials = materials
    this.cap = cap
    this.volume = volume
    this.fillPercentage = 0
    this.refill = function(amountInPercentage) {
        return this.fillPercentage += amountInPercentage
    }
    this.drink = function (amountInPercentage) {
        return this.fillPercentage -= amountInPercentage
    }  
}