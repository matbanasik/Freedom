$(function(){
    $('.fa-bars').click(function(){
        $('.nav-hidden').animate({marginLeft: '0'}, {
            duration: 1000,
            easing: 'swing'
        });
        
        $(this).fadeOut(100);
    })
    
    $('.fa-times').click(function(){
        $('.nav-hidden').animate({marginLeft: '120%'},{
            duration: 1000,
            easing: 'swing'
        });
        $('.fa-bars').fadeIn(1000);
    })
    
})

    $(window).scroll(function(){
        if($(window).scrollTop()<$(window).innerHeight()){
        $('.fa-bars').css('color', '#fff')
        $('.social-icons a').css('color', '#fff')
    } else{
        $('.fa-bars').css('color', '#333')
        $('.social-icons a').css('color', '#333')
    }
    })


    $(window).scroll(function(){
        if($(window).scrollTop()<$(window).innerHeight()-400){
        $('.social-icons a').css('color', '#fff')
        $('.social-icons a').css('display', 'block')
    } else if($(window).scrollTop() + $(window).height() > $(document).height() - 100){
        $('.social-icons a').css('display', 'none')
    }   
    else{
        $('.social-icons a').css('color', '#333')
        $('.social-icons a').css('display', 'block')
    }
    })
