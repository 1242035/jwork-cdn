(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{vF5n:function(e,t,n){"use strict";n.r(t);var s=n("gR0X"),a={name:"RecruitmentJob",components:{JobSlide:n("+5/T").a},data:function(){return{swiperOption:{slidesPerView:2,spaceBetween:30,loop:!0,navigation:{nextEl:".next-job-3",prevEl:".prev-job-3"}},items:[]}},computed:{},mounted:function(){this.search()},methods:{search:function(){var e=this.parseResponse;s.e.searchJobStatus({pageIndex:1,pageSize:20,status:3},e)},parseResponse:function(e,t){null==e&&null!=t.data&&0==t.data.errorCode&&(this.items=t.data.data)}}},i=n("KHd+"),o=Object(i.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"my-4"},[t("JobSlide",{attrs:{items:this.items,number:2,title:this.$t("jwork.web_decline_job")}})],1)},[],!1,null,null,null);t.default=o.exports}}]);