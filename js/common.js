(function() {

  /* change view buttons */
  var viewButton = document.getElementsByClassName('view-selector__item');

  for (var i = 0; i < viewButton.length; i++) {
    viewButton[i].onclick = function () {
      viewButton[0].classList.toggle('view-selector__item_active');
      viewButton[1].classList.toggle('view-selector__item_active');
    }
  }
})();