// select赋值给input
$('.innerRight select').on('click', function () {
  var select = $(this).val();
  var input = $(this).parent('.innerRight').find('input')
  $(input).val(select)
})
$('.innerRight select').on('change', function () {
  var select = $(this).val();
  var input = $(this).parent('.innerRight').find('input')
  $(input).val(select)
})
// 城市联动
$('#cityPicker1').cityPicker({
  title: '',
  onChange: function (pick, values, displayValues) {

  }
})
$('#cityPicker2').cityPicker({
  title: '',
  onChange: function (pick, values, displayValues) {

  }
})
$('#cityPicker3').cityPicker({
  title: '',
  onChange: function (pick, values, displayValues) {

  }
})

// 录入时，必填项不能为空
$('.subBtn').on('click', function () {
  var _li = $('.inner li.mustFill');
  for (var i = 0; i < _li.length; i++) {
    var _fillVal = $(_li[i]).find('input').val();
    if (_fillVal === '') {
      $(_li[i]).addClass('active');
      var getHeight = $('.inner li.active')[0].offsetTop - 76;
      $('body').scrollTop(getHeight);
    } else {
      $(_li[i]).removeClass('active');
    }
    var $li = $('.inner li.active');
    if ($li.length === 0) {
      $('.reminder').addClass('active');
      $('.subBtn').attr('disabled', true);
      setTimeout(function () {
      $('.subBtn').removeAttr('disabled');
        $('.reminder').removeClass('active');
      }, 3000)
    }
  }
})
$('.citypicker').on('click', function () {
  var $input = $('input');
  for (var i = 0; i < $input.length; i++) {
    $($input[i]).blur();
  }
  var $select = $('select');
  for (var i = 0; i < $select.length; i++) {
    $($select[i]).blur();
  }
})

// ios兼容fixed
$('body').on('touchstart', function () {
  $('input').blur();
  $('select').blur();
  $('textarea').blur();
});

var domTop = $('.fixTop');
$('.inner').find('input').on('focus', function () {
  domTop.css('position', 'fixed');
  setTimeout(function () {
    domTop.css('top', 0);
  }, 300);
});
$('.inner').find('input').on('blur', function () {
  domTop.css('position', 'absolute');
});