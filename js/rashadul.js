/**
 * Email js
 */

const cForm = document.getElementById("contact_me");
const ustatus = document.getElementById("ustatus");

cForm.addEventListener("submit", function( e ) {
    // prevent submition
    e.preventDefault();
    const uname = document.getElementById("uname").value;
    const umail = document.getElementById("umail").value;
    const subject = document.getElementById("subject").value;
    const umessage = document.getElementById("umessage").value;
    
    // check the value
    if(uname, umail, subject, umessage) {
        
        // email js param
        var templateParams = {
            name: uname,
            email: umail,
            subject: subject,
            message: umessage
        };
         
        emailjs.send('service_8eoo6ni', 'template_068iu0m', templateParams)
            .then(function(response) {
                
                ustatus.classList.remove("text-danger");
                ustatus.classList.add("text-success");
                ustatus.innerText = "Your email has been sent successfully. Thank you for contacting me!";

            }, function(error) {
                ustatus.innerText = "Sorry, there was an error sending your email. Please try again later or contact support for assistance.";
        });

    } else {
        ustatus.innerText = "Please fill in all required fields before submitting the form!"
    }

});
