$(function() {
    
    $('.rev_slider').slick({

        // autoplay: true,
        // autoplaySpeed: 3000,
    });
    

    $('.block_coments').slick({

        // autoplay: true,
        // autoplaySpeed: 3000,
    });

    $('.buy_card_container').masonry({
        // options
        itemSelector: '.buy_card',
        gutter: 20,
        columnWidth: 335,
        fitWidth: true
      });
});



// Set the date we're counting down to
let countDownDate = new Date("Jun 25, 2022 17:07:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (100 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = hours +":"+minutes + ":" + seconds ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


