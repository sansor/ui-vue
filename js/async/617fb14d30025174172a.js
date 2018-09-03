(window.webpackJsonpBalmUI=window.webpackJsonpBalmUI||[]).push([[34],{"Kw/F":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{class:[e.$tt("body1"),"demo--pagination"]},[t("section",{staticClass:"hero component"},[t("ui-pagination",{attrs:{recordCount:e.recordCount},model:{value:e.page,callback:function(a){e.page=a},expression:"page"}})],1),e._v(" "),t("div",{class:e.$tt("body2")},[t("h4",{class:e.$tt("headline4")},[e._v("0. Usage")]),e._v(" "),t("ui-markdown",{attrs:{text:e.code[0]}}),e._v(" "),t("h4",{class:e.$tt("headline4")},[e._v("1. Example")]),e._v(" "),t("section",{staticClass:"example"},[t("h6",{class:e.$tt("headline6")},[e._v("1.1 Default Usage")]),e._v(" "),t("ui-pagination",{attrs:{pageSize:e.pageSize,recordCount:e.recordCount,showJumper:""},model:{value:e.page1,callback:function(a){e.page1=a},expression:"page1"}})],1),e._v(" "),t("ui-accordion",[t("ui-markdown",{attrs:{code:e.code[1]}})],1),e._v(" "),t("section",{staticClass:"example"},[t("h6",{class:e.$tt("headline6")},[e._v("1.2 Custom Record")]),e._v(" "),t("ui-pagination",{attrs:{pageSize:e.pageSize,recordCount:e.recordCount,showRecord:"",showJumper:"",jumperBefore:"Goto",jumperAfter:"page",jumperButton:"Go"},scopedSlots:e._u([{key:"default",fn:function(a){var o=a.pageCount;return[e._v("\n          Showing "+e._s(e.recordCount)+" records,\n          "),t("ui-select",{attrs:{options:e.pageSizeOptions},model:{value:e.pageSize,callback:function(a){e.pageSize=a},expression:"pageSize"}}),e._v("\n          records / page, "+e._s(o)+" total pages\n        ")]}}]),model:{value:e.page2,callback:function(a){e.page2=a},expression:"page2"}})],1),e._v(" "),t("ui-accordion",[t("ui-markdown",{attrs:{code:e.code[2]}})],1),e._v(" "),t("section",{staticClass:"example"},[t("h6",{class:e.$tt("headline6")},[e._v("1.3 Mini Mode")]),e._v(" "),t("ui-pagination",{attrs:{mini:"",pageSize:e.pageSize,recordCount:e.recordCount,prev:"Prev",next:"Next"},model:{value:e.page3,callback:function(a){e.page3=a},expression:"page3"}},[t("span",[e._v("Page "+e._s(e.page3))])])],1),e._v(" "),t("ui-accordion",[t("ui-markdown",{attrs:{code:e.code[3]}})],1),e._v(" "),t("h4",{class:e.$tt("headline4")},[e._v("2. APIs")]),e._v(" "),t("ui-apidocs",{attrs:{name:"pagination"}})],1)])};o._withStripped=!0;var n={metaInfo:{titleTemplate:"%s - Pagination"},mixins:[t("HRpM").a],data:function(){return{page:1,page1:1,page2:1,page3:1,pageSize:5,recordCount:100,pageSizeOptions:[{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:20,value:20}]}},created:function(){this.showCode("pagination",3)}},i=t("KHd+"),s=Object(i.a)(n,o,[],!1,null,null,null);s.options.__file="docs/scripts/views/components/pagination.vue";a.default=s.exports}}]);