(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/admin/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"14f8":function(t,e,a){"use strict";var n=a("15c0"),s=a.n(n);s.a},"15c0":function(t,e,a){},"15fd":function(t,e,a){"use strict";var n=a("7e56"),s=a.n(n);s.a},"19d9":function(t,e,a){},"1a7d":function(t,e,a){"use strict";var n=a("ccad"),s=a.n(n);s.a},"222c":function(t,e,a){"use strict";var n=a("b9a5"),s=a.n(n);s.a},"2a16":function(t,e,a){"use strict";var n=a("3f20"),s=a.n(n);s.a},"2cac":function(t,e,a){"use strict";var n=a("46a2"),s=a.n(n);s.a},"343f":function(t,e,a){"use strict";var n=a("aac7"),s=a.n(n);s.a},"3f20":function(t,e,a){},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="4678"},"46a2":function(t,e,a){},5021:function(t,e,a){},5251:function(t,e,a){"use strict";var n=a("afa6"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{staticStyle:{position:"fixed",width:"100%"},attrs:{id:"components-layout-demo-top-side-2"}},[a("Header"),a("a-layout",[t.isAuthenticated?a("Sidebar"):t._e(),t.isAuthenticated?t._e():a("SignInPage")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout-header",{staticClass:"header"},[n("img",{staticClass:"logo",attrs:{src:a("fcc2")}}),t.isAuthenticated?n("a-menu",{style:{lineHeight:"64px"},attrs:{mode:"horizontal",theme:"dark"},on:{click:t.logOut}},[n("a-menu-item",{key:"1"},[t._v("\n            Log Out\n        ")]),n("a-sub-menu",[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"github"}}),t._v("GitHub")],1),n("a-menu-item-group",{attrs:{title:"Teams"}},[n("a-menu-item",{key:"7"},[n("a",{attrs:{href:"https://github.com/orgs/highlowapp/teams/frontend",target:"_blank"}},[t._v("Frontend")])]),n("a-menu-item",{key:"8"},[n("a",{attrs:{href:"https://github.com/orgs/highlowapp/teams/backend",target:"_blank"}},[t._v("Backend")])])],1),n("a-menu-item-group",{attrs:{title:"Repos"}},[n("a-menu-item",{key:"2"},[n("a",{attrs:{href:"https://github.com/highlowapp/highlowbackend",target:"_blank"}},[t._v("Backend")])]),n("a-menu-item",{key:"3"},[n("a",{attrs:{href:"https://github.com/highlowapp/ios-app",target:"_blank"}},[t._v("iOS")])]),n("a-menu-item",{key:"4"},[n("a",{attrs:{href:"https://github.com/highlowapp/android-app",target:"_blank"}},[t._v("Android")])])],1)],1),n("a-menu-item",{key:"5"},[n("a",{attrs:{href:"https://play.google.com/apps/publish/?account=7751825972145461522#AppListPlace",target:"_blank"}},[t._v("Google Play")])]),n("a-menu-item",{key:"6"},[n("a",{attrs:{href:"https://console.cloud.google.com/home/dashboard?project=highlow",target:"_blank"}},[t._v("Google Cloud")])])],1):t._e()],1)},r=[],c=(a("96cf"),a("3b8d")),l=(a("c5f6"),a("6b54"),{admin_password:encodeURIComponent("invalid"),baseUrl:"https://api.gethighlow.com"}),u=(a("bc3a").default,a("1157")),d=new n["a"];function m(t){console.log(t),localStorage.setItem("access",t["access"]),"refresh"in t&&(localStorage.setItem("refresh",t["refresh"]),localStorage.setItem("username",t["username"])),"permissionLevel"in t&&localStorage.setItem("permissionLevel",t["permissionLevel"].toString()),d.$emit("authStateChanged")}function h(){var t=localStorage.getItem("permissionLevel");return void 0==t||null==t?0:Number(t)}function f(t,e,a){return p.apply(this,arguments)}function p(){return p=Object(c["a"])(regeneratorRuntime.mark((function t(e,a,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:u.ajax({url:l.baseUrl+"/admin/sign_in",method:"POST",data:{username:e,password:a},success:function(t){m(t),d.$emit("authStateChanged")}});case 1:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function g(t,e,a,n){return b.apply(this,arguments)}function b(){return b=Object(c["a"])(regeneratorRuntime.mark((function t(e,a,n,s){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=localStorage.getItem("access"),u.ajax({url:l.baseUrl+e,method:a,data:n,headers:{Authorization:"Bearer "+i},crossDomain:!0,success:function(t){"string"==typeof t&&(t=u.parseJSON(t)),"ERROR-INVALID-TOKEN"==t["error"]?u.ajax({url:l.baseUrl+"/admin/refresh_access",method:"POST",data:{refresh:localStorage.getItem("refresh")},success:function(t){"string"==typeof t&&(t=u.parseJSON(t)),console.log(t),"ERROR-INVALID-REFRESH-TOKEN"==t["error"]?_():(m(t),g(e,a,n,s))}}):s(t)}});case 2:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}function v(){return void 0!=localStorage.getItem("access")&&null!=localStorage.getItem("access")}function _(){localStorage.removeItem("refresh"),localStorage.removeItem("access"),localStorage.removeItem("username"),d.$emit("authStateChanged")}var y,j,w={name:"Header",data:function(){return{isAuthenticated:!1}},mounted:function(){this.isAuthenticated=v(),d.$on("authStateChanged",(function(){this.isAuthenticated=v()}))},methods:{logOut:function(t){1==t.key&&_()}}},k=w,I=(a("14f8"),a("2877")),x=Object(I["a"])(k,o,r,!1,null,"6121ad61",null),C=x.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-sider",{staticStyle:{background:"#fff"},attrs:{theme:"light",collapsible:"",width:"200"}},[a("a-menu",{style:{height:"100%",borderRight:0},attrs:{mode:"inline",defaultSelectedKeys:["metrics"]},on:{select:t.updatePage}},[a("a-menu-item",{key:"metrics"},[a("a-icon",{attrs:{type:"pie-chart"}}),a("span",[t._v("Metrics")])],1),a("a-menu-item",{key:"flags"},[a("a-icon",{attrs:{type:"flag"}}),a("span",[t._v("Flags")])],1),a("a-menu-item",{key:"bugReports"},[a("a-icon",{attrs:{type:"bug"}}),a("span",[t._v("Bug Reports")])],1),a("a-menu-item",{key:"contactForms"},[a("a-icon",{attrs:{type:"form"}}),a("span",[t._v("Contact Forms")])],1),100==t.permissionLevel?a("a-menu-item",{key:"companyHighLow"},[a("a-icon",{attrs:{type:"align-left"}}),a("span",[t._v("Company High/Low")])],1):t._e()],1)],1),a("Content",{attrs:{id:"content",page:t.page}})],1)},O=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{staticStyle:{padding:"0 24px 24px"}},[a("a-layout-content",{style:{padding:"24px",margin:0,minHeight:"280px"}},["metrics"===t.page?a("Metrics"):t._e(),"flags"===t.page?a("Flags"):t._e(),"bugReports"===t.page?a("BugReports"):t._e(),"contactForms"===t.page?a("ContactForms"):t._e(),"companyHighLow"===t.page?a("CompanyHighLow"):t._e()],1)],1)},L=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Metrics")]),t._l(t.metricsConfig,(function(t){return a("Metric",{key:t.label,attrs:{metric:t}})}))],2)},F=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{staticClass:"metric",staticStyle:{display:"inline-block","padding-bottom":"none"},attrs:{title:t.metric.label}},["number"===t.metric.type?a("NumberGraph",{attrs:{dataQuery:t.metric.dataQuery}}):t._e(),"line"===t.metric.type?a("LineGraph",{attrs:{dataQuery:t.metric.dataQuery,options:t.metric.options}}):t._e()],1)},B=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?t._e():a("p",[t._v(t._s(t.number))]),t.loading?a("a-spin"):t._e()],1)},D=[],T={name:"NumberGraph",props:["dataQuery"],data:function(){return{number:0,loading:!0}},created:function(){var t=this;this.loading=!0,this.dataQuery((function(e){t.number=e,t.loading=!1}))}},z=T,$=(a("99a3"),Object(I["a"])(z,H,D,!1,null,"68f784f2",null)),G=$.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?t._e():a("LineChart",{attrs:{"chart-data":t.datasets,labels:t.labels,options:t.options}}),t.loading?a("a-spin"):t._e()],1)},A=[],P=a("1fca"),N=P["b"].reactiveProp,Q={name:"LineChart",extends:P["a"],mixins:[N],props:["options","labels"],mounted:function(){this.renderLineChart()},methods:{renderLineChart:function(){this.renderChart({labels:this.labels,datasets:this.chartData},this.options)}}},K=Q,J=Object(I["a"])(K,y,j,!1,null,null,null),q=J.exports,V={name:"LineGraph",props:["dataQuery","options"],components:{LineChart:q},data:function(){return{datasets:[],labels:[],loading:!0}},mounted:function(){},created:function(){var t=this;this.dataQuery((function(e){t.labels=e.labels,t.datasets=e.datasets,t.loading=!1}))}},W=V,X=Object(I["a"])(W,M,A,!1,null,null,null),Y=X.exports,Z={name:"Metric",components:{NumberGraph:G,LineGraph:Y},props:["metric"]},tt=Z,et=(a("343f"),Object(I["a"])(tt,U,B,!1,null,"2746d9e2",null)),at=et.exports,nt=[{label:"Total Users",type:"number",dataQuery:function(t){g("/admin/total_users","GET",{},(function(e){t(e.total_users)}))}},{type:"line",label:"User growth",options:{color:["blue"],legend:{display:!0}},dataQuery:function(t){g("/admin/get_analytics/20","GET",{},(function(e){var a=[{label:"# of users",data:[],borderColor:"rgb(251,42,87)",backgroundColor:"rgba(251,42,87, 0.3)"},{label:"# of High/Lows",data:[],borderColor:"rgb(240, 240, 240)",backgroundColor:"rgba(240, 240, 240, 0.3)"},{label:"# of friendships",data:[],borderColor:"rgb(250,156,29)",backgroundColor:"rgba(250,156,29, 0.3)"},{label:"# of OAuth users",data:[],borderColor:"rgb(200, 200, 255)",backgroundColor:"rgba(200, 200, 255, 1)"}],n=[];e.analytics=e.analytics.reverse();for(var s=0;s<e.analytics.length;s++){var i=e.analytics[s].date,o=new Date(i),r=o.toLocaleString(void 0,{month:"short"})+" "+o.getDate();n.push(r.toLocaleString());var c=e.analytics[s];a[0].data.push(c.num_users),a[1].data.push(c.num_highlows),a[2].data.push(c.num_friendships),a[3].data.push(c.num_oauth_users)}t({labels:n,datasets:a})}))}},{type:"number",label:"Average friends per user",dataQuery:function(t){g("/admin/get_analytics/20","GET",{},(function(e){var a=e.analytics[e.analytics.length-1];t(Math.round(a.num_friendships/a.num_users))}))}},{type:"number",label:"% OAuth adoption",dataQuery:function(t){g("/admin/get_analytics/20","GET",{},(function(e){var a=e.analytics[e.analytics.length-1];t((a.num_oauth_users/a.num_users*100).toFixed(1)+"%")}))}}],st={name:"Metrics",components:{Metric:at},data:function(){return{metricsConfig:nt}}},it=st,ot=Object(I["a"])(it,E,F,!1,null,"4aa65530",null),rt=ot.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Flags")]),a("FlagsTable")],1)},lt=[],ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-button",{staticStyle:{margin:"10px"},attrs:{type:"primary"},on:{click:t.reload}},[a("a-icon",{attrs:{type:"reload"}}),t._v("Reload")],1),a("a-table",{attrs:{columns:t.columns,loading:t.loading,dataSource:t.data,rowKey:function(t){return t.id}},scopedSlots:t._u([{key:"uid",fn:function(e){return a("a",{on:{click:function(a){return t.showModal(e)}}},[t._v(t._s(e))])}},{key:"flagger",fn:function(e){return a("a",{on:{click:function(a){return t.showModal(e)}}},[t._v(t._s(e))])}},{key:"highlowid",fn:function(e){return a("a",{on:{click:function(a){return t.showHighLowModal(e)}}},[t._v(t._s(e))])}},{key:"dismiss",fn:function(e){return a("a-button",{attrs:{type:"danger"},on:{click:function(a){return t.dismissFlag(e)}}},[t._v("Dismiss")])}}])}),t.isInspectingUser?a("a-modal",{attrs:{title:"Inspect User",visible:t.isInspectingUser},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("User",{attrs:{uid:t.inspectorUid}})],1):t._e(),t.isInspectingHighLow?a("a-modal",{attrs:{title:"Inspect High/Low",visible:t.isInspectingHighLow},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("HighLow",{attrs:{highlowid:t.inspectorHighlowid}})],1):t._e()],1)},dt=[],mt=(a("3846"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vertical"},[a("div",{staticClass:"horizontal"},[a("a-avatar",{attrs:{size:64,src:"https://storage.googleapis.com/highlowfiles/"+t.profileimage}}),a("div",{staticClass:"vertical"},[a("h3",[t._v(t._s(t.firstname)+" "+t._s(t.lastname))]),a("a",{attrs:{href:"mailto:"+t.email}},[t._v(t._s(t.email))]),a("p",[t._v(t._s(t.bio))])]),a("div",{staticClass:"vertical"},[a("span",{staticClass:"flagged"},[t._v("Flagged: "+t._s(t.times_flagged))]),a("span",{staticClass:"banned"},[t._v("Banned: "+t._s(t.banned))]),a("span",{staticClass:"streak"},[t._v("Streak: "+t._s(t.streak))])]),a("a-popconfirm",{attrs:{title:t.banned?"Confirm banning user?":"Confirm unbanning user?"},on:{confirm:t.confirmBan}},[a("a-button",{attrs:{loading:t.isBanning,type:"primary"}},[t._v(t._s(t.banned?"Unban":"Ban")+" User")])],1)],1)])}),ht=[],ft={name:"User",props:["uid"],data:function(){return{profileimage:"",firstname:"",lastname:"",email:"",streak:"",bio:"",times_flagged:0,banned:!1,isBanning:!1}},created:function(){var t=this;this.banned||g("/admin/inspect_user","GET",{},(function(e){t.profileimage=e.profileimage,t.firstname=e.firstname,t.lastname=e.lastname,t.email=e.email,t.streak=e.streak,t.bio=e.bio,t.times_flagged=e.times_flagged,t.banned=0!==e.banned}))},methods:{confirmBan:function(){var t=this;this.isBanning=!0,g("/admin/"+(this.banned?"unban/":"ban/")+this.uid,"GET",{},(function(e){"success"===e.status&&(t.banned=!t.banned,t.$notification.open({message:"User has been "+(t.banned?"banned":"unbanned")}))})).finally((function(){t.isBanning=!1}))}}},pt=ft,gt=(a("222c"),Object(I["a"])(pt,mt,ht,!1,null,"4be13da6",null)),bt=gt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.exists?a("div",{staticClass:"vertical"},[a("div",{staticClass:"vertical highlowsection"},[a("h4",[t._v("High")]),""!==t.highImg&&null!==t.highImg?a("div",{staticClass:"highlowimg",style:"background-image: url('https://storage.googleapis.com/highlowfiles/highs/"+t.highImg+"');"}):t._e(),a("p",[t._v(t._s(t.high))])]),a("div",{staticClass:"vertical highlowsection"},[a("h4",[t._v("Low")]),""!==t.lowImg&&null!==t.lowImg?a("div",{staticClass:"highlowimg",style:"background-image: url('https://storage.googleapis.com/highlowfiles/lows/"+t.lowImg+"');"}):t._e(),a("p",[t._v(t._s(t.low))])]),a("div",{staticClass:"vertical highlowsection"},[a("a-popconfirm",{attrs:{title:"Confirm Delete High/Low?"},on:{confirm:t.confirmDelete}},[a("a-button",{attrs:{type:"danger",loading:t.isDeleting}},[t._v("Delete High/Low")])],1)],1)]):t._e()},_t=[],yt={name:"HighLow",props:["highlowid"],data:function(){return{high:"",highImg:"",low:"",lowImg:"",isDeleting:!1,exists:!0}},created:function(){var t=this;g("/admin/inspect_highlow/"+this.highlowid,"GET",{},(function(e){t.high=e.high,t.low=e.low,t.highImg=e.high_image,t.lowImg=e.low_image}))},methods:{confirmDelete:function(){var t=this;this.isDeleting=!0,g("/admin/delete_highlow/"+this.highlowid,"GET",{},(function(e){"success"===e.status&&(t.$notification.open({message:"High/Low has been deleted"}),t.exists=!1)})).finally((function(){t.isDeleting=!1}))}}},jt=yt,wt=(a("15fd"),Object(I["a"])(jt,vt,_t,!1,null,"609acd61",null)),kt=wt.exports,It=[{title:"ID",dataIndex:"id",sorter:!0},{title:"Type",dataIndex:"_type",sorter:!0},{title:"Highlow ID",dataIndex:"highlowid",sorter:!0,scopedSlots:{customRender:"highlowid"}},{title:"UID",dataIndex:"uid",sorter:!0,scopedSlots:{customRender:"uid"}},{title:"Flagger",dataIndex:"flagger",sorter:!0,scopedSlots:{customRender:"flagger"}},{title:"Dismiss",dataIndex:"id",scopedSlots:{customRender:"dismiss"}}],xt={name:"FlagsTable",components:{User:bt,HighLow:kt},data:function(){return{columns:It,loading:!1,data:[],isInspectingUser:!1,inspectorUid:"",isInspectingHighLow:!1,inspectorHighlowid:""}},mounted:function(){var t=this;this.loading=!0,g("/admin/list_flags","GET",{},(function(e){t.data=e.flags,t.loading=!1}))},methods:{showModal:function(t){this.inspectorUid=t,this.isInspectingUser=!0},handleCancel:function(){this.isInspectingUser=!1,this.isInspectingHighLow=!1},handleOk:function(){this.isInspectingUser=!1,this.isInspectingHighLow=!1},showHighLowModal:function(t){this.inspectorHighlowid=t,this.isInspectingHighLow=!0},reload:function(){var t=this;this.loading=!0,this.data=[],g("/admin/list_flags","GET",{},(function(e){t.data=e.flags,t.loading=!1}))},dismissFlag:function(t){var e=this;g("/admin/dismiss_flag/"+t,"GET",{},(function(t){"success"===t.status&&e.reload()}))}}},Ct=xt,St=Object(I["a"])(Ct,ut,dt,!1,null,"08d7c6da",null),Ot=St.exports,Rt={name:"Flags",components:{FlagsTable:Ot}},Lt=Rt,Et=Object(I["a"])(Lt,ct,lt,!1,null,"000e6737",null),Ft=Et.exports,Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Bug Reports")]),a("BugReportsTable")],1)},Bt=[],Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-button",{staticStyle:{margin:"10px"},attrs:{type:"primary"},on:{click:t.reload}},[a("a-icon",{attrs:{type:"reload"}}),t._v("Reload")],1),a("a-table",{attrs:{columns:t.columns,loading:t.loading,dataSource:t.data,rowKey:function(t){return t.id}},scopedSlots:t._u([{key:"uid",fn:function(e){return a("a",{on:{click:function(a){return t.showModal(e)}}},[t._v(t._s(e))])}},{key:"title",fn:function(e){return a("a",{on:{click:function(a){return t.showBugReport(e)}}},[t._v(t._s(e.title))])}},{key:"message",fn:function(e){return a("a",{on:{click:function(a){return t.showBugReport(e)}}},[t._v(t._s(e.message))])}},{key:"dismiss",fn:function(e){return a("a-button",{attrs:{type:"danger"},on:{click:function(a){return t.dismissBugReport(e)}}},[t._v("Dismiss")])}}])}),t.isInspectingUser?a("a-modal",{attrs:{title:"Inspect User",visible:t.isInspectingUser},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("User",{attrs:{uid:t.inspectorUid}})],1):t._e(),t.isInspectingBugReport?a("a-modal",{attrs:{title:"Inspect Bug Report",visible:t.isInspectingBugReport},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("BugReport",{attrs:{bug:t.inspectorBug}})],1):t._e()],1)},Dt=[],Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vertical"},[a("h1",[t._v(t._s(t.bug.title))]),a("small",[t._v(t._s(t.bug._timestamp))]),a("p",[t._v(t._s(t.bug.message))])])},zt=[],$t={name:"BugReport",props:["bug"]},Gt=$t,Mt=(a("cb0a"),Object(I["a"])(Gt,Tt,zt,!1,null,"a3f6039c",null)),At=Mt.exports,Pt=[{title:"ID",dataIndex:"id",sorter:!0},{title:"Title",dataIndex:"",sorter:!0,scopedSlots:{customRender:"title"}},{title:"Message",dataIndex:"",sorter:!0,scopedSlots:{customRender:"message"}},{title:"UID",dataIndex:"uid",sorter:!0,scopedSlots:{customRender:"uid"}},{title:"Timestamp",dataIndex:"_timestamp",sorter:!0},{title:"Dismiss",dataIndex:"id",scopedSlots:{customRender:"dismiss"}}],Nt={name:"BugReportsTable",components:{BugReport:At,User:bt},data:function(){return{columns:Pt,loading:!1,data:[],isInspectingUser:!1,inspectorUid:"",isInspectingBugReport:!1,inspectorBugid:""}},mounted:function(){var t=this;this.loading=!0,g("/admin/list_bug_reports","GET",{},(function(e){t.data=e.bug_reports,t.loading=!1}))},methods:{showModal:function(t){this.inspectorUid=t,this.isInspectingUser=!0},handleCancel:function(){this.isInspectingUser=!1,this.isInspectingBugReport=!1},handleOk:function(){this.isInspectingUser=!1,this.isInspectingBugReport=!1},showBugReport:function(t){this.inspectorBug=t,this.isInspectingBugReport=!0},reload:function(){var t=this;this.loading=!0,this.data=[],g("/admin/list_bug_reports","GET",{},(function(e){t.data=e.bug_reports,t.loading=!1}))},dismissBugReport:function(t){var e=this;g("/admin/dismiss_bug/"+t,"GET",{},(function(t){"success"===t.status&&e.reload()}))}}},Qt=Nt,Kt=Object(I["a"])(Qt,Ht,Dt,!1,null,"7ebd9e55",null),Jt=Kt.exports,qt={name:"BugReports",components:{BugReportsTable:Jt}},Vt=qt,Wt=Object(I["a"])(Vt,Ut,Bt,!1,null,"732719ff",null),Xt=Wt.exports,Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Contact Forms")]),a("ContactFormsTable")],1)},Zt=[],te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-button",{staticStyle:{margin:"10px"},attrs:{type:"primary"},on:{click:t.reload}},[a("a-icon",{attrs:{type:"reload"}}),t._v("Reload")],1),a("a-table",{attrs:{columns:t.columns,loading:t.loading,dataSource:t.data,rowKey:function(t){return t.id}},scopedSlots:t._u([{key:"email",fn:function(e){return a("a",{on:{click:function(a){return t.showModal(e.id)}}},[t._v(t._s(e.email))])}},{key:"name",fn:function(e){return a("a",{on:{click:function(a){return t.showModal(e.id)}}},[t._v(t._s(e.name))])}},{key:"dismiss",fn:function(e){return a("a-button",{attrs:{type:"danger"},on:{click:function(a){return t.dismissForm(e)}}},[t._v("Dismiss")])}}])}),t.isInspectingForm?a("a-modal",{attrs:{title:"Inspect Form",visible:t.isInspectingForm},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("ContactForm",{attrs:{formID:t.inspectorFormID}})],1):t._e()],1)},ee=[],ae=(a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v(t._s(t.name))]),a("span",[a("a",{attrs:{href:"mailto:"+t.email}},[t._v(t._s(t.email))])]),a("div",[a("p",[t._v(t._s(t.message))])])])}),ne=[],se=a("59ca");a("e71f");var ie={name:"ContactForm",props:["formID"],data:function(){return{name:"",email:"",message:""}},created:function(){var t=this;se["firestore"]().collection("contact_forms").doc(this.formID).get().then((function(e){var a=e.data();t.name=a.firstname+" "+a.lastname,t.email=a.email,t.message=a.message}))}},oe=ie,re=Object(I["a"])(oe,ae,ne,!1,null,null,null),ce=re.exports;a("e71f");var le=[{title:"ID",dataIndex:"id",sorter:!0},{title:"Name",dataIndex:"",sorter:!0,scopedSlots:{customRender:"name"}},{title:"Email",dataIndex:"",sorter:!0,scopedSlots:{customRender:"email"}},{title:"Dismiss",dataIndex:"id",sorter:!0,scopedSlots:{customRender:"dismiss"}}],ue={name:"ContactFormsTable",components:{ContactForm:ce},data:function(){return{columns:le,loading:!1,data:[],isInspectingForm:!1,inspectorFormID:""}},mounted:function(){var t=this;this.loading=!0,se["firestore"]().collection("contact_forms").where("read","==",!1).get().then((function(e){var a=[];e.forEach((function(t){var e=t.data(),n={id:t.id,name:e.firstname+" "+e.lastname,email:e.email};a.push(n)})),t.data=a,t.loading=!1}))},methods:{showModal:function(t){this.inspectorFormID=t,this.isInspectingForm=!0},handleCancel:function(){this.isInspectingForm=!1},handleOk:function(){this.isInspectingForm=!1},reload:function(){var t=this;this.loading=!0,se["firestore"]().collection("contact_forms").where("read","==",!1).get().then((function(e){var a=[];e.forEach((function(t){var e=t.data(),n={id:t.id,name:e.firstname+" "+e.lastname,email:e.email};a.push(n)})),t.data=a,t.loading=!1}))},dismissForm:function(t){var e=this;se["firestore"]().collection("contact_forms").doc(t).update({read:!0}).then((function(){e.reload()}))}}},de=ue,me=Object(I["a"])(de,te,ee,!1,null,"a1ab1096",null),he=me.exports,fe={name:"ContactForms",components:{ContactFormsTable:he}},pe=fe,ge=Object(I["a"])(pe,Yt,Zt,!1,null,null,null),be=ge.exports,ve=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Company High/Low")]),a("h3",[t._v("High")]),a("a-upload-dragger",{attrs:{name:"high",multiple:!1},on:{change:t.updateHighImage}},[a("p",{staticClass:"ant-upload-drag-icon"},[a("a-icon",{attrs:{type:"inbox"}})],1),a("p",{staticClass:"ant-upload-text"},[t._v("Click or drag file to this area to upload")])]),a("a-input",{attrs:{type:"textarea"},model:{value:t.high,callback:function(e){t.high=e},expression:"high"}}),a("h3",[t._v("Low")]),a("a-upload-dragger",{attrs:{name:"low",multiple:!1},on:{change:t.updateLowImage}},[a("p",{staticClass:"ant-upload-drag-icon"},[a("a-icon",{attrs:{type:"inbox"}})],1),a("p",{staticClass:"ant-upload-text"},[t._v("Click or drag file to this area to upload")])]),a("a-input",{attrs:{type:"textarea"},model:{value:t.low,callback:function(e){t.low=e},expression:"low"}}),a("a-button",{attrs:{type:"primary"},on:{"on:click":t.submit}},[t._v("Submit")])],1)},_e=[],ye={name:"CompanyHighLow",components:{},data:function(){return{high:void 0,low:void 0,highImage:void 0,lowImage:void 0}},methods:{updateHighImage:function(t){this.highImage=t.file},updateLowImage:function(t){this.lowImage=t.file},submit:function(){var t=new FormData;t.append("high",this.highImage),t.append("low",this.lowImage),t.append("high",this.high),t.append("low",this.low)}}},je=ye,we=(a("1a7d"),Object(I["a"])(je,ve,_e,!1,null,"76802809",null)),ke=we.exports,Ie={name:"Content",props:["page"],components:{Metrics:rt,Flags:Ft,BugReports:Xt,ContactForms:be,CompanyHighLow:ke}},xe=Ie,Ce=(a("2a16"),Object(I["a"])(xe,R,L,!1,null,"adf594b8",null)),Se=Ce.exports,Oe={name:"Sidebar",components:{Content:Se},data:function(){return{page:"metrics",permissionLevel:0}},mounted:function(){this.permissionLevel=h()},methods:{updatePage:function(t){t.item;var e=t.key;t.selectedKeys;void 0!==e&&(this.page=e)}}},Re=Oe,Le=(a("5251"),Object(I["a"])(Re,S,O,!1,null,"7b5a282b",null)),Ee=Le.exports,Fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{attrs:{id:"container"}},[a("a-card",{attrs:{id:"form",title:"Sign In"}},[a("a-form-item",{attrs:{label:"Username"}},[a("a-input",{attrs:{placeholder:"Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),a("a-form-item",{attrs:{label:"Password"}},[a("a-input",{attrs:{placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("a-button",{attrs:{type:"primary"},on:{click:t.signInSubmit}},[t._v("Submit")])],1)],1)},Ue=[],Be={name:"SignInPage",components:{},data:function(){return{username:"",password:""}},methods:{signInSubmit:function(){f(this.username,this.password)}}},He=Be,De=(a("2cac"),Object(I["a"])(He,Fe,Ue,!1,null,null,null)),Te=De.exports,ze={components:{Header:C,Sidebar:Ee,SignInPage:Te},data:function(){return{collapsed:!1,isAuthenticated:!1}},mounted:function(){var t=this;this.isAuthenticated=v(),d.$on("authStateChanged",(function(){t.isAuthenticated=v()}))}},$e=ze,Ge=(a("034f"),Object(I["a"])($e,s,i,!1,null,null,null)),Me=Ge.exports,Ae=a("2f62");n["a"].use(Ae["a"]);var Pe=new Ae["a"].Store({state:{},mutations:{},actions:{}}),Ne=a("d842"),Qe=a("30ef"),Ke=a.n(Qe),Je=a("f23d");a("5021");a("ea7b"),n["a"].use(Ne["a"].use(Ke.a)),n["a"].use(Je["a"]),n["a"].config.productionTip=!1;var qe={apiKey:"AIzaSyAK_IpdgskWh8FP9doRqf114mu0D9XnObE",authDomain:"highlow-promotional.firebaseapp.com",databaseURL:"https://highlow-promotional.firebaseio.com",projectId:"highlow-promotional",storageBucket:"highlow-promotional.appspot.com",messagingSenderId:"709246017339",appId:"1:709246017339:web:76f28cd244ef5120"};se["initializeApp"](qe),se["auth"]().signInWithEmailAndPassword("naclcaleb@gmail.com","hester").then((function(t){})),new n["a"]({store:Pe,render:function(t){return t(Me)}}).$mount("#app")},"64a9":function(t,e,a){},"7e56":function(t,e,a){},"99a3":function(t,e,a){"use strict";var n=a("9eb3"),s=a.n(n);s.a},"9eb3":function(t,e,a){},aac7:function(t,e,a){},afa6:function(t,e,a){},b9a5:function(t,e,a){},cb0a:function(t,e,a){"use strict";var n=a("19d9"),s=a.n(n);s.a},ccad:function(t,e,a){},fcc2:function(t,e,a){t.exports=a.p+"img/Logo-Triangles.4677522b.png"}});
//# sourceMappingURL=app.f65be037.js.map