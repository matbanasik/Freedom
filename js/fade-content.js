$(function(){
    let top1 = $('.container').offset().top - window.innerHeight;
    let top2 = $('#about').offset().top - window.innerHeight;
    let top3 = $('#gallery-3d').offset().top - window.innerHeight;
    let top4 = $('#wrapper2').offset().top - window.innerHeight;
    let top5 = $('#wrapper3').offset().top - window.innerHeight;
    
    $(window).scroll(function(){
        let current = $(window).scrollTop();


        if(current>top1){
             $('.container').animate({opacity: '1', marginTop: '0'}, 800);
             $('#border1').animate({width: '100%'}, 1600);
        }
        
        if (current>(top2-500)){
            $('#about').animate({opacity: '1', marginTop: '100px'}, 800);
             $('#border2').animate({width: '100%'}, 1600);
            $('#wrapper1').animate({left: '0'}, 1600);
        }
        
        if (current>(top3-1000)){
           $('#gallery-3d').animate({opacity: '1', marginTop: '100px'}, 800);
             $('#border3').animate({width: '100%'}, 1600); 
        }
        
        if (current>(top4-900)){
            $('#wrapper2').animate({left: '0'}, 1000);
        }
                     
        if (current>(top5-900)){
            $('#wrapper3').animate({left: '0'}, 1000);
        }

    })

})




