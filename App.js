function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(!filter.test(email.value)) {
        var emailResponse = document.getElementById('email-response');
        emailResponse.textContent = 'Please provide a valid email';
        email.focus;
        return false;
    }
}