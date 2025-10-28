

document.getElementById("itsform").addEventListener("submit", (e) => {
    e.preventDefault()
    let users = document.getElementById("username")
    let password = document.getElementById("password")
    let c_password = document.getElementById("c-password")

    if (users.value == "") {
        document.getElementById("user").style.color = "red"
        document.getElementById("user").innerText = "username is required"
    }

    if (password.value == "") {
        document.getElementById("password_warning").style.color = "red"
        document.getElementById("password_warning").innerText = "password is required"
    }

    if (c_password.value == "") {
        document.getElementById("confirm_warning").style.color = "red"
        document.getElementById("confirm_warning").innerText = " confirm password is required"
    }

    let username = document.getElementById("username").value
    let passcode = document.getElementById("password").value
    let confirmpassword = document.getElementById("c-password").value

    document.getElementById("username_info").innerText = username
    document.getElementById("password_info").innerText = passcode
    document.getElementById("confirmpassword_info").innerText = confirmpassword


})

// function confirmpassword(){
//     let password = document.getElementById("password")
//     let c_password = document.getElementById("c-password") 
//     if(password.value == c_password){
//         document.getElementById("confirm_warning").innerText = "password match"
//     }
//      else{
//         document.getElementById("confirm_warning").innerText = "password does not match"
//     }
// }






