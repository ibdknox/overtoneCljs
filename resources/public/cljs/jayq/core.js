goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,sel)))
{return sel;
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,sel)))
{return cljs.core.str.call(null,"[crateGroup=",jayq.core.crate_meta.call(null,sel),"]");
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("﷐'else"))
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__4624){
var vec__4625__4626 = p__4624;
var context__4627 = cljs.core.nth.call(null,vec__4625__4626,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__4627)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__4627);
}
};
var $ = function (sel,var_args){
var p__4624 = null;
if (goog.isDef(var_args)) {
  p__4624 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__4624);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__4628){
var sel = cljs.core.first(arglist__4628);
var p__4624 = cljs.core.rest(arglist__4628);
return $__delegate.call(this, sel, p__4624);
});
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4630 = null;
var G__4630__4631 = (function (this$,k){
var or__3548__auto____4629 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____4629))
{return or__3548__auto____4629;
} else
{return null;
}
});
var G__4630__4632 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__4630 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__4630__4631.call(this,this$,k);
case  3 :
return G__4630__4632.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4630;
})()
;
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n,not_found){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{if(cljs.core.truth_((void 0 === not_found)))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first = (function (this$){
return this$.slice(0,1);
});
jQuery.prototype.cljs$core$ISeq$_rest = (function (this$){
if(cljs.core.truth_((cljs.core.count.call(null,this$) > 1)))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__4634 = null;
var G__4634__4635 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4634__4636 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4634 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4634__4635.call(this,_,k);
case  3 :
return G__4634__4636.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4634;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.map__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,opts)))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.map__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__4638){
var vec__4639__4640 = p__4638;
var v__4641 = cljs.core.nth.call(null,vec__4639__4640,0,null);

var a__4642 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__4641)))
{return $elem.attr(a__4642);
} else
{return $elem.attr(a__4642,v__4641);
}
};
var attr = function ($elem,a,var_args){
var p__4638 = null;
if (goog.isDef(var_args)) {
  p__4638 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__4638);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__4643){
var $elem = cljs.core.first(arglist__4643);
var a = cljs.core.first(cljs.core.next(arglist__4643));
var p__4638 = cljs.core.rest(cljs.core.next(arglist__4643));
return attr__delegate.call(this, $elem, a, p__4638);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__4644){
var vec__4645__4646 = p__4644;
var v__4647 = cljs.core.nth.call(null,vec__4645__4646,0,null);

var k__4648 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__4647)))
{return $elem.data(k__4648);
} else
{return $elem.data(k__4648,v__4647);
}
};
var data = function ($elem,k,var_args){
var p__4644 = null;
if (goog.isDef(var_args)) {
  p__4644 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__4644);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__4649){
var $elem = cljs.core.first(arglist__4649);
var k = cljs.core.first(cljs.core.next(arglist__4649));
var p__4644 = cljs.core.rest(cljs.core.next(arglist__4649));
return data__delegate.call(this, $elem, k, p__4644);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__4650 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__4650);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__4651 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__4651);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__4652){
var vec__4653__4654 = p__4652;
var speed__4655 = cljs.core.nth.call(null,vec__4653__4654,0,null);
var on_finish__4656 = cljs.core.nth.call(null,vec__4653__4654,1,null);

return $elem.hide(speed__4655,on_finish__4656);
};
var hide = function ($elem,var_args){
var p__4652 = null;
if (goog.isDef(var_args)) {
  p__4652 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__4652);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__4657){
var $elem = cljs.core.first(arglist__4657);
var p__4652 = cljs.core.rest(arglist__4657);
return hide__delegate.call(this, $elem, p__4652);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__4658){
var vec__4659__4660 = p__4658;
var speed__4661 = cljs.core.nth.call(null,vec__4659__4660,0,null);
var on_finish__4662 = cljs.core.nth.call(null,vec__4659__4660,1,null);

return $elem.show(speed__4661,on_finish__4662);
};
var show = function ($elem,var_args){
var p__4658 = null;
if (goog.isDef(var_args)) {
  p__4658 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__4658);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__4663){
var $elem = cljs.core.first(arglist__4663);
var p__4658 = cljs.core.rest(arglist__4663);
return show__delegate.call(this, $elem, p__4658);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__4664){
var vec__4665__4666 = p__4664;
var speed__4667 = cljs.core.nth.call(null,vec__4665__4666,0,null);
var on_finish__4668 = cljs.core.nth.call(null,vec__4665__4666,1,null);

return $elem.fadeOut(speed__4667,on_finish__4668);
};
var fade_out = function ($elem,var_args){
var p__4664 = null;
if (goog.isDef(var_args)) {
  p__4664 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__4664);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__4669){
var $elem = cljs.core.first(arglist__4669);
var p__4664 = cljs.core.rest(arglist__4669);
return fade_out__delegate.call(this, $elem, p__4664);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__4670){
var vec__4671__4672 = p__4670;
var speed__4673 = cljs.core.nth.call(null,vec__4671__4672,0,null);
var on_finish__4674 = cljs.core.nth.call(null,vec__4671__4672,1,null);

return $elem.fadeIn(speed__4673,on_finish__4674);
};
var fade_in = function ($elem,var_args){
var p__4670 = null;
if (goog.isDef(var_args)) {
  p__4670 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__4670);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__4675){
var $elem = cljs.core.first(arglist__4675);
var p__4670 = cljs.core.rest(arglist__4675);
return fade_in__delegate.call(this, $elem, p__4670);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__4676){
var vec__4677__4678 = p__4676;
var speed__4679 = cljs.core.nth.call(null,vec__4677__4678,0,null);
var on_finish__4680 = cljs.core.nth.call(null,vec__4677__4678,1,null);

return $elem.slideUp(speed__4679,on_finish__4680);
};
var slide_up = function ($elem,var_args){
var p__4676 = null;
if (goog.isDef(var_args)) {
  p__4676 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__4676);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__4681){
var $elem = cljs.core.first(arglist__4681);
var p__4676 = cljs.core.rest(arglist__4681);
return slide_up__delegate.call(this, $elem, p__4676);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__4682){
var vec__4683__4684 = p__4682;
var speed__4685 = cljs.core.nth.call(null,vec__4683__4684,0,null);
var on_finish__4686 = cljs.core.nth.call(null,vec__4683__4684,1,null);

return $elem.slideDown(speed__4685,on_finish__4686);
};
var slide_down = function ($elem,var_args){
var p__4682 = null;
if (goog.isDef(var_args)) {
  p__4682 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__4682);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__4687){
var $elem = cljs.core.first(arglist__4687);
var p__4682 = cljs.core.rest(arglist__4687);
return slide_down__delegate.call(this, $elem, p__4682);
});
return slide_down;
})()
;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__4688){
var vec__4689__4690 = p__4688;
var v__4691 = cljs.core.nth.call(null,vec__4689__4690,0,null);

if(cljs.core.truth_(v__4691))
{return $elem.val(v__4691);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__4688 = null;
if (goog.isDef(var_args)) {
  p__4688 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__4688);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__4692){
var $elem = cljs.core.first(arglist__4692);
var p__4688 = cljs.core.rest(arglist__4692);
return val__delegate.call(this, $elem, p__4688);
});
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.xhr = (function xhr(p__4693,content,callback){
var vec__4694__4695 = p__4693;
var method__4696 = cljs.core.nth.call(null,vec__4694__4695,0,null);
var uri__4697 = cljs.core.nth.call(null,vec__4694__4695,1,null);

var params__4698 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["﷐'type","﷐'data","﷐'success"],{"﷐'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__4696)),"﷐'data":jayq.util.map__GT_js.call(null,content),"﷐'success":callback}));

return jQuery.ajax(uri__4697,params__4698);
});
