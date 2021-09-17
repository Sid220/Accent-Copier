function copy(text) {
 navigator.clipboard.writeText(text);
 Swal.fire({
    icon: 'success',
    showConfirmButton: false,
    timer: 1500
  })
}
if(localStorage.getItem("pref") === null) {
    localStorage.setItem("pref", "FR");
}
var btns = document.getElementsByClassName("btn");
// define a handler
function doc_keyDown(e) {
    // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
    if (e.key === "Shift") {
        // call your function to do the thing
        for(i=0;i<btns.length;i++) {
            btns[i].textContent = btns[i].textContent.toUpperCase();
            btns[i].addEventListener("click", function() { copy(this.textContent) });
        }
        document.getElementById("dontChange").textContent = "ß";
    }
}
function doc_keyUp(e) {
    for(i=0;i<btns.length;i++) {
        btns[i].textContent = btns[i].textContent.toLowerCase();
        btns[i].addEventListener("click", function() { copy(this.textContent) });
    }
    document.getElementById("dontChange").textContent = "ß";
}
// register the handler 
document.addEventListener('keydown', doc_keyDown, false);
document.addEventListener('keyup', doc_keyUp, false);
var radio = document.getElementsByClassName("contact-radio");
for(i=0;i<radio.length;i++) {
    radio[i].addEventListener("click", function() { localStorage.setItem("pref", this.id) })
}
for(i=0;i<btns.length;i++) {
    btns[i].addEventListener("click", function() { copy(this.textContent) });
}
if(localStorage.getItem("pref") == "FR") {
    document.getElementById("FR").click();
}
if(localStorage.getItem("pref") == "ES") {
    document.getElementById("ES").click();
}
if(localStorage.getItem("pref") == "DE") {
    document.getElementById("DE").click();
}
if(localStorage.getItem("pref") == "IT") {
    document.getElementById("IT").click();
}
if(localStorage.getItem("pref") == "PT") {
    document.getElementById("PT").click();
}
if(localStorage.getItem("pref") == "NL") {
    document.getElementById("NL").click();
}
if(localStorage.getItem("pref") == "more") {
    document.getElementById("more").click();
}
if(localStorage.getItem("pref") == "about") {
    document.getElementById("about").click();
}