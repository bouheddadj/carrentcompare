(this.webpackJsonpcarrentcompare=this.webpackJsonpcarrentcompare||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/xl.c4048451.png"},12:function(e,t,a){e.exports=a.p+"static/media/pastille-background.09ef05e6.jpeg"},13:function(e,t,a){e.exports=a.p+"static/media/s.6f3d7b9d.png"},14:function(e,t,a){e.exports=a.p+"static/media/l.fbc3606d.png"},15:function(e,t,a){e.exports=a.p+"static/media/xxl.abcbb8de.png"},22:function(e,t,a){e.exports=a(60)},30:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(20),l=a.n(o);a(30);var s=()=>n.a.createElement("nav",{className:"navbar navbar-expand bg-transparent navbar-transparent"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{href:"#",className:"navbar-brand text-light fs-5 fw-bold"},"Car Rent Compare"),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"/Home",className:"nav-link active text-light"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"/About",className:"nav-link text-light"},"About")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"/Services",className:"nav-link text-light"},"Services")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{href:"/Contact",className:"nav-link text-light"},"Contact")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("form",{className:"d-flex",role:"search"},n.a.createElement("input",{className:"form-control me-2 bg-transparent text-light",type:"search",placeholder:"","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-light",type:"submit"},"Search"))))));a(21),a(62);const i=[{"avec abo":[{type:"S",hourly:{$numberDouble:"2.5"},daily:{$numberInt:"22"},weekly:{$numberInt:"120"},subscription:"per hour: $2.5, per day: $22, per week: $120"},{type:"M",hourly:{$numberDouble:"3.0"},daily:{$numberInt:"27"},weekly:{$numberInt:"150"},subscription:"per hour: $2.5, per day: $27, per week: $150"},{type:"L",hourly:{$numberDouble:"3.5"},daily:{$numberInt:"33"},weekly:{$numberInt:"180"},subscription:"per hour: $3.5, per day: $33, per week: $180"},{type:"XL",hourly:{$numberInt:"4"},daily:{$numberInt:"38"},weekly:{$numberInt:"210"},subscription:"per hour: $4, per day: $38, per week: $210"},{type:"XXL",hourly:{$numberDouble:"4.5"},daily:{$numberInt:"44"},weekly:{$numberInt:"240"},subscription:"per hour: $4.5, per day: $44, per week: $240"},{type:"bike",hourly:{$numberInt:"4"},daily:{$numberInt:"20"},subscription:"per hour: $4, per day: $20"}]},{"sans abo":[{type:"S",hourly:{$numberInt:"5"},daily:{$numberInt:"39"},weekly:{$numberInt:"180"},noSubscription:"per hour: $5, per day: $39, per week: $180"},{type:"M",hourly:{$numberDouble:"5.5"},daily:{$numberInt:"45"},weekly:{$numberInt:"210"},noSubscription:"per hour: $5.5, per day: $45, per week: $210"},{type:"L",hourly:{$numberInt:"6"},daily:{$numberInt:"50"},weekly:{$numberInt:"240"},noSubscription:"per hour: $6, per day: $50, per week: $240"},{type:"XL",hourly:{$numberDouble:"6.5"},daily:{$numberInt:"56"},weekly:{$numberInt:"270"},noSubscription:"per hour: $6.5, per day: $56, per week: $270"},{type:"XXL",hourly:{$numberInt:"7"},daily:{$numberInt:"60"},weekly:{$numberInt:"300"},noSubscription:"per hour: $7, per day: $60, per week: $300"},{type:"bike",hourly:{$numberInt:"7"},daily:{$numberInt:"34"},noSubscription:"per hour: $7, per day: $34"}]}];let c=new Date,u=new Date;function b(e,t,a,r,n){function o(e,t){let a=0;(e%=24)>(t%=24)&&(t+=24);for(let r=e;r<t;r++){let e=r%24;(e>=23||e<7)&&a++}return a}let l=Math.floor(e/10080),s=Math.floor(e%10080/1440),c=Math.floor(e%10080%1440/60);console.log(o(r.getHours(),n.getHours())),c-=o(r.getHours(),n.getHours()),console.log(c);let u,b,m=Math.floor(e%10080%1440%60);if(e<60)return i[0]["avec abo"][0].hourly.$numberDouble;if(t){let e=i[0]["avec abo"][0].weekly.$numberInt*l,t=i[0]["avec abo"][0].daily.$numberInt*s,a=i[0]["avec abo"][0].hourly.$numberDouble*c;console.log(t);let r=i[0]["avec abo"][0].hourly.$numberDouble/60*m;a>i[0]["avec abo"][0].daily.$numberInt&&(a=0,t=(s+1)*i[0]["avec abo"][0].daily.$numberInt),t>i[0]["avec abo"][0].weekly.$numberInt&&(t=0,e=(l+1)*i[0]["avec abo"][0].weekly.$numberInt),b=e+t+a+r}if(!t){let e=i[1]["sans abo"][0].weekly.$numberInt*l,t=i[1]["sans abo"][0].daily.$numberInt*s,a=i[1]["sans abo"][0].hourly.$numberInt*c,r=i[1]["sans abo"][0].hourly.$numberInt/60*m;a>i[1]["sans abo"][0].daily.$numberInt&&(a=0,t=(s+1)*i[1]["sans abo"][0].daily.$numberInt),t>i[1]["sans abo"][0].weekly.$numberInt&&(t=0,e=(l+1)*i[1]["sans abo"][0].weekly.$numberInt),u=e+t+a+r}return t&&a<=100?b+.41*a:t&&a>100?(a-=100,console.log(u),b+.22*a+41):!t&&a<=100?u+.41*a:(a-=100,console.log(.22*a),u+.22*a+41)}function m(e,t,a,r,n){function o(e,t){let a=0;(e%=24)>(t%=24)&&(t+=24);for(let r=e;r<t;r++){let e=r%24;(e>=23||e<7)&&a++}return a}let l=Math.floor(e/10080),s=Math.floor(e%10080/1440),c=Math.floor(e%10080%1440/60);console.log(o(r.getHours(),n.getHours())),c-=o(r.getHours(),n.getHours()),console.log(c);let u,b,m=Math.floor(e%10080%1440%60);if(console.log(l,s,c,m),e<60)return i[0]["avec abo"][1].hourly.$numberDouble;if(t){let e=i[0]["avec abo"][1].weekly.$numberInt*l,t=i[0]["avec abo"][1].daily.$numberInt*s,a=i[0]["avec abo"][1].hourly.$numberDouble*c,r=i[0]["avec abo"][1].hourly.$numberDouble/60*m;console.log(a,t,e,r),a>i[0]["avec abo"][1].daily.$numberInt&&(a=0,t=(s+1)*i[0]["avec abo"][1].daily.$numberInt),t>i[0]["avec abo"][1].weekly.$numberInt&&(t=0,e=(l+1)*i[0]["avec abo"][1].weekly.$numberInt),b=e+t+a+r}else{let e=i[1]["sans abo"][1].weekly.$numberInt*l,t=i[1]["sans abo"][1].daily.$numberInt*s,a=i[1]["sans abo"][1].hourly.$numberDouble*c,r=i[1]["sans abo"][1].hourly.$numberDouble/60*m;a>i[1]["sans abo"][1].daily.$numberInt&&(a=0,t=(s+1)*i[1]["sans abo"][1].daily.$numberInt),t>i[1]["sans abo"][1].weekly.$numberInt&&(t=0,e=(l+1)*i[1]["sans abo"][1].weekly.$numberInt),u=e+t+a+r,console.log(t,a)}return t&&a<=100?b+.41*a:t&&a>100?(a-=100,console.log(u),b+.22*a+41):!t&&a<=100?u+.41*a:(a-=100,console.log(.22*a),u+.22*a+41)}function p(e,t,a,r,n){function o(e,t){let a=0;(e%=24)>(t%=24)&&(t+=24);for(let r=e;r<t;r++){let e=r%24;(e>=23||e<7)&&a++}return a}let l=Math.floor(e/10080),s=Math.floor(e%10080/1440),c=Math.floor(e%10080%1440/60);console.log(o(r.getHours(),n.getHours())),c-=o(r.getHours(),n.getHours()),console.log(c);let u,b,m=Math.floor(e%10080%1440%60);if(console.log(l,s,c,m),e<60)return i[0]["avec abo"][2].hourly.$numberDouble;if(t){let e=i[0]["avec abo"][2].weekly.$numberInt*l,t=i[0]["avec abo"][2].daily.$numberInt*s,a=i[0]["avec abo"][2].hourly.$numberDouble*c,r=i[0]["avec abo"][2].hourly.$numberDouble/60*m;console.log(a,t,e,r),a>i[0]["avec abo"][2].daily.$numberInt&&(a=0,t=(s+1)*i[0]["avec abo"][2].daily.$numberInt),t>i[0]["avec abo"][2].weekly.$numberInt&&(t=0,e=(l+1)*i[0]["avec abo"][2].weekly.$numberInt),b=e+t+a+r}else{let e=i[1]["sans abo"][2].weekly.$numberInt*l,t=i[1]["sans abo"][2].daily.$numberInt*s,a=i[1]["sans abo"][2].hourly.$numberInt*c,r=i[1]["sans abo"][2].hourly.$numberInt/60*m;a>i[1]["sans abo"][2].daily.$numberInt&&(a=0,t=(s+1)*i[1]["sans abo"][2].daily.$numberInt),t>i[1]["sans abo"][2].weekly.$numberInt&&(t=0,e=(l+1)*i[1]["sans abo"][2].weekly.$numberInt),u=e+t+a+r,console.log(t,a)}return t&&a<=100?b+.41*a:t&&a>100?(a-=100,console.log(u),b+.22*a+41):!t&&a<=100?u+.41*a:(a-=100,console.log(.22*a),u+.22*a+41)}function d(e,t,a,r,n){function o(e,t){let a=0;(e%=24)>(t%=24)&&(t+=24);for(let r=e;r<t;r++){let e=r%24;(e>=23||e<7)&&a++}return a}let l=Math.floor(e/10080),s=Math.floor(e%10080/1440),c=Math.floor(e%10080%1440/60);console.log(o(r.getHours(),n.getHours())),c-=o(r.getHours(),n.getHours()),console.log(c);let u,b,m=Math.floor(e%10080%1440%60);if(console.log(l,s,c,m),e<60)return i[0]["avec abo"][3].hourly.$numberInt;if(t){let e=i[0]["avec abo"][3].weekly.$numberInt*l,t=i[0]["avec abo"][3].daily.$numberInt*s,a=i[0]["avec abo"][3].hourly.$numberInt*c,r=i[0]["avec abo"][3].hourly.$numberInt/60*m;console.log(a,t,e,r),a>i[0]["avec abo"][3].daily.$numberInt&&(a=0,t=(s+1)*i[0]["avec abo"][3].daily.$numberInt),t>i[0]["avec abo"][3].weekly.$numberInt&&(t=0,e=(l+1)*i[0]["avec abo"][3].weekly.$numberInt),b=e+t+a+r}else{let e=i[1]["sans abo"][3].weekly.$numberInt*l,t=i[1]["sans abo"][3].daily.$numberInt*s,a=i[1]["sans abo"][3].hourly.$numberDouble*c,r=i[1]["sans abo"][3].hourly.$numberDouble/60*m;a>i[1]["sans abo"][3].daily.$numberInt&&(a=0,t=(s+1)*i[1]["sans abo"][3].daily.$numberInt),t>i[1]["sans abo"][3].weekly.$numberInt&&(t=0,e=(l+1)*i[1]["sans abo"][3].weekly.$numberInt),u=e+t+a+r,console.log(t,a)}return t&&a<=100?b+.51*a:t&&a>100?(a-=100,console.log(u),b+.27*a+51):!t&&a<=100?u+.51*a:(a-=100,console.log(.27*a),u+.27*a+51)}function h(e,t,a,r,n){function o(e,t){let a=0;(e%=24)>(t%=24)&&(t+=24);for(let r=e;r<t;r++){let e=r%24;(e>=23||e<7)&&a++}return a}let l=Math.floor(e/10080),s=Math.floor(e%10080/1440),c=Math.floor(e%10080%1440/60);console.log(o(r.getHours(),n.getHours())),c-=o(r.getHours(),n.getHours()),console.log(c);let u,b,m=Math.floor(e%10080%1440%60);if(console.log(l,s,c,m),e<60)return i[0]["avec abo"][3].hourly.$numberInt;if(t){let e=i[0]["avec abo"][4].weekly.$numberInt*l,t=i[0]["avec abo"][4].daily.$numberInt*s,a=i[0]["avec abo"][4].hourly.$numberDouble*c,r=i[0]["avec abo"][4].hourly.$numberDouble/60*m;console.log(a,t,e,r),a>i[0]["avec abo"][4].daily.$numberInt&&(a=0,t=(s+1)*i[0]["avec abo"][4].daily.$numberInt),t>i[0]["avec abo"][4].weekly.$numberInt&&(t=0,e=(l+1)*i[0]["avec abo"][4].weekly.$numberInt),b=e+t+a+r}else{let e=i[1]["sans abo"][4].weekly.$numberInt*l,t=i[1]["sans abo"][4].daily.$numberInt*s,a=i[1]["sans abo"][4].hourly.$numberInt*c,r=i[1]["sans abo"][4].hourly.$numberInt/60*m;a>i[1]["sans abo"][4].daily.$numberInt&&(a=0,t=(s+1)*i[1]["sans abo"][4].daily.$numberInt),t>i[1]["sans abo"][4].weekly.$numberInt&&(t=0,e=(l+1)*i[1]["sans abo"][4].weekly.$numberInt),u=e+t+a+r,console.log(t,a)}return t&&a<=100?b+.51*a:t&&a>100?(a-=100,console.log(u),b+.27*a+51):!t&&a<=100?u+.51*a:(a-=100,console.log(.27*a),u+.27*a+51)}c.setHours(5,30,0),u.setHours(8,30,0);const f=[{name:"V\xe9hicules citadins",prix:[{"1min":"0.32","30min":"7.5","1h":"13","2h":"22","3h":"27","6h":"42","9h":"53","1j":"65","2j":"119","3j":"169","4j":"209","5j":"249","6j":"289","7j":"329","8j":"369","9j":"409","10j":"449","11j":"489","12j":"529","13j":"569","14j":"609"}],cars:[{brand:"Toyota",model:"Yaris",type:"M"},{brand:"Peugeot",model:"e-208",type:"M"},{brand:"Toyota",model:"aygo",type:"S"}]},{name:"V\xe9hicules utilitaires",cars:[{brand:"Ford",model:"Transit",type:"XL",taille:"grande",prix:[{"1min":"0.39","3h":"39","6h":"59","1j":"79","2j":"149","3j":"209","4j":"269","5j":"329","6j":"389","7j":"449","8j":"509","9j":"569","10j":"629","11j":"689","12j":"749","13j":"809","14j":"869"}]},{brand:"Renault",model:"Kangoo e-Tech",type:"L",taille:"petite",prix:[{"1min":"0.32","30min":"7.5","1h":"13","2h":"22","3h":"27","6h":"42","9h":"53","1j":"65","2j":"119","3j":"169","4j":"209","5j":"249","6j":"289","7j":"329","8j":"369","9j":"409","10j":"449","11j":"489","12j":"529","13j":"569","14j":"609"}]}]},{name:"Tesla",cars:[{brand:"Tesla",model:"Model 3",type:"P",prix:[{"1min":"0.40","4h":"59","1j":"79","2j":"149","3j":"219","4j":"289","5j":"359","6j":"429","7j":"499"}]}]}];let y=0,g=0;function x(e,t,a){if(e>20160)return"you must contact us";let r=Math.floor(e/1440),n=e%1440,o=Math.floor(n/60),l=n%60;e<2880&&(y=100),e<4320&&(y=200),e<5760&&(y=300),e<7200&&(y=400),e<8640&&(y=500),e<10080&&(y=600),e<11520&&(y=700),e<12960&&(y=800),e<14400&&(y=900),e<15840&&(y=1e3),e<17280&&(y=1100),e<18720&&(y=1200),e<20160&&(y=1300),e<21600&&(y=1400);let s=Math.floor(l/30)*f[0].prix[0]["30min"]+Math.floor(l%30)*f[0].prix[0]["1min"],i=Math.floor(o/9)*f[0].prix[0]["9h"]+Math.floor(o%9/6)*f[0].prix[0]["6h"]+Math.floor(o%9%6/3)*f[0].prix[0]["3h"]+Math.floor(o%9%6%3/2)*f[0].prix[0]["2h"]+Math.floor(o%9%6%3%2)*f[0].prix[0]["1h"],c=Math.floor(r/14)*f[0].prix[0]["14j"]+Math.floor(r%14/13)*f[0].prix[0]["13j"]+Math.floor(r%14%13/12)*f[0].prix[0]["12j"]+Math.floor(r%14%13%12/11)*f[0].prix[0]["11j"]+Math.floor(r%14%13%12%11/10)*f[0].prix[0]["10j"]+Math.floor(r%14%13%12%11%10/9)*f[0].prix[0]["9j"]+Math.floor(r%14%13%12%11%10%9/8)*f[0].prix[0]["8j"]+Math.floor(r%14%13%12%11%10%9%8/7)*f[0].prix[0]["7j"]+Math.floor(r%14%13%12%11%10%9%8%7/6)*f[0].prix[0]["6j"]+Math.floor(r%14%13%12%11%10%9%8%7%6/5)*f[0].prix[0]["5j"]+Math.floor(r%14%13%12%11%10%9%8%7%6%5/4)*f[0].prix[0]["4j"]+Math.floor(r%14%13%12%11%10%9%8%7%6%5%4/3)*f[0].prix[0]["3j"]+Math.floor(r%14%13%12%11%10%9%8%7%6%5%4%3/2)*f[0].prix[0]["2j"]+Math.floor(r%14%13%12%11%10%9%8%7%6%5%4%3%2*f[0].prix[0]["1j"]);return console.log(s,i,c),g=t-y,g<0&&(g=0),a?11+s+i+c+.3*g:1+s+i+c+.3*g}function $(e,t,a){if(e>20160)return"you must contact us";e<2880&&(y=100),e<4320&&(y=200),e<5760&&(y=300),e<7200&&(y=400),e<8640&&(y=500),e<10080&&(y=600),e<11520&&(y=700),e<12960&&(y=800),e<14400&&(y=900),e<15840&&(y=1e3),e<17280&&(y=1100),e<18720&&(y=1200),e<20160&&(y=1300),e<21600&&(y=1400);let r=Math.floor(e/1440),n=e%1440,o=Math.floor(n/60),l=n%60;console.log(r,o,l);let s=(60*Math.floor(o%6%3)+l)*f[1].cars[0].prix[0]["1min"],i=Math.floor(o/6)*f[1].cars[0].prix[0]["6h"]+Math.floor(o%6/3)*f[1].cars[0].prix[0]["3h"],c=Math.floor(r/14)*f[1].cars[0].prix[0]["14j"]+Math.floor(r%14/13)*f[1].cars[0].prix[0]["13j"]+Math.floor(r%14%13/12)*f[1].cars[0].prix[0]["12j"]+Math.floor(r%14%13%12/11)*f[1].cars[0].prix[0]["11j"]+Math.floor(r%14%13%12%11/10)*f[1].cars[0].prix[0]["10j"]+Math.floor(r%14%13%12%11%10/9)*f[1].cars[0].prix[0]["9j"]+Math.floor(r%14%13%12%11%10%9/8)*f[1].cars[0].prix[0]["8j"]+Math.floor(r%14%13%12%11%10%9%8/7)*f[1].cars[0].prix[0]["7j"]+Math.floor(r%14%13%12%11%10%9%8%7/6)*f[1].cars[0].prix[0]["6j"]+Math.floor(r%14%13%12%11%10%9%8%7%6/5)*f[1].cars[0].prix[0]["5j"]+Math.floor(r%14%13%12%11%10%9%8%7%6%5/4)*f[1].cars[0].prix[0]["4j"]+Math.floor(r%14%13%12%11%10%9%8%7%6%5%4/3)*f[1].cars[0].prix[0]["3j"]+Math.floor(r%14%13%12%11%10%9%8%7%6%5%4%3/2)*f[1].cars[0].prix[0]["2j"]+r%14%13%12%11%10%9%8%7%6%5%4%3%2*f[1].cars[0].prix[0]["1j"];return console.log(s,i,c),s>f[1].cars[0].prix[0]["3h"]&&(s=0,i=+f[1].cars[0].prix[0]["3h"]),i>f[1].cars[0].prix[0]["1j"]&&(i=0,c=+f[1].cars[0].prix[0]["1j"]),g=t-y,g<0&&(g=0),console.log(s,i,c),a?11+s+i+c+.3*g:1+s+i+c+.3*g}console.log(function(e,t,a){if(e>20160)return"you must contact us";e<2880&&(y=100),e<4320&&(y=200),e<5760&&(y=300),e<7200&&(y=400),e<8640&&(y=500),e<10080&&(y=600),e<11520&&(y=700);let r=Math.floor(e/1440),n=e%1440,o=Math.floor(n/60/4),l=n%240;console.log(r,o,l);let s=l*f[2].cars[0].prix[0]["1min"],i=o*f[2].cars[0].prix[0]["4h"],c=Math.floor(r/7)*f[2].cars[0].prix[0]["7j"]+Math.floor(r%7)/6*f[2].cars[0].prix[0]["6j"]+Math.floor(r%7%6)/5*f[2].cars[0].prix[0]["5j"]+Math.floor(r%7%6%5)/4*f[2].cars[0].prix[0]["4j"]+Math.floor(r%7%6%5%4)/3*f[2].cars[0].prix[0]["3j"]+Math.floor(r%7%6%5%4%3)/2*f[2].cars[0].prix[0]["2j"]+Math.floor(r%7%6%5%4%3%2)*f[2].cars[0].prix[0]["1j"];return s>f[2].cars[0].prix[0]["4h"]&&(s=0,i=(o+1)*f[2].cars[0].prix[0]["4h"]),i>f[2].cars[0].prix[0]["1j"]&&(i=0,c=(r+1)*f[2].cars[0].prix[0]["1j"]),g=t-y,g<0&&(g=0),console.log(s,i,c),a?11+s+i+c+.4*g:1+s+i+c+.4*g}(555,20,!1));var v=e=>{const[t,a]=Object(r.useState)(null),[o,l]=Object(r.useState)(null),[s,i]=Object(r.useState)(null),[c,u]=Object(r.useState)(null),[f,y]=Object(r.useState)([]);Object(r.useRef)();return Object(r.useEffect)(()=>{const e=new window.tempusDominus.TempusDominus(document.querySelector('input[name="time-1"]'),{display:{theme:"light",icons:{time:"bi bi-clock",date:"bi bi-calendar",up:"bi bi-arrow-up",down:"bi bi-arrow-down",previous:"bi bi-chevron-left",next:"bi bi-chevron-right",today:"bi bi-calendar-check",clear:"bi bi-trash",close:"bi bi-x"},buttons:{today:!0,clear:!0,close:!0}}}),t=new window.tempusDominus.TempusDominus(document.querySelector('input[name="time-2"]'),{display:{theme:"light",icons:{time:"bi bi-clock",date:"bi bi-calendar",up:"bi bi-arrow-up",down:"bi bi-arrow-down",previous:"bi bi-chevron-left",next:"bi bi-chevron-right",today:"bi bi-calendar-check",clear:"bi bi-trash",close:"bi bi-x"},buttons:{today:!0,clear:!0,close:!0}}}),r=(document.querySelector('input[name="time-1"]'),document.querySelector('input[name="time-2"]'),document.querySelector('input[name="distance"]'));function n(e){const t=new Date(e),a=t.getHours().toString().padStart(2,"0"),r=t.getMinutes().toString().padStart(2,"0");return"".concat(a,":").concat(r)}document.querySelector("#showButton").addEventListener("click",(function(){a(n(e.dates.lastPicked)),l(n(t.dates.lastPicked)),u(r.value)}))}),Object(r.useEffect)(()=>{if(t&&o&&c){const a=function(e,t){const[a,r]=e.split(":").map(Number),[n,o]=t.split(":").map(Number),l=60*a+r,s=60*n+o,i=Math.abs(l-s);return i>720?1440-i:i}(t,o),r=new Date("1970-01-01T".concat(t,":00")),n=new Date("1970-01-01T".concat(o,":00")),l=[b,m,p,d,h],s=[x,$],i={withoutSubscription:l.map(e=>parseFloat(e(a,!1,c,r,n).toFixed(2))),withSubscription:l.map(e=>parseFloat(e(a,!0,c,r,n).toFixed(2))),withoutSubscriptionleo:s.map(e=>parseFloat(e(a,c,!1).toFixed(2))),withtSubscriptionleo:s.map(e=>parseFloat(e(a,c,!0).toFixed(2)))};e.onResultsChange(i)}},[t,o,c]),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"d-flex flex-column bg-light gap-4 p-3 rounded-4 input-orangee"},n.a.createElement("div",{className:"d-flex flex-row gap-3"},n.a.createElement("div",{className:"bg-light"},n.a.createElement("button",{className:"btn btn-outline-dark rounded-5 bi bi-car-front-fill btn-orange fw-bold",type:"submit"}," V\xe9hicules")),n.a.createElement("div",{className:"bg-light"},n.a.createElement("button",{className:"btn btn-outline-dark rounded-5 bi bi-truck-front-fill fw-bold",type:"submit"}," Utilitaires"))),n.a.createElement("div",{className:"d-flex flex-column"},n.a.createElement("div",{className:"text-left text-dark fw-bold"},n.a.createElement("p",null,"Retrait et retour")),n.a.createElement("div",{className:"bg-light"},n.a.createElement("div",{className:"d-flex flex-row gap-2"},n.a.createElement("button",{className:"btn btn-outline-dark rounded-3 bi bi-search btn-orange",type:"submit"}),n.a.createElement("input",{className:"form-control text-darks input rounded-3",type:"search",placeholder:"D\xe9part","aria-label":"Search",name:"departure"}),n.a.createElement("input",{className:"form-control text-darks input rounded-3",type:"search",placeholder:"Arriv\xe9e","aria-label":"Search",name:"arrival"})))),n.a.createElement("div",{className:"d-flex flex-row gap-3"},n.a.createElement("div",{className:"d-flex flex-column"},n.a.createElement("div",{className:"text-left text-dark fw-bold"},n.a.createElement("p",null,"Date & heure de d\xe9part")),n.a.createElement("div",{className:"bg-light"},n.a.createElement("div",{className:"d-flex flex-row gap-2"},n.a.createElement("button",{className:"btn btn-outline-dark rounded-3 bi bi-calendar btn-orange",type:"submit"}),n.a.createElement("button",{className:"btn btn-outline-dark rounded-3 bi bi-alarm btn-orange",type:"submit"}),n.a.createElement("input",{className:"form-control me-2 bg-light text-dark input rounded-3",type:"text",name:"time-1"})))),n.a.createElement("div",{className:"d-flex flex-row gap-5"},n.a.createElement("div",{className:"d-flex flex-column"},n.a.createElement("div",{className:"text-left text-dark fw-bold"},n.a.createElement("p",null,"Date & heure de retour")),n.a.createElement("div",{className:"bg-light"},n.a.createElement("div",{className:"d-flex flex-row gap-2"},n.a.createElement("button",{className:"btn btn-outline-dark rounded-3 bi bi-calendar btn-orange",type:"submit"}),n.a.createElement("button",{className:"btn btn-outline-dark rounded-3 bi bi-alarm btn-orange",type:"submit"}),n.a.createElement("input",{className:"form-control me-2 bg-light text-dark input rounded-3",type:"text",name:"time-2"}))))),n.a.createElement("div",{className:"d-flex flex-row gap-5"},n.a.createElement("div",{className:"d-flex flex-column"},n.a.createElement("div",{className:"text-left text-dark fw-bold"},n.a.createElement("p",null,"Distance (Km)")),n.a.createElement("div",{className:"bg-light"},n.a.createElement("div",{className:"d-flex flex-row gap-2"},n.a.createElement("button",{className:"btn btn-outline-dark rounded-3 bi bi-ev-front btn-orange",type:"submit"}),n.a.createElement("input",{className:"form-control me-2 bg-light text-dark input rounded-3",type:"text",name:"distance"}),n.a.createElement("button",{id:"showButton",className:"btn btn-outline-dark rounded-3 btn-orange text-dark fw-bold",type:"submit",onClick:e.onButtonClick},"Afficher"))))))))},w=a(12),j=a.n(w),k=a(13),I=a.n(k),E=a(9),M=a.n(E),N=a(14),S=a.n(N),D=a(10),H=a.n(D),C=a(15),L=a.n(C);var V=e=>{const t=e.special?"pulse":"",a=e.special?{border:"3px solid gold"}:{};return n.a.createElement("div",{className:"rounded-3 input-orangee mt-4 ".concat(t),style:{...a,position:"relative",backgroundColor:"white",height:"400px",width:"400px"}},n.a.createElement("img",{className:"rounded-2",src:j.a,alt:"background",style:{width:"100%",height:"100%"}}),n.a.createElement("img",{src:e.image,alt:"background",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%"}}),n.a.createElement("p",{className:"text-light fs-5 fw-bold",style:{position:"absolute",top:"5px",left:"15px"}},e.voiture," | ",e.soc),n.a.createElement("p",{className:"text-secondary fs-6",style:{position:"absolute",top:"35px",left:"15px"}},"ou similaire | ",e.type),n.a.createElement("div",{className:"d-flex flex-row gap-2",style:{position:"absolute",top:"80px",left:"15px"}},n.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-white rounded-4 gap-2",style:{backgroundColor:"rgba(255, 255, 255, 0.10)",height:"24px",width:"47px"}},n.a.createElement("i",{className:"bi bi-person-fill"}),n.a.createElement("span",null,e.per)),n.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-white rounded-4 gap-2",style:{backgroundColor:"rgba(255, 255, 255, 0.10)",height:"24px",width:"47px"}},n.a.createElement("i",{className:"bi bi-suitcase"}),n.a.createElement("span",null,e.bag)),n.a.createElement("div",{className:"d-flex align-items-center justify-content-center text-white rounded-4 gap-2",style:{backgroundColor:"rgba(255, 255, 255, 0.10)",height:"24px",width:"142px"}},n.a.createElement("i",{className:"bi bi-gear-wide"}),n.a.createElement("span",null,"Manuelle/Auto"))),n.a.createElement("p",{className:"text-light fs-5 fw-bold",style:{position:"absolute",top:"355px",left:"15px"}},e.price," \u20ac/jour ",n.a.createElement("span",{style:{fontSize:"small",color:"gray"}},e.abon)))};const X=[I.a,M.a,S.a,H.a,L.a],O=["4","4","4","7","7"],T=["1","2","3","4","4"],A=["Berline","Berline","Monospace","Monospace","SUV"],F=["Voiture S","Voiture M","Voiture L","Voiture XL","Voiture XXL"],B=["Citiz","Citiz","Citiz","Citiz","Citiz"],R=["(Sans Abonnement)","(Avec Abonnement)"],q=["Voiture S et M","Voiture L et XL"],z=["Leo&Go","Leo&Go"],P=["(Sans pr\xe9-r\xe9servation)","(Avec pr\xe9-r\xe9servation)"],G=[M.a,H.a],J=["Berline","Monospace"],K=["2","3"];var U=e=>{const t=Math.min(...e.results.withoutSubscription),a=Math.min(...e.results.withSubscription),r=Math.min(...e.results.withoutSubscriptionleo),o=Math.min(...e.results.withtSubscriptionleo);return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"d-flex flex-wrap justify-content-start gap-5"},e.results.withoutSubscription&&e.results.withoutSubscription.map((e,a)=>n.a.createElement(V,{key:a,price:e,image:X[a],per:O[a],bag:T[a],type:A[a],voiture:F[a],soc:B[a],abon:R[0],special:e===t})),e.results.withSubscription&&e.results.withSubscription.map((e,t)=>n.a.createElement(V,{key:t,price:e,image:X[t],per:O[t],bag:T[t],type:A[t],voiture:F[t],soc:B[t],abon:R[1],special:e===a})),e.results.withoutSubscriptionleo&&e.results.withoutSubscriptionleo.map((e,t)=>n.a.createElement(V,{key:t,price:e,image:G[t],per:O[t],bag:K[t],type:J[t],voiture:q[t],soc:z[t],abon:P[0],special:e===r})),e.results.withtSubscriptionleo&&e.results.withtSubscriptionleo.map((e,t)=>n.a.createElement(V,{key:t,price:e,image:G[t],per:O[t],bag:K[t],type:J[t],voiture:q[t],soc:z[t],abon:P[1],special:e===o}))))};var Y=function(){const[e,t]=Object(r.useState)(!1),[a,o]=Object(r.useState)([]);return n.a.createElement("div",{className:"d-flex flex-column gap-3"},n.a.createElement(s,null),n.a.createElement(v,{onButtonClick:()=>{t(!0)},onResultsChange:o}),e&&n.a.createElement(U,{results:a}))};l.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Y,null)))},9:function(e,t,a){e.exports=a.p+"static/media/m.9eeaa490.png"}},[[22,1,2]]]);
//# sourceMappingURL=main.09c5219f.chunk.js.map