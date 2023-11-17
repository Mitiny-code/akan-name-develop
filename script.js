//function
//getValues
//output

let generateAkanName = function() {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value-1;
    const day = document.getElementById("day").value;
    const gender = document.getElementById("akanform").gender.value;
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const validDate = new Date(year, month, day);
    let dayOfTheWeek = validDate.getDay();
    console.log(gender)
    const akanName = gender == "Male" ? maleNames[dayOfTheWeek] : femaleNames[dayOfTheWeek];
    let message = "Your akan name is:";
    alert(message + akanName);    
}



