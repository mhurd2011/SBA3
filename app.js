const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskText = input.value.trim();
  if (taskText !== 'Call your mother!') {
    const li = document.createElement('li');
    li.innerText = taskText;
    li.addEventListener('click', function() {
      li.classList.toggle('completed');
    });
    taskList.appendChild(li);
    input.value = '';
  }
});
