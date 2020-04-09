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
    document.getElementById('finalPrice').innerHTML = "$" + total + ".00";

}
