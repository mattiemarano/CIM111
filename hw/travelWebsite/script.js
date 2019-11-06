$(document).ready(function() {

   $("#about_souks").click(function() {
      $("#about_souks_info").html("A souq or souk is a marketplace or commercial quarter in Western Asian, North African and some Horn African cities. The term souq goes by many alternatives in different parts of the world; in the Balkans, the term bedesten is used; in Malta the terms suq and sometimes monti are used for a marketplace; and in northern Morocco, the Spanish corruption socco is often used. The equivalent Persian term is bazaar. In general a souq is synonymous with a bazaar or marketplace, and the term souq is used in Arabic-speaking countries.");
   }); //end of button

   $("#about_souks").click(function() {
      $("#about_souks_info").toggle();
   })


   $("#flag").mouseover(function() {
      $("#about_flag").html("The Moroccan flag was adopted on November 17, 1915. Morocco gained independence from France on March 2, 1956. The 'Seal of Solomon' was added to the red flag, previously used by the reigning Moroccan dynasty since the 17th century, to differentiate Morocco's flag from similar red flags of other nations.");
   })
   $("#flag").mouseleave(function() {
      $("#about_flag").html(" ");
   })

   $("h1").mouseover(function() {
      $("h1").css("font-size", "150px");
   })

   $("h1").mouseleave(function() {
      $("h1").css("font-size", "60px");
   })




}); //end of document ready