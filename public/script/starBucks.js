(function($, window, document, undefined){

    class StarBucks {
        init (){
        this.header();
        this.section1();
        this.section2Notice();  
        this.section2Slide();   
        this.section3();
        this.section4();
        this.section5();
        this.section6();
        this.section7();
        this.section8();
        this.goTop();
        this.quickMenu();
        }

        header(){

                 
            $('.berger-btn').on({
              click: function(){
                   $('#mobileNav').addClass('addMobile');
                   $('.mobile-container').stop().animate({left:0}, 400);
              }
             });
    
    
             $('.mobile-close').on({
              click: function(){
                $('.mobile-container').stop().animate({left:110+'%'}, 400, function(){
                $('#mobileNav').removeClass('addMobile');
             });                  
                  }
                  });
    
                  
                  $('.mobile-container li a').on({
                      click: function(){                    
                        $(this).toggleClass('addMobile');
                        $(this).next('div').slideToggle(300);
                        $('.mobile-container li a.none-sub').removeClass('addMobile');
                      }
                  });
       
    
    
    
    
                  $('.find-btn').on({
                      click: function(){
                          $('.find-box').toggleClass('addInput');
                      }
                  });
    
                  $('.main-btn').on({
                      mouseenter: function(){
                        $('.main-btn').removeClass('addCurrent');
                        $(this).addClass('addCurrent');
                        $('.sub').stop().slideUp(0);
                        $(this).next().stop().slideDown(600,'easeOutExpo');
                      },
                      focusin: function(){
                        $('.main-btn').removeClass('addCurrent');
                        $(this).addClass('addCurrent');
                        $('.sub').stop().slideUp(0);
                        $(this).next().stop().slideDown(600,'easeOutExpo');
                      }
                  });
    
                  
                  $('#nav').on({
                      mouseleave: function(){
                        $('.main-btn').removeClass('addCurrent');
                        $('.sub').stop().slideUp(600,'easeOutExpo');
                      }
                  });
         }


        header(){

        }
        section1(){
            
        }
        section2Notice(){
            
        }
        section2Slide(){
            
        }
        section3(){
            
        }
        section4(){
            
        }
        section6(){
            
        }
        section7(){
            
        }
        section8(){
            
        }
        goTop(){
            
        }
        quickMenu(){
            
        }        
    }

    //클래스 객체 생성
    const newStarBucks = new StarBucks ();
          newStarBucks.init();

})(jQuery, window, document);