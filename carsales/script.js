function getReceipt(){
  let seller = document.getElementById("seller").value;
  let buyer = document.getElementById("buyer").value;
  let carname = document.getElementById("carname").value;
  let carPrice = parseFloat(document.getElementById("carprice").value);
  if(carprice == "" || carname == ""){
    document.getElementById("error").innerHTML = "Please enter a car price and name.";
  } else {
    document.getElementById("error").innerHTML = "";
    const data = document.createElement("div");
    const recBody = document.getElementById("receipt-display");
    recBody.innerHTML = "";
    const itemNumber = Math.floor(Math.random() * 10000000);
    let date = new Date();
    let minutes;
    if(date.getMinutes() < 10) {
      minutes = "0" + date.getMinutes();
    } else {
      minutes = date.getMinutes();
    }
    let time;
    if(date.getHours() >= 12){
      time = "PM";
    } else {
      time = "AM";
    }
    data.innerHTML = `<div style="line-height: 5px">
    <p><strong>Harris County Tow</strong></p>
    <p>Panorama Dr</p>
    <p>Sandy Shores. TX</p>
    <p><span style="float: left">${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}</span><span style="float: right">${date.getHours() % 12} : ${minutes} ${time}</span></p>
    <br><p style="line-height:30px; text-align: center">SALE</p>
    <p><span style="float:left">AMOUNT</span><span style="float:right">$${carPrice}</span></p><br>
    <p><span style="float:left">TAX</span><span style="float:right">$0</span></p><br>
    <p><span style="float:left">TOTAL</span><span style="float:right">$${carPrice}</span></p><br><br>
    <p>Payment:</p>
    <p>AUTH # ${itemNumber}</p>
    <p>APPROVED</p><br><br>
    <p style="line-height: 16px">${carname} purchased by ${buyer}</p>
    <p>Customer Copy</p>
    </div>
    `;
    data.style = "font-family: 'Open Sans', sans-serif; padding: 10px; border: 2px solid rgba(100, 100, 100)"
    recBody.appendChild(data);
    savePNG();
    data.remove();
  }
}

function savePNG(){
  if(document.getElementsByTagName('canvas').length > 0){
    document.getElementsByTagName('canvas')[0].remove();
  }
  document.getElementById('receipt-image').innerHTML = "";
  html2canvas(document.getElementById('receipt-display')).then(canvas => {
    canvas.id = "displayCanvas";
    document.body.appendChild(canvas);
  });
}

function getEl(id){
  return document.getElementById(id);
}
