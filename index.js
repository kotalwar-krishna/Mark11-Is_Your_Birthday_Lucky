const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const cheack = document.querySelector("#cheack");
const output = document.querySelector("#output")

cheack.addEventListener("click", cheakBirthdayIsLucky)

function cheakBirthdayIsLucky(){
    const birthDate = dateOfBirth.value;
    const sum1 = sumCalculate(birthDate);
    // console.log(sum1);
    if((sum1 > 0)&&(luckyNumber.value > 0))
    cheackBirthDate(sum1,luckyNumber.value);
    else
    output.innerText = "Please Give Valid Input"
    
}

function sumCalculate(birthDate){
    birthDate = birthDate.replaceAll("-","");
    let sum = 0;
    for(let i=0; i < birthDate.length; i++){
        sum = sum + Number(birthDate.charAt(i));
    }
    // console.log(sum)
    return sum;

}

function cheackBirthDate(sum,luckyNumber){
    var result = sum % luckyNumber;
    if(result === 0){
        output.innerText = "Your Birthday Is Lucky"
        // console.log("Your Birthday Is Lucky");
    }else{
        output.innerText = "Your Birthday Is Not Lucky"
        // console.log("Your Birthday Is Not Lucky");
    }

}