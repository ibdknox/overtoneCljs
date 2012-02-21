goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
goog.require('fetch.util');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,route)))
{return cljs.core.Vector.fromArray(["GET",route]);
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,route)))
{var vec__3107__3108 = route;
var m__3109 = cljs.core.nth.call(null,vec__3107__3108,0,null);
var u__3110 = cljs.core.nth.call(null,vec__3107__3108,1,null);

return cljs.core.Vector.fromArray([fetch.core.__GT_method.call(null,m__3109),u__3110]);
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.Vector.fromArray(["GET",route]);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__3111 = fetch.util.clj__GT_js.call(null,d);
var query__3112 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__3111)));

return cljs.core.str.call(null,query__3112);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__3113 = req.getResponseText();

return callback.call(null,data__3113);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__3114){
var vec__3115__3116 = p__3114;
var opts__3117 = cljs.core.nth.call(null,vec__3115__3116,0,null);

var req__3119 = (new goog.net.XhrIo());
var vec__3118__3120 = fetch.core.parse_route.call(null,route);
var method__3121 = cljs.core.nth.call(null,vec__3118__3120,0,null);
var uri__3122 = cljs.core.nth.call(null,vec__3118__3120,1,null);
var data__3123 = fetch.core.__GT_data.call(null,content);
var callback__3124 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__3124))
{goog.events.listen.call(null,req__3119,goog.net.EventType.COMPLETE,(function (){
return callback__3124.call(null,req__3119);
}));
} else
{}
return req__3119.send(uri__3122,method__3121,data__3123,(cljs.core.truth_(opts__3117)?fetch.util.clj__GT_js.call(null,opts__3117):null));
};
var xhr = function (route,content,callback,var_args){
var p__3114 = null;
if (goog.isDef(var_args)) {
  p__3114 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__3114);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__3125){
var route = cljs.core.first(arglist__3125);
var content = cljs.core.first(cljs.core.next(arglist__3125));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3125)));
var p__3114 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3125)));
return xhr__delegate.call(this, route, content, callback, p__3114);
});
return xhr;
})()
;
