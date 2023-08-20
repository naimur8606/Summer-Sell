
const appendArea = document.getElementById("selected-product");

function titleAppendAndTotatAdd(productTitel, productPrice){
    const title = document.getElementById(productTitel).innerText;
    let price = document.getElementById(productPrice).innerText;


    const totalString = document.getElementById("total").innerText;
    document.getElementById("total").innerText = parseFloat(price)+parseFloat(totalString);
    document.getElementById("total-price").innerText = parseFloat(price)+parseFloat(totalString);

    const li=document.createElement("li");
    const count = appendArea.childElementCount;
    li.innerHTML = `<li class="text-xl font-semibold">${count+1} :  ${title}</li>`;
    appendArea.appendChild(li);

    const purchaseBtn = document.getElementById("purchase-btn");
    if(parseFloat(price)+parseFloat(totalString) > 0 && purchaseBtn.hasAttribute("disabled")){
        purchaseBtn.removeAttribute("disabled");
    }
    const applyBtn = document.getElementById("apply-btn");
    if(parseFloat(price)+parseFloat(totalString) >= 200 && applyBtn.hasAttribute("disabled")){
        applyBtn.removeAttribute("disabled");
    }
}
document.getElementById("apply-btn").addEventListener("click",function(){
    let totalPrice = document.getElementById("total-price").innerText;
    if(document.getElementById("coupon").value === "SELL200"){
        document.getElementById("discount").innerText = Math.floor((totalPrice/100)*20);
        document.getElementById("total").innerText = Math.ceil(totalPrice - (totalPrice/100)*20);
    }
})