function cube(){
    $('.single-btn').click(function(){
        
        switch(this.id){
            case 'right-link':
                hideMore();
                $('#cube').attr('class','show-right');
                break;
            case 'left-link':
                hideMore();
                $('#cube').attr('class','show-left');
                break;
            case 'front-link':
                hideMore();
                $('#cube').attr('class','show-front');
                break;
            case 'back-link':
                hideMore();
                $('#cube').attr('class','show-back');
                break;
            case 'top-link':
                hideMore();
                $('#cube').attr('class','show-top');
                break;
            case 'bottom-link':
                hideMore();
                $('#cube').attr('class','show-bottom');
                break;
        }
    })
}

cube();


function showMore(){
        $('.btn-cube').on('click', function(e){

        switch($(this).parent().attr('id')){
            case 'back':
                 show('more-back');
                break;
            case 'front':
                 show('more-front');
                break;
            case 'right':
                 show('more-right');
                break;
            case 'left':
                 show('more-left');
                break;
            case 'top':
                 show('more-top');
                break;
            case 'bottom':
                 show('more-bottom');
                break;
        }
    })

}

showMore();

function show(id){
    this.id = id;
    $('.more').animate({width: '600px'}, 500);
    
    setTimeout(function(){
        $('#' + id).slideDown(500);
    }, 500)
}

function hideMore(){
    $('.more div').hide();
    $('.more').animate({width: '0'}, 500);
        
}


