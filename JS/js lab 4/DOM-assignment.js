// 1. Select the first <div> on the page using getElementsByTagName and log its innerHTML.

element = document.getElementsByTagName("div")[0];
console.log(element.innerHTML);

// 2. Using getElementById change the text of #my-p to "Hello DOM".

element = document.getElementById("my-p");
element.innerText = "Hello DOM";
console.log(element.innerText);

// 3. Use querySelector to select the element with class "target-div" and log its nodeName.

var targetDiv = document.querySelector(".target-div");

console.log(targetDiv.nodeName);

// 4. Use querySelectorAll to count how many <div> elements exist; log the count.

var divs = document.querySelectorAll("div");

console.log(divs.length);

// 5. Use getElementsByName on the email input (name="user-email") and set its value to "user@test.com".

var email = document.getElementsByName("user-email")[0];

email.value = "user@test.com";

console.log(email.value);

// 6. Check if the text input has a "name" attribute; if not add name="user-name" via setAttribute.---

var textInput = document.querySelector("[type='text']");

if (!textInput.hasAttribute("name")) {
  textInput.setAttribute("name", "user-name");
}

console.log(textInput.getAttribute("name"));

// 7. Append the string " - UPDATED" to the existing innerText of #my-p (keep original text).

var text = document.getElementById("my-p");

text.innerText += " - UPDATED";

console.log(text.innerText);

// 8. Create Images slider that work automatically and with next/prev/start/stop buttons.

var images = ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png"];
var currentIndex = 0;
var sliderImg = document.querySelector(".image-slider img");
var buttonsDiv = document.querySelector(".image-slider .buttons");

function showImage(index) {
  sliderImg.src = images[index];
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}

function startSlider() {
  interval = setInterval(nextImage, 2000);
}

function stopSlider() {
  clearInterval(interval);
  interval = null;
}

buttonsDiv.children[0].onclick = nextImage;
buttonsDiv.children[1].onclick = prevImage;
buttonsDiv.children[2].onclick = startSlider;
buttonsDiv.children[3].onclick = stopSlider;

showImage(currentIndex);

// 9. Set the placeholder of the text input to "Type your full name" using setAttribute.

text = document.getElementById("my-input");
text.setAttribute("placeholder", "Type your full name");

// 10. Log whether the email input has attribute "required"; if missing add it.

var email = document.getElementById("my-email");

if (email.hasAttribute("required")) {
  console.log("its already have");
} else {
  email.setAttribute("required", "");
}

// 11. Write function getSelectedValue(selectId) returning the current selected option value.

function getSelectedValue(selectId) {
  select = document.getElementById(selectId);
  return select.value;
}

console.log(getSelectedValue("my-select"));

// 12. Loop through all options of the select and log each option's text and value.

var select = document.getElementById("my-select");

for (var i = 0; i < select.options.length; i++) {
  console.log(select.options[i].text + ": " + select.options[i].value);
}

// 13. Programmatically select the option with value "EG".

var select = document.getElementById("my-select");
var selected;
for (var i = 0; i < select.options.length; i++) {
  if (select.options[i].value == "EG") {
    selected = select.options[i].value;
    select.options[i].selected = true;
  }
}

console.log(selected);

// 14. Create function selectByText(selectId, text) that selects the first option whose text matches exactly.

function selectByText(selectId, text) {
  var select = document.getElementById(selectId);
  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].text == text) {
      selected = select.options[i].value;
      select.options[i].selected = true;
    }
  }
}

// 15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p> (ensure bold renders, not printed literally).

var div2 = document.getElementById("div-2");
div2.innerHTML = "<p><b>Bold Text</b></p>";

// 16. Add classes class-a and class-b to #div-2 then remove class-b (using classList).

div2.classList.add("class-a", "class-b");
div2.classList.remove("class-b");

// 17. Toggle class "hidden" on #div-2 twice; comment final visibility.

div2.classList.toggle("hidden");
div2.classList.toggle("hidden");
// first toggle hides it, second toggle shows it again. Final visibility is the class visible.

// 18. Create function insertAfter(refNode, newNode) that inserts newNode immediately after refNode.

function insertAfter(refNode, newNode) {
  refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
}

// 19. Create a new <div> saying "Dynamic Box" with yellow background and append inside #div-2.

var newDiv = document.createElement("div");
newDiv.textContent = "Dynamic Box";
newDiv.style.backgroundColor = "yellow";
div2.appendChild(newDiv);

// 20. Insert a new <p> BEFORE the first child of #div-2 (insertBefore).

var newP = document.createElement("p");
newP.textContent = "Inserted Before";
div2.insertBefore(newP, div2.firstChild);

