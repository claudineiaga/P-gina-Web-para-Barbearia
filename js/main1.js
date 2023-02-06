//jquery-click-scroll

var sectionArray = [1, 2, 3, 4, 5];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top - 0;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('#sidebarMenu .nav-link').removeClass('active');
             $('#sidebarMenu .nav-link:link').addClass('inactive');  
             $('#sidebarMenu .nav-item .nav-link').eq(index).addClass('active');
             $('#sidebarMenu .nav-item .nav-link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 0;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });
    
});

$(document).ready(function(){
    $('#sidebarMenu .nav-item .nav-link:link').addClass('inactive');    
    $('#sidebarMenu .nav-item .nav-link').eq(0).addClass('active');
    $('#sidebarMenu .nav-item .nav-link:link').eq(0).removeClass('inactive');
});