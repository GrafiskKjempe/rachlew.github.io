let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/lucas-spider.jpg") {
      myImage.setAttribute("src","images/asb.jpg");
    } 
    else {
      myImage.setAttribute("src","images/lucas-spider.jpg");
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(myName === "rachlew") {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Current user: " + myName;
    }
    else if(myName === "asbjørn") {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Current user: " + myName;    
    }
    else {
        setUserName();
    }
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Current user: ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }
