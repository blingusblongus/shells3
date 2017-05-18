var blinking = setInterval(blinker, 1600);

$('.info').css('display', 'none');
$('.intro').show();

$('.case').click(function(e){
    var id = e.currentTarget.id;
    
    //Check for empty Size click
    if(id === "size") return;
    
    $('.' + id).fadeIn(1000);
    $('.panel-background').fadeIn(1000);
})

 $('.info').click(function(e){     
     if($(e.currentTarget).is('#uses-1')){
         $('#uses-1').fadeOut(1000);
         $('#uses-2').fadeIn(1000);
     }else if($(e.currentTarget).is('#pattern-1')){
         $('#pattern-1').fadeOut(1000);
         $('#pattern-2').fadeIn(1000);
     }else{
         $('.info').fadeOut(1000);
         $('.panel-background').fadeOut(1000);
     }
});

function blinker(){
    $('.click-prompt').fadeOut(1500);
    $('.click-prompt').fadeIn(1500);
}