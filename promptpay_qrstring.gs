var url = "https://diewland.github.io/promptpay-qr-js/promptpay-qr.js"
var promptpay = UrlFetchApp.fetch(url).getContentText();
eval(promptpay)

function doGet(request){
 var pid = request.parameter.pid
 var amt = request.parameter.amt
 var promptpay_text = PromptPayQR.gen_text(pid, amt)
 result = {}
 result['qrstring'] = promptpay_text
 console.log(result)
 var result = JSON.stringify(result);
 return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON); 
}
