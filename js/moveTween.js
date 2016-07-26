define(function(t,e,n){function r(t,e){return(t.currentStyle||getComputedStyle(t,!1))[e]}var u={Linear:function(t,e,n,r){return n*t/r+e},Quad:{easeIn:function(t,e,n,r){return n*(t/=r)*t+e},easeOut:function(t,e,n,r){return-n*(t/=r)*(t-2)+e},easeInOut:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}},Cubic:{easeIn:function(t,e,n,r){return n*(t/=r)*t*t+e},easeOut:function(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e},easeInOut:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}},Quart:{easeIn:function(t,e,n,r){return n*(t/=r)*t*t*t+e},easeOut:function(t,e,n,r){return-n*((t=t/r-1)*t*t*t-1)+e},easeInOut:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}},Quint:{easeIn:function(t,e,n,r){return n*(t/=r)*t*t*t*t+e},easeOut:function(t,e,n,r){return n*((t=t/r-1)*t*t*t*t+1)+e},easeInOut:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}},Sine:{easeIn:function(t,e,n,r){return-n*Math.cos(t/r*(Math.PI/2))+n+e},easeOut:function(t,e,n,r){return n*Math.sin(t/r*(Math.PI/2))+e},easeInOut:function(t,e,n,r){return-n/2*(Math.cos(Math.PI*t/r)-1)+e}},Expo:{easeIn:function(t,e,n,r){return 0==t?e:n*Math.pow(2,10*(t/r-1))+e},easeOut:function(t,e,n,r){return t==r?e+n:n*(-Math.pow(2,-10*t/r)+1)+e},easeInOut:function(t,e,n,r){return 0==t?e:t==r?e+n:(t/=r/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(-Math.pow(2,-10*--t)+2)+e}},Circ:{easeIn:function(t,e,n,r){return-n*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOut:function(t,e,n,r){return n*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOut:function(t,e,n,r){return(t/=r/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e}},Elastic:{easeIn:function(t,e,n,r,u,a){if(0==t)return e;if(1==(t/=r))return e+n;if(a||(a=.3*r),!u||u<Math.abs(n)){u=n;var i=a/4}else var i=a/(2*Math.PI)*Math.asin(n/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*r-i)*(2*Math.PI)/a))+e},easeOut:function(t,e,n,r,u,a){if(0==t)return e;if(1==(t/=r))return e+n;if(a||(a=.3*r),!u||u<Math.abs(n)){u=n;var i=a/4}else var i=a/(2*Math.PI)*Math.asin(n/u);return u*Math.pow(2,-10*t)*Math.sin((t*r-i)*(2*Math.PI)/a)+n+e},easeInOut:function(t,e,n,r,u,a){if(0==t)return e;if(2==(t/=r/2))return e+n;if(a||(a=r*(.3*1.5)),!u||u<Math.abs(n)){u=n;var i=a/4}else var i=a/(2*Math.PI)*Math.asin(n/u);return t<1?-.5*(u*Math.pow(2,10*(t-=1))*Math.sin((t*r-i)*(2*Math.PI)/a))+e:u*Math.pow(2,-10*(t-=1))*Math.sin((t*r-i)*(2*Math.PI)/a)*.5+n+e}},Back:{easeIn:function(t,e,n,r,u){return void 0==u&&(u=1.70158),n*(t/=r)*t*((u+1)*t-u)+e},easeOut:function(t,e,n,r,u){return void 0==u&&(u=1.70158),n*((t=t/r-1)*t*((u+1)*t+u)+1)+e},easeInOut:function(t,e,n,r,u){return void 0==u&&(u=1.70158),(t/=r/2)<1?n/2*(t*t*(((u*=1.525)+1)*t-u))+e:n/2*((t-=2)*t*(((u*=1.525)+1)*t+u)+2)+e}},Bounce:{easeIn:function(t,e,n,r){return n-u.Bounce.easeOut(r-t,0,n,r)+e},easeOut:function(t,e,n,r){return(t/=r)<1/2.75?n*(7.5625*t*t)+e:t<2/2.75?n*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?n*(7.5625*(t-=2.25/2.75)*t+.9375)+e:n*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOut:function(t,e,n,r){return t<r/2?.5*u.Bounce.easeIn(2*t,0,n,r)+e:.5*u.Bounce.easeOut(2*t-r,0,n,r)+.5*n+e}}};e.tween=function(t,e,n){clearInterval(t.timer),n=n||{},n.time=n.time||700,n.type=n.type||u.Bounce.easeOut;var a=Math.ceil(n.time/(1e3/60)),i={};for(var o in e)i[o]=parseFloat(r(t,o));var s=0;t.timer=setInterval(function(){s++;for(var r in e){var u=n.type(n.time/a*s,i[r],e[r]-i[r],n.time);"opacity"==r?(t.style.opacity=u,t.style.filter="alpha(opacity:"+100*u+")"):t.style[r]=u+"px"}s==a&&(clearInterval(t.timer),n.end&&n.end())},1e3/60)}});