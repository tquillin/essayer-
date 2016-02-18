console.log("display_pics, est là");
$(document).ready(function(){





displayAll();
hideAll();


displaySD();
hideDisplaySD();
displayTequilaSD();
hideDisplayTequilaSD();
displayWineSD();
hideDisplayWineSD();

  });


  function displayAll(){
      display();

      displayTequila();

      displayWine();

            }

  function hideAll(){
              hideDisplay();
              hideDisplayTequila();
              hideDisplayWine();
            }

  function display(){
      $(".beer").hover(function(){
        $('.display').css("visibility", "visible");
      });
      }
  function hideDisplay(){
                $('#exit').click(function(){
                  $('.display').css("visibility", "hidden");
                });
              }

              function displayTequila(){
                $('.tequila').hover(function(){
                  $('.display-tequila').css("visibility", "visible");
                  $('#display-tequila-three').css("visibility", "visible");


                });

                }
                function hideDisplayTequila(){
                  $('#exit-tequila-three').click(function(){
                    $('.display-tequila').css("visibility", "hidden");
                    $('#display-tequila-three').css("visibility", "hidden");

                  });
                }


              function displayWine(){
                $(".wine").hover(function(){
                  $(".display-wine").css("visibility", "visible");

                });

                }
                function hideDisplayWine(){
                  $('#exit-wine').click(function(){
                    $('.display-wine').css("visibility", "hidden");
                  });
                }

                function displaySD(){
                  $(".beer-sd").hover(function(){
                    $('.display-sd').css("visibility", "visible");

                  });

                  }
                  function hideDisplaySD(){
                    $('#exit-sd').click(function(){
                      $('.display-sd').css("visibility", "hidden");
                    });
                  }

                  function displayTequilaSD(){
                    $(".tequila-sd").hover(function(){
                      $('.display-tequila-sd').css("visibility", "visible");

                    });

                    }
                    function hideDisplayTequilaSD(){
                      $('#exit-tequila-sd').click(function(){
                        $('.display-tequila-sd').css("visibility", "hidden");
                      });
                    }


                  function displayWineSD(){
                    $(".wine-sd").hover(function(){
                      $('.display-wine-sd').css("visibility", "visible");

                    });

                    }
                    function hideDisplayWineSD(){
                      $('#exit-wine-sd').click(function(){
                        $('.display-wine-sd').css("visibility", "hidden");
                      });
                    }
