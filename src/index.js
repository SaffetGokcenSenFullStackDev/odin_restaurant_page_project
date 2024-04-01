// initialPageLoad function is imported
import {initialPageLoad} from "./initial-page-load.js"; 
// contactTab function is imported 
import { contactTab } from "./contact-tab.js"; 
// homeTab function is imported 
import { homeTab } from "./home-tab.js";
// menuTab function is imported 
import { menuTab } from "./menu-tab.js";

// initialPageLoad function is run
initialPageLoad(); 

// the content element is accessed
const contentElement = document.getElementById("content"); 
// the fixed div is created
const theFixedDiv = document.getElementById("fixedDiv"); 
// the contact tab button is created
const theContactTab = document.createElement("button"); 
// the contact tab button text is defined
theContactTab.textContent = "CONTACT";
// the class of the contact tab button is set
theContactTab.className = "tabButton";
// the home tab button is created
const theHomeTab = document.createElement("button");
// the home tab button text is defined
theHomeTab.textContent = "HOME";
// the class of the home tab button is set
theHomeTab.className = "tabButton";
// the menu tab button is created
const theMenuTab = document.createElement("button");
// the menu tab button text is defined
theMenuTab.textContent = "MENU"; 
// the class of the menu tab button is set
theMenuTab.className = "tabButton";
// the div to hold the tab buttons is created
const tabDiv = document.createElement("div"); 
// the class of the tab div is set
tabDiv.className = "tabDiv"; 
// the tab buttons are added to their div
tabDiv.appendChild(theHomeTab);
tabDiv.appendChild(theMenuTab);
tabDiv.appendChild(theContactTab);
// the tabdiv is a child of the fixed div.
theFixedDiv.appendChild(tabDiv);

// the div which will hold the tab content is created
const tabContent = document.createElement('div');
// the class of the tabContent is set
tabContent.className = "tabContent";
contentElement.appendChild(tabContent);

// the option for the event listeners
const once = {
    once: true,
};

function contactTabPressed() {
    // the content of the tabContent div is erased
    while (tabContent.firstChild) {
        tabContent.removeChild(tabContent.firstChild);
    }
    // contact tab function is called
    contactTab(); 
    // the event listener for the home tab is created
    theHomeTab.addEventListener('click', homeTabPressed, once); 
    // catches the click on the menu tab
    theMenuTab.addEventListener('click', menuTabPressed, once);
}

function homeTabPressed() {
    // the content of the tabContent div is erased
    while (tabContent.firstChild) {
        tabContent.removeChild(tabContent.firstChild);
    }
    // contact tab function is called
    homeTab(); 
    // the event listener for the contact tab is created 
    theContactTab.addEventListener('click', contactTabPressed, once); 
    // catches the click on the menu tab
    theMenuTab.addEventListener('click', menuTabPressed, once);
} 

function menuTabPressed() {
    // the content of the tabContent div is erased
    while (tabContent.firstChild) {
        tabContent.removeChild(tabContent.firstChild);
    }
    // menu tab function is called
    menuTab(); 
    // the event listener for the contact tab is created 
    theContactTab.addEventListener('click', contactTabPressed, once); 
    // the event listener for the home tab is created
    theHomeTab.addEventListener('click', homeTabPressed, once);
}

// catches the click on the contact tab
theContactTab.addEventListener('click', contactTabPressed, once); 
// catches the click on the home tab
theHomeTab.addEventListener('click', homeTabPressed, once); 
// catches the click on the menu tab
theMenuTab.addEventListener('click', menuTabPressed, once);