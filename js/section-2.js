$(function(){
    let top = $('.container').offset().top - window.innerHeight;
    $(window).scroll(function(){
        let current = $(window).scrollTop();

        if(current>top){
            $('.buttons-container').animate({marginTop: '100px', opacity: '1'}, 1600)
        }
    })

})
