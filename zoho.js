var $zoho = $zoho || {};
$zoho.salesiq = $zoho.salesiq || {
  widgetcode:
    "xyz",
  values: {},
  ready: function () {
    $zoho.salesiq.chat.department(["Main website"]);
    $zoho.salesiq.floatbutton.visible("hide");
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
