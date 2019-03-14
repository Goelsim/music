let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

    //Clear all images
    function reset(){
      for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
      }
    }

    //Init slider
    function startSlide(){
      reset();
      sliderImages[0].style.display = 'block';
    }

    //show prev
    function slideLeft(){
      reset();
      sliderImages[current - 1].style.display = 'block';
      current--;
    }

    //show next
    function slideRight(){
      reset();
      sliderImages[current + 1].style.display = 'block';
      current++;
    }

    //Left arrow click
    arrowLeft.addEventListener('click', function(){
      if (current === 0){
        current = sliderImages.length;
      }
      slideLeft();
    });

    //Right arrow click
    arrowRight.addEventListener('click', function(){
      if (current === sliderImages.length - 1){
        current = -1;
      }
      slideRight();
    });

    startSlide();

  $(".oj").scrollTop = 0
  $("#intro").click(function () {
    $('html,body').animate({
        scrollTop: $(".introduction").offset().top
    },
        'slow');
});
    $("#artists").click(function () {
      $('html,body').animate({
          scrollTop: $(".artists").offset().top
      },
          'slow');
  });

$("#contact").click(function () {
  $('html,body').animate({
      scrollTop: $(".contact").offset().top
  },
      'slow');
});