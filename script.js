const contact = document.querySelectorAll(".contact");
const main = document.querySelector(".main");

let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    }
  ];

function cleanUpIndex() {
   while (contact) {
       contact.remove();
   };

};

function createSingleIndex(contactList) {
   let a = document.createElement("a");
   let div = document.createElement("div");
   let p = document.createElement("p");
   div.classList.add("contact")
   p = contactList[0][0];
   div.innerHTML = p;
   a.appendChild(div)

};

function renderIndex(contactList) {
    for (var i = 0; i < contactList.length; i += 1) {
        var singlecontact = contactList[i]
        createSingleIndex(singlecontact).append(main);
    }

};

function cleanUpView() {
    

};

function renderView(contact) {

};

function cleanUpCreate() {

};

function renderCreate(contact) {

};