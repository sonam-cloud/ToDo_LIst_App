"use strict";
//  Declares variables for HTML elements with specific IDs.
const addTaskInput = document.getElementById("addTaskInput");
const listOfTask = document.getElementById("list_of_task");
const totalTasks = document.getElementById("totalTasks");

// Total task Count
function updateCount() {
  const TotalTaskNum = document.querySelectorAll("li").length;
  totalTasks.textContent = TotalTaskNum;
  // Added the ScrollBar
  if(TotalTaskNum >= 4){
    // Add the class
    listOfTask.classList.add("srcollList");
  } else {
    // Remove the class
      listOfTask.classList.remove("srcollList");
  }
}
// Add the task 
function addTask() {
  const task = addTaskInput.value.trim();
  if (!task) {
    alert("Please write down some task..");
    return;
  }
  // Create a new list
  const li = document.createElement("li");
  li.innerHTML =`<p><i class="fa-regular fa-square"></i>
  <i class="fa-solid fa-square-check"></i>
  <span>${task}</span></p>
  <i class="fa-solid fa-trash deleteIcon"></i>`;

// Clicked on li add and remove the class
  li.addEventListener("click", function(){
    li.classList.toggle('checked');
  });
// click on remove icon delete the li
  li.querySelector(".deleteIcon").addEventListener("click", function(){
    li.remove();
    // update the count of task
    updateCount();
  });
// Append the new list item to the existing list
  listOfTask.appendChild(li);
  // Clear the input field after adding a task
  addTaskInput.value = "";
  //update the count of task
  updateCount();
}
// Add tha task when pressing Enter key Or click on add icon
addTaskInput.addEventListener("keyup", function (event) {
  if (event.key === "click" || event.key === "Enter") {
    addTask();
  }
});