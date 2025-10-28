function add_more(){
    let adds =  document.createElement("div")
    adds.innerHTML = `<input type="checkbox"> <span><input type="text"></span> <span class="remove" onclick="remove_fn(this)">x</span> <br> <br> `
    document.getElementById("tasklist").appendChild(adds)
}
document.querySelector(".add").addEventListener("click", add_more)


function add_top(){
    let tops =  document.createElement("div")
    tops.innerHTML = `<input type="checkbox"> <span><input type="text"></span> <span class="remove" onclick="remove_fn(this)" >x</span> <br> <br> `
    document.getElementById("top").appendChild(tops)
}
document.querySelector(".top").addEventListener("click", add_top)


function add_re(){
    let remind =  document.createElement("div")
    remind.innerHTML = `<input type="checkbox"> <span><input type="text"></span> <span class="remove" onclick="remove_fn(this)">x</span> <br> <br> `
    document.getElementById("reminder").appendChild(remind)
}
document.querySelector(".re").addEventListener("click", add_re)

 function remove_fn(me){
console.log(me)
me.parentElement.remove()
 }