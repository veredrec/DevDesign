$('a').click(function() {
  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
  return false;
});
/* handles the bars icon to open and close the menu on mobile */
function openMenu() {
  var nav = document.getElementById("topnav");
  if (nav.className === "navbar") {
    nav.className += " responsive";
  } else {
    nav.className = "navbar";
  }
}
