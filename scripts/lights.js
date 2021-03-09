let btn = document.getElementsByClassName("lights-btn")[0];
let circle = btn.children[0];
let root = document.documentElement;

if(getCookie("lights") == "") setCookie("lights", "off");

if(getCookie("lights") == "on"){
    btn.id = "on";
    darkTheme();
} else if(getCookie("lights") == "off"){
    btn.id = "off";
    lightTheme();
}

function lightsOff(){
    if(btn.id == "on"){
        btn.id = "off";
        lightTheme();
        setCookie("lights", "off");
    } else {
        btn.id = "on";
        darkTheme();
        setCookie("lights", "on");
    }
}

function lightTheme(){
    root.style.setProperty("--theme-background", "var(--light-background)");
        root.style.setProperty("--theme-body-background", "var(--light-body-background)");
        root.style.setProperty("--theme-card-background", "var(--light-card-background)");
        root.style.setProperty("--theme-card-background-hover", "var(--light-card-background-hover)");
        root.style.setProperty("--theme-header-background", "var(--light-header-background)");
        root.style.setProperty("--theme-header-text", "var(--light-header-text)");
        root.style.setProperty("--theme-text", "var(--light-text)");
        root.style.setProperty("--theme-ul", "var(--light-ul)");
}

function darkTheme(){
    root.style.setProperty("--theme-background", "var(--dark-background)");
        root.style.setProperty("--theme-body-background", "var(--dark-body-background)");
        root.style.setProperty("--theme-card-background", "var(--dark-card-background)");
        root.style.setProperty("--theme-card-background-hover", "var(--dark-card-background-hover)");
        root.style.setProperty("--theme-header-background", "var(--dark-header-background)");
        root.style.setProperty("--theme-header-text", "var(--dark-header-text)");
        root.style.setProperty("--theme-text", "var(--dark-text)");
        root.style.setProperty("--theme-ul", "var(--dark-ul)");
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}