"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7077],{4273:function(e,a,t){var s,p,i=t(1376),r=t(2010),l=t(4354),n=t(1998),y="x13yMxvFSo8FIKFDDTnQaJ57Gakt11ZaIyqIctoSD3Y",c=[{base:"base",type:"maptile",scheme:"normal.day",apiKey:y},{base:"base",type:"maptile",scheme:"normal.day.transit",apiKey:y},{base:"base",type:"maptile",scheme:"pedestrian.day",apiKey:y},{base:"aerial",type:"maptile",scheme:"terrain.day",apiKey:y},{base:"aerial",type:"maptile",scheme:"satellite.day",apiKey:y},{base:"aerial",type:"maptile",scheme:"hybrid.day",apiKey:y}],m=[];for(s=0,p=c.length;s<p;++s){var h=c[s];m.push(new r.Z({visible:!1,preload:1/0,source:new n.Z({url:o("https://{1-4}.{base}.maps.ls.hereapi.com/{type}/2.1/maptile/newest/{scheme}/{z}/{x}/{y}/256/png?apiKey={apiKey}",h),attributions:"Map Tiles &copy; "+(new Date).getFullYear()+' <a href="https://developer.here.com/" target="_blank">HERE</a>'})}))}new i.Z({layers:m,target:"map",view:new l.ZP({center:[921371.9389,6358337.7609],zoom:10})});function o(e,a){return e.replace("{base}",a.base).replace("{type}",a.type).replace("{scheme}",a.scheme).replace("{apiKey}",a.apiKey)}var b=document.getElementById("layer-select");function u(){for(var e=b.value,a=0,t=m.length;a<t;++a)m[a].setVisible(c[a].scheme===e)}b.addEventListener("change",u),u()}},function(e){var a=function(a){return e(e.s=a)};a(9877),a(4273)}]);
//# sourceMappingURL=here-maps.js.map