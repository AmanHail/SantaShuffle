const hostName = localStorage.getItem("hostName");
const hostEmail = localStorage.getItem("hostEmail");
const count = localStorage.getItem("count");

const groupFields = document.getElementById("groupFields");
groupFields.innerHTML = "";

for (let i = 1; i < count; i++) {
  const memberRow = document.createElement("div");
  memberRow.classList.add("memberRow");
  // Create field and label for name
  const nameLabel = document.createElement("label");
  nameLabel.textContent = `Member ${i} Name`;
  const memberName = document.createElement("input");
  memberName.id = "memberName" + i;
  memberName.type = "text";

  // Create field and label for email
  const emailLabel = document.createElement("label");
  emailLabel.textContent = `Member ${i} Email`;
  const memberEmail = document.createElement("input");
  memberEmail.id = "memberEmail" + i;
  memberEmail.type = "email";
  // Add fields and labels to groupFields div

  // Append labels and inputs to memberRow
  memberRow.append(nameLabel, memberName, emailLabel, memberEmail);

  // Append the memberRow directly to groupFields
  groupFields.append(memberRow);
}

// POST BUTTON CLICK

// Helper for assigning roles
function shuffleArray(array) {
  for (let a = array.length - 1; a >= 0; a--) {
    const b = Math.floor(Math.random() * (a + 1));
    [array[a], array[b]] = [array[b], array[a]];
  }
}

let names = [hostName];
let emails = [hostEmail];

let initButton = document.getElementById("initButton");
initButton.onclick = function (event) {
  for (let j = 1; j < count; j++) {
    names.push(document.getElementById("memberName" + j).value);
    emails.push(document.getElementById("memberEmail" + j).value);
  }
  // Assigning logic
  shuffleArray(names);
  let assignments = [...names];
  let tempFirstName = assignments.shift();
  assignments.push(tempFirstName);

  // Emailing
};
