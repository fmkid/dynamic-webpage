var $zoho = $zoho || {};
$zoho.salesiq = $zoho.salesiq || {
  widgetcode:
    "siqe94b4a9ea498a6ee876fd2d699d108bc833daf7a018e8a5f32da6a30211afd92",
  values: {},
  ready: function () {
    $zoho.salesiq.chat.department(["Main website"]);
    $zoho.salesiq.chatbutton.visible("hide");
  },
};
var d = document;
var s = d.createElement("script");
s.type = "text/javascript";
s.id = "zsiqscript";
s.defer = true;
s.src = "https://salesiq.zoho.com/widget";
var t = d.getElementsByTagName("script")[0];
t.parentNode.insertBefore(s, t);
t.onload = function () {
  var zbutton = d.querySelector('[data-id="zsalesiq"]');
  console.log(zbutton);
  zbutton.style.display = "none";
}
