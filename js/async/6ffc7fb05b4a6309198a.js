(window.webpackJsonpBalmUI=window.webpackJsonpBalmUI||[]).push([[41],{"V/ix":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{class:[t.$tt("body1"),"demo--file"]},[e("section",{staticClass:"hero component"},[e("ui-file")],1),t._v(" "),e("div",{class:t.$tt("body2")},[e("h4",{class:t.$tt("headline4")},[t._v("0. Usage")]),t._v(" "),e("ui-markdown",{attrs:{text:t.code[0]}}),t._v(" "),e("h4",{class:t.$tt("headline4")},[t._v("1. Example")]),t._v(" "),e("div",{staticClass:"example"},[e("h6",{class:t.$tt("headline6")},[t._v("1.1 Default Usage")]),t._v(" "),e("ui-file",{attrs:{accept:"image/*"},on:{change:function(i){t.$balmUI.onChange("files1",i)}}}),t._v(" "),e("p",[t._v("Files: "+t._s(t.files1))])],1),t._v(" "),e("ui-accordion",[e("ui-markdown",{attrs:{code:t.code[1]}})],1),t._v(" "),e("div",{staticClass:"example"},[e("h6",{class:t.$tt("headline6")},[t._v("1.2 Multiple + Preview")]),t._v(" "),e("ui-file",{attrs:{accept:"image/*",multiple:"",preview:""},on:{change:function(i){t.$balmUI.onChange("files2",i)}}}),t._v(" "),e("transition-group",{staticClass:"preview-list",attrs:{name:"list",tag:"ul"}},t._l(t.files2,function(i,s){return e("li",{key:i.uuid,staticClass:"item"},[e("div",{staticClass:"inner"},[e("span",{staticClass:"preview",style:t.setBg(i)}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(i.name))])])])}))],1),t._v(" "),e("ui-accordion",[e("ui-markdown",{attrs:{code:t.code[2]}})],1),t._v(" "),e("div",{staticClass:"example"},[e("h6",{class:t.$tt("headline6")},[t._v("1.3 Classics Upload")]),t._v(" "),e("transition-group",{staticClass:"preview-list",attrs:{name:"list",tag:"ul"}},[t._l(t.files3,function(i,s){return e("li",{key:i.uuid,staticClass:"item"},[e("div",{staticClass:"inner"},[e("span",{staticClass:"preview",style:t.setBg(i)}),t._v(" "),e("span",{staticClass:"actions"},[i.uploaded?t._e():e("ui-fab",{attrs:{icon:"file_upload",mini:""},on:{click:function(e){t.upload(i)}}}),t._v(" "),e("ui-fab",{attrs:{icon:"delete",mini:""},on:{click:function(i){t.remove(s)}}})],1)])])}),t._v(" "),t.files3.length<t.limit?e("li",{key:"add",staticClass:"item add-btn"},[e("div",{staticClass:"inner"},[e("ui-file",{attrs:{accept:"image/*",multiple:"",preview:""},on:{change:t.onChange}},[e("ui-icon",{staticClass:"add-icon"},[t._v("add")])],1)],1)]):t._e()],2),t._v(" "),e("p",[e("ui-button",{attrs:{raised:""},on:{click:t.uploadAllFiles}},[e("ui-icon",[t._v("file_upload")]),t._v("\n          Upload All\n        ")],1)],1)],1),t._v(" "),e("ui-accordion",[e("ui-markdown",{attrs:{code:t.code[3]}})],1),t._v(" "),e("h4",{class:t.$tt("headline4")},[t._v("2. APIs")]),t._v(" "),e("ui-apidocs",{attrs:{name:"file"}})],1)])};s._withStripped=!0;var a,l=e("o0o1"),n=e.n(l),o=e("yXPU"),c=e.n(o),r={metaInfo:{titleTemplate:"%s - File"},mixins:[e("HRpM").a],data:function(){return{files1:[],files2:[],files3:[],limit:5,postUrl:"https://jsonplaceholder.typicode.com/posts"}},created:function(){this.showCode("file",3)},methods:{setBg:function(t){var i=t.previewSrc;return i?{backgroundImage:"url(".concat(i,")")}:{}},onChange:function(t){var i=this;t.length>this.limit-this.files3.length?this.$toast("Image Limit: ".concat(this.limit)):t.forEach(function(t){t.uploaded=!1,i.files3.push(t)})},upload:(a=c()(n.a.mark(function t(i){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.post(this.postUrl,{file:i.sourceFile});case 3:t.sent,i.uploaded=!0,console.log("".concat(i.name," is uploaded")),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}},t,this,[[0,8]])})),function(t){return a.apply(this,arguments)}),uploadAllFiles:function(){var t=this;this.files3.length?this.files3.forEach(function(i){t.upload(i)}):this.$toast("No files")},remove:function(t){this.files3.splice(t,1)}}},u=e("KHd+"),d=Object(u.a)(r,s,[],!1,null,null,null);d.options.__file="docs/scripts/views/components/file.vue";i.default=d.exports}}]);