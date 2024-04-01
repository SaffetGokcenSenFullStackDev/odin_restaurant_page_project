// the function to implement the contact tab
function contactTab() {
    // access to the content element
    const contentElement = document.getElementById("content"); 
    // access to the tabContent div
    const tabContentArray = contentElement.getElementsByClassName("tabContent"); 
    const tabContent = tabContentArray[0];
    // tabContent is a flex container
    tabContent.style.display = "flex";
    tabContent.style.flexDirection = "column";
    tabContent.style.justifyContent = "center";
    tabContent.style.alignItems = "center";
    tabContent.style.gap = "1.0rem";
    tabContent.style.fontSize = "1.2rem";
    tabContent.style.color = "yellowgreen";
    tabContent.style.fontWeight = "bold";
    // an address div is created
    const addressDiv = document.createElement("div");
    addressDiv.textContent = "Address: Restaurants District, Soup Street, 18/7 Lovelycountry.";
    // the address div is added
    tabContent.appendChild(addressDiv); 
    // an e-mail div is created
    const emailDiv = document.createElement("div");
    emailDiv.textContent = "E-mail: vegan.heaven@mailserver.com";
    // the e-mail div is added
    tabContent.appendChild(emailDiv); 
    // a gsm div is created 
    const gsmDiv = document.createElement("div"); 
    gsmDiv.textContent = "Gsm: 34290342";
    // the gsm div is added 
    tabContent.appendChild(gsmDiv);
}

// contactTab function is exported
export {contactTab};