// Select input fields and elements from the DOM
const inputName = document.querySelector("#input-name");
const inputId = document.querySelector("#input-id");
const inputContact = document.querySelector("#input-contact");
const inputemail = document.querySelector("#input-email");
const submitButton = document.querySelector("#submit"); //Submit button
const displayed = document.querySelector(".display-section"); // Section to display submitted information
const info = document.querySelector(".information-section"); // Section for additional information

// Function to validate input fields
const validateInputs = () => {
  // Regular expression patterns for validation
  const namePattern = /^[A-Za-z\s]+$/; // Name must contain only letters and spaces
  const idPattern = /^[0-9]+$/; // ID must contain only numbers
  const contactPattern = /^[0-9]+$/; // Contact must contain only numbers
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

  //validate Name
  if (!namePattern.test(inputName.value)) {
    alert("Kindly fill all the empty fields");
    alert("Student name must contain only letters and spaces.");
    return false; // Validation failed
  }

  //Validate Id
  if (!idPattern.test(inputId.value)) {
    alert("Student ID must contain only numbers.");
    alert("Kindly fill all the empty fields");
    return false; // Validation failed
  }

  //Validate Contact Number
  if (!contactPattern.test(inputContact.value)) {
    alert("Contact number must contain only numbers.");
    alert("Kindly fill all the empty fields");
    return false; // Validation failed
  }

  //Validate Email
  if (!emailPattern.test(inputemail.value)) {
    alert("Please enter a valid email address.");
    alert("Kindly fill all the empty fields");
    return false; // Validation failed
  }
  return true; //  All Validation passed
};

// Function to handle the operation when the submit button is clicked
const operation = () => {
  if (!validateInputs()) {
    return; // Stop the operation if validation fails
  }

  // Show the displayed section
  displayed.style.display = "inline";

  // Create a new div to hold the submitted information
  var div = document.createElement("div");
  div.setAttribute("class", "information-section");

  // Create paragraphs for each input field
  var names = document.createElement("p");
  var id = document.createElement("p");
  var contact = document.createElement("p");
  var email = document.createElement("p");
  var reset = document.createElement("p");
  reset.setAttribute("id", "reset");

  //Delete Button
  var deleteButton = document.createElement("p");
  deleteButton.setAttribute("id", "delete");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = () => {
    displayed.removeChild(div); // Remove the information div when clicked
  };

  // Set the inner HTML for each paragraph to the corresponding input value
  names.innerHTML = inputName.value;
  id.innerHTML = inputId.value;
  contact.innerHTML = inputContact.value;
  email.innerHTML = inputemail.value;
  reset.innerHTML = "Reset";

  //Reset Button
  reset.onclick = () => {
    inputName.value = names.innerHTML;
    inputId.value = id.innerHTML;
    inputContact.value = contact.innerHTML;
    inputemail.value = email.innerHTML;

    // Remove the information div after editing
    displayed.removeChild(div);

    alert("Please edit all the details and Add again!");
  };

  // Append all created elements to the div
  div.append(names, id, contact, email, reset, deleteButton);

  // Append the div to the displayed section
  displayed.appendChild(div);

  // Clear the input fields
  inputName.value = "";
  inputId.value = "";
  inputContact.value = "";
  inputemail.value = "";
};
// Add an event listener to the submit button to trigger the operation function
submitButton.addEventListener("click", operation);
