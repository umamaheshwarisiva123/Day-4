function addTask() {
    var task = document.getElementById("task").value;
    var list = document.getElementById("list");
    var newlist = document.createElement("li");
    newlist.innerText = task;
    list.append(newlist);
}

function deleteTask(){
    var list = document.getElementById("list");
    list.lastElementChild.remove();
}

function totalTask() {
    var list = document.getElementById("list");
    var total = list.children.length;

    alert("Total List: " + total);
}

