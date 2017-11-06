$(function(){
    let links = $('.navbar a');
    let top1 = window.innerHeight;
    let top2 = $('#about').offset().top - window.innerHeight;
    let top3 = $('#gallery-3d').offset().top - window.innerHeight;
    let top4 = $('#page-footer').offset().top - window.innerHeight;
    
    $(links).click(function(){
        switch(this.className){
            case 'section1':
                $('html, body').animate({scrollTop: 0})
                break;
                
            case 'section2':
                $('html, body').animate({scrollTop: top1})
                break;
            
        
            case 'section3':
                $('html, body').animate({scrollTop: top2-200})
                break;
            
                   
            case 'section4':
                $('html, body').animate({scrollTop: top3-730})
                break;
                
            case 'section5':
                $('html, body').animate({scrollTop: top4})
                break;
            }
        
        
        
    })
    
})
