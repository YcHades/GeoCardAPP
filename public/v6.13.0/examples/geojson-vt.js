"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2412],{4716:function(e,t,n){var r=n(1118),o=n(1376),i=n(2314),u=n(4197),a=n(8083),l=n(4354),s=n(9039),c=n(7975),g=function(e,t){if(!t||!t.geometry)return t;var n,r=t.type,o=t.geometry;return 1===r?(n="MultiPoint",1==o.length&&(n="Point",o=o[0])):2===r?(n="MultiLineString",1==o.length&&(n="LineString",o=o[0])):3===r&&(n="Polygon",o.length>1&&(n="MultiPolygon",o=[o])),{type:"Feature",geometry:{type:n,coordinates:o},properties:t.tags}},f=new s.ZP({fill:new c.Z({color:"#eeeeee"})}),p=new u.Z({background:"#1a2b39",style:function(e){var t=e.get("COLOR")||"#eeeeee";return f.getFill().setColor(t),f}}),y=new o.Z({layers:[p],target:"map",view:new l.ZP({center:[0,0],zoom:2})});fetch("https://openlayers.org/data/vector/ecoregions.json").then((function(e){return e.json()})).then((function(e){var t=geojsonvt(e,{extent:4096,debug:1}),n=new r.Z({dataProjection:new i.Z({code:"TILE_PIXELS",units:"tile-pixels",extent:[0,0,4096,4096]})}),o=new a.Z({tileUrlFunction:function(e){return JSON.stringify(e)},tileLoadFunction:function(e,r){var i=JSON.parse(r),u=t.getTile(i[0],i[1],i[2]),a=JSON.stringify({type:"FeatureCollection",features:u?u.features:[]},g),l=n.readFeatures(a,{extent:o.getTileGrid().getTileCoordExtent(i),featureProjection:y.getView().getProjection()});e.setFeatures(l)}});p.setSource(o)}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(4716)}]);
//# sourceMappingURL=geojson-vt.js.map