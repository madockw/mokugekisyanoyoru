var $target = document.querySelector('.homebg');
var $button = document.querySelector('.botton');
$button.addEventListener('click', function() {
  $target.classList.add('is-hidden');
})
