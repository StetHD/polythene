define(["polythene/polythene/polythene","mithril","polythene/ripple/ripple","polythene/shadow/shadow","css!./button"],function(n,e,o,t){var i,a;return i=function(n,o,t){var i,a,l;i=5,a=o.baseZ(),l=t.increase||1,n.addEventListener("mousedown",function(){if(5!=a){var n=o.z();n+=l,n=Math.min(n,i),o.z(n),e.redraw()}}),n.addEventListener("mouseup",function(){if(5!=a){var n=o.z();n-=l,n=Math.max(n,a),o.z(n),e.redraw()}})},a=function(n){n.removeEventListener("mousedown"),n.removeEventListener("mouseup")},{controller:function(n){return{baseZ:e.prop(n.z||1),z:e.prop(n.z||1)}},view:function(l,s){var r,d,u,p,c,h;return s=s||{},s.ripple=s.ripple||{},s.shadow=s.shadow||{},r=s.tag||(s.url?"a":"div"),c=void 0!==s.ink&&!s.ink,s.disabled&&(r+="[disabled]"),c&&(r+="[noink]"),s.raised&&(r+="[raised]"),p=null,s.disabled||(p=n.assign({config:function(n,e,o){e||(i(n,l,s.shadow),o.onunload=function(){a(n)})}},s.url?s.url:null)),d=n.componentProps({classList:[s.parentClass||"button"],props:p},s,this,l),h=null,s.label&&(h=e("span",s.label)),s.content&&(h=s.content),u=[e("div",{"class":"button-content"},[h,s.disabled||c?null:e.component(o,s.ripple),s.disabled||void 0!==s.wash&&!s.wash?null:e(".wash[fit]"),s.raised&&!s.disabled?e.component(t,{z:l.z(),animated:!0}):null])],e(r,d,n.embellish(u,s))}}});