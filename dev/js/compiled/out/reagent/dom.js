// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__18736__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__18736__auto__)){
return or__18736__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_20394 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_20394){
return (function (){
var _STAR_always_update_STAR_20395 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_20395;
}});})(_STAR_always_update_STAR_20394))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_20394;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args20396 = [];
var len__19806__auto___20399 = arguments.length;
var i__19807__auto___20400 = (0);
while(true){
if((i__19807__auto___20400 < len__19806__auto___20399)){
args20396.push((arguments[i__19807__auto___20400]));

var G__20401 = (i__19807__auto___20400 + (1));
i__19807__auto___20400 = G__20401;
continue;
} else {
}
break;
}

var G__20398 = args20396.length;
switch (G__20398) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20396.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__20407_20411 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__20408_20412 = null;
var count__20409_20413 = (0);
var i__20410_20414 = (0);
while(true){
if((i__20410_20414 < count__20409_20413)){
var v_20415 = cljs.core._nth.call(null,chunk__20408_20412,i__20410_20414);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_20415);

var G__20416 = seq__20407_20411;
var G__20417 = chunk__20408_20412;
var G__20418 = count__20409_20413;
var G__20419 = (i__20410_20414 + (1));
seq__20407_20411 = G__20416;
chunk__20408_20412 = G__20417;
count__20409_20413 = G__20418;
i__20410_20414 = G__20419;
continue;
} else {
var temp__4657__auto___20420 = cljs.core.seq.call(null,seq__20407_20411);
if(temp__4657__auto___20420){
var seq__20407_20421__$1 = temp__4657__auto___20420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20407_20421__$1)){
var c__19547__auto___20422 = cljs.core.chunk_first.call(null,seq__20407_20421__$1);
var G__20423 = cljs.core.chunk_rest.call(null,seq__20407_20421__$1);
var G__20424 = c__19547__auto___20422;
var G__20425 = cljs.core.count.call(null,c__19547__auto___20422);
var G__20426 = (0);
seq__20407_20411 = G__20423;
chunk__20408_20412 = G__20424;
count__20409_20413 = G__20425;
i__20410_20414 = G__20426;
continue;
} else {
var v_20427 = cljs.core.first.call(null,seq__20407_20421__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_20427);

var G__20428 = cljs.core.next.call(null,seq__20407_20421__$1);
var G__20429 = null;
var G__20430 = (0);
var G__20431 = (0);
seq__20407_20411 = G__20428;
chunk__20408_20412 = G__20429;
count__20409_20413 = G__20430;
i__20410_20414 = G__20431;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1465677981799