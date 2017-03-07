console.log("jquery.js is connected");
$( document ).ready( function() {

    // Intro message
    $('.intro:first').fadeIn(3000).delay(300).fadeOut(4000, function(){
        $('.intro:eq(1)').fadeIn(3000).delay(300).fadeOut(4000, function(){
            $('.intro:eq(2)').fadeIn(3000).delay(300).fadeOut(4000, function(){
                $('.intro:eq(3)').fadeIn(3000).delay(300).fadeOut(4000, function(){
                    $('.intro:eq(4)').fadeIn(3000).delay(300).fadeOut(4000, function(){
                        $('.intro:eq(5)').fadeIn(3000).delay(300).fadeOut(4000, function(){
                            $('.name').fadeIn(500);
                        });
                    });
                });
            });
        });
    });
    //Intro message fades out and user adds name
    $('.name').on('submit',function getName(){
        var $playerName = $('input:first').val();

        if($playerName.length > 0){
            $('.name').fadeOut(500);
            var $greeting = $('.greeting').text("Welcome " + $playerName);
            $greeting.fadeIn(3000);
        }else{
            console.log('Still waiting...');
        }
    });


});
