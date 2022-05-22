const calculator = document.querySelector("#calculator");
const nr_one = document.querySelector("#nr_one");
const nr_two = document.querySelector("#nr_two");
const regneart = document.querySelector("#regneart");
const result = document.querySelector("#result");

function calculate(btnClick) {
    btnClick.preventDefault();
    if (regneart.value === "+") {
        result.innerText = "Resultat: " + (Number(nr_one.value) + Number(nr_two.value));
    } if (regneart.value === "-") {
        result.innerText = "Resultat: " + (Number(nr_one.value) - Number(nr_two.value));
    } if (regneart.value === "*") {
        result.innerText = "Resultat: " + (Number(nr_one.value) * Number(nr_two.value));
    } if (regneart.value === "/") {
        result.innerText = "Resultat: " + (Number(nr_one.value) / Number(nr_two.value));
    } 
}
calculator.addEventListener("submit", calculate);