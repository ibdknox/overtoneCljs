goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__4699 = cljs.core.js_obj.call(null);

var G__4700__4701 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__4700__4701))
{var G__4703__4705 = cljs.core.first.call(null,G__4700__4701);
var vec__4704__4706 = G__4703__4705;
var k__4707 = cljs.core.nth.call(null,vec__4704__4706,0,null);
var v__4708 = cljs.core.nth.call(null,vec__4704__4706,1,null);
var G__4700__4709 = G__4700__4701;

var G__4703__4710 = G__4703__4705;
var G__4700__4711 = G__4700__4709;

while(true){
var vec__4712__4713 = G__4703__4710;
var k__4714 = cljs.core.nth.call(null,vec__4712__4713,0,null);
var v__4715 = cljs.core.nth.call(null,vec__4712__4713,1,null);
var G__4700__4716 = G__4700__4711;

(out__4699[cljs.core.name.call(null,k__4714)] = v__4715);
var temp__3698__auto____4717 = cljs.core.next.call(null,G__4700__4716);

if(cljs.core.truth_(temp__3698__auto____4717))
{var G__4700__4718 = temp__3698__auto____4717;

{
var G__4719 = cljs.core.first.call(null,G__4700__4718);
var G__4720 = G__4700__4718;
G__4703__4710 = G__4719;
G__4700__4711 = G__4720;
continue;
}
} else
{}
break;
}
} else
{}
return out__4699;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__4721 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__4721);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__4722){
var v = cljs.core.first(arglist__4722);
var text = cljs.core.rest(arglist__4722);
return log__delegate.call(this, v, text);
});
return log;
})()
;
