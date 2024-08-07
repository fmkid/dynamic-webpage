var $zoho = $zoho || {}; //NOSONAR
$zoho.salesiq = $zoho.salesiq || {
    widgetcode:
        "siqe94b4a9ea498a6ee876fd2d699d108bc833daf7a018e8a5f32da6a30211afd92",
    values: {},
    ready: function () {
        $zoho.salesiq.chat.department(["Main website"]);
    },
};
$zoho.salesiq.ready = function () {
    $zoho.salesiq.chat.department(["Main website"]);
    $zoho.salesiq.tracking.on();
    $zoho.salesiq.chatbutton.visible("true");
    $zoho.salesiq.chatwindow.visible("hide");
};
var pageDocument = document; //NOSONAR
secondScript = pageDocument.createElement("script"); //NOSONAR
secondScript.type = "text/javascript";
secondScript.id = "zsiqscript";
secondScript.defer = true;
secondScript.src = "https://salesiq.zohopublic.com/widget";
firstScript = pageDocument.getElementsByTagName("script")[0]; //NOSONAR
firstScript.parentNode.insertBefore(secondScript, firstScript);
