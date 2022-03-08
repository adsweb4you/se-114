import {mixColor, hex, Animal, http as htt} from './color.js'


let animal = new Animal("worlf");
 
// console.log(mixColor(), hex, animal);


let htppreq = new htt({
    url:"https://jsonplaceholder.typicode.com/comments"
})

 function fetchdata(){
   let res = htppreq.Request();

   res.onload = function(){
       console.log(res)
   }

 }
 
 fetchdata()
 

