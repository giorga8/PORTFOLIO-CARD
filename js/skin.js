function setbackground(url) {  
if (!arguments.length) {  
url = (url = document.cookie.match(/\bbackground=([^;]*)/)) && url[1];  
if (!url) return '';  
}  
document.getElementById('background').href = url;  
var d = new Date();  
d.setFullYear(d.getFullYear() + 1);  
document.cookie = ['background=', url, ';expires=', d.toGMTString(), ';path=/;'].join('');  
return url;  
}  
setbackground();  
  
function setcard(url) {  
if (!arguments.length) {  
url = (url = document.cookie.match(/\bcard=([^;]*)/)) && url[1];  
if (!url) return '';  
}  
document.getElementById('card').href = url;  
var d = new Date();  
d.setFullYear(d.getFullYear() + 1);  
document.cookie = ['card=', url, ';expires=', d.toGMTString(), ';path=/;'].join('');  
return url;  
}  
setcard();  

function setdeff(url) {  
if (!arguments.length) {  
url = (url = document.cookie.match(/\bdeff=([^;]*)/)) && url[1];  
if (!url) return '';  
}  
document.getElementById('deff').href = url;  
var d = new Date();  
d.setFullYear(d.getFullYear() + 1);  
document.cookie = ['deff=', url, ';expires=', d.toGMTString(), ';path=/;'].join('');  
return url;  
}  
setdeff();  