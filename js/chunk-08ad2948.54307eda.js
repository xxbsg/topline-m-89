(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08ad2948"],{"8b92":function(t,e,n){},"97ad":function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-articles"},[n("van-nav-bar",{attrs:{title:"我的收藏/历史/作品","left-arrow":"",fixed:""},on:{"click-left":function(e){return t.$router.replace("/my")}}}),n("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{attrs:{title:"我的收藏"}}),n("van-tab",{attrs:{title:"我的历史"}}),n("van-tab",{attrs:{title:"我的作品"}})],1),n(t.currentTabComponent,{tag:"component"})],1)},a=[],r=(n("c975"),n("b0c0"),n("d3b7"),{name:"UserArticles",components:{UserArticle:function(){return Promise.all([n.e("chunk-64a891c5"),n.e("chunk-3f2eef65")]).then(n.bind(null,"019f"))},CollectArticle:function(){return Promise.all([n.e("chunk-64a891c5"),n.e("chunk-6cea9e5c")]).then(n.bind(null,"a9d1"))},HistoryArticle:function(){return Promise.all([n.e("chunk-64a891c5"),n.e("chunk-2cd76a9c")]).then(n.bind(null,"3ee8"))}},props:{type:{type:String}},data:function(){var t=["collect","history"].indexOf(this.type);return-1===t&&(t=2),{active:t}},computed:{currentTabComponent:function(){return["CollectArticle","HistoryArticle","UserArticle"][this.active]}},watch:{},created:function(){},mounted:function(){},activated:function(){console.log("activated")},deactivated:function(){console.log("deactivated")},methods:{},beforeRouteLeave:function(t,e,n){console.log(t),"article"===t.name?this.$store.commit("addCachePage","UserArticles"):this.$store.commit("removeCachePage","UserArticles"),n()}}),i=r,o=(n("a624"),n("2877")),l=Object(o["a"])(i,c,a,!1,null,"1889f252",null);e["default"]=l.exports},a624:function(t,e,n){"use strict";var c=n("8b92"),a=n.n(c);a.a},b0c0:function(t,e,n){var c=n("83ab"),a=n("9bf2").f,r=Function.prototype,i=r.toString,o=/^\s*function ([^ (]*)/,l="name";!c||l in r||a(r,l,{configurable:!0,get:function(){try{return i.call(this).match(o)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-08ad2948.54307eda.js.map