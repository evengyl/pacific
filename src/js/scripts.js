let swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



document.addEventListener('DOMContentLoaded', function(){


 // black menu

  let blackMenu=document.querySelector('.navigation');
  let header= document.querySelector ('header');
  let liens= document.querySelectorAll ('.navigation a');


  window.addEventListener('scroll', function(){
  
    let start= header.getBoundingClientRect().bottom;
    
  
    if(start<= 0){
        blackMenu.classList.add('black-menu');
        blackMenu.classList.add('revealed');
        btn.classList.add('black-burger');
        btn.classList.add('revealed')
    }else {
          blackMenu.classList.remove('black-menu');
          blackMenu.classList.remove('revealed');
          btn.classList.remove('black-burger');
          btn.classList.remove('revealed')
      }
  
  })



    let hWindow = window.innerHeight;
    //console.log(hWindow)
    let blocs = document.querySelectorAll('.test');
    let blocsArray = Array.from(blocs);
    
    console.log(blocsArray)

    

    window.addEventListener('scroll', function(){

        // let camPos = window.pageYOffset + hWindow;
        let nav =  Array.from(document.querySelectorAll('.navigation a'));
       
        for(let i=0; i<blocsArray.length;i++){
          let blocTopPosInDom = blocsArray[i].getBoundingClientRect().top ;
          let blocBottomPosInDom = blocsArray[i].getBoundingClientRect().bottom ;

          if(blocTopPosInDom <= 100){
            
            nav[i].classList.add('on');
          }
          if(blocBottomPosInDom <= 0) {
            nav[i].classList.remove('on');
          }


        }

        
    
       

        
    }); 

// menu burger
let btn=document.querySelector('.burger-menu');
let rideau = document.querySelector ('.rideau');
let liensBurgerMenu= document.querySelectorAll('.nav-burger a');


btn.addEventListener('click', function(){

    btn.classList.toggle('active');
    rideau.classList.toggle('visible');
})
//   if(window.innerWidth<780){
    for(let i=0; i<liensBurgerMenu.length;i++){

      liensBurgerMenu[i].addEventListener('click', function(){
        btn.classList.toggle('active');
        rideau.classList.toggle('visible');
     })
    }
//   }




})