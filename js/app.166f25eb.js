(function(e){function t(t){for(var a,o,r=t[0],c=t[1],l=t[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/admin/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"0486":function(e,t,n){},"19d9":function(e,t,n){},"1a96":function(e,t,n){},"2cac":function(e,t,n){"use strict";var a=n("46a2"),s=n.n(a);s.a},"343f":function(e,t,n){"use strict";var a=n("aac7"),s=n.n(a);s.a},3588:function(e,t,n){"use strict";var a=n("979c"),s=n.n(a);s.a},"3df0":function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=i,e.exports=s,s.id="4678"},"46a2":function(e,t,n){},"4b77":function(e,t,n){"use strict";var a=n("1a96"),s=n.n(a);s.a},"4d0b":function(e,t,n){"use strict";var a=n("3df0"),s=n.n(a);s.a},5021:function(e,t,n){},"51ac":function(e,t,n){"use strict";var a=n("760b"),s=n.n(a);s.a},"56d6":function(e,t,n){"use strict";var a=n("0486"),s=n.n(a);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-layout",{staticStyle:{position:"fixed",width:"100%"},attrs:{id:"components-layout-demo-top-side-2"}},[n("Header"),n("a-layout",[e.isAuthenticated?n("Sidebar"):e._e(),e.isAuthenticated?e._e():n("SignInPage")],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-header",{staticClass:"header"},[a("img",{staticClass:"logo",attrs:{src:n("fcc2")}}),e.isAuthenticated?a("a-menu",{style:{lineHeight:"64px"},attrs:{mode:"horizontal",theme:"dark"},on:{click:e.logOut}},[a("a-menu-item",{key:"1"},[e._v("\n            Log Out\n        ")])],1):e._e()],1)},r=[],c=(n("96cf"),n("3b8d")),l=(n("bc3a").default,n("1157")),u=new a["a"];function d(e){void 0==e["error"]&&(localStorage.setItem("access",e["access"]),"refresh"in e&&(localStorage.setItem("refresh",e["refresh"]),localStorage.setItem("username",e["username"])),u.$emit("authStateChanged"))}function f(e,t,n){return m.apply(this,arguments)}function m(){return m=Object(c["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:l.ajax({url:"https://api.gethighlow.com/admin/sign_in",method:"POST",data:{username:t,password:n},success:function(e){console.log(e),d(e),u.$emit("authStateChanged")}});case 1:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function g(e,t,n,a){return h.apply(this,arguments)}function h(){return h=Object(c["a"])(regeneratorRuntime.mark((function e(t,n,a,s){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=localStorage.getItem("access"),l.ajax({url:"https://api.gethighlow.com"+t,method:n,data:a,headers:{Authorization:"Bearer "+i},crossDomain:!0,success:function(e){"String"==typeof e&&(e=l.parseJSON(e)),"ERROR-INVALID-TOKEN"==e["error"]?l.ajax({url:"https://api.gethighlow.com/admin/refresh_access",method:"POST",data:{refresh:localStorage.getItem("refresh")},success:function(e){"ERROR-INVALID-REFRESH-TOKEN"==e["error"]?b():(d(e),g(t,n,a,s))}}):s(e)}});case 2:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function p(){return void 0!=localStorage.getItem("access")&&null!=localStorage.getItem("access")}function b(){localStorage.removeItem("refresh"),localStorage.removeItem("access"),localStorage.removeItem("username"),u.$emit("authStateChanged")}var v,_,j={name:"Header",data:function(){return{isAuthenticated:!1}},mounted:function(){console.log(p()),this.isAuthenticated=p(),u.$on("authStateChanged",(function(){this.isAuthenticated=p(),console.log(p())}))},methods:{logOut:function(e){b()}}},y=j,w=(n("51ac"),n("2877")),I=Object(w["a"])(y,o,r,!1,null,"bb47400e",null),k=I.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-layout",[n("a-layout-sider",{staticStyle:{background:"#fff"},attrs:{theme:"light",collapsible:"",width:"200"}},[n("a-menu",{style:{height:"100%",borderRight:0},attrs:{mode:"inline",defaultSelectedKeys:["metrics"]},on:{select:e.updatePage}},[n("a-menu-item",{key:"metrics"},[n("a-icon",{attrs:{type:"pie-chart"}}),n("span",[e._v("Metrics")])],1),n("a-menu-item",{key:"flags"},[n("a-icon",{attrs:{type:"flag"}}),n("span",[e._v("Flags")])],1),n("a-menu-item",{key:"bugReports"},[n("a-icon",{attrs:{type:"bug"}}),n("span",[e._v("Bug Reports")])],1),n("a-menu-item",{key:"contactForms"},[n("a-icon",{attrs:{type:"form"}}),n("span",[e._v("Contact Forms")])],1)],1)],1),n("Content",{attrs:{id:"content",page:e.page}})],1)},S=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-layout",{staticStyle:{padding:"0 24px 24px"}},[n("a-layout-content",{style:{padding:"24px",margin:0,minHeight:"280px"}},["metrics"===e.page?n("Metrics"):e._e(),"flags"===e.page?n("Flags"):e._e(),"bugReports"===e.page?n("BugReports"):e._e(),"contactForms"===e.page?n("ContactForms"):e._e()],1)],1)},O=[],R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Metrics")]),e._l(e.metricsConfig,(function(e){return n("Metric",{key:e.label,attrs:{metric:e}})}))],2)},E=[],F=(encodeURIComponent("invalid"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{staticClass:"metric",staticStyle:{display:"inline-block","padding-bottom":"none"},attrs:{title:e.metric.label}},["number"===e.metric.type?n("NumberGraph",{attrs:{dataQuery:e.metric.dataQuery}}):e._e(),"line"===e.metric.type?n("LineGraph",{attrs:{dataQuery:e.metric.dataQuery,options:e.metric.options}}):e._e()],1)}),T=[],U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?e._e():n("p",[e._v(e._s(e.number))]),e.loading?n("a-spin"):e._e()],1)},B=[],D={name:"NumberGraph",props:["dataQuery"],data:function(){return{number:0,loading:!0}},created:function(){var e=this;this.loading=!0,this.dataQuery((function(t){e.number=t,e.loading=!1}))}},L=D,H=(n("99a3"),Object(w["a"])(L,U,B,!1,null,"68f784f2",null)),z=H.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?e._e():n("LineChart",{attrs:{"chart-data":e.datasets,labels:e.labels,options:e.options}}),e.loading?n("a-spin"):e._e()],1)},M=[],G=n("1fca"),A=G["b"].reactiveProp,P={name:"LineChart",extends:G["a"],mixins:[A],props:["options","labels"],mounted:function(){this.renderLineChart()},methods:{renderLineChart:function(){this.renderChart({labels:this.labels,datasets:this.chartData},this.options)}}},Q=P,N=Object(w["a"])(Q,v,_,!1,null,null,null),K=N.exports,q={name:"LineGraph",props:["dataQuery","options"],components:{LineChart:K},data:function(){return{datasets:[],labels:[],loading:!0}},mounted:function(){},created:function(){var e=this;this.dataQuery((function(t){e.labels=t.labels,e.datasets=t.datasets,e.loading=!1}))}},J=q,V=Object(w["a"])(J,$,M,!1,null,null,null),W=V.exports,X={name:"Metric",components:{NumberGraph:z,LineGraph:W},props:["metric"]},Y=X,Z=(n("343f"),Object(w["a"])(Y,F,T,!1,null,"2746d9e2",null)),ee=Z.exports,te=[{label:"Total Users",type:"number",dataQuery:function(e){g("/admin/total_users","GET",{},(function(t){console.log(t),e(t.total_users)}))}},{type:"line",label:"User growth",options:{color:["blue"],legend:{display:!0}},dataQuery:function(e){g("/admin/get_analytics","GET",{},(function(t){console.log(t);for(var n=[{label:"# of users",data:[],borderColor:"rgb(251,42,87)",backgroundColor:"rgba(251,42,87, 0.3)"},{label:"# of High/Lows",data:[],borderColor:"rgb(240, 240, 240)",backgroundColor:"rgba(240, 240, 240, 0.3)"},{label:"# of friendships",data:[],borderColor:"rgb(250,156,29)",backgroundColor:"rgba(250,156,29, 0.3)"},{label:"# of OAuth users",data:[],borderColor:"rgb(200, 200, 255)",backgroundColor:"rgba(200, 200, 255, 1)"}],a=[],s=0;s<t.analytics.length;s++){var i=t.analytics[s].date,o=new Date(i),r=o.toLocaleString(void 0,{month:"short"})+" "+o.getDate();a.push(r.toLocaleString());var c=t.analytics[s];n[0].data.push(c.num_users),n[1].data.push(c.num_highlows),n[2].data.push(c.num_friendships),n[3].data.push(c.num_oauth_users)}e({labels:a,datasets:n})}))}},{type:"number",label:"Average friends per user",dataQuery:function(e){g("/admin/get_analytics","GET",{},(function(t){var n=t.analytics[t.analytics.length-1];e(Math.round(n.num_friendships/n.num_users))}))}},{type:"number",label:"% OAuth adoption",dataQuery:function(e){g("/admin/get_analytics","GET",{},(function(t){var n=t.analytics[t.analytics.length-1];e((n.num_oauth_users/n.num_users*100).toFixed(1)+"%")}))}}],ne={name:"Metrics",components:{Metric:ee},data:function(){return{metricsConfig:te}}},ae=ne,se=Object(w["a"])(ae,R,E,!1,null,"041ad9fa",null),ie=se.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Flags")]),n("FlagsTable")],1)},re=[],ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-button",{staticStyle:{margin:"10px"},attrs:{type:"primary"},on:{click:e.reload}},[n("a-icon",{attrs:{type:"reload"}}),e._v("Reload")],1),n("a-table",{attrs:{columns:e.columns,loading:e.loading,dataSource:e.data,rowKey:function(e){return e.id}},scopedSlots:e._u([{key:"uid",fn:function(t){return n("a",{on:{click:function(n){return e.showModal(t)}}},[e._v(e._s(t))])}},{key:"flagger",fn:function(t){return n("a",{on:{click:function(n){return e.showModal(t)}}},[e._v(e._s(t))])}},{key:"highlowid",fn:function(t){return n("a",{on:{click:function(n){return e.showHighLowModal(t)}}},[e._v(e._s(t))])}},{key:"dismiss",fn:function(t){return n("a-button",{attrs:{type:"danger"},on:{click:function(n){return e.dismissFlag(t)}}},[e._v("Dismiss")])}}])}),e.isInspectingUser?n("a-modal",{attrs:{title:"Inspect User",visible:e.isInspectingUser},on:{ok:e.handleOk,cancel:e.handleCancel}},[n("User",{attrs:{uid:e.inspectorUid}})],1):e._e(),e.isInspectingHighLow?n("a-modal",{attrs:{title:"Inspect High/Low",visible:e.isInspectingHighLow},on:{ok:e.handleOk,cancel:e.handleCancel}},[n("HighLow",{attrs:{highlowid:e.inspectorHighlowid}})],1):e._e()],1)},le=[],ue=(n("3846"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vertical"},[n("div",{staticClass:"horizontal"},[n("a-avatar",{attrs:{size:64,src:"https://storage.googleapis.com/highlowfiles/"+e.profileimage}}),n("div",{staticClass:"vertical"},[n("h3",[e._v(e._s(e.firstname)+" "+e._s(e.lastname))]),n("a",{attrs:{href:"mailto:"+e.email}},[e._v(e._s(e.email))]),n("p",[e._v(e._s(e.bio))])]),n("div",{staticClass:"vertical"},[n("span",{staticClass:"flagged"},[e._v("Flagged: "+e._s(e.times_flagged))]),n("span",{staticClass:"banned"},[e._v("Banned: "+e._s(e.banned))]),n("span",{staticClass:"streak"},[e._v("Streak: "+e._s(e.streak))])]),n("a-popconfirm",{attrs:{title:e.banned?"Confirm banning user?":"Confirm unbanning user?"},on:{confirm:e.confirmBan}},[n("a-button",{attrs:{loading:e.isBanning,type:"primary"}},[e._v(e._s(e.banned?"Unban":"Ban")+" User")])],1)],1)])}),de=[],fe={name:"User",props:["uid"],data:function(){return{profileimage:"",firstname:"",lastname:"",email:"",streak:"",bio:"",times_flagged:0,banned:!1,isBanning:!1}},created:function(){var e=this;this.banned||g("/admin/inspect_user","GET",{},(function(t){console.log(t),e.profileimage=t.profileimage,e.firstname=t.firstname,e.lastname=t.lastname,e.email=t.email,e.streak=t.streak,e.bio=t.bio,e.times_flagged=t.times_flagged,e.banned=0!==t.banned}))},methods:{confirmBan:function(){var e=this;this.isBanning=!0,g("/admin/"+(this.banned?"unban/":"ban/")+this.uid,"GET",{},(function(t){"success"===t.status&&(e.banned=!e.banned,e.$notification.open({message:"User has been "+(e.banned?"banned":"unbanned")}))})).finally((function(){e.isBanning=!1}))}}},me=fe,ge=(n("3588"),Object(w["a"])(me,ue,de,!1,null,"e788b634",null)),he=ge.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.exists?n("div",{staticClass:"vertical"},[n("div",{staticClass:"vertical highlowsection"},[n("h4",[e._v("High")]),""!==e.highImg&&null!==e.highImg?n("div",{staticClass:"highlowimg",style:"background-image: url('https://storage.googleapis.com/highlowfiles/highs/"+e.highImg+"');"}):e._e(),n("p",[e._v(e._s(e.high))])]),n("div",{staticClass:"vertical highlowsection"},[n("h4",[e._v("Low")]),""!==e.lowImg&&null!==e.lowImg?n("div",{staticClass:"highlowimg",style:"background-image: url('https://storage.googleapis.com/highlowfiles/lows/"+e.lowImg+"');"}):e._e(),n("p",[e._v(e._s(e.low))])]),n("div",{staticClass:"vertical highlowsection"},[n("a-popconfirm",{attrs:{title:"Confirm Delete High/Low?"},on:{confirm:e.confirmDelete}},[n("a-button",{attrs:{type:"danger",loading:e.isDeleting}},[e._v("Delete High/Low")])],1)],1)]):e._e()},be=[],ve={name:"HighLow",props:["highlowid"],data:function(){return{high:"",highImg:"",low:"",lowImg:"",isDeleting:!1,exists:!0}},created:function(){var e=this;g("/admin/inspect_highlow/"+this.highlowid,"GET",{},(function(t){console.log(t),e.high=t.high,e.low=t.low,e.highImg=t.high_image,e.lowImg=t.low_image,console.log(e.highImg)}))},methods:{confirmDelete:function(){var e=this;this.isDeleting=!0,g("/admin/delete_highlow/"+this.highlowid,"GET",{},(function(t){"success"===t.status&&(e.$notification.open({message:"High/Low has been deleted"}),e.exists=!1)})).finally((function(){e.isDeleting=!1}))}}},_e=ve,je=(n("56d6"),Object(w["a"])(_e,pe,be,!1,null,"7beb04ad",null)),ye=je.exports,we=[{title:"ID",dataIndex:"id",sorter:!0},{title:"Type",dataIndex:"_type",sorter:!0},{title:"Highlow ID",dataIndex:"highlowid",sorter:!0,scopedSlots:{customRender:"highlowid"}},{title:"UID",dataIndex:"uid",sorter:!0,scopedSlots:{customRender:"uid"}},{title:"Flagger",dataIndex:"flagger",sorter:!0,scopedSlots:{customRender:"flagger"}},{title:"Dismiss",dataIndex:"id",scopedSlots:{customRender:"dismiss"}}],Ie={name:"FlagsTable",components:{User:he,HighLow:ye},data:function(){return{columns:we,loading:!1,data:[],isInspectingUser:!1,inspectorUid:"",isInspectingHighLow:!1,inspectorHighlowid:""}},mounted:function(){var e=this;this.loading=!0,g("/admin/list_flags","GET",{},(function(t){console.log(t),e.data=t.flags,e.loading=!1}))},methods:{showModal:function(e){this.inspectorUid=e,this.isInspectingUser=!0},handleCancel:function(){this.isInspectingUser=!1,this.isInspectingHighLow=!1},handleOk:function(){this.isInspectingUser=!1,this.isInspectingHighLow=!1},showHighLowModal:function(e){this.inspectorHighlowid=e,this.isInspectingHighLow=!0},reload:function(){var e=this;this.loading=!0,this.data=[],g("/admin/list_flags","GET",{},(function(t){console.log(t),e.data=t.flags,e.loading=!1}))},dismissFlag:function(e){var t=this;g("/admin/dismiss_flag/"+e,"GET",{},(function(e){"success"===e.status&&t.reload()}))}}},ke=Ie,xe=Object(w["a"])(ke,ce,le,!1,null,"40611b8e",null),Se=xe.exports,Ce={name:"Flags",components:{FlagsTable:Se}},Oe=Ce,Re=Object(w["a"])(Oe,oe,re,!1,null,"000e6737",null),Ee=Re.exports,Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Bug Reports")]),n("BugReportsTable")],1)},Te=[],Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-button",{staticStyle:{margin:"10px"},attrs:{type:"primary"},on:{click:e.reload}},[n("a-icon",{attrs:{type:"reload"}}),e._v("Reload")],1),n("a-table",{attrs:{columns:e.columns,loading:e.loading,dataSource:e.data,rowKey:function(e){return e.id}},scopedSlots:e._u([{key:"uid",fn:function(t){return n("a",{on:{click:function(n){return e.showModal(t)}}},[e._v(e._s(t))])}},{key:"title",fn:function(t){return n("a",{on:{click:function(n){return e.showBugReport(t)}}},[e._v(e._s(t.title))])}},{key:"message",fn:function(t){return n("a",{on:{click:function(n){return e.showBugReport(t)}}},[e._v(e._s(t.message))])}},{key:"dismiss",fn:function(t){return n("a-button",{attrs:{type:"danger"},on:{click:function(n){return e.dismissBugReport(t)}}},[e._v("Dismiss")])}}])}),e.isInspectingUser?n("a-modal",{attrs:{title:"Inspect User",visible:e.isInspectingUser},on:{ok:e.handleOk,cancel:e.handleCancel}},[n("User",{attrs:{uid:e.inspectorUid}})],1):e._e(),e.isInspectingBugReport?n("a-modal",{attrs:{title:"Inspect Bug Report",visible:e.isInspectingBugReport},on:{ok:e.handleOk,cancel:e.handleCancel}},[n("BugReport",{attrs:{bug:e.inspectorBug}})],1):e._e()],1)},Be=[],De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vertical"},[n("h1",[e._v(e._s(e.bug.title))]),n("small",[e._v(e._s(e.bug._timestamp))]),n("p",[e._v(e._s(e.bug.message))])])},Le=[],He={name:"BugReport",props:["bug"]},ze=He,$e=(n("cb0a"),Object(w["a"])(ze,De,Le,!1,null,"a3f6039c",null)),Me=$e.exports,Ge=[{title:"ID",dataIndex:"id",sorter:!0},{title:"Title",dataIndex:"",sorter:!0,scopedSlots:{customRender:"title"}},{title:"Message",dataIndex:"",sorter:!0,scopedSlots:{customRender:"message"}},{title:"UID",dataIndex:"uid",sorter:!0,scopedSlots:{customRender:"uid"}},{title:"Timestamp",dataIndex:"_timestamp",sorter:!0},{title:"Dismiss",dataIndex:"id",scopedSlots:{customRender:"dismiss"}}],Ae={name:"BugReportsTable",components:{BugReport:Me,User:he},data:function(){return{columns:Ge,loading:!1,data:[],isInspectingUser:!1,inspectorUid:"",isInspectingBugReport:!1,inspectorBugid:""}},mounted:function(){var e=this;this.loading=!0,g("/admin/list_bug_reports","GET",{},(function(t){console.log(t),e.data=t.bug_reports,e.loading=!1}))},methods:{showModal:function(e){this.inspectorUid=e,this.isInspectingUser=!0},handleCancel:function(){this.isInspectingUser=!1,this.isInspectingBugReport=!1},handleOk:function(){this.isInspectingUser=!1,this.isInspectingBugReport=!1},showBugReport:function(e){this.inspectorBug=e,this.isInspectingBugReport=!0},reload:function(){var e=this;this.loading=!0,this.data=[],g("/admin/list_bug_reports","GET",{},(function(t){console.log(t),e.data=t.bug_reports,e.loading=!1}))},dismissBugReport:function(e){var t=this;g("/admin/dismiss_bug/"+e,"GET",{},(function(e){"success"===e.status&&t.reload()}))}}},Pe=Ae,Qe=Object(w["a"])(Pe,Ue,Be,!1,null,"30ff9a55",null),Ne=Qe.exports,Ke={name:"BugReports",components:{BugReportsTable:Ne}},qe=Ke,Je=Object(w["a"])(qe,Fe,Te,!1,null,"732719ff",null),Ve=Je.exports,We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Contact Forms")]),n("ContactFormsTable")],1)},Xe=[],Ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-button",{staticStyle:{margin:"10px"},attrs:{type:"primary"},on:{click:e.reload}},[n("a-icon",{attrs:{type:"reload"}}),e._v("Reload")],1),n("a-table",{attrs:{columns:e.columns,loading:e.loading,dataSource:e.data,rowKey:function(e){return e.id}},scopedSlots:e._u([{key:"email",fn:function(t){return n("a",{on:{click:function(n){return e.showModal(t.id)}}},[e._v(e._s(t.email))])}},{key:"name",fn:function(t){return n("a",{on:{click:function(n){return e.showModal(t.id)}}},[e._v(e._s(t.name))])}},{key:"dismiss",fn:function(t){return n("a-button",{attrs:{type:"danger"},on:{click:function(n){return e.dismissForm(t)}}},[e._v("Dismiss")])}}])}),e.isInspectingForm?n("a-modal",{attrs:{title:"Inspect Form",visible:e.isInspectingForm},on:{ok:e.handleOk,cancel:e.handleCancel}},[n("ContactForm",{attrs:{formID:e.inspectorFormID}})],1):e._e()],1)},Ze=[],et=(n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.name))]),n("span",[n("a",{attrs:{href:"mailto:"+e.email}},[e._v(e._s(e.email))])]),n("div",[n("p",[e._v(e._s(e.message))])])])}),tt=[],nt=n("59ca");n("e71f");var at={name:"ContactForm",props:["formID"],data:function(){return{name:"",email:"",message:""}},created:function(){var e=this;nt["firestore"]().collection("contact_forms").doc(this.formID).get().then((function(t){var n=t.data();console.log(t),e.name=n.firstname+" "+n.lastname,e.email=n.email,e.message=n.message}))}},st=at,it=Object(w["a"])(st,et,tt,!1,null,null,null),ot=it.exports;n("e71f");var rt=[{title:"ID",dataIndex:"id",sorter:!0},{title:"Name",dataIndex:"",sorter:!0,scopedSlots:{customRender:"name"}},{title:"Email",dataIndex:"",sorter:!0,scopedSlots:{customRender:"email"}},{title:"Dismiss",dataIndex:"id",sorter:!0,scopedSlots:{customRender:"dismiss"}}],ct={name:"ContactFormsTable",components:{ContactForm:ot},data:function(){return{columns:rt,loading:!1,data:[],isInspectingForm:!1,inspectorFormID:""}},mounted:function(){var e=this;this.loading=!0,console.log("HITHERE"),nt["firestore"]().collection("contact_forms").where("read","==",!1).get().then((function(t){var n=[];t.forEach((function(e){var t=e.data(),a={id:e.id,name:t.firstname+" "+t.lastname,email:t.email};n.push(a)})),e.data=n,e.loading=!1}))},methods:{showModal:function(e){this.inspectorFormID=e,this.isInspectingForm=!0},handleCancel:function(){this.isInspectingForm=!1},handleOk:function(){this.isInspectingForm=!1},reload:function(){var e=this;this.loading=!0,console.log("HITHERE"),nt["firestore"]().collection("contact_forms").where("read","==",!1).get().then((function(t){var n=[];t.forEach((function(e){var t=e.data(),a={id:e.id,name:t.firstname+" "+t.lastname,email:t.email};n.push(a)})),e.data=n,e.loading=!1}))},dismissForm:function(e){var t=this;nt["firestore"]().collection("contact_forms").doc(e).update({read:!0}).then((function(){t.reload()}))}}},lt=ct,ut=Object(w["a"])(lt,Ye,Ze,!1,null,"680e7849",null),dt=ut.exports,ft={name:"ContactForms",components:{ContactFormsTable:dt}},mt=ft,gt=Object(w["a"])(mt,We,Xe,!1,null,null,null),ht=gt.exports,pt={name:"Content",props:["page"],components:{Metrics:ie,Flags:Ee,BugReports:Ve,ContactForms:ht}},bt=pt,vt=(n("4d0b"),Object(w["a"])(bt,C,O,!1,null,"ef14327a",null)),_t=vt.exports,jt={name:"Sidebar",components:{Content:_t},data:function(){return{page:"metrics"}},methods:{updatePage:function(e){e.item;var t=e.key;e.selectedKeys;void 0!==t&&(this.page=t)}}},yt=jt,wt=(n("4b77"),Object(w["a"])(yt,x,S,!1,null,"5f25581a",null)),It=wt.exports,kt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-layout",{attrs:{id:"container"}},[n("a-card",{attrs:{id:"form",title:"Sign In"}},[n("a-form-item",{attrs:{label:"Username"}},[n("a-input",{attrs:{placeholder:"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),n("a-form-item",{attrs:{label:"Password"}},[n("a-input",{attrs:{placeholder:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("a-button",{attrs:{type:"primary"},on:{click:e.signInSubmit}},[e._v("Submit")])],1)],1)},xt=[],St={name:"SignInPage",components:{},data:function(){return{username:"",password:""}},methods:{signInSubmit:function(){console.log(this.password),f(this.username,this.password)}}},Ct=St,Ot=(n("2cac"),Object(w["a"])(Ct,kt,xt,!1,null,null,null)),Rt=Ot.exports,Et={components:{Header:k,Sidebar:It,SignInPage:Rt},data:function(){return{collapsed:!1,isAuthenticated:!1}},mounted:function(){var e=this;this.isAuthenticated=p(),u.$on("authStateChanged",(function(){e.isAuthenticated=p()}))}},Ft=Et,Tt=(n("034f"),Object(w["a"])(Ft,s,i,!1,null,null,null)),Ut=Tt.exports,Bt=n("2f62");a["a"].use(Bt["a"]);var Dt=new Bt["a"].Store({state:{},mutations:{},actions:{}}),Lt=n("d842"),Ht=n("30ef"),zt=n.n(Ht),$t=n("f23d");n("5021");n("ea7b"),a["a"].use(Lt["a"].use(zt.a)),a["a"].use($t["a"]),a["a"].config.productionTip=!1;var Mt={apiKey:"AIzaSyAK_IpdgskWh8FP9doRqf114mu0D9XnObE",authDomain:"highlow-promotional.firebaseapp.com",databaseURL:"https://highlow-promotional.firebaseio.com",projectId:"highlow-promotional",storageBucket:"highlow-promotional.appspot.com",messagingSenderId:"709246017339",appId:"1:709246017339:web:76f28cd244ef5120"};nt["initializeApp"](Mt),nt["auth"]().signInWithEmailAndPassword("naclcaleb@gmail.com","hester").then((function(e){})),new a["a"]({store:Dt,render:function(e){return e(Ut)}}).$mount("#app")},"64a9":function(e,t,n){},"760b":function(e,t,n){},"979c":function(e,t,n){},"99a3":function(e,t,n){"use strict";var a=n("9eb3"),s=n.n(a);s.a},"9eb3":function(e,t,n){},aac7:function(e,t,n){},cb0a:function(e,t,n){"use strict";var a=n("19d9"),s=n.n(a);s.a},fcc2:function(e,t,n){e.exports=n.p+"img/Logo-Triangles.4677522b.png"}});
//# sourceMappingURL=app.166f25eb.js.map