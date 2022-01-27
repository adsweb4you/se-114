let Questions = [
    {
        quest:"რომელ აპლიკაციას იყენებ ყველაზე აქტიურად?",
        answers:[
            "Spotify / Soundcloud",
            "Facebook / Instagram",
            "Youtube / Tiktok",
            "Linkedin / Slack"
        ],
        img:"https://rachel.on.ge/2022/01/21/1642750067.gif",
        correct:0,
        point:25
    },

    {
        quest:"რა არის შენი მიზანი 2022 წელს?",
        answers:[
            "Spotify / Soundcloud",
            "Facebook / Instagram",
            "Youtube / Tiktok",
            "Linkedin / Slack"
        ],
        img:"https://chandler.on.ge/2022/01/21/1642751652.gif",
        correct:1,
        point:60
    },
    
]

let corans = 0;
let wrong = 0;
let allpont = 0;

Questions.forEach((ques, index)=>{

    let answe = '';

    ques.answers.forEach((ans, ind)=>{
        let cls;
         if(ind == ques.correct){
              cls = 'correct'
         }else{
             cls = ''
         }

        answe +=  `<div class="col-lg-6"> 
        <p   class="${cls}">  ${ans} </p>
        </div>`  ;
    })

    let checkindex;

    if(index == 0){
        checkindex = 'current'
    }else{
        checkindex = 'd-none'
    }

    let card = `
     <div class="col-lg-5 ${checkindex} d-none mx-auto shadow p-3 mb-5"> 
    <img src="${ques.img}" class="img-fluid">
     <h3 class="p-3">${ques.quest} </h3>
       <div class="row bg-light mt-3">
          ${answe}
       </div>
     <div>
    `

    document.querySelector('.quis-div').innerHTML +=  card;
 
})
let nexts = document.querySelector('.next');

function checkans(select){
    select.forEach(ll=>{
       

        ll.addEventListener('click', function(){
            nexts.removeAttribute('disabled')
            let sel = document.querySelectorAll('.quis-div p');
            sel.forEach(s=>{
                s.classList.remove('succ');
                s.classList.remove('den')
            })

           if(ll.classList.contains('correct')){
              this.classList.add('succ')
              corans++;
              allpont += allpont 
           } else{
            this.classList.add('den')
            wrong++;
           }
          
        })
    })

  
}
 
checkans(document.querySelectorAll('.quis-div p'));

function next(){
    

 
    nexts.addEventListener('click', function(){
        this.disabled = true;
   let cur =   document.querySelector('.current') 
 
   if(  cur.nextElementSibling != null){
       cur.nextElementSibling.classList.add( 'current');
   }else{
    document.querySelector('.quis-div').innerHTML  =   `ტესტირება დასრულებულია თქვენ გაქვთ     <span class="text-success"> ${corans}  </span> სწორი პასუხი და 
   <span class="text-danger">  ${wrong} </span> არასწორი პასუიხი | ჯამში აიღეთ ${allpont} ქულა
    
    ${Questions.length} კითხვიდან;

    `;
    this.remove();
   }
   cur.classList.remove('current'); 
})
}

   next();