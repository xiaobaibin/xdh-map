(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1086:function(e,t,n){"use strict";var a=n(501);n.n(a).a},1149:function(e,t,n){"use strict";n.r(t);var a=n(144),s={components:{XdhMap:a.c,XdhMapPlacement:a.w,XdhMapDrawPanel:a.h},data:function(){return{map:null,center:[113,23],plot:null,types:[],isDraw:!1,useTools:!0,useStyle:!0,useText:!1,width:10,placement:"center-bottom"}},methods:{mapReady:function(e){this.map=e},panelInited:function(e){this.plot=e},dblClickHandle:function(e){var t=this.$refs.map.getFeatureAtPixel(e.pixel);this.$refs.drawPanel.editFeature(t)},setTypes:function(){this.types=["FreeHandLine","RectAngle","Ellipse","Lune","Sector","ClosedCurve","Polygon","FreePolygon","GatheringPlace"]},setCustomTypes:function(){this.types=[{type:"Point",name:"坐标"},{type:"Polyline",name:"警戒线"},{type:"Circle",name:"范围"},{type:"ClosedCurve",name:"聚集区域"},{type:"Polygon",name:"geo"},{type:"GatheringPlace",name:"集结地"},{type:"DoubleArrow",name:"包抄路径"},{type:"AttackArrow",name:"进攻方向"},{type:"RectFlag",name:"敌军"},{type:"TriangleFlag",name:"我军"},{type:"CurveFlag",name:"友军"}]},setHorizontal:function(){this.width=15,this.placement="center-bottom"},setVertical:function(){this.width=4,this.placement="right-center"}}},o=(n(1086),n(16)),l=Object(o.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("xdh-map",{ref:"map",attrs:{type:"Baidu",zoom:9,center:e.center},on:{ready:e.mapReady,dblclick:e.dblClickHandle}},[n("xdh-map-draw-panel",{ref:"drawPanel",attrs:{placement:e.placement,width:e.width,types:e.types,"use-tools":e.useTools,"use-style":e.useStyle,"use-text":e.useText}}),e._v(" "),n("xdh-map-placement",{attrs:{placement:"left-top",margin:[10,10],theme:"light"}},[n("div",{staticClass:"btns-warp",staticStyle:{padding:"4px"}},[n("div",[e._v("\n        设置 画图工具 各种参数：\n      ")]),e._v(" "),n("button",{on:{click:function(t){e.types=[]}}},[e._v("重置画图类型")]),e._v(" "),n("button",{on:{click:e.setTypes}},[e._v("切换画图类型")]),e._v(" "),n("button",{on:{click:e.setCustomTypes}},[e._v("自定义画图类")]),n("br"),e._v(" "),n("button",{on:{click:function(t){e.useTools=!e.useTools}}},[e._v(e._s(e.useTools?"禁用":"使用")+"工具控件")]),e._v(" "),n("button",{on:{click:function(t){e.useStyle=!e.useStyle}}},[e._v(e._s(e.useStyle?"禁用":"使用")+"样式控件")]),e._v(" "),n("button",{on:{click:function(t){e.useText=!e.useText}}},[e._v(e._s(e.useText?"禁用":"使用")+"文 本 框")]),n("br"),e._v(" "),n("button",{on:{click:e.setHorizontal}},[e._v("横向")]),e._v(" "),n("button",{on:{click:e.setVertical}},[e._v("纵向")])])])],1)},[],!1,null,"109cb3bc",null);t.default=l.exports},501:function(e,t,n){}}]);