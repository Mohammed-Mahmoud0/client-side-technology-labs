// ---
// BOM (Browser Object Model)

// 1. Open a new window with a specific URL and size, then close it after 3 seconds using JavaScript.
var newWin;
function openWindow() {
  newWin = window.open(
    "https://www.facebook.com/",
    "",
    "width=500, height=500"
  );
  setTimeout(closeWindow, 3000);
}
function closeWindow() {
  newWin.close();
}

// 2. Display the browser's user agent string in an alert.

function showUserAgent() {
  alert(navigator.userAgent);
}

// 3. Use `navigator` to detect if the browser is online or offline and log the result.

function checkOnline() {
  if (navigator.onLine) console.log("online");
  else console.log("offline");
}

// 4. Write code to reload the current page after 5 seconds.
function r() {
  location.reload();
}
function reload() {
  setTimeout(r, 3000);
}

// 5. Get the current page URL, protocol, and hostname using `location` and log them.

function getURL() {
  console.log(location.href, location.protocol, location.hostname);
}

// 6. Use `history` to go back one page, then forward one page (write the code, don't actually run it).

function goForward() {
  history.forward();
}
function goForward() {
  history.back();
}

// 7. Show the screen width and height in a div -change the div content- on the page.

function showScreenSize() {
  width = window.innerWidth;
  height = window.innerHeight;
}

// 8. Use `setTimeout` to change the content of a hyperlink -a- with a new content after 2 seconds, and provide a button to cancel it.

function changeContent() {
  var link = document.getElementById("myLink");
  link.textContent = "Google";
  link.href = "https://www.google.com";
}
var timeoutId;
function getURL() {
  timeoutId = setTimeout(changeContent, 2000);
}

function cancel() {
  var link = document.getElementById("myLink");
  link.textContent = "Facebook";
  link.href = "https://www.facebook.com";
}

// 9. Use `setInterval` to update the time  on the page title every second, and a button to stop it.

var interval;

function updateClock() {
  var now = new Date();
  document.title = now.toLocaleTimeString();
}

function startClock() {
  interval = setInterval(updateClock, 1000);
}

function stopClock() {
  clearInterval(interval);
  document.title = "Clock";
}

// 10. Show a confirm dialog asking "Do you want to continue?" and log the user's choice("user said yes", "user said no").

function ask() {
  var result = confirm("Do you want to continue?");
  if (result) {
    console.log("user said yes");
  } else {
    console.log("user said no");
  }
}

// ---
// DOM Traversal (Nodes, Elements, Collections)

// 11. Select the first `<ul>` in the document and log its `childNodes` and `children` properties. Explain the difference in a comment.

function selectUl() {
  console.log("childNodes:", document.childNodes[2]);
  console.log("children:", document.children);
}
// document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[3].childNodes[1]

// childNodes: return all things like text and comments and elements
// children: return only elements

// 12. Write a function that logs the tag names of all direct child elements of `<body>`.

function logBodyChildren() {
  var bodyChildren = document.body.children;
  for (var i = 0; i < bodyChildren.length; i++) {
    console.log(bodyChildren[i].tagName);
  }
}

// 13. Given a parent element, loop through its `childNodes` and log only the nodes that are elements (not text/comments).

function logElementChildren(parent) {
  var children = parent.childNodes;
  for (var i = 0; i < children.length; i++) {
    if (children[i].nodeType === 1) {
      console.log(children[i].tagName);
    }
  }
}

// 14. Use `firstChild` and `firstElementChild` on a container and explain the difference in a comment.

document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[3]
  .childNodes[1].firstChild;
document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[3]
  .childNodes[1].firstElementChild;
// firstChild: return the first node that can be text or comment
// firstElementChild: return the first element

// 15. Write code to get all `<li>` elements inside a `<ul>` using `children` and explain the difference.

function getLis() {
  var ul =
    document.childNodes[1].childNodes[2].childNodes[1].childNodes[1]
      .childNodes[3].childNodes[1];

  console.log("childNodes:", ul.childNodes);
  console.log("children:", ul.children);
}
// childeNodes : get all thing like comments and text
// children : get elements only

// 17. Write a function that logs all sibling elements of a given element (excluding itself).

function logSiblings(element) {
  var sibling = element.parentNode.firstElementChild;

  while (sibling) {
    sibling = sibling.nextElementSibling;
  }
}

// 18. Use `nextSibling` and `nextElementSibling` to traverse from the first child to the last child of a `<ul>`, logging each node.

function traverseUl() {
  var ul =
    document.childNodes[1].childNodes[2].childNodes[1].childNodes[1]
      .childNodes[3].childNodes[1];

  var node = ul.firstChild;
  while (node) {
    console.log("Node:", node.nodeName, ":");
    node = node.nextSibling;
  }

  var elem = ul.firstElementChild;
  while (elem) {
    console.log("Element:", elem.tagName, ":", elem.textContent.trim());
    elem = elem.nextElementSibling;
  }
}

// 19. Count how many element children a given node has (not using `children.length`).

function countElementChildren(node) {
  var count = 0;
  var child = node.firstChild;

  while (child) {
    if (child.nodeType === 1) {
      count++;
    }
    child = child.nextSibling;
  }

  return count;
}

// 20. Write a function that takes the first form element and logs the names and values of all its input fields using the `elements` collection.

function logFormInputs() {
  var form = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5];

  for (var i = 0; i < form.elements.length; i++) {
    var input = form.elements[i];
    console.log(input.name, ":", input.value);
  }
}

// 21. Access all forms in the document using `document.forms` and log their names.

function logAllFormNames() {
  var forms = document.forms;

  for (var i = 0; i < forms.length; i++) {
    console.log(forms[i].name);
  }
}

// 22. Access all images in the document using `document.images` and log their `src` attributes.

function logAllImageSrc() {
  var images = document.images;

  for (var i = 0; i < images.length; i++) {
    console.log(images[i].src);
  }
}

// 23. Write a function that takes a form and disables all its input fields using the `elements` collection.

function disableFormInput(form) {
  for (var i = 0; i < form.elements.length; i++) {
    form.elements[i].disabled = true;
  }
}

// 24. Use `Array.from` to convert `document.images` to an array and filter images with width > 100px.

function isLargeImage(img) {
  return img.width > 100;
}

function filterLargeImages() {
  var imagesArray = Array.from(document.images);
  var largeImages = imagesArray.filter(isLargeImage);
  logImages(largeImages);
}

function logImages(images) {
  for (var i = 0; i < images.length; i++) {
    console.log(images[i].src, images[i].width);
  }
}

// ---
