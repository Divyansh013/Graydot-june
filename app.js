const items = document.querySelectorAll(".item"); // get all images
const container1 = document.getElementById("container1"); // get container1
const container2 = document.getElementById("container2"); // get container2
const originalContainer1 = container1.cloneNode(true); // storing initial state of container1
const header = document.querySelector("#navbar h1");
let draggedItem = null; // initially no item is dragged

items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

container2.addEventListener("dragover", dragOver);
container2.addEventListener("dragenter", dragEnter);
container2.addEventListener("dragleave", dragLeave);
container2.addEventListener("drop", dragDrop);

function dragStart() {
  draggedItem = this;
  setTimeout(() => this.classList.add("dragging"), 0); // event loop for dragging
}

function dragEnd() {
  draggedItem = null;
  this.classList.remove("dragging"); // remove dragging class
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}

function dragLeave() {
  this.classList.remove("hovered");
}

function dragDrop() {
  this.classList.remove("hovered");
  this.appendChild(draggedItem);
  updateHeader(); // update header text on completion of drag and drop
}

function updateHeader() {
    if (container2.contains(draggedItem)) {
      header.textContent = "Hello Graydot !!"; 
      header.style.color = "red";
      //header.style.backgroundColor = "pink";
    } else {
      header.textContent = "Original Header Text";
      header.style.color = "";
      //header.style.backgroundColor = "";
    }
  }

function resetPage() {
    location.reload(); // simply reload the page to reset the state
}
