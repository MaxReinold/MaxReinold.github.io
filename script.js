let onUpgrades = true;
let onNew = true;
let items = [];
let cost;
let description;
function swap(){
  if(onUpgrades){
    document.getElementById('display').src = "repairs/index.html";
    document.getElementById('aButton').innerHTML = "Upgrades";
  } else {
    document.getElementById('display').src = "upgrades/index.html";
    document.getElementById('aButton').innerHTML = "Repairs";
  }
  onUpgrades = !onUpgrades;
}

function swapType(){
  if(onNew){
    document.getElementById('display').src = "scrapupgrades/index.html";
    document.getElementById('upgradetype').innerHTML = "New Parts";
  } else {
    document.getElementById('display').src = "upgrades/index.html";
    document.getElementById('upgradetype').innerHTML = "Used / Scrap Parts";
  }
  onNew = !onNew;
}

let test;

function getData(){
  let iframe = document.getElementById("display").contentWindow.document;
  let data = iframe.getElementsByTagName("select");
  items = [];
  let count = 0;
  if(iframe.getElementsByTagName("input")[0].checked){
    items[0] = "Employee Discout Used";
    count = 1;
  }
  for(let i = 0; i < data.length; i++){
    if(data[i].selectedIndex > 0){
      items[i + count] = getDropdownLabel(data[i]) + " " +data[i].options[data[i].selectedIndex].text;
    }
  }
  data = iframe.getElementsByTagName("input");
  let add = items.length;
  for(let i = 0; i < data.length; i++){
    if(data[i].type == "checkbox"){
      if(data[i].checked){
        items[add + count] = getCheckboxLabel(data[i]);
        count++;
      }
    }
  }
  if(iframe.getElementById('towMiles') != null){
  if(parseFloat(iframe.getElementById('towMiles').value) > 0){
    items[items.length] = iframe.getElementById('towMiles').value + " tow miles driven";
  }
  }
  items = items.filter(() => true);
  items = items.filter(x => x !== undefined);
  if(typeof(parseFloat(iframe.getElementById("finalPrice").innerText)) == "number" &&
        !isNaN(parseFloat(iframe.getElementById("finalPrice").innerText))){
    cost = parseFloat(iframe.getElementById("finalPrice").innerText);
  } else {
    cost = 0;
  }
  // for(let i = 0; i < items.length; i++){
  //   if(items[i] == null){
  //     items.splice(i);
  //   }
  // }
}

function generateAReceipt(){
  getData();
  generateReceipt(cost, items);
}

function generateReceipt(amount, items){
  const itemNumber = Math.floor(Math.random() * 10000000);
  const data = document.createElement("div");
  const recBody = document.getElementById("receipt-display");
  recBody.innerHTML = "";
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
  let itemSummary = "";
  for(let i = 0; i < items.length; i++){
    if(i == items.length - 1){
      itemSummary+= items[i];
    } else {
      itemSummary+= items[i] + ", ";
    }
  }
  data.innerHTML = `<div style="line-height: 5px">
  <p><strong>Harris County Tow</strong></p>
  <p>Panorama Dr</p>
  <p>Sandy Shores. TX</p>
  <p><span style="float: left">${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}</span><span style="float: right">${date.getHours() % 12} : ${minutes} ${time}</span></p>
  <br><p style="line-height:30px; text-align: center">SALE</p>
  <p><span style="float:left">AMOUNT</span><span style="float:right">$${amount}</span></p><br>
  <p><span style="float:left">TAX</span><span style="float:right">$0</span></p><br>
  <p><span style="float:left">TOTAL</span><span style="float:right">$${amount}</span></p><br><br>
  <p>Payment:</p>
  <p>AUTH # ${itemNumber}</p>
  <p>APPROVED</p><br><br>
  <p style="line-height: 16px">${itemSummary}</p>
  <p>Customer Copy</p>
  </div>
  `;
  data.style = "font-family: 'Open Sans', sans-serif; padding: 10px; border: 2px solid rgba(100, 100, 100)"
  recBody.appendChild(data);
  savePNG();
  data.remove();
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

function getDropdownLabel(checkbox) {
    if (checkbox.parentNode.tagName === 'LABEL') {
        return checkbox.parentNode.innerText.substring(0, checkbox.parentNode.innerText.indexOf(":"));
    }
}

function getCheckboxLabel(checkbox) {
    if (checkbox.parentNode.tagName === 'LABEL') {
        return checkbox.parentNode.innerText;
    }
}
