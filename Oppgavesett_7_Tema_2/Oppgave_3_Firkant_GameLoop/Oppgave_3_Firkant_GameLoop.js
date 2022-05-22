const firkant = document.querySelector("#firkant");

const egenskaper = {
    xPos: 1,
    xSpeed: 1,
    yPos: 1,
    ySpeed: 0.5,
    borderRad: 0.08,
}

let venstre = 0;
let toppen = 0;
let kantRadius = 0;

function endreFirkant() {
    venstre += egenskaper.xPos * egenskaper.xSpeed;
    firkant.style.left = venstre + "px";
    
    toppen += egenskaper.yPos * egenskaper.ySpeed;
    firkant.style.top = toppen + "px";

    kantRadius += egenskaper.borderRad;
    firkant.style.borderRadius = kantRadius + "%";

    requestAnimationFrame(endreFirkant);
}

setInterval(endreFirkant, 200);