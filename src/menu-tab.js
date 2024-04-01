// the images for the dishes are imported
import Dish1 from './dish1.png'; 
import Dish2 from './dish2.png'; 
import Dish3 from './dish3.png'; 

// the function to implement the menu tab
function menuTab() {
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
    tabContent.style.fontSize = "1.5rem";
    tabContent.style.color = "yellowgreen";
    tabContent.style.fontWeight = "bold"; 

    // the divs to hold the dish images and explanations are created
    let dishDivArray = []; 
    for (let i = 0; i < 3; i++) {
        dishDivArray.push(document.createElement("div"));
    }
    // the array with the names of the dishes
    const dishNameArray = ["DishName1", "DishName2", "DishName3"]; 
    // the array with the images of the dishes
    let dishImageArray = [Dish1, Dish2, Dish3]; 

    // the dish divs are styled and filled with related contents
    for (let i = 0; i < 3; i++) { 
        // the styling of each dish div
        dishDivArray[i].style.display = "flex"; 
        dishDivArray[i].style.flexDirection = "column";
        dishDivArray[i].style.justifyContent = "center";
        dishDivArray[i].style.alignItems = "center"; 
        // text div part of the dish div is created and filled with its content
        const textDiv = document.createElement("div");
        textDiv.textContent = dishNameArray[i]; 
        // text div is added to the dish div 
        dishDivArray[i].appendChild(textDiv); 
        // dish image is added to the dish div
        const theDishImage = new Image(); 
        theDishImage.src = dishImageArray[i]; 
        dishDivArray[i].appendChild(theDishImage); 
        // the dish div is added to the tab
        tabContent.appendChild(dishDivArray[i]);
    } 
} 

// the menu tab function is exported
export { menuTab };