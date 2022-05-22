const arrInfo = document.querySelector("#arrInfo");
const inpBilde = document.querySelector("#inpBilde");
const inpTittel = document.querySelector("#inpTittel");
const inpUkedag = document.querySelector("#inpUkedag");
const inpDato = document.querySelector("#inpDato");
const inpSted = document.querySelector("#inpSted");
const inpGuests = document.querySelector("#inpGuests")

const bilde = "./hk.png";
const tittel = "Høyskolen Kristiania 100 år";
const ukedag = "Torsdag";
const dato = "2019-10-17";
const sted = "Campus Spikersuppa";
const guests = "500";

function visEksisterende (b, t, u, d, s, g) {
    arrangementer.innerHTML = `
        <li>
        <div><img src="${b}"></div>
        <div>
            <p id="tittel">${t}</p>
            <p id="ukeDatoSted">${u}, ${d} at ${s}</p>
            <p id="gjester">${g} guests</p>
            <p id="interested">Interested Going</p>
        </div>
        </li>
`}

visEksisterende(bilde, tittel, ukedag, dato, sted, guests);

function leggTil (evt) {
    evt.preventDefault();
    arrangementer.innerHTML += `
        <li>
        <div><img src="${inpBilde.value}"></div>
        <div>
            <p id="tittel">${inpTittel.value}</p>
            <p id="ukeDatoSted">${inpUkedag.value}, ${inpDato.value} at ${inpSted.value}</p>
            <p id="gjester">${inpGuests.value} guests</p>
            <p id="interested">Interested Going</p>
        </div>
        </li>
    `}

arrInfo.addEventListener("submit", leggTil);