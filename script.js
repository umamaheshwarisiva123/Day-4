function addStudent(){
    var name = document.getElementById("input").value;
    var list = document.getElementById("student list");
    var namelist =  document.createElement("li");
    namelist.innerText=name;
    list.append(namelist);
}


function deleteStudent(){
    var list = document.getElementById("student list");
    list.lastElementChild.remove();
    
}
