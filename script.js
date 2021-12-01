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
  ]

function cleanUpIndex() {
    const parent = document.querySelector(".main")
    const child = document.querySelectorAll(".contact")

    while (child) {
       parent.removeChild(child)
   }

}

function createSingleIndex(contactList) {
    const a = document.createElement("a")
    a.herf = "page3.html"

    const div = document.createElement("div")
    div.setAttribute("class", "contact")
    a.appendChild(div)

    const p = document.createElement("p")
    p.innerHTML = contactList.name
    div.appendChild(p)
};


function renderIndex(contactList) {
    const main = document.querySelector(".main")

    for (var i = 0; i < contactList.length; i += 1) {
        var singlecontact = contactList[i];
        main.append(createSingleIndex(singlecontact))
    }

}

function cleanUpView() {
    const parent = document.querySelector(".contactinfo")
    const name = document.querySelector(".contactname")
    const email = document.querySelector(".contactemail")
    const phone = document.querySelector(".contactphone")
    const address = document.querySelector(".contactaddress")

    if (name) {
        parent.remove(name)
    }
    if (email) {
        parent.remove(email)
    }
    if (phone) {
        parent.remove(phone)
    }
    if (address) {
        parent.remove(address)
    }

};

function renderView(contactList) {
    const div =  document.createElement("div")
    div.classList.add("contactinfo")

    const div1 = document.createElement("div")
    div1.classList.add("contactname")
    div1.innerHTML = contactList.name
    div.appendChild(div1)

    const div2 = document.createElement("div")
    div2.classList.add("contactemail")
    div2.innerHTML = contactList.email
    div.appendChild(div2)

    const div3 = document.createElement("div")
    div3.classList.add("contactphone")
    div3.innerHTML = contactList.phone
    div.appendChild(div3)

    const div4 = document.createElement("div")
    div4.classList.add("contactaddress")
    div4.innerHTML = contactList.address
    div.appendChild(div4)

};

function cleanUpCreate() {
    const parent = document.querySelector(".form")
    const child = document.querySelectorAll(".inputcontainer")

    while (child) {
        parent.remove(child)
    }
};

function renderCreate(contactList) {
    const div = document.createElement("form")

    const div1 = document.createElement("div")
    div1.setAttribute("class", "inputcontainer")
    div.appendChild(div1)

    const input1 = document.createElement("input")
    input1.setAttribute("type", "text")
    input1.setAttribute("id", "contactname")
    input1.setAttribute("name", "contactname")
    input1.setAttribute("placeholder", contactList.name)
    div1.appendChild(input1)

    const button1 = document.createElement("button")
    button1.setAttribute("class", "extrafield")
    button1.setAttribute("id", "extranamefield")
    button1.setAttribute("name", "extranamefield")
    input1.appendChild(button1)
//--------------------
    const div2 = document.createElement("div")
    div2.setAttribute("class", "inputcontainer")
    div.appendChild(div2)

    const input2 = document.createElement("input")
    input2.setAttribute("type", "tel")
    input2.setAttribute("id", "contactphone")
    input2.setAttribute("name", "contactphone")
    input2.setAttribute("placeholder", contactList.phone)
    div2.appendChild(input2)

    const button2 = document.createElement("button")
    button2.setAttribute("class", "extrafield")
    button2.setAttribute("id", "extraphonefield")
    button2.setAttribute("name", "extraphonefield")
    input2.appendChild(button2)
//--------------
    const div3 = document.createElement("div")
    div3.setAttribute("class", "inputcontainer")
    div.appendChild(div3)

    const input3 = document.createElement("input")
    input3.setAttribute("type", "text")
    input3.setAttribute("id", "contactaddress")
    input3.setAttribute("name", "contactaddress")
    input3.setAttribute("placeholder", contactList.address)
    div3.appendChild(input3)

    const button3 = document.createElement("button")
    button3.setAttribute("class", "extrafield")
    button3.setAttribute("id", "extraaddressfield")
    button3.setAttribute("name", "extraaddressfield")
    input3.appendChild(button3)
//-----------------
    const div4 = document.createElement("div")
    div4.setAttribute("class", "inputcontainer")
    div.appendChild(div4)

    const input4 = document.createElement("input")
    input4.setAttribute("type", "email")
    input4.setAttribute("id", "contactemail")
    input4.setAttribute("name", "contactemail")
    input4.setAttribute("placeholder", contactList.email)
    div4.appendChild(input4)

    const button4 = document.createElement("button")
    button4.setAttribute("class", "extrafield")
    button4.setAttribute("id", "extraemailfield")
    button4.setAttribute("name", "extraemailfield")
    input4.appendChild(button4)

};

