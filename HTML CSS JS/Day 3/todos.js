function addTodo() {
  var inputBox = document.getElementById("inputbox");
  var todoList = document.getElementById("todoList");
  var newTodoContent = inputBox.value;

  if (newTodoContent) {
    var todoElement = document.createElement("li");
    todoElement.className = "list-group-item";

    var contentElement = document.createElement("span");
    contentElement.innerHTML = newTodoContent;

    var editButton = document.createElement("button");
    editButton.className = "btn btn-warning btn float-end me-2";
    editButton.innerHTML = "Edit";

    editButton.addEventListener("click", function() {
      var newContent = prompt("Edit your todo item: ", contentElement.innerHTML);
      if (newContent) {
        contentElement.innerHTML = newContent;
      }
    });

    var deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn me-1 float-end";
    deleteButton.innerHTML = "Delete";

    deleteButton.addEventListener("click", function() {
      todoList.removeChild(todoElement);
    });

    todoElement.appendChild(contentElement);
    todoElement.appendChild(deleteButton);
    todoElement.appendChild(editButton);

    todoList.appendChild(todoElement);

    inputBox.value = "";
  } else {
    alert("Please add todo content");
  }
}