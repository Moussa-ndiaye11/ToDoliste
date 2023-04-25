const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let todos = [];

function renderTodos() {
   list.innerHTML = "";
   todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.innerHTML = `
      <div class="row">
        <div class="col-4" >${todo.text}</div>
        <div class="col-8">
          <button type="button" class="btn btn-danger float-right" onclick="deleteTodo(${index})">Supprimer</button>
          <button type="button" class="btn btn-warning float-right mx-1" onclick="changeStatus(${index},'todo')">To Do</button>
          <button type="button" class="btn btn-warning float-right mx-1" onclick="changeStatus(${index},'doing')">Doing</button>
          <button type="button" class="btn btn-success float-right mx-1" onclick="changeStatus(${index},'done')">Done</button>
        </div>
      </div>
    `;
      switch (todo.status) {
         case "todo":
            li.classList.add("todo-todo");
            break;
         case "doing":
            li.classList.add("todo-doing");
            break;
         case "done":
            li.classList.add("todo-done");
            break;
         default:
            break;
      }
      list.appendChild(li);
   });
}

function addTodo() {
   const text = input.value.trim();
   if (text !== "") {
      todos.push({ text, status: "todo" });
      input.value = "";
      renderTodos();
   }
}

function deleteTodo(index) {
   todos.splice(index, 1);
   renderTodos();
}

function changeStatus(index, status) {
   todos[index].status = status;
   renderTodos();
}

form.addEventListener("submit", (event) => {
   event.preventDefault();
   addTodo();
});

renderTodos();
