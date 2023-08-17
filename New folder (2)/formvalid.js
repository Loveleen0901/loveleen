let form = document.getElementById("contactus").value;

form.addEventListener("submit", function(event){
    event.preventDefault();
    if (validate()){
        form.onsubmit();
    }
});

function validate(){
    let valid = true;

    let firstname = document.getElementById("firstname").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let date = document.getElementById("date").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let messege = document.getElementById("messege").value.trim();

    // validate rules
    if (firstname.length >= 5){
        valid= true;
    }
    else{
        alert("First name should be at least 5 characters.")
    }
    if (lastname.length >= 5){
        valid= true;
    }
    else{
        alert("Last name should be at least 5 characters.")
    }
    if (email.includes('@')){
        valid = true;
    }
    else{
        alert("Email should contain the domain name (with '@').")
    }
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(date)) {
        valid = true;
    }
    else{
        alert("Date must have the appropriate format (dd/mm/yyyy).");
    }

    if (contact.length == 10) {
        valid = true;
    }
    else{
        alert("Phone must contain 10 digits.");
    }
    if (messege.length >= 50) {
        valid = true;
    }
    else{
        alert("Message must be of at least 50 alphabets.");
    }

    return valid;
}





