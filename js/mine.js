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

// console.log(x1 + Number(y1));

function Calc(param1, param2, ...rest){
 

 return  rest;

 
}

// let local =  Calc(4,5);

// console.log(Calc(4,5,8, 35, "89797"))
// console.log(Calc(24,45))
// console.log(Calc(124,55))
// console.log(Calc(43,55))

// let arrfun = (ss, mm)  => {
//     console.log(ss, mm);
// } 
 
// arrfun("arrow function", "par1")

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

// console.log(filterded);


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

// console.log(sm(4.5, 99.4).toFixed(1));
// console.log(sm(4.5, 99.4).toFixed(2));
// console.log(sm(4.5, 99.4).toFixed(3));

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

 

let ClassAraay = ["ალექსანდრე", "გიორგი", "გიორგი", "ვალოდია", "თორნიკე", "ირაკლი", "ლაშა"];
let arrnum = [15, 7, 22, 33, 458, 1600, 3500];
let ssarr =  arrnum.sort((a,b)=>{
    return a - b;
});

 

 let Student = [

    {
        name:"სტუდენტი",
        stip:true,
        course:"front-end",
        gender:"male",
        status:"stoped"
    },

    {
        name:"სტუდენტი",
        stip:true,
        course:"front-end",
        gender:"male",
        status:"active"
    },

    {
        name:"სტუდენტი1",
        stip:true,
        course:"back-end",
        gender:"male",
        status:"stoped"
    },

 ]

 let filtersuti = Student.filter((stud)=>{
     return stud.status == "stoped";
 })

 filtersuti.forEach(el=>{

    let type ;

    if (el.course == "front-end") {
        type = `<span class="badge bg-success">პროგრამირება</span>
        `
    }else{
        type = `<span class="badge bg-primary">სხვა მიმართულება</span>`
    }

    el1.innerHTML += ` <div class="col-lg-4"> <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${el.name}</h5>
      <p class="card-text">${el.course}</p>
       ${type}
    </div>
    </div>
  </div>`
 })


// for (let m = 0; m < ClassAraay.length; m++) {
//    // const element = ClassAraay[m];
//     console.log(ClassAraay[m]);
// }

// console.log(ClassAraay);

/*============== array method

ClassAraay.push("სოფო"); // მასივის ბოლოს ახალი ელემენტის ჩამატება
ClassAraay.unshift("სოფო"); // მასივის დასაწყისში ახალი ელემენტის ჩამატება
ClassAraay.pop(); // შლის მასივის ბოლო ელემენტს
ClassAraay.shift(); // შლის მასივის პირველ ელემენტს
ClassAraay.splice(2,0, "გიორგი1", "გიორგი2"); // შლის და ამატებს მასივში ახალ ელემენტებს

let ssarr = ClassAraay.map(element => {
    return element + " it-step ";
 }); // ამოწმებს ყველა ელემენტს და ქმნის ახალ მასივს

 let ssarr = ClassAraay.foreach(element => {
    return element + " it-step ";
 }); // ამოწმებს ყველა ელემენტს და არ ქმნის ახალ მასივს

  ClassAraay.includes("ალექსანდრე") // ეძებს სიმბოლოს მასივის და აბრუნებს boolean

  ClassAraay.filter((arr)=>{
  return arr == "გიორგი";
})  // ქმნის ახალ მასივს გადაცემული პირობის მიხედვით


  ClassAraay.find((arr)=>{
  return arr == "გიორგი";
})  // აბრუნებს პირველივე ელემენტს გადაცემული პირობით მიხედვით


let ssarr =  arrnum.sort((a,b)=>{
    return a - b;
});  // მასივის სორტირება (რიცხვით მნიშვნელობებზე)

================*/