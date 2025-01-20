const btn = document.querySelector('.js-mobile-menu-btn');
const menu = document.querySelector('.js-menu');


$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 2000,
      values: [ 39, 1230 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

  btn.addEventListener("click", (e) => {
    btn.classList.add("active");
    menu.classList.add("active");
});