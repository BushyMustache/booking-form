document.getElementById("vacation-form").onsubmit = () => {

    clearErrors();

    let isValid = true;

    let destination = document.getElementById("destination").value.trim();
    if (destination == "none") {
        document.getElementById("err-destination").style.display = "inline-block";
        isValid = false;
    }

    let travelers = document.getElementById("travelers").value.trim();
    if (travelers <= 0) {
        document.getElementById("err-travelers").style.display = "inline-block";
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}