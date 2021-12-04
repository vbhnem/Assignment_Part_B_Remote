const mainDiv = document.querySelector(".main")

const contactList = [
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

const Contacts = document.querySelector("#contactshome")

Contacts.addEventListener("click", (e) => {
    cleanUpIndex()
    renderIndex(contactList)
    e.preventDefault()
})

const Create_New_Contact = document.querySelector("#newcontact")

Create_New_Contact.addEventListener("click", (e) => {
    cleanUpIndex()
    renderCreate()
    e.preventDefault()
})



function cleanUpIndex() {
    while (mainDiv.lastChild){
        mainDiv.lastChild.remove()
    }
}

function createSingleIndex(contact) {
    const aa = document.createElement("a")
    const Div = document.createElement("div") 
    Div.classList.add("contact")

    const para = document.createElement("p")
    const text_name = document.createTextNode(contact.name)
    para.append(text_name)

    Div.append(para)
    aa.append(Div)
    //aa.href = "page3.html"
    
    aa.addEventListener("click", (e) => {
        cleanUpView()
        const name = contact.name
        var storage = -1
        for (var i=0; i<contactList.length; i++ ){
            if (name == contactList[i].name) {
                
                storage = i
                break
            }
        }
        if (storage != -1){
            cleanUpIndex()
            renderView(contactList[storage])
        }
        
        e.preventDefault()
    })

    return aa;

};


function renderIndex(contactArray) {
    contactArray.forEach ((ele) => {
        mainDiv.append(createSingleIndex(ele))
    })
    
}

function cleanUpView() {
    while (mainDiv.lastChild) {
        mainDiv.lastChild.remove()
    }

}

function renderView(contact) {
    cleanUpView()

    const contactInfo = document.createElement("div")
    contactInfo.classList.add("contactinfo")

    const contactName = document.createElement("div")
    contactName.classList.add("contactname")
    const text_name = document.createTextNode(contact.name)
    contactName.append(text_name)

    const Img = document.createElement("img")
    Img.src = "./img/profile.jpg"
    Img.classList.add("profilepic")
    contactName.append(Img)
        
    const contactEmail = document.createElement("div")
    contactEmail.classList.add("contactemail")
    const text_email = document.createTextNode("email: " + contact.email)
    contactEmail.append(text_email)

    const contactPhone = document.createElement("div")
    contactPhone.classList.add("contactphone")
    const text_phone = document.createTextNode("cell: " + contact.phone)
    contactPhone.append(text_phone)

    const contactAddress = document.createElement("div")
    contactAddress.classList.add("contactaddress")
    const text_address = document.createTextNode("address: " + contact.address)
    contactAddress.append(text_address)

    const buttons = document.createElement("div")
    buttons.classList.add("buttons")

    const button1 = document.createElement("button")
    button1.classList.add("button")
    button1.classList.add("edit")
    button1.value = "Edit"
    const text1 = document.createTextNode("Edit")
    button1.append(text1)
    buttons.append(button1)

    const button2 = document.createElement("button")
    button2.classList.add("button")
    button2.classList.add("close")
    button2.value = "Close"
    const text2 = document.createTextNode("Close")
    button2.append(text2)
    buttons.append(button2)


    contactInfo.append(contactName)
    contactInfo.append(contactEmail)
    contactInfo.append(contactPhone)
    contactInfo.append(contactAddress)
    contactInfo.append(buttons)

    mainDiv.append(contactInfo)

    button2.addEventListener("click", (e) => {
        cleanUpIndex()
        renderIndex(contactList)
        e.preventDefault()
    })
}

function cleanUpCreate() {
    while (mainDiv.lastChild) {
        mainDiv.lastChild.remove()
    }
}

const parser = new DOMParser()

const inputId = [
    "contactname", "contactphone", "contactaddress", "contactemail"
]
const placeHolder = [
    "Contact Name", " Contact Phone", " Contact Address", " Contact Email"
]

const type = [
    "text", "tel", "text", "email"
]
const extraFieldTxt = "<button class='extrafield' id='extraaddressfield' name='extraaddressfield'></button>"

function renderCreate() {
    cleanUpCreate()

    let contactEditDiv = document.createElement("div")
    contactEditDiv.classList.add("contactedit")

    let contactImgDiv = document.createElement("div");
    contactImgDiv.classList.add("contactimg")
    const imgTag = document.createElement("img")
    imgTag.classList.add("profilepic")
    imgTag.src = "./img/profile.jpg"
    imgTag.alt = "Profile picture"

    contactImgDiv.append(imgTag)
    contactEditDiv.append(contactImgDiv)

    let formDiv = document.createElement("div")
    formDiv.classList.add("form")

    let myForm = document.createElement("form")

    for (let i = 0; i <4; i++) {
        const inputContainerDiv = document.createElement("div")
        
        inputContainerDiv.classList.add("inputcontainer")
        
        const inputTxt = `<input type="${type[i]}" id="${inputId[i]}" name="${inputId[i]}" placeholder="${placeHolder[i]}"></input>`
        
        inputContainerDiv.innerHTML = inputTxt

        let btn = parser.parseFromString(extraFieldTxt, "text/html").body.firstChild
        btn.textContent = "+"
        inputContainerDiv.append(btn)

        myForm.append(inputContainerDiv)
    }

    let btnDiv =document.createElement('div')
    btnDiv.classList.add("buttons")
   
    const button1 = document.createElement("button")
    button1.classList.add("button")
    button1.classList.add("save")
    const text_save = document.createTextNode("Save")
    button1.append(text_save)
    btnDiv.append(button1)

    const button2 = document.createElement("button")
    button2.classList.add("button")
    button2.classList.add("cancel")
    const text_cancel = document.createTextNode("Cancel")
    button2.append(text_cancel)
    btnDiv.append(button2)
    
    myForm.append(btnDiv)

    formDiv.append(myForm)

    contactEditDiv.append(formDiv)

    mainDiv.append(contactEditDiv)

    button2.addEventListener("click", (e) => {
        cleanUpIndex()
        renderIndex(contactList)
        e.preventDefault()
    })

    button1.addEventListener("click", (e) => {
        const contactName = document.querySelector("#contactname")
        const contactPhone = document.querySelector("#contactphone")
        const contactAddtess = document.querySelector("#contactaddress")
        const contactEmail = document.querySelector("#contactemail")

        let contact = {
            name: contactName.value,
            phone: contactPhone.value,
            address: contactAddtess.value,
            email: contactEmail.value
        }
        
        contactList.push(contact)
        cleanUpView()
        renderIndex(contactList)
        e.preventDefault()
    })
}

window.addEventListener("load", (e) => {
    cleanUpIndex()
    renderIndex(contactList)
    e.preventDefault()
})
