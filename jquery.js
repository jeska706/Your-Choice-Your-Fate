console.log("jquery.js is connected");
$( window ).on( "load", function() {


    $('.intro:first').fadeIn(800).fadeOut(2500, function(){
        $('.intro:eq(1)').fadeIn(800).fadeOut(2500, function(){
            $('.intro:eq(2)').fadeIn(800).fadeOut(2500, function(){
                $('.intro:eq(3)').fadeIn(800).fadeOut(2500, function(){
                    $('.intro:eq(4)').fadeIn(800).fadeOut(2500, function(){
                        $('.intro:eq(5)').fadeIn(800).fadeOut(2500, function(){

                        });   
                    });
                });
            });
        });
    });



    // $('#two').fadeIn(500).fadeOut(800);
    // $('#three').fadeIn(500).fadeOut(800);
    // $('#four').fadeIn(500).fadeOut(800);
    // $('#five').fadeIn(500).fadeOut(800);
    // $('#six').fadeIn(500).fadeOut(800);

});
