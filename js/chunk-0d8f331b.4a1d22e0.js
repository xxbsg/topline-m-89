(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d8f331b"],{"09ed":function(t,n,e){"use strict";var a=e("cd84"),r=e.n(a);r.a},2423:function(t,n,e){"use strict";e.d(n,"g",(function(){return r})),e.d(n,"f",(function(){return i})),e.d(n,"e",(function(){return s})),e.d(n,"a",(function(){return c})),e.d(n,"c",(function(){return o})),e.d(n,"b",(function(){return u})),e.d(n,"d",(function(){return l})),e.d(n,"i",(function(){return d})),e.d(n,"h",(function(){return h})),e.d(n,"j",(function(){return f}));var a=e("b775"),r=function(t,n){return Object(a["a"])({method:"GET",url:"/app/v1_0/users/".concat(t,"/articles"),params:n})},i=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_1/articles",params:t})},s=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/articles/".concat(t)})},c=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/collections",data:{target:t}})},o=function(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})},u=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/likings",data:{target:t}})},l=function(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})},d=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/articles",params:t})},h=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/article/collections",params:t})},f=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/histories",params:t})}},"25f0":function(t,n,e){"use strict";var a=e("6eeb"),r=e("825a"),i=e("d039"),s=e("ad6d"),c="toString",o=RegExp.prototype,u=o[c],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=c;(l||d)&&a(RegExp.prototype,c,(function(){var t=r(this),n=String(t.source),e=t.flags,a=String(void 0===e&&t instanceof RegExp&&!("flags"in o)?s.call(t):e);return"/"+n+"/"+a}),{unsafe:!0})},2909:function(t,n,e){"use strict";function a(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("e260"),e("d3b7"),e("25f0"),e("3ca3"),e("ddb0");function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return a(t)||r(t)||i()}e.d(n,"a",(function(){return s}))},"4df4":function(t,n,e){"use strict";var a=e("f8c2"),r=e("7b0b"),i=e("9bdd"),s=e("e95a"),c=e("50c4"),o=e("8418"),u=e("35a1");t.exports=function(t){var n,e,l,d,h,f=r(t),p="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,b=void 0!==m,g=0,w=u(f);if(b&&(m=a(m,v>2?arguments[2]:void 0,2)),void 0==w||p==Array&&s(w))for(n=c(f.length),e=new p(n);n>g;g++)o(e,g,b?m(f[g],g):f[g]);else for(d=w.call(f),h=d.next,e=new p;!(l=h.call(d)).done;g++)o(e,g,b?i(d,m,[l.value,g],!0):l.value);return e.length=g,e}},5899:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,n,e){var a=e("1d80"),r=e("5899"),i="["+r+"]",s=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),o=function(t){return function(n){var e=String(a(n));return 1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,n,e){var a=e("861d"),r=e("d2bb");t.exports=function(t,n,e){var i,s;return r&&"function"==typeof(i=n.constructor)&&i!==e&&a(s=i.prototype)&&s!==e.prototype&&r(t,s),t}},"7abe":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home-container"},[e("h1",[t._v("hello world")]),e("div",{staticClass:"nav-bar"},[e("div",{staticClass:"logo"}),e("van-button",{staticClass:"search-btn",attrs:{round:"",type:"info",size:"small",icon:"search"},on:{click:function(n){return t.$router.push("/search")}}},[t._v("搜索")])],1),e("van-tabs",{model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},[e("van-icon",{staticClass:"wap-nav",attrs:{slot:"nav-right",name:"wap-nav"},on:{click:function(n){t.isChannelEditShow=!0}},slot:"nav-right"}),t._l(t.userChannels,(function(t){return e("van-tab",{key:t.id,attrs:{title:t.name}},[e("article-list",{attrs:{channel:t}})],1)}))],2),e("van-popup",{style:{height:"100%"},attrs:{position:"bottom",round:"",closeable:"","close-icon-position":"top-left"},model:{value:t.isChannelEditShow,callback:function(n){t.isChannelEditShow=n},expression:"isChannelEditShow"}},[e("channel-edit",{attrs:{"user-channels":t.userChannels,active:t.active},on:{switch:t.onChannelSwitch}})],1)],1)},r=[],i=(e("96cf"),e("1da1")),s=e("b775"),c=function(){return Object(s["a"])({method:"GET",url:"/app/v1_0/user/channels"})},o=function(){return Object(s["a"])({method:"GET",url:"/app/v1_0/channels"})},u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"article-list"},[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(n){t.isLoading=n},expression:"isLoading"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.list,(function(n,a){return e("van-cell",{key:a,attrs:{title:n.title},on:{click:function(e){return t.$router.push("/article/"+n.art_id)}}})})),1)],1)],1)},l=[],d=e("2909"),h=e("2423"),f={name:"ArticleList",components:{},props:{channel:{type:Object,required:!0}},data:function(){return{list:[],loading:!1,finished:!1,timestamp:null,isLoading:!1}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{onLoad:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["f"])({channel_id:this.channel.id,timestamp:this.timestamp||Date.now(),with_top:1});case 2:e=t.sent,a=e.data,r=a.data.results,(n=this.list).push.apply(n,Object(d["a"])(r)),this.loading=!1,r.length?this.timestamp=a.data.pre_timestamp:this.finished=!0;case 8:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onRefresh:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["f"])({channel_id:this.channel.id,timestamp:Date.now(),with_top:1});case 2:e=t.sent,a=e.data,r=a.data.results,(n=this.list).unshift.apply(n,Object(d["a"])(r)),this.isLoading=!1,this.$toast("更新了".concat(r.length,"条数据"));case 8:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}},p=f,v=e("2877"),m=Object(v["a"])(p,u,l,!1,null,"89e04ee2",null),b=m.exports,g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"channel-edit"},[e("van-cell",{staticClass:"channel-header",attrs:{title:"我的频道",border:!1}},[e("van-button",{attrs:{size:"mini",round:"",type:"danger",plain:""},on:{click:function(n){t.isEditShow=!t.isEditShow}}},[t._v(t._s(t.isEditShow?"完成":"编辑"))])],1),e("van-grid",{attrs:{gutter:10,clickable:""}},t._l(t.userChannels,(function(n,a){return e("van-grid-item",{key:n.id,on:{click:function(n){return t.onUserChannelClick(a)}}},[e("span",{staticClass:"text",class:{active:a===t.active},attrs:{slot:"text"},slot:"text"},[t._v(t._s(n.name))]),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isEditShow&&0!==a,expression:"isEditShow && index !== 0"}],attrs:{slot:"icon",name:"close"},slot:"icon"})],1)})),1),e("van-cell",{staticClass:"channel-header",attrs:{title:"推荐频道",border:!1}}),e("van-grid",{attrs:{gutter:10,clickable:""}},t._l(t.remainingChannels,(function(n){return e("van-grid-item",{key:n.id,attrs:{text:n.name},on:{click:function(e){return t.onAdd(n)}}})})),1)],1)},w=[],E=(e("7db0"),e("a434"),e("a9e3"),e("159b"),e("5d2d")),C={name:"ChannelEdit",components:{},props:{userChannels:{type:Array,required:!0},active:{type:Number,required:!0}},data:function(){return{allChannels:[],isEditShow:!1}},computed:{remainingChannels:function(){var t=this,n=[];return this.allChannels.forEach((function(e){t.userChannels.find((function(t){return t.id===e.id}))||n.push(e)})),n}},watch:{userChannels:function(t){Object(E["b"])("user-channels",t)}},created:function(){this.loadAllChannels()},mounted:function(){},methods:{loadAllChannels:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o();case 2:n=t.sent,e=n.data,this.allChannels=e.data.channels;case 5:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onAdd:function(t){this.userChannels.push(t)},onUserChannelClick:function(t){this.isEditShow&&0!==t?this.userChannels.splice(t,1):this.$emit("switch",t)}}},_=C,y=(e("09ed"),Object(v["a"])(_,g,w,!1,null,"6467f287",null)),x=y.exports,k={name:"HomePage",components:{ArticleList:b,ChannelEdit:x},props:{},data:function(){return{active:0,userChannels:[],isChannelEditShow:!1}},computed:{},watch:{},created:function(){this.loadUserChannels()},mounted:function(){},methods:{loadUserChannels:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,n=[],e=Object(E["a"])("user-channels"),!e){t.next=7;break}n=e,t.next=12;break;case 7:return t.next=9,c();case 9:a=t.sent,r=a.data,n=r.data.channels;case 12:this.userChannels=n,t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0),this.$toast("获取频道数据失败");case 19:case"end":return t.stop()}}),t,this,[[0,15]])})));function n(){return t.apply(this,arguments)}return n}(),onChannelSwitch:function(t){this.active=t,this.isChannelEditShow=!1}}},O=k,j=(e("9fd5"),Object(v["a"])(O,a,r,!1,null,"2a44fe1b",null));n["default"]=j.exports},"7db0":function(t,n,e){"use strict";var a=e("23e7"),r=e("b727").find,i=e("44d2"),s="find",c=!0;s in[]&&Array(1)[s]((function(){c=!1})),a({target:"Array",proto:!0,forced:c},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(s)},"9fd5":function(t,n,e){"use strict";var a=e("e2f7"),r=e.n(a);r.a},a630:function(t,n,e){var a=e("23e7"),r=e("4df4"),i=e("1c7e"),s=!i((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:s},{from:r})},a9e3:function(t,n,e){"use strict";var a=e("83ab"),r=e("da84"),i=e("94ca"),s=e("6eeb"),c=e("5135"),o=e("c6b6"),u=e("7156"),l=e("c04e"),d=e("d039"),h=e("7c73"),f=e("241c").f,p=e("06cf").f,v=e("9bf2").f,m=e("58a8").trim,b="Number",g=r[b],w=g.prototype,E=o(h(w))==b,C=function(t){var n,e,a,r,i,s,c,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=m(u),n=u.charCodeAt(0),43===n||45===n){if(e=u.charCodeAt(2),88===e||120===e)return NaN}else if(48===n){switch(u.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+u}for(i=u.slice(2),s=i.length,c=0;c<s;c++)if(o=i.charCodeAt(c),o<48||o>r)return NaN;return parseInt(i,a)}return+u};if(i(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var _,y=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof y&&(E?d((function(){w.valueOf.call(e)})):o(e)!=b)?u(new g(C(n)),e,y):C(n)},x=a?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;x.length>k;k++)c(g,_=x[k])&&!c(y,_)&&v(y,_,p(g,_));y.prototype=w,w.constructor=y,s(r,b,y)}},ad6d:function(t,n,e){"use strict";var a=e("825a");t.exports=function(){var t=a(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},cd84:function(t,n,e){},e2f7:function(t,n,e){}}]);
//# sourceMappingURL=chunk-0d8f331b.4a1d22e0.js.map