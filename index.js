$('.dropdown').mouseenter(function(){
    $(this).find('.dropdown-toggle').trigger('show.bs.dropdown');
});

$('.dropdown').mouseleave(function(){
    $(this).find('.dropdown-toggle').trigger('hide.bs.dropdown');
});

$('.dropdown').on('show.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});
