// const contactForm = document.querySelector(".contactForm");
// let name = document.getElementById("name");
// let email = document.getElementById("email");
// let subject = document.getElementById("subject");
// let message = document.getElementById("message");

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let formData = {
//     name: name.value,
//     email: email.value,
//     subject: subject.value,
//     message: message.value,
//   };


//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "/contact");
//   xhr.setRequestHeader("content-type", "application/json");
//   xhr.onload = function () {
//     console.log(xhr.responseText);
//     if (xhr.responseText == "success") {
//       alert("email sent");
//       name.value = "";
//       email.value = "";
//       subject.value = "";
//       message.value = "";
//     } else {
//       alert("message not sent");
//     }
//   };

//   xhr.send(JSON.stringify(formData));
// });
