$('.botton').click(function(){
  $('.homebg').addClass('is-hidden');
});

$('.itimaime').click(function(){
  $('.itimaime').css('display','none');
  $('.nimaime').css('display','block');
  $('.head1').css('display','none');
  $('.head2').css('display','block');
  $('.farst').css('display','none');
  $('.cardelia').append($('<img>',{
    src: 'img/kyakuzin.jpg',
    'class': 'card'
  }));
});

$('.nimaime').click(function(){
  $('.nimaime').css('display','none');
  $('.sentaku').css('display','block');
  $('.second').css('display','none');
  $('.cardelia').append($('<img>',{
    src: 'img/satuzinki.jpg',
    'class': 'card'
  }));
  $('.card').addClass('omote');
});

$(document).on('click','.omote',function(){
  $('.sentaku').css('display','none');
  $('.qestion').css('display','block');
});

$('.no').click(function(){
  $('.qestion').css('display','none');
  $('.sentaku').css('display','block');
  console.log('uti');
});

// var yakunum = [1,2,3,4,5];