// 21. Insert a <span> with text "AFTER END" right after #div-2 using insertAdjacentHTML.

div2.insertAdjacentHTML("afterend", "<span>AFTER END</span>");

// 22. Form onsubmit: prevent default and log values of text, email, and select inputs.
var form = document.querySelector("form");
form.onsubmit = function (e) {
  e.preventDefault();
  var textValue = document.getElementById("my-input").value;
  var emailValue = document.getElementById("my-email").value;
  var selectValue = document.getElementById("my-select").value;
  console.log(textValue);
  console.log(emailValue);
  console.log(selectValue);
};

// 23. Add input event on the text input that logs its length whenever it changes.
var textInput = document.getElementById("my-input");
textInput.addEventListener("input", function () {
  console.log(textInput.value.length);
});

// 24. Write validateEmailSimple(value) returning true if value contains both '@' and '.'; add 2 passing / 2 failing examples (comments).
function validateEmailSimple(value) {
  return value.includes("@") && value.includes(".");
}

// console.log(validateEmailSimple("test@example.com"));
// console.log(validateEmailSimple("user.name@domain.co"));

// console.log(validateEmailSimple("hello"));
// console.log(validateEmailSimple("......."));

// 25. Create an element, append it to #div-2, then remove it using parent.removeChild(child).

var div = document.createElement("div");
div.textContent = "Temporary Div";
div2.appendChild(div);
div2.removeChild(div);

// 25. Create an element, append it to <div id="wrapper">
//   <p id="first">First</p>
//   <p id="second">Second</p>
// </div>
var wrapper = document.getElementById("wrapper");

var newElem = document.createElement("div");
wrapper.appendChild(newElem);

// 26. Clone #div-2 , set clone id="div-2-clone", and insert it after original using insertAfter.

var div = div2.cloneNode(true);
div.id = "div-2-clone";
insertAfter(div2, div);

// 27. Highlight all text & email inputs (green border) in a function highlightInputs(form) and call it on DOMContentLoaded.

function highlightInputs(form) {
  var textInput = form.querySelector("input[type='text']");
  var emailInput = form.querySelector("input[type='email']");

  textInput.style.border = "2px solid green";

  emailInput.style.border = "2px solid green";
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  highlightInputs(form);
});

// 28. Build function buildCard(title, content) returning <div class="card"> with an <h3> and <p>; append two cards to body.

function buildCard(title, content) {
  var card = document.createElement("div");
  card.className = "card";
  var cardTitle = document.createElement("h3");
  cardTitle.textContent = title;
  var cardContent = document.createElement("p");
  cardContent.textContent = content;
  card.appendChild(cardTitle);
  card.appendChild(cardContent);
  document.body.appendChild(card);
}

buildCard("Card 1");

// 29. Add delegated click listener on body logging when a .card is clicked.

document.body.addEventListener("click", function (e) {
  console.log("Card clicked:");
});

// 30. Reflection (comment): Which two tasks were most challenging and why?
// Task 8 Image slider: cuz it have many functions to implement and ensure that them work together.
// Task 26 Cloning and inserting elements: dont see something like it before that required more time in searching to solve it  

// 31. create and unordered list dynamically with at 10 items, the odd list items should have class "odd" and even items "even", -create the two classes in your CSS file-
var ul = document.createElement("ul");
for (var i = 1; i <= 10; i++) {
  var li = document.createElement("li");
  li.textContent = "Item " + i;
  li.className = (i % 2 === 1) ? "odd" : "even";
  ul.appendChild(li);
}
document.body.appendChild(ul);

// 32. create form and 3 div that have 3 inputs(name, email, city) when submit the input shown in the 3 divs name = name , email: email, city : city

var form = document.createElement("form");

var nameDiv = document.createElement("div");
var emailDiv = document.createElement("div");
var cityDiv = document.createElement("div");

var nameInput = document.createElement("input");
nameInput.placeholder = "Name";
var emailInput = document.createElement("input");
emailInput.placeholder = "Email";
var cityInput = document.createElement("input");
cityInput.placeholder = "City";

nameDiv.appendChild(nameInput);
emailDiv.appendChild(emailInput);
cityDiv.appendChild(cityInput);

form.appendChild(nameDiv);
form.appendChild(emailDiv);
form.appendChild(cityDiv);

var submitButton = document.createElement("button");
submitButton.textContent = "Submit";
form.appendChild(submitButton);

document.body.appendChild(form);

form.onsubmit = function (e) {
  e.preventDefault();
  var name = nameInput.value;
  var email = emailInput.value;
  var city = cityInput.value;

  nameDiv.textContent = "Name: " + name;
  emailDiv.textContent = "Email: " + email;
  cityDiv.textContent = "City: " + city;
};
