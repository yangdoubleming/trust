(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00ada4ba"],{"3c77":function(t,n,e){},"56c6":function(t,n,e){"use strict";var a=e("3c77"),r=e.n(a);r.a},e0a5:function(t,n,e){"use strict";e.d(n,"g",function(){return r}),e.d(n,"f",function(){return c}),e.d(n,"i",function(){return o}),e.d(n,"h",function(){return s}),e.d(n,"a",function(){return u}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return d}),e.d(n,"d",function(){return l});var a=e("b775");function r(t){return Object(a["a"])({url:"/ci/user/isUsernameRegister",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/ci/user/getVerifyCode",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/ci/user/register",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/ci/user/login",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/ci/addCiCompanyAndPlatform",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/ci/editCiCompanyLoan",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/ci/findCiCompanyLoanList",method:"post",data:t})}function l(){return Object(a["a"])({url:"/ci/getCiCompanyAndPlatformByUser",method:"post"})}},f325:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("基本信息")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[e("router-link",{attrs:{to:"/loanRecords"}},[t._v("返回")])],1)],1),e("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[e("el-col",{attrs:{span:8}},[e("div",{},[e("span",{staticClass:"bg-purple"},[t._v("订单号：")])])]),e("el-col",{attrs:{span:8}},[e("div",{},[e("span",{staticClass:"bg-purple"},[t._v("产品购买份数：")])])]),e("el-col",{attrs:{span:8}},[e("div",{},[e("span",{staticClass:"bg-purple"},[t._v("商品价值明细：")])])])],1)],1)],1)},r=[],c=e("e0a5"),o={data:function(){return{loading:!0,details:{}}},computed:{},created:function(){this.fetchData()},methods:{fetchData:function(){Object(c["getCusInsureDetails"])(this.$route.query).then(function(t){}).catch(function(t){})},dateFormat:function(t){if(!t)return""}}},s=o,u=(e("56c6"),e("2877")),i=Object(u["a"])(s,a,r,!1,null,null,null);n["default"]=i.exports}}]);