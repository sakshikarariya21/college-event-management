document.getElementById("registerForm").addEventListener("submit", function(e){

e.preventDefault();

let data = {
name: document.getElementById("name").value,
roll: document.getElementById("roll").value,
course: document.getElementById("course").value,
year: document.getElementById("year").value,
semester: document.getElementById("semester").value,
email: document.getElementById("email").value,
event: document.getElementById("event").value
};

let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

registrations.push(data);

localStorage.setItem("registrations", JSON.stringify(registrations));

document.getElementById("successMessage").innerHTML =
"Registration Successful!";

document.getElementById("registerForm").reset();

});