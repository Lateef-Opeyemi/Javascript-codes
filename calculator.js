document.getElementById("main").addEventListener("submit", (e) => {
    e.preventDefault()
    let input1 =  Number (document.getElementById("inp1").value)
    let input2 =  Number (document.getElementById("inp2").value)
    let option = document.getElementById("calculate").value
    
    let result = "";
   
   
    if (option === "+"){
        result = input1 + input2
    } else if (option === "-"){
        result = input1 - input2
    }else if(option === "*"){
        result = input1 * input2
    }else if(option === "/"){
        result = input1/input2
    } else{
        result = "invalid operation"
    }
document.getElementById("result").innerText = result
})