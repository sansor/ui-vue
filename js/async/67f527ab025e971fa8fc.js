(window.webpackJsonpBalmUI=window.webpackJsonpBalmUI||[]).push([[21],{hUvs:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ui-drawer-content",[t("ui-list-nav",[e._t("default"),e._v(" "),e._l(e.menu,function(n,a){return["-"===n?t("ui-list-divider",{key:"divider-"+a}):[n.subheader?t("ui-list-group-subheader",{key:"subheader-"+a},[e._v("\n          "+e._s(n.subheader)+"\n        ")]):e._e(),e._v(" "),e._l(n.items,function(n,o){return t("ui-item-link",{key:"item-"+a+"-"+o,attrs:{firstIcon:n.icon}},[e._v("\n          "+e._s(n.name)+"\n        ")])})]]})],2)],1)};a._withStripped=!0;var o={data:function(){return{menu:[{items:[{icon:"inbox",name:"Inbox"},{icon:"star",name:"Star"},{icon:"send",name:"Sent Mail"},{icon:"drafts",name:"Drafts"}]},"-",{subheader:"Labels",items:[{icon:"email",name:"All Mail"},{icon:"delete",name:"Trash"},{icon:"report",name:"Spam"}]},"-",{items:[{icon:"settings",name:"Settings"},{icon:"announcement",name:"Help & feedback"}]}]}}},i=t("KHd+"),r=Object(i.a)(o,a,[],!1,null,null,null);r.options.__file="docs/scripts/views/drawer/drawer-common-conntent.vue";n.a=r.exports},qkjs:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"demo--drawer demo--permanent-drawer-below-toolbar"},[t("ui-top-app-bar",{attrs:{contentSelector:".demo-main"}},[t("template",{slot:"nav-icon"},[t("ui-toolbar-anchor",{attrs:{type:"menu"},nativeOn:{click:function(n){e.$router.back()}}},[e._v("\ue5c4")])],1),e._v("\n    Permanent Drawer Below Toolbar\n  ")],2),e._v(" "),t("main",{staticClass:"demo-main"},[t("ui-permanent-drawer",[t("ui-drawer-header",[t("ui-drawer-title",[e._v(e._s(e.title))]),e._v(" "),t("ui-drawer-subtitle",[e._v(e._s(e.subtitle))])],1),e._v(" "),t("ui-drawer-common-conntent")],1),e._v(" "),t("div",{class:[e.$tt("body1"),"demo-content"]},[t("div",{class:e.$tt("body2")},[t("h1",{class:e.$tt("headline4")},[e._v("Permanent Drawer")]),e._v(" "),t("p",[e._v("It sits to the left of this content.")]),e._v(" "),t("ui-accordion",[t("ui-markdown",{attrs:{code:e.code[2]}})],1)],1)])],1)],1)};a._withStripped=!0;var o=t("hUvs"),i=t("w4FC"),r=t("HRpM"),s={metaInfo:{titleTemplate:"%s - Permanent Drawer Below Toolbar"},components:{UiDrawerCommonConntent:o.a},mixins:[i.a,r.a],created:function(){this.showCode("drawer",4)}},l=t("KHd+"),c=Object(l.a)(s,a,[],!1,null,null,null);c.options.__file="docs/scripts/views/drawer/permanent-drawer-below-toolbar.vue";n.default=c.exports},w4FC:function(e,n,t){"use strict";n.a={data:function(){return{title:"Mail",subtitle:"ui@balmjs.com",open:!1}},methods:{openMenu:function(){this.open=!0},onOpen:function(e){console.log("open",e)},onClose:function(e){this.open=!1,console.log("close",e)}}}}}]);