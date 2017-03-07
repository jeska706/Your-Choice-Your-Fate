console.log("jquery.js is connected");
$( document ).ready( function() {

    // Intro message
    // $('.intro:first').fadeIn(3000).delay(300).fadeOut(4000, function(){
    //     $('.intro:eq(1)').fadeIn(3000).delay(300).fadeOut(4000, function(){
    //         $('.intro:eq(2)').fadeIn(3000).delay(300).fadeOut(4000, function(){
    //             $('.intro:eq(3)').fadeIn(3000).delay(300).fadeOut(4000, function(){
    //                 $('.intro:eq(4)').fadeIn(3000).delay(300).fadeOut(4000, function(){
    //                     $('.intro:eq(5)').fadeIn(3000).delay(300).fadeOut(4000, function(){
                            $('.name').fadeIn(500);
    //                     });
    //                 });
    //             });
    //         });
    //     });
    // });

    if($('.skip')){
        console.log("skip to next feature")
    }

    //Intro message fades out and user adds name
    $('.name').on('submit',function getName(){
        var $playerName = $('input:first').val();
        if($playerName.length > 0){
            $('.name').fadeOut(500);
            var $greeting = $('.greeting').html("<h2>Welcome, " + $playerName + "</h2>");
            $greeting.fadeIn(3000);
            $('.inital-choice').fadeIn(500);
        }else{
            console.log('Still waiting...');
        }
    });

    $('.forest-choice').click(function(){
        $(this).addClass('clicked');
        var $clas = $(this).attr("class");
        console.log($clas);
    });
    $('.cave-choice').click(function(){
        $(this).addClass('clicked');
        var $clas = $(this).attr("class");
        console.log($clas);
    });
    $('.city-choice').click(function(){
        $(this).addClass('clicked');
        var $clas = $(this).attr("class");
        console.log($clas);
    });

    //players inital Choice
    var $choice = $('.inital-choice').on('click', function(){
        $('.greeting').fadeOut(500);
        $('.inital-choice').fadeOut(500);

        var $chosen = {};
        if($('.forest').hasClass('clicked')){
            console.log("forest");
            $('.forest-choice').show(800);
        } else if($('.cave').hasClass('clicked')){
            console.log("cave");
            $('.cave-choice').show(800);
        } else if($('.city').hasClass('clicked')){
            console.log("city");
            $('.city-choice').show(800);
        }

    });
    // $choice();

    console.log($choice)









});
