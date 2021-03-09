$(document).ready(function(){

  const flowersSlider = new Swiper('.flowers-slider', {
    // параметра слайдера
    loop: true,
    slidesPerView: 6,
  
    // подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        opts : {
          caption : 'First caption',
          thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });

    




  const reviewsSlider = new Swiper('.reviews-slider', {
    // параметра слайдера
    loop: true,
    slidesPerView: 1,
  
    // подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper = new Swiper('.flowers-slider', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
    
      },
      992: {
        slidesPerView: 6,
      }

    }
  });

 
  
  });
});