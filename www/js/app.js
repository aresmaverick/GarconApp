$('.collection').on('click', '.collection-item', function(){
  var $badge = $('.badge', this);
  var nomeProduto = this.firstChild.textContent;

  if ($badge.length === 0) {
    $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
  }

  $badge.text(parseInt($badge.text()) + 1);

  Materialize.toast(nomeProduto + ' adicionado.', 1000);
});

$('.modal-trigger').leanModal();

$('#confirmar').on('click', function() {
  var texto = "";

  $('.badge').parent().each(function() {
    texto += this.firstChild.textContent + ': ';
    texto += this.lastChild.textContent + ', ';
  });

  $('#resumo').empty().text(texto);
});

$('.collection').on('click', '.badge', function() {
  $(this).remove();
  return false;
});

$('.acao-limpar').on('click', function() {
  $('#numero-mesa').val('');
  $('.badge').remove();
});
