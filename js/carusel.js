 

//p.parentElement გვიბრუნებს უშუალო მშობელს
 
// p.addEventListener('click', function(){
//     this.parentElement.style.backgroundColor = "red";
//     this.parentElement.parentElement.style.backgroundColor = "green";
//     this.parentElement.parentElement.style.padding = "7px";
// })

    //   p.parentElement.children აბრუნებს ელემენტის შვილობილ ელემენტებს (obj/array)
    // p.nextElementSibling ქვედა მეზობლები
    //  p.previousElementSibling // ზედა მეზობლები
   
//     let  allp = document.querySelectorAll('.myp');
// document.querySelector('.mybtn').addEventListener('click', function(){

//     clearInterval(myinterval);

//     let  pactive = document.querySelector('.myp.active');
//     pactive.classList.remove('active');
//     if (pactive.nextElementSibling != null) {
   
//      pactive.nextElementSibling.classList.add('active');
//     }else{
        
//         allp[0].classList.add('active')
//     }    
// })

// let myinterval = setInterval(()=>{
//     let  pactive = document.querySelector('.myp.active');
//     pactive.classList.remove('active');
//     if (pactive.nextElementSibling != null) {
   
//      pactive.nextElementSibling.classList.add('active');
//     }else{
        
//         allp[0].classList.add('active')
//     }  
// } , 500)


let next = document.querySelector('.arr.next');
let prev = document.querySelector('.arr.prev');
let item = document.querySelectorAll('.item');


next.addEventListener('click', function(){
    nexts();

})

function nexts(){
    let active = document.querySelector('.item.active');
    active.classList.remove('active');
    active.classList.add('mynext');

    if (active.nextElementSibling != null) {
        active.nextElementSibling.classList.add('active');
  
    }else{
        item[0].classList.add('active')
    }
  
    setTimeout(()=>{
        document.querySelector('.item.mynext').classList.remove('mynext');
    }, 600)
}

// prev
prev.addEventListener('click', function(){
    prevs();
})


function prevs(){
    let active = document.querySelector('.item.active');
    active.classList.remove('active');
    active.classList.add('myprev');
    if (active.previousElementSibling != null) {
        active.previousElementSibling.classList.add('active');
    }else{
        item[item.length - 1].classList.add('active')
    }

    setTimeout(()=>{
        document.querySelector('.item.myprev').classList.remove('myprev');
    }, 600)
}

// move
var isDown = false;
let activemove = document.querySelector('.item.active');
let oldx  ;
activemove.addEventListener('mousedown', function(e) {
    isDown = true;
 
     oldx = e.clientX

      //console.log(e.clientX);

   

    offset = [
        // divOverlay.offsetLeft - e.clientX,
        // divOverlay.offsetTop - e.clientY
    ];
}, true);



document.addEventListener('mouseup', function(e) {
    isDown = false;
 
   
 if(e.target.classList[0] !== "bi")
    if(oldx  > e.clientX){
        // console.log("prev")
      nexts(); 
    } else{
         prevs();
    }

}, true);


 

document.addEventListener('mousemove', function(e) {
    event.preventDefault();
    if (isDown) {

    

        //console.log(e.clientX);
   
        // divOverlay.style.left = (e.clientX + offset[0]) + 'px';
        // divOverlay.style.top  = (e.clientY + offset[1]) + 'px';
  
    }
}, true);


// document.addEventListener('click', function(e){
//     e.preventDefault();
 
//     //e.srcElement.localName ტეგი

//     console.log(e);
// })

 

window.addEventListener("scroll" , function(e){
    console.log(this.scrollY)

    let alltest = document.querySelectorAll('.tsitem');

    alltest.forEach(els=>{
 
        els.style.transform = `translateX(${this.scrollY / 2}px)`;
    })

})