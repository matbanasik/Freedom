$(function(){$('input[type="password"]').on('focus',function(){$('.fa-unlock-alt').fadeOut(100)})
$('input[type="text"]').on('focus',function(){$('.fa-user-o').fadeOut(100)})
$('input[type="password"]').on('blur',function(){$('.fa-unlock-alt').fadeIn(100)})
$('input[type="text"]').on('blur',function(){$('.fa-user-o').fadeIn(100)})})