// append area capture
const appendArea = document.getElementById("selected-product");

// title and price added function
function titleAppendAndTotatAdd(productTitel, productPrice){
    
    // capture the product title, product price, total ID for use
    const title = document.getElementById(productTitel).innerText;
    const price = document.getElementById(productPrice).innerText;
    const totalString = document.getElementById("total").innerText;
    
    // added the innerText in total and total price
    document.getElementById("total").innerText = parseFloat(price)+parseFloat(totalString);
    document.getElementById("total-price").innerText = parseFloat(price)+parseFloat(totalString);
    
    // create element and addend 
    const li=document.createElement("li");
    const count = appendArea.childElementCount;
    li.innerHTML = `<li class="text-xl font-semibold">${count+1} :  ${title}</li>`;
    appendArea.appendChild(li);

    // purchase-btn capture and enable
    const purchaseBtn = document.getElementById("purchase-btn");
    if(parseFloat(price)+parseFloat(totalString) > 0 && purchaseBtn.hasAttribute("disabled")){
        purchaseBtn.removeAttribute("disabled");
    }
    // apply-btn capture and enable
    const applyBtn = document.getElementById("apply-btn");
    if(parseFloat(price)+parseFloat(totalString) >= 200 && applyBtn.hasAttribute("disabled")){
        applyBtn.removeAttribute("disabled");
    }
}

// discount calculation function
document.getElementById("apply-btn").addEventListener("click",function(){
    let totalPrice = document.getElementById("total-price").innerText;

    // the condition of check the eligiblety
    if(document.getElementById("coupon").value === "SELL200"){
        document.getElementById("discount").innerText = Math.floor((totalPrice/100)*20);
        document.getElementById("total").innerText = Math.ceil(totalPrice - (totalPrice/100)*20);
    }
    document.getElementById("coupon").value="";
})