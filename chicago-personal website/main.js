let myImage = document.querySelector('img');
let myButton= document.querySelector('button');
let myHeading= document.querySelector('h1');
let myUsername=document.querySelector('h2');

//sets the images to swap
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'chicago-night.jpg') {
      myImage.setAttribute ('src','chicago-day.jpg');
    } else {
      myImage.setAttribute ('src','chicago-night.jpg');
    }
}

//function that sets the username
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      alert('You have not entered a name. Please enter a valid name');
      let myName='Invalid Name.';
      localStorage.setItem('name', myName);
      myUsername.textContent = 'Username: ' + myName;
    } else {
    localStorage.setItem('name', myName);
    myUsername.textContent = 'Username: ' + myName;
  }
    }

//checks if its being opened for the first time
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myUsername.textContent = 'Username: ' + storedName;
  }

//calls the setUsername function when the change user button is clicked
  myButton.onclick = function() {
    setUserName();
  }

