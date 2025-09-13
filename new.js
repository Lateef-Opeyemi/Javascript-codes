//select first element
//store the value of first input in a variable
//select second element
//store the value of second input in a variable
//add the value of both input

//form
/*document.getElementById("theform").addEventListener("submit", (e)=>{e.preventDefault()
    let number1 = document.getElementById("num1").value

 let number2 = document.getElementById("num2").value

 let total = Number (number1) +  Number(number2)

 document.getElementById("mytotal").innerText = total
})*/



/*document.getElementById("submitbtn").addEventListener("click", ()=>{
    let number1 = document.getElementById("num1").value

    let number2 = document.getElementById("num2").value

    let total = Number (number1) +  Number(number2)

    document.getElementById("mytotal").innerText = total
})*/


/*function sumit(){
    let number1 = document.getElementById("num1").value

    let number2 = document.getElementById("num2").value

    let total = Number (number1) +  Number(number2)

    document.getElementById("mytotal").innerText = total
}*/

/*document.getElementById("submitbutton").addEventListener("click",()=>{
    let sub1 = document.getElementById("score1").value

    let sub2 = document.getElementById("score2").value

    let total = Number(sub1) + Number(sub2)

    document.getElementById("mytotal").innerText = total
})*/

/*document.getElementById("theform").addEventListener("submit", (e) => {
    e.preventDefault()
    let sub1 = document.getElementById("score1").value

    let sub2 = document.getElementById("score2").value

    let total = Number(sub1) + Number(sub2);

    document.getElementById("mytotal").innerText = total;
})*/


//avg,total,percent

//CODE FOR AVERAGE SCORE, TOTAL SCORE, PERCENTAGE

function calculate() {

    let scores = document.getElementsByClassName("score1")
    console.log(scores)
    let total = 0;
    //we use array.from to extract array from a datatype diffrent from array since map works only for array
    Array.from(scores).map((each) => {
        total = total + Number(each.value)
        avg = total / scores.length
        percent = parseFloat(total / (scores.length * 100) * 100);
    })
    console.log(total)
    console.log(avg)
    console.log(percent)
    document.getElementById("average").innerText = avg
    document.getElementById("total").innerText = total
    document.getElementById("percentage").innerText = percent.toFixed(2) + "%"

    if(percent >=0 && percent < 45){
        document.getElementById("text").innerText = "fail";
    }else if(percent >=45 && percent<65){
        document.getElementById("text").innerText = "good"
    }else{
        document.getElementById("text").innerText = "verygood"
    }
}
// let score1 = document.getElementById("score1").value

// let score2 = document.getElementById("score2").value

// let score3 = document.getElementById("score3").value

// let score4 = document.getElementById("score4").value


// let average = (Number(score1) + Number(score2) + Number(score3) + Number(score4)) / 4
// document.getElementById("average").innerText = average

// let total = Number(score1) + Number(score2) + Number(score3) + Number(score4)
// document.getElementById("total").innerText = total

// let percentage = parseFloat((total / 400)) * 100
// document.getElementById("percentage").innerText = percentage



document.getElementById("submitbtn").addEventListener("click", calculate)




function add_more_fn() {
    let divi = document.createElement("div")
    divi.innerHTML = `<input type="text" class ="subject1">
            <input type ="number" class ="score1"> 
            <button type="button" onclick="remove_fn(this)"> Remove</button>`

    document.getElementById("parentdiv").appendChild(divi)
}

function remove_fn(mee) {
    console.log(mee)
    mee.parentElement.remove()
}

















































/*document.getElementById("its form").addEventListener("submit", (e) =>{
    e.preventDefault
    let score1 = document.getElementById("score1").value

    let score2 = document.getElementById("score2").value

    let score3 = document.getElementById("score3").value

    let score4 = document.getElementById("score4").value


    let average = (Number(score1) + Number(score2) + Number(score3) + Number(score4)) /4
    document.getElementById("average").innerText = average

    let total = Number(score1) + Number(score2) + Number(score3) + Number(score4)
    document.getElementById("total").innerText = total

    let percentage = (total/400)*100
    document.getElementById("percentage").innerText = percentage

}) */


//const clothing_brands = ["gucci", "prada", "varsace"]
// for(let i = 0; i<4; i++){
//     console.log(clothing_brands[i])
// }
//for (let i in clothing_brands) {
//console.log(clothing_brands[i])
//}
//for(let i of clothing_brands){
//console.log(i)
//}
/*clothing_brands.map((x,y,z)=>{
    console.log(y)
})*/

/*clothing_brands.forEach((x,y,z)=>{
    console.log(x)
})*/
/*let users = [{
    name: "obi",
    age: 26,
    email: "obi@gmail.com",
    is_login: true
},
{
    name: "sola",
    age: 44,
    email: "sola@gmail.com",
is_login: false
}
]
users.map((value)=>{
 if (value.is_login == true){
    console.log("user is logged in")
 } else{
    console.log("user is not logged in ")
 }
})*/


/*for (let j of users) {
    console.log(j["name"])
}

for (let me in users) {
    console.log(users[me].name)
}
let total = users.map((value, index, array) => {
    return value.age * 2
})
console.log(total)

/*for(let m in users){
   console.log(users[m])
}*/


























