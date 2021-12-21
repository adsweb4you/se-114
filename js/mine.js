let title, myid, descr, img; 

title = "javascript არის პროგრამირების ენა";
myid = 25;
descr= "avascript არის პროგრამირების ენა avascript არის პროგრამირების ენა avascript არის პროგრამირების ენა";
img = "img/mune.png";

 
var mystring = "string1";
 
var Mystring = "string2";

 

descr = "newdescr"

 const size = 25;
 const price = "x25";


 
//  size = 88;

let num = 54; //number
let strin = "სტრინგი123+_+021-=4ე"; // string
let arra = [55,26,5,"234"]; //array
let obj = {name:"it step"}; // object
let fun = function(){}; // function
let bootrye = true; // boolean
let bootfal = false; // boolean
let undefin = undefined; //undefined
let nan = NaN; //Nan
let nul = null; // null

document.getElementById("output").innerHTML = "<h1>" + title + "</h1>";
 

// window.onload = function(e){
// console.log( e );
// }


let month = 5;
let imgs = 'img/Photo.png';
let dur = " თვის მანძილზე ";
let mystrings   = `მე ვსწავლობ it step აკადემიაში | front-end პროგრამირებას   ${month * 3}  front-end  თვის მანძილზე `;
 

let card = `
<div class="card">
  <img src="${imgs}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${mystrings}</h5>
     
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`

// crd.innerHTML = card;
//  let searched = "აკადემიაში"
//  let ser  = mystrings.search(searched);
//  let serleng  = searched.length
let conv = mystrings.concat(month, dur );

let newstr  = mystrings.match(/front-end/gi)

 console.log(newstr.toString())

/*
mystrings.length // ითვლის სიმბოლოების რაოდენობას სტრინგში
mystrings.search("its") // ეძებს სიმბოლოს ან სიტყვას და გვიბრუნებს მის ინდექს
mystrings.slice(2, 2) // ჭრა სტრინგის შიგნით
mystrings.replace("front-end", "back-end") // სტრინგის შიგნით სიმბოლოს ჩანაცვლება
mystrings.replaceAll("front-end", "back-end") // სტრინგის შიგნით სიმბოლოს ჩანაცვლება ყველა
mystrings.toUpperCase() // ყველა სიმბოლოს გადიდება
mystrings.trim() // ჭრის ვაითსფეისებს მარჯვენა მარცხენა მხარეს
ystrings.startsWith("მეს") // ეძებს სტრინგის დასაწყისს
mystrings.endsWith("მანძილზე") // ეძებს სტრინგის დასასრულს
mystrings.split("|") // სტრინგის კონვერტაცია მასივში
mystrings.concat(month, dur ) // აერთიანებს სტრინგებს  (ყოვლად გამოუყენებელი)

*/


function typing(val, myvalye){
 document.getElementById("char").innerText =  100 - val;

 if (val >  80) {
    prog.style.backgroundColor = "red"
 }else if(val >  50){
    prog.style.backgroundColor = "yellow"
 }else{
    prog.style.backgroundColor = "green"
 }

 if(myvalye.includes('@')){
    validate.innerText = "ვალიდეური ველი";
    validate.style.color = "green";
    console.log(myvalye.includes('@'));
 }else{
    validate.innerText = "შეიყვანეთ ვალიდური ინფორმაცია";
    validate.style.color = "red"
 }

 if (val >= 100) {
    tex.setAttribute('maxlength', '100');
 }

 let proc = ( val / 100) * 100;

 

 prog.style.width = ( 100 - proc) + "%"

 

}

let timer = 5;
setInterval(() =>{
 if (timer + 1 > 0) {
      document.getElementById("time").innerText  = timer;
 }

  timer--; 
 
}, 1000)

let heli = document.getElementById("legic");
let dataimg = heli.getAttribute('data-img');
setTimeout(() => {
    
    heli.setAttribute('src', dataimg);

    setTimeout(() => {
        heli.classList.add('fly')    
    }, 2000);



}, 5000);