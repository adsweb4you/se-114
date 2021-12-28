let myname, age, title, midname, phone, email;

myname = "ჩემი სახელი";
age = 25;
title = "სათაური";
phone = 5522545;
email =  "info@site.ge";

/* ------- data type ----------*/

let str =   "ჩემი პირველი სტრინგი"; // string
let numb = 25; // number
let obj = {title:"აღწერა"}; //object
let arr = [1,"2", "ewsr3r", 2]; // array
let tr = true; // boolean
let fl = false; // boolean
let fn = function(){} // function
let und = undefined; // undefined
let nan = NaN; // NaN
let Null = null; // null

 
  

document.getElementById("output").innerHTML = "<h1>" + myname + "</h1>";
// console.log(window.navigator);

let x1 = 15;
let y1 = "15";

console.log(x1 + Number(y1));

function Calc(param1, param2, ...rest){
 

 return  rest;

 
}

// let local =  Calc(4,5);

console.log(Calc(4,5,8, 35, "89797"))
console.log(Calc(24,45))
console.log(Calc(124,55))
console.log(Calc(43,55))

let arrfun = (ss, mm)  => {
    console.log(ss, mm);
} 
 
arrfun("arrow function", "par1")

let $ = id => {
    return {
         sel:document.getElementById(id),
         html:function(text){
          return  this.sel.innerHTML = text;
         },
         addClass:function(classname){
            return this.sel.classList.add(classname);
         }
    }   
} 

// function html(sel,text){
//  return $(sel).innerHTML = text;
// }

$("el1").html("test")
// $("el2").html("test").addClass("text-danger")


let myglobal = "პირველი მნიშვნელობა";

function cheng(){
    myglobal = "ახალი მნიშვნელობა";
}

cheng();


function fillt(fil, str){
 return str.replaceAll(fil, " ");
}

let filterded = fillt("html", "html არის მარქაფის ენა");

console.log(filterded);


function apphtml(){
    let c = `
    <div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `

    el2.innerHTML = c;
}

apphtml();

function sm(a, b){
    return a * b;
}

console.log(sm(4.5, 99.4).toFixed(1));
console.log(sm(4.5, 99.4).toFixed(2));
console.log(sm(4.5, 99.4).toFixed(3));

let Phone = {
    name:"iphone 8",
    color:["red", "black", "grey", "white"],
    memory:128,
    price:1500,
    screen:"360x9954",
    discrount:true,
    bay:function(count){
        return this.price * count;
    }
}

Object.freeze(Phone);

Phone.discrount = false;

delete Phone.discrount;

let objvalue = Object.values(Phone);
let objkey = Object.keys(Phone);
let allobj = Object.entries(Phone);

 

console.log();