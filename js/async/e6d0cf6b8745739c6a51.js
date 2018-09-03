(window.webpackJsonpBalmUI=window.webpackJsonpBalmUI||[]).push([[18],{iJd5:function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"demo--top-app-bar",attrs:{dir:t.controls.rtl?"rtl":null}},[e("ui-top-app-bar",{attrs:{contentSelector:"#content-main",navId:"demo-menu",actionItems:t.controls.noAction?[]:t.items,dense:t.controls.dense,fixed:t.controls.fixed,prominent:t.controls.prominent,short:t.controls.short,alwaysClosed:t.controls.alwaysCollapsed}},[t._v("\n    Hello BalmUI\n  ")]),t._v(" "),e("ui-modal-drawer",{attrs:{menuSelector:"#demo-menu"},model:{value:t.open,callback:function(o){t.open=o},expression:"open"}},[e("ui-drawer-header",{attrs:{innerClass:[t.$themeColor("on-primary"),t.$themeColor("primary-bg")]}},[e("ui-drawer-title",[t._v("Header here")])],1),t._v(" "),e("ui-drawer-content",[e("ui-list-nav",[e("ui-item-link",{attrs:{firstIcon:"arrow_back"},nativeOn:{click:function(o){t.$router.back()}}},[t._v("\n          Back\n        ")]),t._v(" "),e("ui-list-divider")],1)],1)],1),t._v(" "),e("ui-drawer-scrim"),t._v(" "),e("main",{staticClass:"demo-main"},[e("div",{class:t.$tt("body1"),attrs:{id:"content-main"}},[e("section",{staticClass:"hero component"},[e("h2",{class:t.$tt("headline4")},[t._v("Top App Bar")])]),t._v(" "),e("div",{class:t.$tt("body2")},[e("h4",{class:t.$tt("headline4")},[t._v("0. Usage")]),t._v(" "),e("ui-markdown",{attrs:{text:t.code[0]}}),t._v(" "),e("h4",{class:t.$tt("headline4")},[t._v("1. Example")]),t._v(" "),t._l(12,function(o){return e("p",{key:o,staticClass:"demo-paragraph"},[t._v("\n          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.\n        ")])}),t._v(" "),e("ui-accordion",[e("ui-markdown",{attrs:{text:t.code[1]}})],1),t._v(" "),e("h4",{class:t.$tt("headline4")},[t._v("2. APIs")]),t._v(" "),e("ui-apidocs",{attrs:{name:"top-app-bar"}})],2)])]),t._v(" "),e("div",{directives:[{name:"shadow",rawName:"v-shadow.transition",value:t.showControls?4:[4,12],expression:"showControls ? 4 : [4, 12]",modifiers:{transition:!0}}],class:["demo-controls-container",{show:t.showControls}],attrs:{dir:"ltr"}},[t.showControls?[e("h3",{class:t.$tt("headline6")},[e("span",[t._v("Demo Controls")]),t._v(" "),e("ui-icon",{attrs:{title:"Hide Controls"},on:{click:function(o){t.$balmUI.onHide("showControls")}}},[t._v("close")])],1),t._v(" "),e("div",{staticClass:"demo-row"},[e("div",{staticClass:"demo-col"},[e("span",{class:[t.$tt("subtitle1"),"demo-options-heading"]},[t._v("Common Options")]),t._v(" "),e("div",[e("ui-checkbox",{attrs:{id:"rtl-checkbox"},model:{value:t.controls.rtl,callback:function(o){t.$set(t.controls,"rtl",o)},expression:"controls.rtl"}},[t._v("\n              RTL\n            ")])],1),t._v(" "),e("div",[e("ui-checkbox",{attrs:{id:"no-action-item-checkbox"},model:{value:t.controls.noAction,callback:function(o){t.$set(t.controls,"noAction",o)},expression:"controls.noAction"}},[t._v("\n              No Action Item\n            ")])],1)]),t._v(" "),e("div",{staticClass:"demo-col"},[e("span",{class:[t.$tt("subtitle1"),"demo-options-heading"]},[t._v("Top App Bar Specific Options")]),t._v(" "),e("div",[e("ui-checkbox",{attrs:{id:"dense-checkbox"},model:{value:t.controls.dense,callback:function(o){t.$set(t.controls,"dense",o)},expression:"controls.dense"}},[t._v("\n              Dense\n            ")])],1),t._v(" "),e("div",[e("ui-checkbox",{attrs:{id:"fixed-checkbox"},model:{value:t.controls.fixed,callback:function(o){t.$set(t.controls,"fixed",o)},expression:"controls.fixed"}},[t._v("\n              Fixed\n            ")])],1),t._v(" "),e("div",[e("ui-checkbox",{attrs:{id:"prominent-checkbox"},model:{value:t.controls.prominent,callback:function(o){t.$set(t.controls,"prominent",o)},expression:"controls.prominent"}},[t._v("\n              Prominent\n            ")])],1)]),t._v(" "),e("div",{staticClass:"demo-col"},[e("span",{class:[t.$tt("subtitle1"),"demo-options-heading"]},[t._v("Short Top App Bar Specific Options")]),t._v(" "),e("div",[e("ui-checkbox",{attrs:{id:"short-checkbox",disabled:t.controls.dense||t.controls.fixed||t.controls.prominent},model:{value:t.controls.short,callback:function(o){t.$set(t.controls,"short",o)},expression:"controls.short"}},[t._v("\n              Short\n            ")])],1),t._v(" "),e("div",[e("ui-checkbox",{attrs:{id:"always-collapsed-checkbox",disabled:!t.controls.short},model:{value:t.controls.alwaysCollapsed,callback:function(o){t.$set(t.controls,"alwaysCollapsed",o)},expression:"controls.alwaysCollapsed"}},[t._v("\n              Always Collapsed (Short Only)\n            ")])],1)])])]:e("ui-icon",{attrs:{title:"Show Controls"},on:{click:function(o){t.$balmUI.onShow("showControls")}}},[t._v("add")])],2)],1)};s._withStripped=!0;var n=e("HRpM"),i=e("w4FC"),a={metaInfo:{titleTemplate:"%s - Top App Bar"},mixins:[n.a,i.a],data:function(){return{open:!1,items:[{icon:"file_download",label:"Download"}],controls:{rtl:!1,noAction:!1,dense:!1,fixed:!1,prominent:!1,short:!1,alwaysCollapsed:!1},showControls:!1}},created:function(){this.showCode("top-app-bar")}},l=e("KHd+"),r=Object(l.a)(a,s,[],!1,null,null,null);r.options.__file="docs/scripts/views/toolbar/top-app-bar.vue";o.default=r.exports},w4FC:function(t,o,e){"use strict";o.a={data:function(){return{title:"Mail",subtitle:"ui@balmjs.com",open:!1}},methods:{openMenu:function(){this.open=!0},onOpen:function(t){console.log("open",t)},onClose:function(t){this.open=!1,console.log("close",t)}}}}}]);