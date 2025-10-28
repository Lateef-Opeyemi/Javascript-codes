
//array
let cars = ["bmw", "audi",["seat", "belt"] ,"lexus"]
/*cars[2][0]
cars[2][1]
*/
for(let titi = 0; titi<2; titi++){
console.log(cars[2][titi])
}


let user = [ {
    name: "John Doe",
    age:30
}, 
{
    name : "jane Doe",
    age:40
}
]
for(let t = 0; t<2; t++)
console.log(user[t].name)
console.log(user[0].name)
console.log(user[0].age)

// for in, for of, for each
for(let x in cars){
    console.log(x)
}

let car =["Toyota",["jins","kola"], "Honda", "Ford"]
let users = {
    name:"titi",
    age:20,
    email:"titi@gmail.com"
}

car[1].map((each_value)=>{
    console.log(each_value)
})




//map
//syntax: array.map(each_value, index, array)
//car.map((x,y,z)=>{
    //console.log(x)
    //console.log(y)
    //console.log(z)
//})

//for in:To get keys, mostly used in object
//syntax: for(let x in object)
/*for(let i in users){
    console.log(i)
    console.log(users[i])

}
    */

//for(let i = 0; i<car.length; i++) {
   // console.log(car[i])
//}


//for of to get values, mostly for array
//for(let i of car){
    // i represent each value in an array
   // console.log(i)
//}
/*let num = [2,4,6,8]
num.map((x)=>{ //let total = x*2, console.log(total)
    console.log(x*2)
})
//map as an array
let newnum = num.map((x)=>{
    return x*2
})
console.log(newnum)
*/

//foreach:same as map, but does not return array
// syntax: Array.foreach((each_value, index, array) =>
//{
//})
