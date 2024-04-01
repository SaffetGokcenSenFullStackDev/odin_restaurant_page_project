// the function to implement the home tab
function homeTab() {
    // access to the content element
    const contentElement = document.getElementById("content"); 
    // access to the tabContent div
    const tabContentArray = contentElement.getElementsByClassName("tabContent"); 
    const tabContent = tabContentArray[0];
    // tabContent is a flex container
    tabContent.style.display = "flex";
    // the styling for the tabContent
    tabContent.style.flexDirection = "column";
    tabContent.style.justifyContent = "center";
    tabContent.style.alignItems = "center";
    tabContent.style.gap = "1.0rem";
    tabContent.style.fontSize = "1.2rem";
    tabContent.style.color = "yellowgreen";
    tabContent.style.fontWeight = "bold"; 
    // the div for the introduction to the restaurant is created 
    const introductionDiv = document.createElement("div"); 
    // the styling of the introduction div
    introductionDiv.style.width = "33vw";
    introductionDiv.style.display = "flex"; 
    introductionDiv.style.flexDirection = "column"; 
    introductionDiv.style.gap = "7px";
    // the div to hold the title of the introduction is created
    const introTitle = document.createElement("div"); 
    // the title of the introduction
    introTitle.textContent = "ORGANIC INTRO"; 
    // the div to hold the introduction text is created 
    const introText = document.createElement("div"); 
    // the introduction text
    const theText = `Şen's Vegan Heaven offers the best vegan menu. Fresh, 
    healthy and delicious food look forward to you. Of course, there are tasty 
    drinks, as well. Do not hesitate to come to the address in the contact tab 
    whenever you request a really great vegan menu.`;
    introText.textContent = theText; 
    // the introduction text alignment is set
    introText.style.textAlign = "justify"; 
    // the introduction title and text are added to the dom
    introductionDiv.appendChild(introTitle); 
    introductionDiv.appendChild(introText);
    tabContent.appendChild(introductionDiv); 
    // the div to hold the working hours is created 
    const workHoursDiv = document.createElement("div"); 
    // the styling of the working hours div
    workHoursDiv.style.width = "33vw";
    workHoursDiv.style.display = "flex"; 
    workHoursDiv.style.flexDirection = "column"; 
    workHoursDiv.style.gap = "7px";
    // the div to hold the working hour title 
    const workHourTitle = document.createElement("div"); 
    workHourTitle.textContent = "WORKING HOURS"; 
    workHoursDiv.appendChild(workHourTitle); 
    // the div to hold the working hours 
    const workingHours = document.createElement("div"); 
    workingHours.textContent = `From 9:00 am to 7:00 pm throughout the week.`; 
    // the working hours text alignment is set
    workingHours.style.textAlign = "justify"; 
    // the working hours info is added to the dom
    workHoursDiv.appendChild(workingHours); 
    tabContent.appendChild(workHoursDiv);
}

export {homeTab};