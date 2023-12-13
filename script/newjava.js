// SELECT UNIVERSITY

const result = document.querySelector('.result');

// when university is selected
function UNI() {
  var selectedUniversity = document.getElementById("universitySelect").value;
  var messageElement = document.getElementById("message");

  if (selectedUniversity !== "") {
      messageElement.textContent = "You go to " + selectedUniversity;
  } else {
      messageElement.textContent = ""; 
  }

  console.log(messageElement.textContent);
}




const currentDate = new Date();
const dateValue = currentDate.toString();
console.log(dateValue);

const timeValue = currentDate.toLocaleTimeString();

console.log(dateValue); 
console.log(timeValue);


function message(){
	result.textContent = "Thank you for the input."
}

//ask user for country of origin
function messageOutput() {
  const name = document.getElementById('origincountry').value;
  document.getElementById("Thanks!").textContent = "Join other members on Uni-Verse from " + name;
}

 
  //  function updateClock() {
  //   const now = new Date();
  //   const hours = now.getHours().toString().padStart(2, '0');
  //   const minutes = now.getMinutes().toString().padStart(2, '0');
  //   const seconds = now.getSeconds().toString().padStart(2, '0');
    
  //   const timeString = `${hours}:${minutes}:${seconds}`;
  //   if(timeString != null){
  //   document.getElementById('clock').textContent = timeString;
  //   }
  // }

  // // Update the clock every second
  // setInterval(updateClock, 1000);

  // // Initial call to display the time immediately
  // updateClock();

  //Nationality array
  const items = ["Irish", "Nigerian", "Polish", "Congolese", "Chinese", "Filipino"];

  function displayNationalities() {
    const list = document.getElementById('nationality-list');
  
    items.forEach(nationality => {
      // Create a new list item element
      const listItem = document.createElement('li');
      
      // Set the text content of the list item
      listItem.textContent = nationality;
  
      console.log(listItem)
      // Append the list item to the unordered list
      list.appendChild(listItem);
    });
  }
  
  // Call the function to display nationalities
  displayNationalities();

//club object
  const tudClub = {
    EU_members: 35,
    non_EU: 23,
    total: 58
  };
  
  // Function to display club information on the webpage
  function displaytudInfo() {
  //Select the div with id club info
    const tudInfoContainer = document.getElementById('tud-club');
    // Display the club object properties on the webpage
    tudInfoContainer.innerHTML = `
      <p>EU Members: ${tudClub.EU_members}</p>
      <p>Non EU Members: ${tudClub.non_EU}</p>
      <p>Total: ${tudClub.total}</p>
    `;
  }
  
  // Call the function to display 
  displaytudInfo();

 // login

 function validateForm() {
  // retrieving form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  // avoiding blank input
  if (name === "" || email === "") {
    alert("Name and email are required");
    return false;
  }
  // validating email format using a simple regular expression
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  // if all validations pass
  return true;
}