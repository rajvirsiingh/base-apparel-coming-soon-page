let mail = document.getElementById("text");
let btn = document.querySelector(".btn");
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
btn.addEventListener("click", function () {
  checkInputs();
});
function checkInputs() {
  let emailValue = mail.value;
  if (emailValue.match(mailformat)) {
    document.querySelector(".msg-1").innerHTML = "Thank You for Subscribing";
  } else {
    document.querySelector(".msg-1").innerHTML = "Invalid Email Address";
    document.querySelector("i").style.opacity = "1";
  }
}
