const doneTask = document.querySelector(".done");

doneTask.addEventListener("click", function() {
    doneTask.textContent = "Kész";
    doneTask.style.backgroundColor = "pink";
    doneTask.style.color = "black";
});
