

$(function () {


  // // გამოჩენა
  // $(".show").click(function (e) { 

  //     e.preventDefault();
  //     // $('.myimg').show(3000, function(){
  //     //     $('.myimg').hide(3000);
  //     // });
  //    // $('.myimg').fadeIn(3000);
  //    $('.myimg').slideDown('slow');

  // //    $('.myimg').css({
  // //       "border-radius":"50px",
  // //       "width":"400px",
  // //       "filter":"blur(2px)",
  // //       "transition":"all .6s"
  // //    })

  // $('.myimg').animate({
  //     "border-radius":"50px",
  //     "width":"400px",

  // }, 1200, function(){
  //     $('.myimg').animate({
  //         'margin-left':"400px",
  //         'margin-top':"400px",
  //     }, 200, function(){
  //         $('.myimg').animate({
  //             "opacity":0
  //         }, 1000)
  //     })
  // })

  // });

  //     // დამალვა
  //     $(".hide").click(function (e) { 
  //         e.preventDefault();
  //         // $('.myimg').hide(3000);
  //       //   $('.myimg').fadeOut(3000)
  //       $('.myimg').slideUp('slow');
  //     });



  //     // დამალვა/გამოჩენა
  //     $(".toggle").click(function (e) { 
  //         e.preventDefault();
  //         // $('.myimg').toggle(3000);
  //         // $('.myimg').fadeToggle(3000)
  //         $('.myimg').slideToggle('slow');
  //     });

  $(".form").click(function (e) {
    e.preventDefault();
    if (e.target.classList[0] !== "btn") {

      $(this).animate({
        "width": "400px",
        "height": "600px",
        "border-radius": "50px",
      }, 1200, function () {
        $('.form form').css({
          'transform': 'translateY(0)',
          'opacity': '1',
          'pointer-events': 'all',
          'transition': 'all 1.2s',
        })
      })
    }


  });


  $('.btn').click(function () {
    $('.form form').css({
      'transform': 'translateY(100%)',
      'opacity': '0',
      'pointer-events': 'none',
      'transition': 'all 1.2s',
    })

    setTimeout(() => {
      $('.form').animate({
        "width": "80px",
        "height": "80px",
        "border-radius": "500px",
      }, 1200)
    }, 1200);



  })

  let ss = 0;
  $(".btn-clas").click(function (e) {
    e.preventDefault();
    // get txt $('.box').text()
    // get html $('.box').html()

    // set txt $('.box h1').text("asdas");
    // set html $('.box h1').html("<span> asdas </span>")
    // let val  = $('.box input').val(); // get value
    // $('.box input').val(58); // set value
    //let attrr = $('.box input').attr('type') // ატრიბუტის get
    // $('.box input').attr({'type':'password', 'maxlength':'10'}) // ატრიბუტის set
    //  $('.box input').removeAttr('required') // ატრიბუტის წაშლა

    // prop get let dis = $('.box input').prop('disabled')
    // prop set $('.box input').prop('disabled', false)
    // $('.box input').prop('disabled', !$('.box input').prop('disabled'))



    // კლასისი მინიჭება $('.box').addClass('show');
    // კლასისი წაშლა $('.box').removeClass('show');
    // კლასის მინიჭება/წაშლა $('.box').toggleClass('show');
    // კლასის ჩანაცვლება $('.box').removeClass('show').addClass('open') 
    let inputs = `<label> <input  class="ss" value="${ss}" >  <button  class="rembtn" data-id="${ss}"> X </button></label>`;
    $('.dyns').before(inputs);
    ss++;

  });

  $(document).on('click', '.rembtn', function (e) {
    e.preventDefault();
    let id = $(this).data('id');
    $(this).remove();
    $('input[value="' + id + '"]').remove();
  });

  $(document).on('click', '.btn-empty', function () {
    $('.dyns').empty();
    ss = 0
  })



  //$('.mine').parent() აბრუნებს ელემენტის მშობელს
  // $('.mine').parents() აბრუნებს ელემენტის მშობელებს
  //   $('.mine').parentsUntil('body').css('background-color', 'green') აბრუნებს მშობელს კონკრეტულ მშობლამდე
  //  $('.parents').children().css('background-color', 'red') აბრუნებს ყველა შვილს
  // $('.parents').children('.mine').css('background-color', 'red') აბრუნებს კონკრეტულ  შვილს
 //  $('.mine').next().css('background-color', 'red') // ქვედა მეზობელი
  // $('.mine').prev().css('background-color', 'green') // ზედა მეზობელი
  // $('.mine').nextAll().css('background-color', 'red') // ქვედა ყველა მეზობელი
  // $('.mine').prevAll().css('background-color', 'green') // ზედა ყველა მეზობელი
  $('.mine').prevUntil('.tst').css('background-color', 'green')

  console.log($('.parents').next( ))


let Cars = [

  {
    id:1,
    name:"ford",
    model:["mustang", "f-150", "branco"],
  },

  {
    id:2,
    name:"bmw",
    model:["f-10", "m3", "m5"],
  },

  {
    id:3,
    name:"toyota",
    model:["camry", "hiluxe", "prado"],
  },

  {
    id:4,
    name:"tesla",
    model:[

      {
        id:5,
        name:"model-S"
      },
      {
        id:3,
        name:"model-S"
      },
      {
        id:4,
        name:"model-S"
      }

    ],
  },

]

Cars.forEach(car=>{
  $('#make').append(`<option value="${car.id}">  ${car.name}</option>`)
})

$("#make").change(function (e) { 
  e.preventDefault();

  $('#model').empty();

  let id = $(this).val();

 let Models =  Cars.find(el=>{
    return el.id == id;
  })


  Models.model.forEach(mod=>{
      $('#model').append(`<option value="${mod}">  ${mod}</option>`)
  })


  
});


$(".colors span").click(function (e) { 
  e.preventDefault();
   let img = $(this).data('img');
   $('.poster').attr('src', img)
});

let c = 0;
$(".addcrt").click(function (e) { 
  e.preventDefault();
  
  $(this).css({
     "background-color":"red",
     "transition":"all .6s",
     "color":"#fff",
     "border":"3px solid red"
  })

  setTimeout(()=>{
    $(".addcrt").css({
      "width":"56px",
      "height":"56px",
      "transition":"all .6s",
    }).text(1);
 

    setTimeout(()=>{
     
    $('.counter').css({
      "opacity":1,
      "z-index":99999,
      "pointer-events":"all",
      "top":" 41px",
      "transform": "scale(.4)",
      "left": "19rem",
    }).text(c)

    $(".addcrt").css({
      "width":"100%",
      "height":"56px",
      "transition":"all .6s",
      "background-color":"#fff",
      "color":"#000",
      "border":"3px solid #000"
    }).text("Add To cart");

    }, 600)

  }, 600)

  c++;

});


$('.maps li').css('background-color', 'red')

$.each($('.maps li'), function(index, elemet){
 if($(elemet).text() == "კონტენტ 1"){
  $(elemet).replaceWith(`<li> <span> 25 </span></li>`)
 }
})

});