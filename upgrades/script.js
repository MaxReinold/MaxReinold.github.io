function upgrade(){
  let total =
    parseInt(document.getElementById('engineLevel').value) +
    parseInt(document.getElementById('brake').value) +
    parseInt(document.getElementById('transmission').value) +
    parseInt(document.getElementById('suspension').value) +
    parseInt(document.getElementById('wheels').value) +
    parseInt(document.getElementById('armor').value) +
    parseInt(document.getElementById('paint').value);
  if(document.getElementById("turbo").checked){
    total += 10000;
  }
  if(document.getElementById("xenon").checked){
    total += 250;
  }
  if(document.getElementById("live").checked){
    total += 4000;
  }
  if(document.getElementById('employee').checked){
    total = total * .7;
  }
  document.getElementById('finalPrice').innerHTML = "$" + total + ".00";
}
