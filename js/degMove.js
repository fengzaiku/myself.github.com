define(function(t,e,n){e.degMove=function(t,e,n){function a(t){return t*Math.PI/180-Math.PI/180*400*2}t.timer=null,clearInterval(t.timer);var r=350,i=t.a||0,l=e-i,c=parseInt(1e3/30);t.n=0,t.timer=setInterval(function(){t.n++;var e=t.n/c,o=i+l*e*e*e,f=r+r*Math.sin(a(o))+40,s=r-r*Math.cos(a(o))+10;t.style.left=f+"px",t.style.top=s+"px",t.a=o,t.n==c&&(clearInterval(t.timer),n&&n())},1e3/30)}});