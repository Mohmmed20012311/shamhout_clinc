const swiper = new Swiper('.ser-wrapper', {
   
    loop: true,
    granCursor:true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerViews:1
        }, 620:{
            slidesPerViews:2
        }, 1024:{
            slidesPerViews:3
        },
    }
    
  
  })
  function myFunction(x) {
    x.classList.toggle("change");
  };