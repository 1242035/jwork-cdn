(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{fumN:function(e,t,i){"use strict";i.r(t);var r=i("L2JU");function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var a={name:"CandidateHopeWork",props:{item:{type:Object,required:!0}},validations:{},computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),r.forEach(function(t){n(e,t,i[t])})}return e}({},Object(r.b)({regimes:function(e){return e.resource.resources.data.regime}}),{arrRegimeList:function(){var e=_.clone(this.regimes),t=[];return _.map(e,function(e){1==e.status&&t.push(e)}),t}}),data:function(){return{arrRegime:[]}},mounted:function(){this.onRegimeChange()},methods:{onRegimeChange:function(){if(this.arrRegime=[],null!=this.item&&null!=this.item.regime){if(_.isArray(this.item.regime))for(var e=this.item.regime,t=0;t<e.length;t++)_.isObject(e[t])&&this.arrRegime.push(e[t].id);_.isString(this.item.regime)&&(this.arrRegime=this.item.regime.split(","))}},getAllRegime:function(){this.$store.dispatch("resource/getAllRegime",{})},getChecked:function(e){return _.findIndex(this.arrRegime,function(t){return t==e.id})>=0},onSave:function(){this.item.regime=this.arrRegime.join(","),this.$emit("onSave",this.item)}}},s=i("KHd+"),c=Object(s.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ab"},[i("div",{staticClass:"head text-center"},[i("img",{staticClass:"img-fluid mb-3",attrs:{src:"/imgs-fix/about5.png"}}),e._v(" "),i("p",[e._v(" "+e._s(e.$t("jwork.hope_of_work")))])]),e._v(" "),i("div",{staticClass:"content px-5 mb-4"},e._l(e.arrRegimeList,function(t,r){return i("label",{key:r,staticClass:"label-checkbox mr-3"},[e._v(e._s(t.name)+"\n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.arrRegime,expression:"arrRegime"}],attrs:{type:"checkbox"},domProps:{checked:e.getChecked(t),value:t.id,checked:Array.isArray(e.arrRegime)?e._i(e.arrRegime,t.id)>-1:e.arrRegime},on:{change:function(i){var r=e.arrRegime,n=i.target,a=!!n.checked;if(Array.isArray(r)){var s=t.id,c=e._i(r,s);n.checked?c<0&&(e.arrRegime=r.concat([s])):c>-1&&(e.arrRegime=r.slice(0,c).concat(r.slice(c+1)))}else e.arrRegime=a}}}),e._v(" "),i("span",{staticClass:"checkmark"}),e._v(" "),i("hr")])}),0),e._v(" "),i("div",{staticClass:"text-center save"},[i("button",{staticClass:"btn btn-view-more",attrs:{role:"button"},on:{click:function(t){return t.preventDefault(),e.onSave(t)}}},[i("i",{staticClass:"fas fa-check mr-2"}),e._v("  "+e._s(e.$t("jwork.Save"))+" \n        ")])])])},[],!1,null,null,null);t.default=c.exports}}]);