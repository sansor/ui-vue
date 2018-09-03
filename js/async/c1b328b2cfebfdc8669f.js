(window.webpackJsonpBalmUI=window.webpackJsonpBalmUI||[]).push([[26],{RjDU:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:[t.$tt("body1"),"demo--fab"]},[i("section",{staticClass:"hero component"},[i("ui-fab",{attrs:{icon:"favorite_border"}})],1),t._v(" "),i("div",{class:t.$tt("body2")},[i("h4",{class:t.$tt("headline4")},[t._v("0. Usage")]),t._v(" "),i("ui-markdown",{attrs:{text:t.code[0]}}),t._v(" "),i("ui-fab",{staticClass:"demo-fixed-fab",attrs:{icon:"mode_edit"}}),t._v(" "),i("h4",{class:t.$tt("headline4")},[t._v("1. Example")]),t._v(" "),i("section",[i("legend",{class:t.$tt("headline6")},[t._v("1.1 FABs with Ripple")]),t._v(" "),i("div",{staticClass:"demo-fabs"},[i("figure",[i("ui-fab",{attrs:{icon:"favorite_border"}}),t._v(" "),t._m(0)],1),t._v(" "),i("figure",[i("ui-fab",{attrs:{icon:"favorite_border",mini:""}}),t._v(" "),t._m(1)],1),t._v(" "),i("figure",[i("ui-fab",{scopedSlots:t._u([{key:"default",fn:function(t){var e=t.iconClass;return[i("svg-logo",{class:e})]}}])}),t._v(" "),t._m(2)],1),t._v(" "),i("figure",[i("ui-fab",{attrs:{mini:""},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.iconClass;return[i("svg-logo",{class:e})]}}])}),t._v(" "),t._m(3)],1),t._v(" "),i("figure",[i("ui-fab",{staticClass:"lightGreen800Fab",attrs:{icon:"favorite_border"}}),t._v(" "),t._m(4)],1),t._v(" "),i("figure",[i("ui-fab",{staticClass:"lightGreen800Fab",attrs:{icon:"favorite_border",mini:""}}),t._v(" "),t._m(5)],1)]),t._v(" "),i("ui-accordion",[i("ui-markdown",{attrs:{code:t.code[1]}})],1)],1),t._v(" "),i("section",[i("legend",{class:t.$tt("headline6")},[t._v("Extended FAB")]),t._v(" "),i("div",{staticClass:"demo-fabs"},[i("figure",{staticClass:"demo-figure-fab-extended"},[i("ui-fab",{staticClass:"demo-fab-extended-fluid",attrs:{icon:"add",extended:"after",label:"Create"}}),t._v(" "),t._m(6)],1)]),t._v(" "),i("div",{staticClass:"demo-fabs"},[i("figure",{staticClass:"demo-figure-fab-extended"},[i("ui-fab",{staticClass:"demo-fab-extended-fluid",attrs:{icon:"add",extended:"before",label:"Create"}}),t._v(" "),t._m(7)],1)]),t._v(" "),i("div",{staticClass:"demo-fabs"},[i("figure",{staticClass:"demo-figure-fab-extended"},[i("ui-fab",{staticClass:"demo-fab-extended-without-icon",attrs:{extended:"",label:"Create"}}),t._v(" "),t._m(8)],1)])]),t._v(" "),i("section",[i("legend",{class:t.$tt("headline6")},[t._v("1.2 CSS Only FABs")]),t._v(" "),i("div",{staticClass:"demo-fabs"},[i("figure",[i("ui-fab",{attrs:{cssOnly:"",icon:"favorite_border"}})],1),t._v(" "),i("figure",[i("ui-fab",{attrs:{cssOnly:"",icon:"favorite_border",mini:""}})],1),t._v(" "),i("figure",[i("ui-fab",{staticClass:"lightGreen800Fab",attrs:{cssOnly:"",icon:"favorite_border"}})],1),t._v(" "),i("figure",[i("ui-fab",{staticClass:"lightGreen800Fab",attrs:{cssOnly:"",icon:"favorite_border",mini:""}})],1)]),t._v(" "),i("ui-accordion",[i("ui-markdown",{attrs:{code:t.code[2]}})],1)],1),t._v(" "),i("section",[i("legend",{class:t.$tt("headline6")},[t._v("1.3 Example of Enter and Exit Motions")]),t._v(" "),i("div",{staticClass:"fab-motion-container"},[t._m(9),t._v(" "),i("div",{staticClass:"fab-motion-container__view",class:{"fab-motion-container__view--exited":!t.exited}},[i("p",[t._v("View two (without FAB)")]),t._v(" "),i("p",[i("button",{attrs:{type:"button",id:"enter-exit-back",disabled:!t.exited},on:{click:function(e){t.$balmUI.onHide("exited")}}},[t._v("Go back")])])]),t._v(" "),i("ui-fab",{staticClass:"demo-absolute-fab",attrs:{id:"enter-exit-add",icon:"add",exited:t.exited},on:{click:function(e){t.$balmUI.onShow("exited")}}},[t._v("add")])],1),t._v(" "),i("ui-accordion",[i("ui-markdown",{attrs:{code:t.code[3]}})],1)],1),t._v(" "),i("section",[i("fieldset",[i("legend",{class:t.$tt("headline6")},[t._v("1.4 Custom FABs (Font awesome)")]),t._v(" "),i("ui-fab",[i("i",{staticClass:"fa fa-flag fa-lg"})]),t._v(" "),i("ui-fab",[i("i",{staticClass:"fa fa-smile-o fa-lg"})]),t._v(" "),i("ui-fab",[i("i",{staticClass:"fa fa-camera-retro fa-lg"})]),t._v(" "),i("ui-fab",[i("i",{staticClass:"fa fa-spinner fa-pulse fa-lg fa-fw"})])],1),t._v(" "),i("ui-accordion",[i("ui-markdown",{attrs:{code:t.code[4]}})],1)],1),t._v(" "),i("h4",{class:t.$tt("headline4")},[t._v("2. APIs")]),t._v(" "),i("ui-apidocs",{attrs:{name:"fab"}})],1)])};a._withStripped=!0;var s={metaInfo:{titleTemplate:"%s - Fab"},mixins:[i("HRpM").a],data:function(){return{exited:!1}},created:function(){this.showCode("fab",4)}},n=i("KHd+"),o=Object(n.a)(s,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("div",[this._v("Themed FAB")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("div",[this._v("Mini FAB")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("div",[this._v("SVG FAB")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("div",[this._v("SVG Mini FAB")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("div",[this._v("Customized Accessible FAB")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("div",[this._v("Customized Accessible Mini FAB")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("div",[this._v("Auto width extended FAB (Responsive)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("div",[this._v("Auto width extended FAB (Text label followed by Icon)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("figcaption",[e("div",[this._v("Extended FAB (without Icon)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fab-motion-container__view"},[e("p",[this._v("View one (with FAB)")])])}],!1,null,null,null);o.options.__file="docs/scripts/views/components/fab.vue";e.default=o.exports}}]);