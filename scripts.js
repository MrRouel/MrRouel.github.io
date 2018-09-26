function validateForm() {
    var x = document.forms["contactForm"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    if(/\d/.test(x)){
        alert("Name must not contain any numbers");
        return false;
    }
}	