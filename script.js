let onUpgrades = true;
let onNew = true;
function swap(){
  if(onUpgrades){
    document.getElementById('display').src = "repairs/index.html";
    document.getElementById('aButton').innerHTML = "Upgrades";
    document.getElementById('upgradetype').style.visibility = "hidden";
  } else {
    document.getElementById('display').src = "upgrades/index.html";
    document.getElementById('aButton').innerHTML = "Repairs";
    document.getElementById('upgradetype').style.visibility = "visible";
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
