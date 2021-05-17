// prepare to add events to button by selecting the button by its id 
// prepare to add <li> items to this <ul> by selecting the <ul> by its id
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


// placed before event listener to declare function before being called
var createTaskHandler = function(event) {
    // prevents browser from reloading page after form submission
    event.preventDefault();

    // selecting the input field, and targetting its value input by the user
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskTypeInput);

    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    // add HTML div to <li>
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to column
    tasksToDoEl.appendChild(listItemEl);
};


formEl.addEventListener("submit", createTaskHandler);
