const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todoText}</span>
            <button class="complete-btn" onclick="completeTodo(this)">Complete</button>
            <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
        `;
        todoList.appendChild(li);
        todoInput.value = '';
    }
}

function completeTodo(btn) {
    const li = btn.parentNode;
    li.classList.toggle('completed');

    // Add a transition effect for completed tasks
    li.style.transition = 'background-color 0.3s';

    // Set a background color for completed tasks
    const isCompleted = li.classList.contains('completed');
    li.style.backgroundColor = isCompleted ? '#519555' : '#ffffff';

    // Remove the transition effect after it completes
    setTimeout(() => {
        li.style.transition = '';
    }, 300);
}

function deleteTodo(btn) {
    const li = btn.parentNode;
    li.remove();
}
