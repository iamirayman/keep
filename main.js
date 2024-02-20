
let todoList = JSON.parse(localStorage.getItem("listSt")) || [];
renderTodoLIst();

function renderTodoLIst() {
  let todoListHtml = ``;
  for (let i = 0; i < todoList.length; i++) {
    let todoItem = todoList[i];
    let html = `
    <div class="notes">
    <div class="titleArea">
                  <button title="Done"  style="cursor: pointer;">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTIsMiBDMTcuNTIsMiAyMiw2LjQ4IDIyLDEyIEMyMiwxNy41MiAxNy41MiwyMiAxMiwyMiBDNi40OCwyMiAyLDE3LjUyIDIsMTIgQzIsNi40OCA2LjQ4LDIgMTIsMiBaIE0xMCwxNC4yIEw3LjQsMTEuNiBMNiwxMyBMMTAsMTcgTDE4LDkgTDE2LjYsNy42IEwxMCwxNC4yIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJjaGVja19jaXJjbGVfMjRweCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9ImJvdW5kcyIgcG9pbnRzPSIwIDAgMjQgMCAyNCAyNCAwIDI0Ij48L3BvbHlnb24+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8dXNlIGlkPSJNYXNrIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgPC9nPgo8L3N2Zz4K" alt="">
                  </button>               
                  <div>
                      
                  </div>
                  <button class="delet-item-button" onclick="todoList.splice(${i}, 1); renderTodoLIst()"  title="delete" style="cursor: pointer;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="delet-item" d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path class="delet-item" d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>                
                  </button>   
              </div>
    <div class="noteArea">
        <span>${todoItem}</span>
    </div>
</div>

    `;
    todoListHtml += html;
  }
  localStorage.setItem("listSt", JSON.stringify(todoList));
  document.getElementById("contaier").innerHTML = todoListHtml;
}

function createItem() {
  let myinput = document.querySelector(".noteInput");
  let inputValue = myinput.value;
  if (inputValue.trim() !== "") {
    todoList.push(inputValue);
    myinput.value = "";
    renderTodoLIst();
  }
}

function clearStorage() {
  localStorage.removeItem('listSt');
  todoList = [];
  renderTodoLIst();
}

