/* Comparing the constructor */
function WaterBottle(volume, carbonated, type, brand, fillPercentage) {
    this.volume = volume
    this.carbonated = carbonated
    this.type = type
    this.brand = brand
    this.fillPercentage = fillPercentage
}

/* Adding prototypes */

WaterBottle.prototype.refill = function (amount) {
    this.fillPercentage += amount
}

let hannahsBottle = new WaterBottle(500, false, 'glass', 'rise', 50)

hannahsBottle.refill(20)
console.log(hannahsBottle.fillPercentage) //Will give us 70

WaterBottle.prototype.refill = function (amount) {
    this.fillPercentage = amount //Equals instead of adding
}

hannahsBottle.refill(20)
console.log(hannahsBottle.fillPercentage) //Will give us 20

/* What is __proto__ */

let a_links = document.getElementsByTagName('a')
a_links.__proto__

//vs

let randomArray = [1,2,3,4,1,2,3,4,5,5,5]
randomArray.__proto__
