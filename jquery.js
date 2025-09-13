//const h1 = document.getElementById("h2text")
//console.log(h1)
//const h1 = document.getElementsByClassName("h1textclass")[0].innerText
//console.log(h1)
//const h1 = document.getElementById("h1text").innerText
//console.log(h1)
//const h1 = document.getElementById("h1text").innerText = "hello World"
//console.log(h1)
//let h1 = document.getElementById("h1text").innerText
 //h1 = "hello class"
//console.log(h1)
//const h1 = document.querySelector(".h1textclass")
//console.log(h1)
//const h1 = document.querySelector("#h1text.h1textclass").innerText
//console.log(h1)
//const h1 = document.querySelectorAll(".h1textclass").innerText
//console.log(h1)
//hide first text
function hidefirsttext(){
    document.getElementById("h1text").innerText =""
}


let button1 = document.getElementById("firstbtn");
button1.addEventListener("click", hidefirsttext)

//hide second text
/*function hidesecondtext(){
    document.getElementById("h1text2").innerText = ""
}/*

/*let button2 = document.getElementById("secondbtn");
button2.addEventListener("click", hidesecondtext)*/
let btn2 = document.getElementById("secondbtn");
btn2.addEventListener("click", ()=>{
    document.getElementById("h1text2").innerText ="Hello"
})