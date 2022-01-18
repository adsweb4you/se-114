// let id = document.getElementById('id'); // სელექტი html id
// let clasname = document.getElementsByClassName('p');  // სელექტი html class (object) (array)
//let tag = document.getElementsByTagName('p'); // სელექტი html tag  (object) (array)
  let csss = document.querySelector('#id'); // სელექტი css პირველი ელმენტი
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

// document.addEventListener("click", function(e){
//  let check = e.target.classList[0];
//  console.log(check);
//  if (check == "sidebar" ||  check == "bi"  || check == "contents") {
 
//  }else{
//     sidebar.classList.remove('show')
//  }

// })


let plus = document.querySelector('.btn-plus');
let minus = document.querySelector('.btn-minus');
let numb = document.querySelector('#num');
 
plus.addEventListener("click", ()=>{
  numb.innerText++;
 
})

minus.addEventListener("click", ()=>{
  if (numb.innerText > 0) {
      numb.innerText--;
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


document.querySelector('.colored').addEventListener('mouseenter', function(){
  // this.style.backgroundColor = "red"
  // this.style.color = "#fff"
  // this.style.borderRadius = "15px"

  css(this, {
    backgroundColor:"red",
    color:"#fff",
    borderRadius:"15px",
  })

})

document.querySelector('.colored').addEventListener('mouseleave', function(){
 
  css(this, {
    backgroundColor:"",
    color:"",
    borderRadius:"",
  })

})


function css(el, styles){
  for (const prop in styles) {
    el.style[prop] = styles[prop]
  }
}

document.querySelector('#myinput').addEventListener('input', function(){
  let msg = this.value;
 if (msg.length > 10) {
   this.setAttribute('type', 'password');
   this.removeAttribute('required')
 }else{
  this.setAttribute('type', 'text');
 }
})


let inp = document.querySelector('#myinput');

document.querySelector('.ey').addEventListener('click', function(){
  let icon = document.querySelector('.ey i');
    if (inp.type == "password") {
      inp.type = "text";
      icon.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }else{
      inp.type = "password";
      icon.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }
})

let t = 500;

document.addEventListener('click', function(e){
  let x = e.clientX;
  let y = e.clientY;

  let ball = document.querySelector('.ball').getBoundingClientRect();
  let balls = document.querySelector('.ball')
  let balltop = Math.round(ball.top);
  let ballleft = Math.round(ball.left);

  let match = (balltop + 150) > y && balltop <  y && (ballleft + 150) > x && ballleft < x;

  if(match){
    balls.style.backgroundColor = "red" 
    balls.classList.add('mm');
  } else{
    balls.style.backgroundColor = "blue";
  }    

  // butt.innerHTML += `<span class="myspn" data-time="${t}" style="top:${y}px; left:${x}px"> </span>`

 

  // document.querySelectorAll('.myspn').forEach(element => {
 
  //      setTimeout(()=>{
  //       element.remove();
  //   }, element.getAttribute('data-time')) 
 
  //   t += 500;

  // });

})