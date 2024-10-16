let count = null;
let hostName = null;
let hostEmail = null;
let emails = null;

let hostButton = document.getElementById("hostButton");

hostButton.onclick = function (event) {
  event.preventDefault();
  hostName = document.getElementById("name").value;
  hostEmail = document.getElementById("email").value;
  count = document.getElementById("quantity").value;
  if (count < 3 || count > 20) {
    window.alert("Please ensure fields are filled properly");
  } else {
    localStorage.setItem("hostName", hostName);
    localStorage.setItem("hostEmail", hostEmail);
    localStorage.setItem("count", count);

    window.location.href = "group.html";
  }
};
