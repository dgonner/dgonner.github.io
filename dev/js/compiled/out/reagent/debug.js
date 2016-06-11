// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__19961__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19962__i = 0, G__19962__a = new Array(arguments.length -  0);
while (G__19962__i < G__19962__a.length) {G__19962__a[G__19962__i] = arguments[G__19962__i + 0]; ++G__19962__i;}
  args = new cljs.core.IndexedSeq(G__19962__a,0);
} 
return G__19961__delegate.call(this,args);};
G__19961.cljs$lang$maxFixedArity = 0;
G__19961.cljs$lang$applyTo = (function (arglist__19963){
var args = cljs.core.seq(arglist__19963);
return G__19961__delegate(args);
});
G__19961.cljs$core$IFn$_invoke$arity$variadic = G__19961__delegate;
return G__19961;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19964__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19965__i = 0, G__19965__a = new Array(arguments.length -  0);
while (G__19965__i < G__19965__a.length) {G__19965__a[G__19965__i] = arguments[G__19965__i + 0]; ++G__19965__i;}
  args = new cljs.core.IndexedSeq(G__19965__a,0);
} 
return G__19964__delegate.call(this,args);};
G__19964.cljs$lang$maxFixedArity = 0;
G__19964.cljs$lang$applyTo = (function (arglist__19966){
var args = cljs.core.seq(arglist__19966);
return G__19964__delegate(args);
});
G__19964.cljs$core$IFn$_invoke$arity$variadic = G__19964__delegate;
return G__19964;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1465677980736