"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[965],{6108:function(e,n,t){for(var r=t(2739),o=t(1376),a=t(1372),i=t(5783),l=t(4354),u=t(9039),s=t(7138),w=t(7975),c=t(720),d=t(5469),g=t(5265),Z=t(8164),f=new Array(2e4),v=18e6,m=0;m<2e4;++m)f[m]=new r.Z({geometry:new d.Z([2*v*Math.random()-v,2*v*Math.random()-v]),i:m,size:m%2?10:20});var y={10:new u.ZP({image:new s.Z({radius:5,fill:new w.Z({color:"#666666"}),stroke:new c.Z({color:"#bada55",width:1})})}),20:new u.ZP({image:new s.Z({radius:10,fill:new w.Z({color:"#666666"}),stroke:new c.Z({color:"#bada55",width:1})})})},h=new i.Z({features:f,wrapX:!1}),k=new a.Z({source:h,style:function(e){return y[e.get("size")]}}),p=new o.Z({layers:[k],target:document.getElementById("map"),view:new l.ZP({center:[0,0],zoom:2})}),C=null,P=null,b=function(e){var n=h.getClosestFeatureToCoordinate(e);if(null===n)C=null,P=null;else{var t=n.getGeometry().getClosestPoint(e);null===C?C=new d.Z(t):C.setCoordinates(t),null===P?P=new g.Z([e,t]):P.setCoordinates([e,t])}p.render()};p.on("pointermove",(function(e){if(!e.dragging){var n=p.getEventCoordinate(e.originalEvent);b(n)}})),p.on("click",(function(e){b(e.coordinate)}));var E=new c.Z({color:"rgba(255,255,0,0.9)",width:3}),z=new u.ZP({stroke:E,image:new s.Z({radius:10,stroke:E})});k.on("postrender",(function(e){var n=(0,Z.u3)(e);n.setStyle(z),null!==C&&n.drawGeometry(C),null!==P&&n.drawGeometry(P)})),p.on("pointermove",(function(e){if(!e.dragging){var n=p.getEventPixel(e.originalEvent),t=p.hasFeatureAtPixel(n);p.getTarget().style.cursor=t?"pointer":""}}))}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(6108)}]);
//# sourceMappingURL=synthetic-points.js.map