$(document).ready(function() {
   var currentPosition = 0;
   var slideWidth = 560;
   var slides1 = $('.slides1');
   var slides2 = $('.slides2');
   var slides3 = $('.slides3');
   var slides4 = $('.slides4');
   var numberOfSlides1 = slides1.length;
   var numberOfSlides2 = slides2.length;
   var numberOfSlides3 = slides3.length;
   var numberOfSlides4 = slides4.length;

   // Remove scrollbar in JS
   $('.slidesContainer1').css('overflow', 'hidden');

   // Wrap all .slides with #slideInner div
   slides1
      .wrapAll('<div id="slideInner"></div>')
      // Float left to display horizontally, readjust .slides width
      .css({
         'float': 'left',
         'width': slideWidth
      });

   // Set #slideInner width equal to total width of all slides
   $('#slideInner').css('width', slideWidth * numberOfSlides1);

   // Insert left and right arrow controls in the DOM
   $('.slideshow1')
      .prepend('<span class="control" id="leftControl">Move left</span>')
      .append('<span class="control" id="rightControl">Move right</span>');

   // Hide left arrow control on first load
   manageControls(currentPosition);

   // Create event listeners for .controls clicks
   $('.control')
      .bind('click', function() {
         // Determine new position
         currentPosition = ($(this).attr('id') == 'rightControl') ?
            currentPosition + 1 : currentPosition - 1;

         // Hide / show controls
         manageControls(currentPosition);
         // Move slideInner using margin-left
         $('#slideInner').animate({
            'marginLeft': slideWidth * (-currentPosition)
         });
      });



   // Remove scrollbar in JS
   $('.slidesContainer2').css('overflow', 'hidden');

   // Wrap all .slides with #slideInner div
   slides2
      .wrapAll('<div id="slideInner"></div>')
      // Float left to display horizontally, readjust .slides width
      .css({
         'float': 'left',
         'width': slideWidth
      });

   // Set #slideInner width equal to total width of all slides
   $('#slideInner').css('width', slideWidth * numberOfSlides2);

   // Insert left and right arrow controls in the DOM
   $('.slideshow2')
      .prepend('<span class="control" id="leftControl">Move left</span>')
      .append('<span class="control" id="rightControl">Move right</span>');

   // Hide left arrow control on first load
   manageControls(currentPosition);

   // Create event listeners for .controls clicks
   $('.control')
      .bind('click', function() {
         // Determine new position
         currentPosition = ($(this).attr('id') == 'rightControl') ?
            currentPosition + 1 : currentPosition - 1;

         // Hide / show controls
         manageControls(currentPosition);
         // Move slideInner using margin-left
         $('#slideInner').animate({
            'marginLeft': slideWidth * (-currentPosition)
         });
      });



   // Remove scrollbar in JS
   $('.slidesContainer3').css('overflow', 'hidden');

   // Wrap all .slides with #slideInner div
   slides3
      .wrapAll('<div id="slideInner"></div>')
      // Float left to display horizontally, readjust .slides width
      .css({
         'float': 'left',
         'width': slideWidth
      });

   // Set #slideInner width equal to total width of all slides
   $('#slideInner').css('width', slideWidth * numberOfSlides3);

   // Insert left and right arrow controls in the DOM
   $('.slideshow3')
      .prepend('<span class="control" id="leftControl">Move left</span>')
      .append('<span class="control" id="rightControl">Move right</span>');

   // Hide left arrow control on first load
   manageControls(currentPosition);

   // Create event listeners for .controls clicks
   $('.control')
      .bind('click', function() {
         // Determine new position
         currentPosition = ($(this).attr('id') == 'rightControl') ?
            currentPosition + 1 : currentPosition - 1;

         // Hide / show controls
         manageControls(currentPosition);
         // Move slideInner using margin-left
         $('#slideInner').animate({
            'marginLeft': slideWidth * (-currentPosition)
         });
      });



   // Remove scrollbar in JS
   $('.slidesContainer4').css('overflow', 'hidden');

   // Wrap all .slides with #slideInner div
   slides4
      .wrapAll('<div id="slideInner"></div>')
      // Float left to display horizontally, readjust .slides width
      .css({
         'float': 'left',
         'width': slideWidth
      });

   // Set #slideInner width equal to total width of all slides
   $('#slideInner').css('width', slideWidth * numberOfSlides4);

   // Insert left and right arrow controls in the DOM
   $('.slideshow4')
      .prepend('<span class="control" id="leftControl">Move left</span>')
      .append('<span class="control" id="rightControl">Move right</span>');

   // Hide left arrow control on first load
   manageControls(currentPosition);

   // Create event listeners for .controls clicks
   $('.control')
      .bind('click', function() {
         // Determine new position
         currentPosition = ($(this).attr('id') == 'rightControl') ?
            currentPosition + 1 : currentPosition - 1;

         // Hide / show controls
         manageControls(currentPosition);
         // Move slideInner using margin-left
         $('#slideInner').animate({
            'marginLeft': slideWidth * (-currentPosition)
         });
      });

}); // end of javascript