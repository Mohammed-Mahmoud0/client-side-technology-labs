class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    this.render();
  }
  add(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    this.render();
  }

  pop() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      this.size = 0;
      this.render();
      return val;
    }
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    const val = this.tail.val;
    current.next = null;
    this.tail = current;
    this.size--;
    this.render();
    return val;
  }

  render() {
    const container = document.getElementById("linkedListContainer");
    container.innerHTML = "";
    if (!this.head) {
      container.innerHTML =
        '<div class="empty-message">Linked List is Empty</div>';
      return;
    }
    let current = this.head;
    while (current) {
      const nodeElement = document.createElement("div");
      nodeElement.className = "node";
      const nodeBox = document.createElement("div");
      nodeBox.className = "node-box";
      nodeBox.textContent = current.val;
      nodeElement.appendChild(nodeBox);
      if (current.next) {
        const arrow = document.createElement("div");
        arrow.className = "arrow";
        arrow.textContent = "→";
        nodeElement.appendChild(arrow);
      } else {
        const arrow = document.createElement("div");
        arrow.className = "arrow";
        arrow.textContent = "→";
        nodeElement.appendChild(arrow);
        const nullBox = document.createElement("div");
        nullBox.className = "null-box";
        nullBox.textContent = "null";
        nodeElement.appendChild(nullBox);
      }
      container.appendChild(nodeElement);
      current = current.next;
    }
  }
}

const l = new LinkedList();

document.addEventListener("DOMContentLoaded", function () {
  const nodeValueInput = document.getElementById("nodeValue");
  const addBtn = document.getElementById("addBtn");
  const popBtn = document.getElementById("popBtn");

  const prependBtn = document.getElementById("prependBtn");

  l.render();
  addBtn.addEventListener("click", function () {
    const value = parseInt(nodeValueInput.value);
    if (!isNaN(value)) {
      l.add(value);
      nodeValueInput.value = "";
      nodeValueInput.focus();
    }
  });
  prependBtn.addEventListener("click", function () {
    const value = parseInt(nodeValueInput.value);
    if (!isNaN(value)) {
      l.prepend(value);
      nodeValueInput.value = "";
      nodeValueInput.focus();
    }
  });
  nodeValueInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addBtn.click();
    }
  });
  popBtn.addEventListener("click", function () {
    const poppedValue = l.pop();
  });
});
