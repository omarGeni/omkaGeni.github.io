
let emailValid = false;
let NameValid = false;

function CheckStatus() {
    if (emailValid && NameValid) {
        document.getElementById("submit").classList.remove("disabled");
    } else {
        document.getElementById("submit").classList.add("disabled");
    }
    console.log(emailValid, NameValid);
}
document.getElementById("email").addEventListener("keyup", function (input) {
    if (!input.target.value) {
        emailValid = false;
    } else {
        emailValid = true;

    }
    CheckStatus();
    console.log("input.target.value")
});

document.getElementById("name").addEventListener("keyup", function (input) {
    if (!input.target.value) {
        NameValid = false;
    } else {
        NameValid = true;

    }
    CheckStatus();
    console.log("input.target.value")
});


function SendRequest() {

    var email = document.getElementById("email").value;
    console.log(email);
    var name = document.getElementById("name").value;
    console.log(name);
    var message = document.getElementById("message").value;
    console.log(message);

}

let EmailValid = false;

function CheckStatus2() {
    if (EmailValid) {
        document.getElementById("btnSubmit").classList.remove("disabled");
    } else {
        document.getElementById("btnSubmit").classList.add("disabled");
    }
}
document.getElementById("mail").addEventListener("keyup", function (input) {
    if (!input.target.value) {
        EmailValid = false;
    } else {
        EmailValid = true;

    }
    CheckStatus2();
    console.log("input.target.value")
});


function SendEmail() {
    var Email = document.getElementById("mail").value;
    console.log(Email);
}

function validation() {

    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailform = document.getElementById("email").value;
    var btnform = document.getElementById("submit");

    if (emailform.match(pattern)) {
        btnform.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Valid";
        text.style.color = "#00FF00"
        text.style.fontSize = "14px"

    } else {
        btnform.classList.add("invalid");
        text.innerHTML = "Please Enter Valid Email Address";
        text.style.color = "#FF0000";
        text.style.fontSize = "14px"
    }
    if (email == "") {
        btnform.classList.add("valid");
        text.innerHTML = "";
        text.style.color = "#00FF00"
        text.style.fontSize = "14px"

    }

};

function emailValidation() {

    var mail = document.getElementById("mail").value;
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var btnSubmit = document.getElementById("btnSubmit")


    if (mail.match(emailPattern)) {
        btnSubmit.classList.remove("invalid");
        emailText.innerHTML = "Your Email Address is Valid";
        emailText.style.color = "#00FF00"
        emailText.style.fontSize = "14px"

    } else {
        btnSubmit.classList.add("invalid");
        emailText.innerHTML = "Please Enter Valid Email Address";
        emailText.style.color = "#FF0000";
        emailText.style.fontSize = "14px"
    }
    if (mail == "") {
        btnSubmit.classList.add("invalid");
        emailText.innerHTML = "";
        emailText.style.color = "#00FF00"
        emailText.style.fontSize = "14px"

    }


};
