"use strict";

const storedUsername = "miguel";
const storedPassword = "elmasalto";

function login () {
    const username = prompt("Enter the username (Max 10 characters):");

    if ((username === null) || (username.length == 0) || (username.length > 10)) {
        alert("Access denied");
        location.reload();
    } else {
        const password = prompt("Enter the password (Min 5 characters):");

        if ((password === null) || (password.length == 0) || (password.length < 5)) {
            alert("Access denied");
            location.reload();
        } else {
            if (username === storedUsername && password === storedPassword) {
                alert("Access granted");
                document.getElementById("mainContent").style.display = "block";
            } else {
                alert("The username or password are incorrect");
            
                const tryAgain = confirm("Do you wish to try again?");
                if (tryAgain) {
                    location.reload();
                } else {
                    alert("Access denied");
                    location.reload();
                }
            }
        }
    }
}

window.onload = function() {
    login();
}