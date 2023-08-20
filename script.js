
const appendArea = document.getElementById("selected-product");

const totalAmount = 0;
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
}