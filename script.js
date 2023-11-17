//function
//getValues
//output

let generateAkanName = function() {
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const validDate = new Date(year, month, day);
    let dayOfTheWeek = validDate.getDay();
    const akanName = gender == "male" ? maleNames[dayOfTheWeek] : femaleNames[dayOfTheWeek];
    console.log(akanName)
}



