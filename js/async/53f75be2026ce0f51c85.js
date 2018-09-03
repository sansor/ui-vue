(window.webpackJsonpBalmUI=window.webpackJsonpBalmUI||[]).push([[52],{km5U:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:[e.$tt("body1"),"demo--theme"]},[s("section",{staticClass:"hero plugin"},[s("ui-button",{class:[e.$themeColor("primary-bg")],attrs:{raised:""}},[e._v("Primary")]),e._v(" "),s("ui-button",{class:[e.$themeColor("secondary-bg")],attrs:{raised:""}},[e._v("Secondary")])],1),e._v(" "),s("div",{class:e.$tt("body2")},[s("h4",{class:e.$tt("headline4")},[e._v("0. Usage")]),e._v(" "),s("ui-markdown",{attrs:{text:e.code[0]}}),e._v(" "),s("h4",{class:e.$tt("headline4")},[e._v("1. Example")]),e._v(" "),s("div",{staticClass:"demo-main"},[s("ui-menu-anchor",[s("ui-button",{ref:"colorButton",attrs:{id:"theme-color-action",title:"Change theme colors","data-theme":"baseline"},on:{click:function(t){e.$balmUI.onShow("open")}}},[s("i",{staticClass:"demo-theme-color-radio"},[s("span",{staticClass:"demo-theme-color-radio__inner"})])]),e._v(" "),s("ui-menu",{staticClass:"demo-theme-menu",attrs:{id:"theme-color-menu"},on:{selected:e.onSelected},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},e._l(e.colorItems,function(t,o){return s("ui-menuitem",{key:o,class:{"demo-theme-menu__list-item--selected":e.selectedTheme===t.value},attrs:{"data-theme":t.value}},[s("span",{staticClass:"mdc-list-item__graphic"},[s("i",{staticClass:"demo-theme-color-radio"},[s("span",{staticClass:"demo-theme-color-radio__inner"})])]),e._v("\n            "+e._s(t.label)+"\n          ")])}))],1),e._v(" "),s("h2",{class:e.$tt("headline4")},[e._v("Baseline Colors")]),e._v(" "),s("section",{staticClass:"demo-component-section"},[s("h3",{class:[e.$tt("headline5"),"demo-component-section__heading"]},[e._v("\n          CSS Classes\n        ")]),e._v(" "),s("div",{staticClass:"demo-theme-color-section"},[s("div",{staticClass:"demo-theme-color-section__row"},[s("fieldset",{staticClass:"demo-fieldset--color"},[s("legend",{class:e.$tt("subtitle1")},[e._v("Theme colors as text")]),e._v(" "),s("div",{staticClass:"demo-theme-color-group"},[s("div",{staticClass:"demo-theme-color-swatches"},[s("div",{class:["demo-theme-color-swatch demo-theme-color-swatch--elevated",e.$themeColor("primary")]},[e._v("Primary")])]),e._v(" "),s("div",{staticClass:"demo-theme-color-swatches"},[s("div",{class:["demo-theme-color-swatch demo-theme-color-swatch--elevated",e.$themeColor("secondary")]},[e._v("Secondary")])])])]),e._v(" "),s("fieldset",{staticClass:"demo-fieldset--color"},[s("legend",{class:e.$tt("subtitle1")},[e._v("Theme colors as background")]),e._v(" "),s("div",{staticClass:"demo-theme-color-group"},[s("div",{staticClass:"demo-theme-color-swatches"},[s("div",{class:["demo-theme-color-swatch demo-theme-color-swatch--elevated",e.$themeColor("primary-bg"),e.$themeColor("on-primary")]},[e._v("Primary")])]),e._v(" "),s("div",{staticClass:"demo-theme-color-swatches"},[s("div",{class:["demo-theme-color-swatch demo-theme-color-swatch--elevated",e.$themeColor("secondary-bg"),e.$themeColor("on-secondary")]},[e._v("Secondary")])]),e._v(" "),s("div",{staticClass:"demo-theme-color-swatches"},[s("div",{class:["demo-theme-color-swatch demo-theme-color-swatch--elevated",e.$themeColor("background"),e.$textColor("primary")]},[e._v("Background")])])])])]),e._v(" "),s("ui-accordion",[s("ui-markdown",{attrs:{code:e.code[1]}})],1)],1),e._v(" "),s("div",{staticClass:"demo-theme-color-section"},[s("div",{staticClass:"demo-theme-color-section_row"},[s("fieldset",{staticClass:"demo-fieldset--color"},[s("legend",{class:e.$tt("subtitle1")},[e._v("Text on background")]),e._v(" "),s("div",{staticClass:"demo-theme-color-group"},[s("div",{class:["demo-theme-text-row",e.$themeColor("background")]},[s("span",{class:["demo-theme-text-style",e.$textColor("primary")]},[e._v("Primary")]),e._v(" "),s("span",{class:["demo-theme-text-style",e.$textColor("secondary")]},[e._v("Secondary")]),e._v(" "),s("span",{class:["demo-theme-text-style",e.$textColor("hint")]},[e._v("Hint")]),e._v(" "),s("span",{class:["demo-theme-text-style",e.$textColor("disabled")]},[e._v("Disabled")]),e._v(" "),s("span",{class:["demo-theme-text-style",e.$textColor("icon"),"material-icons"]},[e._v("favorite")])])])])]),e._v(" "),s("ui-accordion",[s("ui-markdown",{attrs:{code:e.code[2]}})],1),e._v(" "),s("div",{staticClass:"demo-theme-color-section__row"},[s("fieldset",{staticClass:"demo-fieldset--color"},[s("legend",{class:e.$tt("subtitle1")},[e._v("Text on primary")]),e._v(" "),s("div",{staticClass:"demo-theme-color-group"},[s("div",{class:["demo-theme-text-row",e.$themeColor("primary-bg")]},[s("span",{class:["demo-theme-text-style",e.$themeColor("on-primary")]},[e._v("Text")]),e._v(" "),s("span",{class:["demo-theme-text-style",e.$themeColor("on-primary"),"material-icons"]},[e._v("favorite")])])])]),e._v(" "),s("fieldset",{staticClass:"demo-fieldset--color"},[s("legend",{class:e.$tt("subtitle1")},[e._v("Text on secondary")]),e._v(" "),s("div",{staticClass:"demo-theme-color-group"},[s("div",{class:["demo-theme-text-row",e.$themeColor("secondary-bg")]},[s("span",{class:["demo-theme-text-style",e.$themeColor("on-secondary")]},[e._v("Text")]),e._v(" "),s("span",{class:["demo-theme-text-style",e.$themeColor("on-secondary"),"material-icons"]},[e._v("favorite")])])])])]),e._v(" "),s("ui-accordion",[s("ui-markdown",{attrs:{code:e.code[3]}})],1),e._v(" "),s("div",{staticClass:"demo-theme-color-section__row"},[s("fieldset",{staticClass:"demo-fieldset--color"},[s("legend",{class:e.$tt("subtitle1")},[e._v("Text on user-defined light background")]),e._v(" "),s("div",{staticClass:"demo-theme-color-group"},[s("div",{class:["demo-theme-text-row demo-theme-bg--custom-light"]},[s("span",{class:["demo-theme-text-style",e.$textColor("primary","light")]},[e._v("Primary")]),e._v(" "),s("span",{class:["demo-theme-text-style",e.$textColor("secondary","light")]},[e._v("Secondary")]),e._v(" "),s("span",{class:["demo-theme-text-style",e.$textColor("hint","light")]},[e._v("Hint")]),e._v(" "),s("span",{class:["demo-theme-text-style",e.$textColor("disabled","light")]},[e._v("Disabled")]),e._v(" "),s("span",{class:["demo-theme-text-style",e.$textColor("icon","light"),"material-icons"]},[e._v("favorite")])])])]),e._v(" "),s("fieldset",{staticClass:"demo-fieldset--color"},[s("legend",{class:e.$tt("subtitle1")},[e._v("Text on user-defined dark background")]),e._v(" "),s("div",{staticClass:"demo-theme-color-group"},[s("div",{class:["demo-theme-text-row demo-theme-bg--custom-dark"]},[s("span",{class:["demo-theme-text-style",e.$textColor("primary","dark")]},[e._v("Primary")]),e._v(" "),s("span",{class:["demo-theme-text-style",e.$textColor("secondary","dark")]},[e._v("Secondary")]),e._v(" "),s("span",{class:["demo-theme-text-style",e.$textColor("hint","dark")]},[e._v("Hint")]),e._v(" "),s("span",{class:["demo-theme-text-style",e.$textColor("disabled","dark")]},[e._v("Disabled")]),e._v(" "),s("span",{class:["demo-theme-text-style",e.$textColor("icon","dark"),"material-icons"]},[e._v("favorite")])])])])]),e._v(" "),s("ui-accordion",[s("ui-markdown",{attrs:{code:e.code[4]}})],1)],1)])],1),e._v(" "),s("h4",{class:e.$tt("headline4")},[e._v("2. APIs")]),e._v(" "),s("ui-apidocs",{attrs:{name:"theme",type:"plugin"}}),e._v(" "),s("div",{class:["demo--theme-sass",e.$themeColor("background")]},[e._v("\n      $mdc-theme-background: white; (bgColor)\n      "),s("div",{class:["demo--theme-sass-inner",e.$themeColor("surface")]},[e._v("\n        $mdc-theme-surface: white; (bgColor)"),s("br"),e._v("\n        $mdc-theme-on-surface: black; (color)\n        "),s("div",{class:["demo--theme-sass-content",e.$themeColor("on-surface")]},[s("span",{class:[e.$themeColor("primary")]},[e._v("$mdc-theme-primary (color)")]),e._v(" "),s("span",{class:[e.$themeColor("secondary")]},[e._v("$mdc-theme-secondary (color)")]),e._v(" "),s("span",{class:[e.$themeColor("primary-bg"),e.$themeColor("on-primary")]},[e._v("$mdc-theme-on-primary (color)")]),e._v(" "),s("span",{class:[e.$themeColor("secondary-bg"),,e.$themeColor("on-secondary")]},[e._v("$mdc-theme-on-secondary (color)")])])])])],1)])};o._withStripped=!0;var a={metaInfo:{titleTemplate:"%s - Theme"},mixins:[s("HRpM").a],data:function(){return{open:!1,selectedTheme:"baseline",colorItems:[{label:"Baseline (default)",value:"baseline"},{label:"Dark background (custom)",value:"dark"},{label:"Black primary (custom)",value:"black"},{label:"Shrine (custom)",value:"shrine"}]}},created:function(){this.showCode("theme",4)},beforeDestroy:function(){this.reset()},methods:{reset:function(){this.$setTheme("primary","#6200ee"),this.$setTheme("secondary","#018786"),this.$setTheme("background","#fff"),this.$setTheme("on-primary","#fff"),this.$setTheme("on-secondary","#fff"),this.$setTextTheme("primary","background","rgba(0, 0, 0, 0.87)"),this.$setTextTheme("secondary","background","rgba(0, 0, 0, 0.54)"),this.$setTextTheme("hint","background","rgba(0, 0, 0, 0.38)"),this.$setTextTheme("disabled","background","rgba(0, 0, 0, 0.38)"),this.$setTextTheme("icon","background","rgba(0, 0, 0, 0.38)")},onSelected:function(e){var t=this.colorItems[e.index].value;switch(t){case"dark":this.$setTheme("primary","#ffd54f"),this.$setTheme("secondary","#ec407a"),this.$setTheme("on-primary","#000"),this.$setTheme("on-secondary","#fff");break;case"black":this.$setTheme("primary","#212121"),this.$setTheme("secondary","#64dd17"),this.$setTheme("on-primary","#fff"),this.$setTheme("on-secondary","#000");break;case"shrine":this.$setTheme("primary","#fcb8ab"),this.$setTheme("secondary","#feeae6"),this.$setTheme("on-primary","#442b2d"),this.$setTheme("on-secondary","#442b2d");break;default:this.reset()}"baseline"!==t&&("dark"===t?(this.$setTheme("background","#212121"),this.$setTextTheme("primary","background","white"),this.$setTextTheme("secondary","background","rgba(255, 255, 255, 0.7)"),this.$setTextTheme("hint","background","rgba(255, 255, 255, 0.5)"),this.$setTextTheme("disabled","background","rgba(255, 255, 255, 0.5)"),this.$setTextTheme("icon","background","rgba(255, 255, 255, 0.5)")):(this.$setTheme("background","#fff"),this.$setTextTheme("primary","background","rgba(0, 0, 0, 0.87)"),this.$setTextTheme("secondary","background","rgba(0, 0, 0, 0.54)"),this.$setTextTheme("hint","background","rgba(0, 0, 0, 0.38)"),this.$setTextTheme("disabled","background","rgba(0, 0, 0, 0.38)"),this.$setTextTheme("icon","background","rgba(0, 0, 0, 0.38)"))),this.selectedTheme=t,this.$refs.colorButton.$el.dataset.theme=t}}},r=s("KHd+"),l=Object(r.a)(a,o,[],!1,null,null,null);l.options.__file="docs/scripts/views/plugins/theme.vue";t.default=l.exports}}]);