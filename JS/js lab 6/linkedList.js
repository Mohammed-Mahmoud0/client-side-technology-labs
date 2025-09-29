let Node = function (val, next = null) {
  this.val = val;
  this.next = next;
};

let LinkedList = function () {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.add = function (val) {
  let newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }

  let listDiv = document.getElementById("list");

  if (listDiv.children.length > 0) {
    let arrow = document.createElement("span");
    arrow.innerText = "→";
    arrow.className = "arrow";
    listDiv.appendChild(arrow);
  }

  let span = document.createElement("span");
  span.innerText = val;
  span.className = "node";
  listDiv.appendChild(span);
};

LinkedList.prototype.pop = function () {
  if (!this.head) return null;

  if (this.head === this.tail) {
    let val = this.head.val;
    this.head = null;
    this.tail = null;

    let listDiv = document.getElementById("list");
    listDiv.removeChild(listDiv.lastChild);

    return val;
  }

  let current = this.head;
  while (current.next !== this.tail) {
    current = current.next;
  }

  let val = this.tail.val;
  current.next = null;
  this.tail = current;

  let listDiv = document.getElementById("list");
  listDiv.removeChild(listDiv.lastChild);

  return val;
};

let l = new LinkedList();

function addNode() {
  let input = document.getElementById("nodeValue");
  let val = input.value.trim();

  l.add(Number(val));
  input.value = "";
}

function popNode() {
  let popped = l.pop();
  if (popped === null) {
    alert("List is empty!");
  } else {
    console.log("Popped:", popped);
  }
}
