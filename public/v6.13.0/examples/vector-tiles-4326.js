"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1605],{9322:function(e,t,o){var r=o(8768),n=o(5492),s=o(8083),c=o(4354),a=o(7834),i=o(3081);i.H2.length=14;for(var u=0;u<14;++u)i.H2[u]=.703125/Math.pow(2,u+1);(0,a.ZP)("map","https://api.maptiler.com/maps/basic-4326/style.json?key=get_your_own_D6rA4zTHduk6KOKTXzGB").then((function(e){var t=new n.Z({extent:[-180,-90,180,90],tileSize:512,resolutions:i.H2}),o=e.get("mapbox-style");e.getLayers().forEach((function(e){var n=e.get("mapbox-source");if(n&&"vector"===o.sources[n].type){var c=e.getSource();e.setSource(new s.Z({format:new r.Z,projection:"EPSG:4326",urls:c.getUrls(),tileGrid:t}))}})),e.setView(new c.ZP({projection:"EPSG:4326",zoom:o.zoom,center:o.center}))}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(9322)}]);
//# sourceMappingURL=vector-tiles-4326.js.map