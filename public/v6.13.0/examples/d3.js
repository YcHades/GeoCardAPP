"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[891],{8378:function(t,e,r){var n=r(1376),o=r(6583),u=r(4703),a=r(4354),i=r(2320),c=r(2010),s=r(2810),f=r(6923);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function h(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(a,t);var e,r,n,u=b(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=u.call(this,t)).features=t.features,e.svg=d3.select(document.createElement("div")).append("svg").style("position","absolute"),e.svg.append("path").datum(e.features).attr("class","boundary"),e}return e=a,(r=[{key:"getSourceState",value:function(){return o.Z.READY}},{key:"render",value:function(t){var e=t.size[0],r=t.size[1],n=t.viewState.projection,o=d3.geoMercator().scale(1).translate([0,0]),u=d3.geoPath().projection(o),a=u.bounds(this.features),i=a[1][0]-a[0][0],c=a[1][1]-a[0][1],l=d3.geoBounds(this.features),p=(0,s.mi)(l[0],n),y=(0,s.mi)(l[1],n),b=y[0]-p[0];b<0&&(b+=(0,f.dz)(n.getExtent()));var h=b/i,d=(y[1]-p[1])/c,v=Math.max(h,d)/t.viewState.resolution,w=(0,s.bU)((0,f.qg)(t.extent),n),g=180*-t.viewState.rotation/Math.PI;return o.scale(v).center(w).translate([e/2,r/2]).angle(g),(u=u.projection(o))(this.features),this.svg.attr("width",e),this.svg.attr("height",r),this.svg.select("path").attr("d",u),this.svg.node()}}])&&p(e.prototype,r),n&&p(e,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(i.Z),w=new n.Z({layers:[new c.Z({source:new u.Z({layer:"watercolor"})})],target:"map",view:new a.ZP({center:(0,s.mi)([-97,38]),zoom:4})});d3.json("data/topojson/us.json").then((function(t){var e=new v({features:topojson.feature(t,t.objects.counties)});w.addLayer(e)}))}},function(t){var e=function(e){return t(t.s=e)};e(9877),e(8378)}]);
//# sourceMappingURL=d3.js.map