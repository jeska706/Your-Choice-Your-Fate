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

    // if($('.skip')){
    //     console.log("skip to next feature")
    // }

    //creating users health and damage points
    var $healthPoints = Math.floor(Math.random()*99)+20;
    var $damage = Math.floor(Math.random()*5)+1;

    //Intro message fades out and user adds name
    $('.name').on('submit',function getName(){
        var $playerName = $('input:first').val();
        if($playerName.length > 0){
            $('.name').fadeOut(500);
            var $greeting = $('.greeting').html("<h2>Greetings, " + $playerName + "<br> Your current health is: " + $healthPoints + "<br> You loose " + $damage + "  points per accident</h2>");
            $greeting.fadeIn(3000);
            $('.inital-choice').fadeIn(500);
        }else{
            var $error = $('.greeting').html("<h2>Selection invalid</h2>")
            $error.fadeIn(500);
        }
    });
    var $points = $('.current-points').text("Current Health: " + $healthPoints);
    //players inital Choice
    $('.inital-choice').on('click', function(){
        $('.greeting').fadeOut(500);
            $points.show(100);
        if($('.forest').hasClass('clicked')){
            $('.greeting').slideUp(800);
            $('.inital-choice').slideUp(800);
            $('.forest-choice').fadeIn(3000).slideUp(50000);
            $('.line-1').fadeIn(3000).slideUp(50000);

        } else if($('.cave').hasClass('clicked')){
            $('.cave-choice').show(800);
            $('.greeting').fadeOut(500);
            $('.inital-choice').fadeOut(500);

        } else if($('.city').hasClass('clicked')){
            $('.city-choice').show(800);
            $('.greeting').fadeOut(500);
            $('.inital-choice').fadeOut(500);

        }
    });
    //add clicked class and confirming it
    $('.forest').on('click',function(){
        $('.forest').addClass('clicked');
        var $clas = $('.forest').attr("class");
        console.log("This is the class: ", $clas);
    });
    $('.cave').on('click',function(){
        $('.cave').addClass('clicked');
        var $clas = $('.cave').attr("class");
        console.log("This is the class: ", $clas);
    });
    $('.city').on('click',function(){
        $('.city').addClass('clicked');
        var $clas = $('.city').attr("class");
        console.log("This is the class: ", $clas);
    });

    //entering inital choice scene layout







});
