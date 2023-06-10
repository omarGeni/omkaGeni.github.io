
    let emailValid = false;
    let NameValid = false;


    function CheckStatus() {
        if (emailValid && NameValid) {
            document.getElementById("submit").classList.remove("disabled");
        } else {
            document.getElementById("submit").classList.add("disabled");
        }
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
        var subject = document.getElementById("subject").value;
        console.log(subject);
        var message = document.getElementById("message").value;
        console.log(message);

    }

    function validation() {
        var email = document.getElementById("email").value;
        var submitform = document.getElementById('submit');
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email.match(pattern)) {
            submitform.classList.remove("invalid");
            text.innerHTML = "Your Email Address is Valid";
            text.style.color = "#00FF00"
            text.style.fontSize = "14px"

        } else {
            submitform.classList.add("invalid");
            text.innerHTML = "Please Enter Valid Email Address";
            text.style.color = "#FF0000";
            text.style.fontSize = "14px"
        }
        if (email == "") {
            submitform.classList.add("valid");
            text.innerHTML = "";
            text.style.color = "#00FF00"
            text.style.fontSize = "14px"

        }

    };
