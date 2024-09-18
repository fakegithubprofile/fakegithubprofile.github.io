function darkmode() {
            let element = document.body;
            let content = document.getElementById("modeswitchbutton");
            element.className = "dark-mode";
            content.innerText = "🌙";
}

function lightMode() {
            let element = document.body;
            let content = document.getElementById("modeswitchbutton");
            element.className = "light-mode";
            content.innerText = "☀️";
}

function modeswitch() {
            let element = document.body;
            let content = document.getElementById("modeswitchbutton");
            if (content.innerText == "☀️") {
                        darkMode();
            }
            else if (content.innerText == "🌙") {
                        lightMode();
            }
}
  
