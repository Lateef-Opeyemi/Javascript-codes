function extend(){
    let add = document.createElement("div")
    add.innerHTML = ` <input type="text" placeholder="your expense" class="expense">
                <input type="number" class="amount" placeholder="amount" required>
                <button type="button" class="removebtn" onclick="remove_fn(this)">Remove</button>`
                document.getElementById("maindiv").appendChild(add)
}
 function remove_fn(me){
    console.log(me)
    me.parentElement.remove()
}

function amount_left(e) {
    e.preventDefault();

     let salary = parseFloat(document.getElementById("salary").value);
     let expense_input = document.getElementsByClassName("amount");
    let total_expenses = 0;
    Array.from(expense_input).map((each) => {
        total_expenses = total_expenses + Number(each.value)
          
     });
     let total = total_expenses
     document.getElementById("total").innerText = total
     let left = salary - total_expenses
document.getElementById("Amount left").innerText= left
   
}
document.getElementById("submitbtn").addEventListener("click", amount_left)


