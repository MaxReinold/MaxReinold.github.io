let onUpgrades = true;
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
