function validateForm() {
    let isValid = true;

    const name = document.forms["contactForm"]["name"].value.trim();
    const email = document.forms["contactForm"]["email"].value.trim();
    const topic = document.forms["contactForm"]["topic"].value;
    const message = document.forms["contactForm"]["message"].value.trim();
    const agreement = document.forms["contactForm"]["agreement"].checked;
    const feedbackType = document.querySelector("input[name='feedbackType']:checked");

    document.getElementById("name-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("topic-error").innerHTML = "";
    document.getElementById("type-error").innerHTML = "";
    document.getElementById("message-error").innerHTML = "";
    document.getElementById("agreement-error").innerHTML = "";
    document.getElementById("form-success").innerHTML = "";

    if (name === "") {
        document.getElementById("name-error").innerHTML = "Name must be filled out.";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("email-error").innerHTML = "Email must be filled out.";
        isValid = false;
    } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    if (topic === "") {
        document.getElementById("topic-error").innerHTML = "Please choose a topic.";
        isValid = false;
    }

    if (feedbackType === null) {
        document.getElementById("type-error").innerHTML = "Please choose a feedback type.";
        isValid = false;
    }

    if (message === "") {
        document.getElementById("message-error").innerHTML = "Message must be filled out.";
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById("message-error").innerHTML = "Message must contain at least 10 characters.";
        isValid = false;
    }

    if (!agreement) {
        document.getElementById("agreement-error").innerHTML = "Please confirm the agreement.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("form-success").innerHTML = "Thank you. The form was validated successfully.";
        document.forms["contactForm"].reset();
    }

    return false;
}