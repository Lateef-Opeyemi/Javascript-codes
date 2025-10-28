// function sum(e){
//     e.preventDefault()
//     let scores1= document.querySelectorAll(".input1")
//     let scores2 = document.querySelectorAll(".input2")
// let total1 = 0;
// let total2 =0;
//     Array.from(scores1).map((each)=>{
//          total1 = total1 + Number(each.value)
//     });
//     Array.from(scores2).map((each)=>{
//         total2 = total2 + Number(each.value)
//    });

//     let total_sum1 = total1
//     document.querySelector("#sum1").innerText = total_sum1

//     let total_sum2 = total2
//     document.querySelector("#sum2").innerText = total_sum2

//     let diff = total_sum1 - total_sum2
//     document.querySelector("#difference3").innerText = diff
// }
// document.querySelector("#submitbtn").addEventListener("click", sum)



// const cars = ['Toyota', 'BMW', 'Lexus', 'Honda'];
//Generate one after the other
//  let index = 0;
// document.getElementById("submitbtn").addEventListener("click", () =>{
//     for(let i = index; i < cars.length; i++){
//     let html_ele = document.createElement('div')
//     html_ele.innerHTML =` <label>car</label>
//     <input type="text" class="input1" value="${cars[i]}">`;
//     document.getElementById("parentdiv").appendChild(html_ele)
//      index = i + 1;
//     break
// }
// })


//Generate all together
// document.getElementById("submitbtn").addEventListener("click", () =>{
//     for(let i = 0; i < cars.length; i++){
//        let html_ele = document.createElement('div')
//    html_ele.innerHTML =` <label>car</label>
//         <input type="text" class="input1" value="${cars[i]}">`;
//      document.getElementById("parentdiv").appendChild(html_ele)
// }
// })


//reduce
//filter
//find
//some

//map
// const numb = ['3','2',3, 1, 5];
// let total = 0;
// numb.map(each => total =  total + Number(each))
// console.log(total)

// //reduce
// let result = numb.reduce((total, each)=>  total +  Number(each), 0)
// console.log(result)

// let carts = [
//     {
//         product:"sugar",
//         price:1000,
//     },
//     {
//         product:"milk",
//         price:2000,

// }
// ]
// let sum =  carts.reduce((x, each) => x + each.price, 0 )
// console.log(sum)

// //filter
// let ans = numb.filter(each => each != 2)
// console.log(ans)

// // find: it returns the first number that passes the condition
// const results= numb.find(each => each > 2)
// console.log(results)

// //some: returens a boolean expression at least one
// const answer = numb.some(each => each > 2)
// console.log(answer)

// //every: check for all that is checks if all values in the array is greater than 2
//returns a boolean
// const answers = numb.every(each => each > 2)
// console.log(answers)

let cart = [
    {
        product: "sugar",
        price: 1000,
    },
    {
        product: "milk",
        price: 2000,

    },
    {
        product: "rice",
        price: 3000
    }
]
//const re = cart.filter(each => each.price < 3000)
// console.log(re)

// let answ = re.reduce((total, each)=> total + each.price,0 ) 
// console.log(answ)



// let totals = ""
// document.getElementById("submitbtn").addEventListener("click", () => {
//     cart.forEach((item) => {
//         totals = totals + `<p>  product: ${item.product}</p> <p>  price: ${item.price}</p>`

//     })
//     document.getElementById("parentdiv").innerHTML = totals
// })


// function showcart(){
//     let result = cart.reduce((total, item)=>
//     {
//       return total + `<p> product: ${item.product}</p> <p> price: ${item.price} </p>`;
//         })
//         document.getElementById("parentdiv").innerHTML = result
// }
// document.getElementById("submitbtn").addEventListener("click", showcart)



let users = [
    {
        name: "sola",
        age: 20

    },
    {
        name: "segun",
        age: 24
    },
    {
        name: "john",
        age: 27
    }
]


    let show = users.reduce((total, item) => 
         total + `<div class="card" style="border: 1px solid grey"> <h3> Name: ${item.name}</h3> <h3> age: ${item.age}</h3></div>`, "")
    document.getElementById("main").innerHTML = show



// let total = ''
// users.forEach((each) => {
//     total + `<div class="card" style="border: 1px solid grey"> <h3> Name: ${each.name}</h3> <h3> age: ${each.age}</h3></div>`
// })
// document.getElementById("main").innerHTML = total





