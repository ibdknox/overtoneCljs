goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["﷐'xhtml","﷐'svg"],{"﷐'xhtml":"http://www.w3.org/1999/xhtml","﷐'svg":"http://www.w3.org/2000/svg"});
crate.core.elem_id = cljs.core.atom.call(null,0);
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__3013 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__2994__2995 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__2994__2995))
{var G__2997__2999 = cljs.core.first.call(null,G__2994__2995);
var vec__2998__3000 = G__2997__2999;
var k__3001 = cljs.core.nth.call(null,vec__2998__3000,0,null);
var v__3002 = cljs.core.nth.call(null,vec__2998__3000,1,null);
var G__2994__3003 = G__2994__2995;

var G__2997__3004 = G__2997__2999;
var G__2994__3005 = G__2994__3003;

while(true){
var vec__3006__3007 = G__2997__3004;
var k__3008 = cljs.core.nth.call(null,vec__3006__3007,0,null);
var v__3009 = cljs.core.nth.call(null,vec__3006__3007,1,null);
var G__2994__3010 = G__2994__3005;

dom_attr.call(null,elem,k__3008,v__3009);
var temp__3698__auto____3011 = cljs.core.next.call(null,G__2994__3010);

if(cljs.core.truth_(temp__3698__auto____3011))
{var G__2994__3012 = temp__3698__auto____3011;

{
var G__3016 = cljs.core.first.call(null,G__2994__3012);
var G__3017 = G__2994__3012;
G__2997__3004 = G__3016;
G__2994__3005 = G__3017;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
}
} else
{return null;
}
});
var dom_attr__3014 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__3013.call(this,elem,k);
case  3 :
return dom_attr__3014.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__3018__3019 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__3018__3019))
{var c__3020 = cljs.core.first.call(null,G__3018__3019);
var G__3018__3021 = G__3018__3019;

while(true){
var child__3022 = (cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c__3020))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__3020))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__3020))?goog.dom.createTextNode.call(null,c__3020):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__3020))?crate.core.elem_factory.call(null,c__3020):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__3020))?as_content.call(null,parent,c__3020):(cljs.core.truth_(c__3020.nodeName)?c__3020:null))))));

if(cljs.core.truth_(child__3022))
{goog.dom.appendChild.call(null,parent,child__3022);
} else
{}
var temp__3698__auto____3023 = cljs.core.next.call(null,G__3018__3021);

if(cljs.core.truth_(temp__3698__auto____3023))
{var G__3018__3024 = temp__3698__auto____3023;

{
var G__3025 = cljs.core.first.call(null,G__3018__3024);
var G__3026 = G__3018__3024;
c__3020 = G__3025;
G__3018__3021 = G__3026;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.core.normalize_element = (function normalize_element(p__3028){
var vec__3029__3030 = p__3028;
var tag__3031 = cljs.core.nth.call(null,vec__3029__3030,0,null);
var content__3032 = cljs.core.nthnext.call(null,vec__3029__3030,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____3033 = cljs.core.keyword_QMARK_.call(null,tag__3031);

if(cljs.core.truth_(or__3548__auto____3033))
{return or__3548__auto____3033;
} else
{var or__3548__auto____3034 = cljs.core.symbol_QMARK_.call(null,tag__3031);

if(cljs.core.truth_(or__3548__auto____3034))
{return or__3548__auto____3034;
} else
{return cljs.core.string_QMARK_.call(null,tag__3031);
}
}
})())))
{throw cljs.core.str.call(null,tag__3031," is not a valid tag name.");
} else
{}
var vec__3035__3037 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__3031));
var ___3038 = cljs.core.nth.call(null,vec__3035__3037,0,null);
var tag__3039 = cljs.core.nth.call(null,vec__3035__3037,1,null);
var id__3040 = cljs.core.nth.call(null,vec__3035__3037,2,null);
var class$__3041 = cljs.core.nth.call(null,vec__3035__3037,3,null);
var vec__3036__3048 = (function (){var vec__3042__3043 = clojure.string.split.call(null,tag__3039,/:/);
var nsp__3044 = cljs.core.nth.call(null,vec__3042__3043,0,null);
var t__3045 = cljs.core.nth.call(null,vec__3042__3043,1,null);
var ns_xmlns__3046 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__3044));

if(cljs.core.truth_(t__3045))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____3047 = ns_xmlns__3046;

if(cljs.core.truth_(or__3548__auto____3047))
{return or__3548__auto____3047;
} else
{return nsp__3044;
}
})(),t__3045]);
} else
{return cljs.core.Vector.fromArray(["﷐'xhtml".call(null,crate.core.xmlns),nsp__3044]);
}
})();
var nsp__3049 = cljs.core.nth.call(null,vec__3036__3048,0,null);
var tag__3050 = cljs.core.nth.call(null,vec__3036__3048,1,null);
var tag_attrs__3052 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__3027_SHARP_){
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.second.call(null,p1__3027_SHARP_)));
}),cljs.core.ObjMap.fromObject(["﷐'id","﷐'class"],{"﷐'id":(function (){var or__3548__auto____3051 = id__3040;

if(cljs.core.truth_(or__3548__auto____3051))
{return or__3548__auto____3051;
} else
{return null;
}
})(),"﷐'class":(cljs.core.truth_(class$__3041)?clojure.string.replace.call(null,class$__3041,/\./," "):null)})));
var map_attrs__3053 = cljs.core.first.call(null,content__3032);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__3053)))
{return cljs.core.Vector.fromArray([nsp__3049,tag__3050,cljs.core.merge.call(null,tag_attrs__3052,map_attrs__3053),cljs.core.next.call(null,content__3032)]);
} else
{return cljs.core.Vector.fromArray([nsp__3049,tag__3050,tag_attrs__3052,content__3032]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__3054 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__3054)))
{crate.core.dom_attr.call(null,elem,attrs__3054);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.core.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
crate.core.elem_factory = (function elem_factory(tag_def){
var vec__3055__3056 = crate.core.normalize_element.call(null,tag_def);
var nsp__3057 = cljs.core.nth.call(null,vec__3055__3056,0,null);
var tag__3058 = cljs.core.nth.call(null,vec__3055__3056,1,null);
var attrs__3059 = cljs.core.nth.call(null,vec__3055__3056,2,null);
var content__3060 = cljs.core.nth.call(null,vec__3055__3056,3,null);
var elem__3061 = crate.core.create_elem.call(null,nsp__3057,tag__3058);

crate.core.dom_attr.call(null,elem__3061,cljs.core.merge.call(null,attrs__3059,cljs.core.ObjMap.fromObject(["﷐'crateId"],{"﷐'crateId":cljs.core.swap_BANG_.call(null,crate.core.elem_id,cljs.core.inc)})));
crate.core.as_content.call(null,elem__3061,content__3060);
return elem__3061;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__3062 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__3062)))
{return res__3062;
} else
{return cljs.core.first.call(null,res__3062);
}
};
var html = function (var_args){
var tags = null;
if (goog.isDef(var_args)) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__3063){
var tags = cljs.core.seq( arglist__3063 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
