

document.getElementById("theform").addEventListener("submit",  (e) => {e.preventDefault()

let input = document.getElementById ("amount").value

let option = document.getElementById("option").value

// let rate = (parseFloat(option / input))
let result = "";
if(option === "1500"){
    result = (parseFloat(option/input))
}else if(option === "2100"){
    result = (parseFloat(option/input))
} else{
    result = "invalid"
}
document.getElementById("result").innerText = result;
})

