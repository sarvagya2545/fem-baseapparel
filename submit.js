document.getElementsByClassName("img-submit")[0].addEventListener("click", function(event) {
  event.preventDefault();
  var emailInput = document.querySelector(".form-email").value;
  if (!(verifyEmail(emailInput))) {
    document.getElementById("err").src = "images/icon-error.png";
  } else {
    document.getElementById("err").src = "";
  }
});

function verifyEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
