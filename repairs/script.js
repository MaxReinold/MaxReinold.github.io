let total = 0;
function repair(){
    total =
    parseInt(document.getElementById('paintD').value) +
    parseInt(document.getElementById('bodyD').value) +
    parseInt(document.getElementById('engineD').value);
    if(document.getElementById('oil').checked){
      total += 50;
    }
    if(document.getElementById('window').checked){
      total += 350;
    }
    if(document.getElementById('employee').checked){
      total = total * .7;
    }
    let scalar = parseFloat(document.getElementById('priceScale').value);
    document.getElementById('finalPrice').innerHTML = "$" + Math.floor(total * scalar * .01) + ".00";
}
