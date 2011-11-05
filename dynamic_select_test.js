function load_form(id) {
  var form_html = document.getElementById(id).innerHTML;
  var form_container = document.getElementById("form_container");
  form_container.innerHTML = form_html;
}

function init() {
  load_form("form_01");

  var form_select = document.getElementById("form_select");
  form_select.onchange = function() {
    var t = null;
    for(var c = form_select.firstChild; c != null; c = c.nextSibling){
      if (typeof c.selected == "undefined") continue;
      if (c.selected == true) t = c;
    }
    load_form(t.value);
  };
}

window.onload = function() {
  init();
};
