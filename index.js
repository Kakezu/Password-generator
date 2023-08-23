const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")


// Generates the two passwords
function generate() {
    let randomString1 = ""
    let randomString2 = ""
    for (let i = 0; i <= 15; i++) {
        let randomIndex1 = Math.floor(Math.random()* characters.length)
        let randomCharacters = characters[randomIndex1]
        randomString1 += randomCharacters
    }
    for (let i = 0; i <= 15; i++) {
        let randomIndex2 = Math.floor(Math.random()* characters.length)
        let randomCharacters = characters[randomIndex2]
        randomString2 += randomCharacters
    }
    password1.textContent = randomString1
    password2.textContent = randomString2
}

function copyOnClick(passwordElement) {
  const selection = window.getSelection();
  const range = document.createRange();
  
  range.selectNodeContents(passwordElement);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  selection.removeAllRanges();
  let copytext = document.getElementById("copy-el")
  copytext.textContent = "Copied the password!"
  copytext.classList.add("fade-out");
  
  setTimeout(function() {
    copytext.textContent = "";
    copytext.classList.remove("fade-out");
  }, 2000);
}

