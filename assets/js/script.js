// prepare to add events to button by selecting the button by its id 
// prepare to add <li> items to this <ul> by selecting the <ul> by its id
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


// placed before event listener. 
// create a list item var listItemEl, assign it a class and content
// add child <li> to <ul> by .appendChild 
var createTaskHandler = function(event) {
    // prevents browser from reloading page after form submission
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}


formEl.addEventListener("submit", createTaskHandler);
