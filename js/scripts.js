$(document).ready(() => {

  const hamburger = document.querySelector('.menu');
  const sub = document.querySelector('.submenu');

  /*
   * Submenu Toggle
   */
  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    sub.classList.toggle('submenu-active');
  })

/**
 * Toggle Buttons
 */

  $('.button').click(function(){
    $(this).toggleClass('active');
  })

  $('.row').click(function(){
    $(this).find('.subtext').slideToggle('slow');
  })


})
