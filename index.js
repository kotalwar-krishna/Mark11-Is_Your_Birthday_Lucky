const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const cheack = document.querySelector("#cheack");

cheack.addEventListener("click", function getValues(){
    console.log(dateOfBirth.value, luckyNumber.value);
})
