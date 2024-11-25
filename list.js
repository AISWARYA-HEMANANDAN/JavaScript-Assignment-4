document.getElementById("addTaskBtn").addEventListener('click', () => {
    const textInput = document.getElementById("taskInput")
    const task = textInput.value.trim();

    if (task == '') {
        return alert("Enter a task.")
    }

    const li = document.createElement('li')
    li.classList.add("list-group-item")

    const span = document.createElement('span')
    span.innerText = task
    li.appendChild(span)

    const completed = document.createElement('li')
    completed.classList.add('bi', 'bi-check', 'fs-4', 'text-success')
    li.appendChild(completed)

    completed.addEventListener('click', () => {
        span.classList.toggle('completed')
    })

    const deleteIcon = document.createElement('li')
    deleteIcon.classList.add('bi', 'bi-trash', 'fs-4', 'text-danger')
    li.appendChild(deleteIcon)

    deleteIcon.addEventListener('click', () => {
        li.remove()
    })

    document.getElementById("taskList").appendChild(li)
    textInput.value = ''
})