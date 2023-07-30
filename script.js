function makeAnimation(){
    document.querySelector(".enroll-btn").classList.add("clicked");
    setTimeout(function(){
        document.querySelector(".enroll-btn").classList.remove("clicked");
    },100);
}

function isEmpty(){
    let gender = document.getElementsByName("r1");
    let genderFlag = 0;
    for(var i=0; i<gender.length; i++){
        if (gender[i].checked){
            genderFlag = 1;
        }
    }
    let skill = document.querySelectorAll(".check-input")
    let skilledAt = "";
    for(var i=0; i<skill.length; i++){
        if (skill[i].checked){
            skilledAt = skilledAt + skill[i].value + " ";
        }
    }
    if (document.querySelector("#name").value == ""){
        return true;
    }
    else if (genderFlag == 0){
        return true;
    }
    else if (document.querySelector("#file").value == ""){
        return true;
    }
    else if (skilledAt == ""){
        return true;
    }
    else if(document.querySelector("#email").value == ""){
        return true;
    }
    else if(document.querySelector("#password").value == ""){
        return true;
    }
    else{
        return false;
    }
}

function addDetails(detail){
    let li = document.createElement("li");
    li.innerHTML = detail;
    let totalStudent = document.querySelectorAll(".details-list").length;
    document.querySelectorAll(".details-list")[totalStudent-1].appendChild(li);
}

function fetchData(){
    let name = document.querySelector("#name").value
    console.log("Name : ",name);

    let gender = document.getElementsByName("r1");
    let genderName ="";
    for(var i=0; i<gender.length; i++){
        if (gender[i].checked){
            genderName = gender[i].value;
            console.log("Gender : ",gender[i].value);
        }
    }

    let file = document.querySelector("#file").value
    console.log("Image path : ",file);

    let skill = document.querySelectorAll(".check-input");
    let skilledAt = "";
    for(var i=0; i<skill.length; i++){
        if (skill[i].checked){
            skilledAt = skilledAt + skill[i].value + " ";
        }
    }
    console.log("Skill : ",skilledAt);    

    let email = document.querySelector("#email").value
    console.log("Email : ",email);

    let password = document.querySelector("#password").value
    console.log("Password : ",password);

    //creating div

    let divStudentDetails = document.createElement("div");
    divStudentDetails.classList.add("student-details-box");
    divStudentDetails.innerHTML = `<ul class="details-list"></ul>`;
    document.querySelector(".enrollment-data").appendChild(divStudentDetails);

    addDetails(name);
    addDetails(genderName);
    addDetails(skilledAt);
    addDetails(email);
    addDetails(password);

    let divStudentPhoto = document.createElement("div");
    divStudentPhoto.classList.add("student-pic-box");
    divStudentPhoto.innerHTML = `<img src="images/user` + genderName + `.png" class="student-pic">`;
    document.querySelector(".enrollment-data").appendChild(divStudentPhoto);

    document.querySelector(".enrollment-form").reset();
}

document.querySelector(".enroll-btn").addEventListener("click", function(){

    makeAnimation();

    if (isEmpty()){
        alert("All fields are mandatory!");
    }
    else{
        fetchData();
    }
})