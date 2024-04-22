let TodoList = [
  { item: "Buy milk", duedate: "21/12/2023" },
  {
    item: "Go to college",
    duedate: "21/12/2023",
  },
];
displayitem();

function addTodo() {
  let input = document.querySelector("#input");
  let dateElement = document.querySelector("#todo-date");
  let todoitem = input.value;
  let tododate = dateElement.value;
  //console.log(todoitem)
  TodoList.push({ item: todoitem, dueDate: tododate });
  input.value = "";
  dateElement.value = "";
  displayitem();
}

function displayitem() {
  let conatainerElement = document.querySelector(".todo-contianer");

  let newHtml = "";

  //display.innerText = "";
  for (let i = 0; i < TodoList.length; i++) {
    let item = TodoList[i].item;
    let dueDate = TodoList[i].duedate;
    //let {item , dueDate} = TodoList[i];
    newHtml += `  
     
    <span>${item}</span>
    <span>${dueDate}</span>
    <button  class="btn-del"onclick="TodoList.splice(${i},1);displayitem()">Delete</button>`;
  }
  conatainerElement.innerHTML = newHtml;
}
