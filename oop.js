//Procedural programming
// let a = 1
// let b = 2
// function add(){
//     console.log(a + b)
// }
// add()

//object oriented programming
// function people (name, occupation){
//     this.name = name
//     this.occupation = occupation
// } 
// this.ouput = function(){
// let person2 = new people("john", "banker")
// let person3 = new people("James", "doctor")
// let person4 = new people("Jude", "lawyer")

//  }

function equations(number1, number2){
    this.number1 = number1
    this.number2 = number2
    this.sum = function(){
        let x = this.number1 + this.number2
        console.log(x)
    }
}
let addition = new equations(1,3)
addition.sum()


//inheritance: ability of child class to inherit properties from parent classes
class vehicle{
    constructor(type){
        this.type = "default"

    }
}
class cars extends vehicle {
    constructor(type){
        super(type)
    }
}

 let car1 = new cars
console.log(car1)

class animals{
    constructor(name,sound){
        this.name = "animals"
        this.sound = function(){
            console.log("default")
        }
    }
}
class cow extends animals{
    constructor(name, sound){
        super(name)
        this.sound = function(){
            console.log("moo")
        }
    }
}

//polymorphism: ability of child class properties to be defined independently
//abstraction: ability of a child class properties to be hidden from outside classes
//encapsulation:ability of child properties to be defined within a class



