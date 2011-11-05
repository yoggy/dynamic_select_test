function load_form(id) {
  var form_html = $(id).html();
  $("#form_container").html(form_html);
}

function init() {
  load_form("#form_01");

  $('#form_select').change(function(){
    $('#form_select option:selected').each(function () {
      var selected_id = $(this).attr("value");
      load_form(selected_id);
    });
  });
}

$(document).ready(function(){
  init();
});
