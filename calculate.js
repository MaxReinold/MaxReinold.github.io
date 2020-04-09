let playerBalance;
let dos;
let minBet;
let bet;
let variable;
let ptable = [];
let pTableString = "red";
let color = "red";
let blackCount;
let redCount;

function loln(){
  if(document.getElementById('lawOfLargeNumbers').checked){
    document.getElementById('black').checked = false;
    document.getElementById('black').disabled = true;
    getVars();
    setColor();
  } else {
    document.getElementById('black').disabled = false;
  }
}

function setColor(){
  if(document.getElementById('lawOfLargeNumbers').checked){
    if(blackCount > redCount){
      color = "red";
    } else {
      color = "black";
    }
  } else {
    if(document.getElementById('black').checked){
      color = "black";
    } else {
      color = "red";
    }
  }
  document.getElementById('command').value = "!roulette " + Math.floor(bet) + " " + color;
}

function getVars(){
  playerBalance = parseInt(document.getElementById('balance').value);
  dos = parseInt(document.getElementById('DOS').value);
  minBet = parseInt(document.getElementById('minBet').value);
  bet = parseInt(document.getElementById('bet').value);
  variable = document.getElementById("variable").checked;
  redCount = parseInt(document.getElementById('redCount').value);
  blackCount = parseInt(document.getElementById('blackCount').value);
}

function setVars(){
  document.getElementById('balance').value = playerBalance;
  document.getElementById('DOS').value = dos;
  document.getElementById('minBet').value = minBet;
  document.getElementById('bet').value = bet;
  document.getElementById('redCount').value = redCount;
  document.getElementById('blackCount').value = blackCount;
  setColor();
  document.getElementById('command').value = "!roulette " + Math.floor(bet) + " " + color;
}

function minBetUpdate(){
  getVars();
  if(!variable){
    bet = minBet;
    setVars();
  }
  if(document.getElementById("ptablelength").value > 0){
    createPTable();
  }

}

function win(){
  getVars();
  playerBalance += Math.floor(bet);
  if(variable){
    minBet = playerBalance/ Math.pow(2, dos);
  }
  bet = minBet;
  setVars();
  if(color == "black"){
    blackCount++;
  } else {
    redCount++;
  }
  setVars();
  if(document.getElementById("ptablelength").value > 0){
    createPTable();
  }
}

function loss(){
  getVars();
  update();
  playerBalance -= Math.floor(bet);
  bet = bet*2;
  setVars();
  if(color == "red"){
    blackCount++;
  } else {
    redCount++;
  }
  setVars();
  if(document.getElementById("ptablelength").value > 0){
    createPTable();
  }
}

function createPTable(){
  getVars();
  let tempbet = minBet;
  let l = document.getElementById('ptablelength').value;
  ptable[0] = playerBalance;
  for(let i = 1; i < l; i++){
    ptable[i] = (ptable[i - 1] + tempbet);
    if(variable){
    tempbet = ptable[i - 1]/ Math.pow(2, dos);
    }
    else {
      tempbet = minBet;
    }
  }
  while(ptable.length > l){
    ptable.pop();
  }
  pTableString = "";
  for(let i in ptable){
    pTableString += Math.floor(ptable[i]) + "\t";
  }
  document.getElementById('p-table').innerHTML = pTableString;
}

function update(){
  getVars();
  if(variable){
    minBet = playerBalance/ Math.pow(2, dos);
    if(bet > playerBalance){
      change();
    }
  }
  setVars();
}

function change(){
  getVars();
  if(variable){
    minBet = playerBalance/ Math.pow(2, dos);
    bet = minBet;
  }
  if(document.getElementById("ptablelength").value > 0){
    createPTable();
  }
  setVars();
}

function vary(){
  getVars();
  document.getElementById("minBet").disabled = variable;
  if(variable){
    change();
  }
  if(document.getElementById("ptablelength").value > 0){
    createPTable();
  }
}
