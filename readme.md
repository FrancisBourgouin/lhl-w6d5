# JavaScript Objects, Prototypes & Classes

## Object Oriented Programming in JavaScript
    OOP is, very succintly, about using objects to model the world or the elements of the task at hand so it's easier to interact with our logic.

## Objects in JavaScript

### Standard objects with properties and methods
    At this point, you should be able to create an object with properties and methods ;)

### Using a constructor
    Makes it faster and more robust to create multiple objects based on the same template

```javascript
function Building(stories){
    this.stories = stories
}

let myHouse = new Building(2)
```


## Prototypes in JavaScript
    Makes methods susceptible to change, so we can make code wide changes to methods
    You can override prototype methods with a local method in the object

## ES6 Classes
    ES6 Classes are mostly syntax sugar using our prototypes and constructor functions.

```javascript
    class WaterBottle{
        ...
    }
```
### Constructors
    We use constructors to build our objects, like the constructor function we made with objects earlier.

```javascript
    class WaterBottle{
        constructor(volume, carbonated, type, brand, fillPercentage) {
            this.volume = volume
            this.carbonated = carbonated
            this.type = type
            this.brand = brand
            this.fillPercentage = fillPercentage
        }
    }           
```
### Setters (of Katan)
    We can specify if a method will be a setter (to modify the internal structure)
    We use the set keyword in front of the method

```javascript
/* inside a class */
set refill(){
    this.fillPercentage += amount
}
```

### Getters
    Same thing as setters, get is a keyword you can use to specify that the method will fetch data.

    ```javascript
    /* inside a class */
    get percentageRemaining(){
        return console.log(`There is ${this.fillPercentage}`)
    }
    ```
### Extending
    We can inherit from classes by extending them. This is done using the 'extends' keyword when creating the new class. Maybe you saw that in React Components ? ;) 

    We we want to access methods and properties from the parent, we need to use the super() method to achieve this.
    
## Cool links :

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
