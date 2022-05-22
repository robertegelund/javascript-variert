const hyggehilsen = document.querySelector("#hyggehilsen");
const navn = document.querySelector("#navn");
const beskrivelse = document.querySelector("#beskrivelse"); 

function skriv_hilsen () {
    hyggehilsen.innerHTML = `Hei ${navn.value}, ${beskrivelse.value}`;
}

navn.addEventListener("input", skriv_hilsen);
beskrivelse.addEventListener("input", skriv_hilsen);