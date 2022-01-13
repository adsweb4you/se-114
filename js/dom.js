// let id = document.getElementById('id'); // სელექტი html id
// let clasname = document.getElementsByClassName('p');  // სელექტი html class (object) (array)
//let tag = document.getElementsByTagName('p'); // სელექტი html tag  (object) (array)
  let css = document.querySelector('#id'); // სელექტი css პირველი ელმენტი
// let arrcss = document.querySelectorAll('p'); // სელექტი css ყველა (array)

 

//  arrcss.forEach(element => {
//     element.innerText = element.innerText + "სიტყვა"
// });
 
// for (let i = 0; i < clasname.length; i++) {
//     const element = clasname[i];
//     console.log(element);
// }

let button = document.querySelector('.btn');
let div = document.querySelector('#testclass');
button.addEventListener("click", function(){
 console.log(div.classList.contains('bg-dark')) ;
})


//  div.classList // გვიბრუნებს ელემენტის კლასებს მასივის სახით
//  div.classList.add('bg-dark') // კლასის ჩამატება
//  div.classList.remove('A', 'B') // კლასის წაშლა
//  div.classList.toggle('bg-dark');  // კლასის მინიჭება წაშლა
//  div.classList.replace('bg-dark', 'bg-success'); // კლასის ჩანაცვლება  
//  div.classList.contains('bg-dark') // ამოწმებს აქვს თუ არა ელემენტს კლასი აბრუნებს boolean


let showBar = document.querySelector('#sidebars');
let sidebar = document.querySelector('.sidebar');

let closes = document.querySelector('#close');

showBar.addEventListener("click", function(e){
  e.preventDefault();
   
  sidebar.classList.toggle('show')
})

closes.addEventListener("click", function(){
  sidebar.classList.remove('show')
})

document.addEventListener("click", function(e){
 let check = e.target.classList[0];
 console.log(check);
 if (check == "sidebar" ||  check == "bi"  || check == "contents") {
 
 }else{
    sidebar.classList.remove('show')
 }

})


let plus = document.querySelector('.btn-plus');
let minus = document.querySelector('.btn-minus');
let numb = document.querySelector('#num');
let num = 0;
plus.addEventListener("click", ()=>{
  numb.innerText = ++num;
 
})

minus.addEventListener("click", ()=>{
  if (num !== 0) {
      numb.innerText = --num;
  }
})


let ms = document.querySelector("#msg")
let mss = document.querySelector(".texts")
ms.addEventListener('click', function(){
  mss.innerText = ms.innerText;
})

// window.addEventListener("scroll", function(e){
//   console.log(this.scrollY)
// })


// window.addEventListener("load", function(){
//    console.log("საიტი ჩაიტვირთა")
// })

// let img = document.querySelectorAll('img');

// img.forEach(im =>{
 
//   im.addEventListener("click", function(){
//       this.src = this.getAttribute('data-src');
//   })


// })