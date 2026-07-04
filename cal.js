// var a = document.getElementById("hi")
// console.log(a.textContent = "bye")

// var b = document.getElementsByClassName("study");
// console.log(b);

// var b = document.getElementsByClassName("study");
// for(let i=0; i<b.length; i++){
// console.log(b[i].textContent)
// }


// var b = document.getElementsByTagName("p");
// for(let i=0; i<b.length; i++){
// console.log(b[i].textContent)
// }


// var  c = document.querySelector(".study");
// console.log(c.textContent);

// var  c = document.querySelector(".study");
// console.log(c.textContent);
// c.style.color = "red";
// c.style.fontSize = "30px";

// var  c = document.querySelectorAll(".study");
// console.log(c)


// var  c = document.querySelectorAll(".study");
// c.forEach(function(item){ 
//    console.log(item.textContent);
//    item.style.color = "red";
// });


// var clickBtn = document.getElementById("btn");
// function change(){
// var  c = document.querySelectorAll(".study");
// c.forEach(function(item){ 
// console.log(item.textContent);
//    item.style.color = "red";
// });
// }


// var d = document.getElementById("hidden");
// console.log(d.textContent);

// var e = document.querySelectorAll(".study");
// e.forEach(function (item) {
//   console.log(item.textContent);
//   item.classList.add("active");
// });
function change(){

    var e = document.querySelectorAll(".study");
e.forEach(function (item) {
  console.log(item.textContent);
  item.classList.add("active");
});
    
}

// var clickBtn = document.getElementById("btn");


function remove(){
    var e = document.querySelectorAll(".study")
e.forEach(function (item){
    console.log(item.textContent);
    item.classList.remove("active");
});
}
 
function toggle(){
    var e = document.querySelectorAll(".study")
e.forEach(function (item){
    console.log(item.textContent);
    item.classList.toggle("toggle");
});
}
