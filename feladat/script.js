const doneTask = document.querySelector(".done");

doneTask.addEventListener("click", function() {
    doneTask.textContent = "Kész";
    doneTask.style.backgroundColor = "green";
    doneTask.style.color = "white";
});
