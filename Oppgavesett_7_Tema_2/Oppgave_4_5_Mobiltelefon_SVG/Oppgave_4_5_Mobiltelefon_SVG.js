const knapp = document.querySelector("#knapp");
const bilde = document.querySelector("#bilde");

function visBilde () {
    bilde.style.display = "block";
}

knapp.addEventListener("click", visBilde);

