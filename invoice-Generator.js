function remove_fn(me) {
   console.log(me)
   me.parentElement.remove()
}

function add_fn() {
   let add = document.createElement("div")
   add.innerHTML = `  <fieldset>
                <input type="text" placeholder="Description of item/service" class="desc">
                <input type="number" id="num_input" oninput="subtotal() ; total()">
                <input type="number"  id="num_amt"oninput="subtotal() ; total()">
                 <span class="cancel"onclick="cancel(this)">x</span> 
        </fieldset>
        <br>
    </div>`
   document.getElementsByClassName("parentdiv")[0].appendChild(add)

}

document.getElementById("addbtn").addEventListener("click", add_fn)

function cancel(ok) {
   console.log(ok)
   ok.parentElement.remove()
}

function add_discount() {
   let discounts = document.createElement("div")
   discounts.innerHTML = `  Discount <input type="number" class="disc" oninput = "total()">
<span class="remove" onclick="remove_fn(this)">x</span>`
   document.querySelector(".discountarea").appendChild(discounts)
}

document.querySelector(".discountbtn").addEventListener("click", add_discount)




function add_shipping() {
   let shipping = document.createElement("div")
   shipping.innerHTML = `  Shipping <input type="number"  oninput = "total()"class="ship">
<span class="remove" onclick="remove_fn(this)">x</span>`
   document.querySelector(".discountarea").appendChild(shipping)
}

document.querySelector(".shipping").addEventListener("click", add_shipping)

function add_tax() {
   let tax = document.createElement("div")
   tax.innerHTML = `  tax <input type="number" class="tax" oninput = "total()">
<span class="remove" onclick="remove_fn(this)">x</span>`
   document.querySelector(".discountarea").appendChild(tax)
}

document.querySelector(".tax").addEventListener("click", add_tax)

function delete_fn(me) {
   console.log(me)
   me.parentElement.remove()
}
//num-input * num amt = subtotal
function subtotal() {
   let unit = document.querySelectorAll("#num_input")
   let amount = document.querySelectorAll("#num_amt")
   let subtotal_unit = 0;
   let subtotal_amount = 0;
   Array.from(unit).map((each) => {
      subtotal_unit = subtotal_unit + Number(each.value)
   })
   Array.from(amount).map((each) => {
      subtotal_amount = subtotal_amount + Number(each.value)
   })
   let product = subtotal_amount * subtotal_unit
   document.querySelector(".sub").innerText = "US$" + "" + product.toFixed(2)

}


// function total() {
//    let discounts = document.querySelectorAll(".disc")
//    let unit = document.querySelectorAll("#num_input")
//    let shipping = document.querySelectorAll(".ship")
//    let units = document.querySelectorAll("#num_input")
//    let tax = document.querySelectorAll(".tax")
//    let qty = document.querySelectorAll("#num_input")
//    let amount = document.querySelectorAll("#num_amt")
//    let total = 0;
//    let total1 = 0;
//    let total2 = 0;
//    let total3 = 0;
//    let total4 = 0;
//    let total5 = 0;
//     let subtotal_amount = 0;
//     let  subtotal_unit = 0;
//    Array.from(unit).map((each) => {
//       total = total + Number(each.value)
//    })
//    Array.from(discounts).map((each) => {
//       total1 = total1 + Number(each.value)
//    })
//    Array.from(units).map((each) => {
//       total2 = total2 + Number(each.value)
//    })
//    Array.from(shipping).map((each) => {
//       total3 = total3 + Number(each.value)
//    })
   
   
//    Array.from(qty).map((each) => {
//       total4 = total4 + Number(each.value)
//    })
//    Array.from(tax).map((each) => {
//       total5 = total5 + Number(each.value)
//    })
//  Array.from(unit).map((each) => {
//       subtotal_unit = subtotal_unit + Number(each.value)
//    })
//    Array.from(amount).map((each) => {
//       subtotal_amount = subtotal_amount + Number(each.value)
//    })
//    let products = subtotal_amount * subtotal_unit
//    let ship_total = total2 * total3
//    let disc_total = total * total1
//    let tax_total = total4 * total5
//    let product = subtotal_amount * subtotal_unit

//    let final_total = disc_total + ship_total + tax_total + product + products
//    document.querySelector(".subs").innerText = "US$" + final_total
// }
function total() {
  const parseNum = v => {
    if (v === undefined || v === null) return 0;
    const s = String(v).trim();
    if (s === '') return 0;
    const cleaned = s.replace(/[^0-9.\-]+/g, ''); // keep digits, dot, minus
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : 0;
  };


  const units = document.querySelectorAll('#num_input'); // qtys
  const amounts = document.querySelectorAll('#num_amt'); // prices
  const discs = document.querySelectorAll('.disc');      // discount inputs
  const ships = document.querySelectorAll('.ship');      // shipping inputs
  const taxes = document.querySelectorAll('.tax');       // tax inputs (note: if you have a .tax button, that's ok — parseNum handles it)


  let unitsSum = 0, amountsSum = 0,discSum = 0, shipSum = 0,taxSum = 0;
  Array.from(units).forEach(el => unitsSum += parseNum(el.value));
  Array.from(amounts).forEach(el => amountsSum += parseNum(el.value));
  Array.from(discs).forEach(el => discSum += parseNum(el.value));
  Array.from(ships).forEach(el => shipSum += parseNum(el.value));
  Array.from(taxes).forEach(el => taxSum += parseNum(el.value));

  const subtotal_val = unitsSum * amountsSum;      // units * sum(prices)
  const disc_total   = unitsSum * discSum;         // units * sum(discounts)
  const ship_total   = unitsSum * shipSum;         // units * sum(shipping)
  const tax_total    = unitsSum * taxSum;          // units * sum(tax)

  const final_total = subtotal_val + disc_total + ship_total + tax_total;


  const subEl = document.querySelector('.sub');
  if (subEl) subEl.innerText = "US$" + subtotal_val.toFixed(2);

  const totalEl = document.querySelector('.subs');
  if (totalEl) totalEl.innerText = "US$" + final_total.toFixed(2);
  return final_total;

}


function balancedue(){
   let totalamt = final_total
   let amount_paid = document.querySelector(".amt").value
   let balancedue = totalamt - amount_paid
   document.getElementsByClassName("balance_due").innerText = "US$"  + balancedue.toFixed(2)
}