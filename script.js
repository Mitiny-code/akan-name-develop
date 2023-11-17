//function
//getValues
//output

let generateAkanName = function() {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    // const gender = document.getElementById("akanform").gender.value;
   // const gender = "male"
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const validDate = new Date(year, month, day);
    let dayOfTheWeek = validDate.getDay();
    const akanName = gender == "male" ? maleNames[dayOfTheWeek] : femaleNames[dayOfTheWeek];
    /*console.log(akanName);*/
    alert(akanName);
    
}



