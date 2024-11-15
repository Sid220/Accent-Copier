function copy(text) {
    navigator.clipboard.writeText(text).then(r => console.log("Copy status", r));
    Swal.fire({
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    })
}

if (localStorage.getItem("pref") === null) {
    localStorage.setItem("pref", "FR");
}
let btns = document.getElementsByClassName("btn");

function keyDown(e) {
    // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
    if (e.key === "Shift") {
        // call your function to do the thing
        for (let i = 0; i < btns.length; i++) {
            if(!btns[i].classList.contains("dont-change")) {
                btns[i].textContent = btns[i].textContent.toUpperCase();
                btns[i].addEventListener("click", function () {
                    copy(this.textContent)
                });
            }
        }
    }
}

function keyUp() {
    for (let i = 0; i < btns.length; i++) {
        if(!btns[i].classList.contains("dont-change")) {
            btns[i].textContent = btns[i].textContent.toLowerCase();
            btns[i].addEventListener("click", function () {
                copy(this.textContent)
            });
        }
    }
}

// register the handler
document.addEventListener('keydown', keyDown, false);
document.addEventListener('keyup', keyUp, false);
let radios = document.getElementsByClassName("radio");
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", function () {
        localStorage.setItem("pref", radios[i].id)
    })
}
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        copy(this.textContent)
    });
}

registeredTabs = ["FR", "ES", "DE", "IT", "PT", "NL", "PL", "more", "about"];
let pref = localStorage.getItem("pref");
if(registeredTabs.includes(pref)) {
    document.getElementById(pref).click();
}
