goog.provide('overtoneinterface.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('fetch.remotes');
overtoneinterface.client.main.$body = jayq.core.$.call(null,"﷐'body");
overtoneinterface.client.main.$piano = jayq.core.$.call(null,"﷐'#piano");
overtoneinterface.client.main.$controls = jayq.core.$.call(null,"﷐'#controls");
overtoneinterface.client.main.$notes = jayq.core.$.call(null,"﷐'#notes");
overtoneinterface.client.main.$wobble = jayq.core.$.call(null,"﷐'#wobble");
var group__2974__auto____3545 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

overtoneinterface.client.main.button = (function button(p__3546){
var map__3547__3548 = p__3546;
var map__3547__3549 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3547__3548))?cljs.core.apply.call(null,cljs.core.hash_map,map__3547__3548):map__3547__3548);
var param__3550 = cljs.core.get.call(null,map__3547__3549,"﷐'param");
var action__3551 = cljs.core.get.call(null,map__3547__3549,"﷐'action");
var label__3552 = cljs.core.get.call(null,map__3547__3549,"﷐'label");

var elem__2975__auto____3553 = crate.core.html.call(null,cljs.core.Vector.fromArray(["﷐'a.button",cljs.core.ObjMap.fromObject(["﷐'href","﷐'data-action","﷐'data-param"],{"﷐'href":"#","﷐'data-action":action__3551,"﷐'data-param":param__3550}),label__3552]));

elem__2975__auto____3553.setAttribute("crateGroup",group__2974__auto____3545);
return elem__2975__auto____3553;
});
overtoneinterface.client.main.button.prototype._crateGroup = group__2974__auto____3545;
overtoneinterface.client.main.piano_notes = (function (){var iter__509__auto____3558 = (function iter__3554(s__3555){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3555__3556 = s__3555;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3555__3556)))
{var note__3557 = cljs.core.first.call(null,s__3555__3556);

return cljs.core.cons.call(null,cljs.core.ObjMap.fromObject(["﷐'label","﷐'action","﷐'param"],{"﷐'label":cljs.core.str.call(null,note__3557),"﷐'action":"play-note","﷐'param":note__3557}),iter__3554.call(null,cljs.core.rest.call(null,s__3555__3556)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____3558.call(null,cljs.core.range.call(null,40,60));
})();
overtoneinterface.client.main.dub_notes = (function (){var iter__509__auto____3563 = (function iter__3559(s__3560){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3560__3561 = s__3560;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3560__3561)))
{var note__3562 = cljs.core.first.call(null,s__3560__3561);

return cljs.core.cons.call(null,cljs.core.ObjMap.fromObject(["﷐'label","﷐'action","﷐'param"],{"﷐'label":cljs.core.str.call(null,note__3562),"﷐'action":"dub-note","﷐'param":note__3562}),iter__3559.call(null,cljs.core.rest.call(null,s__3560__3561)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____3563.call(null,cljs.core.range.call(null,40,80));
})();
overtoneinterface.client.main.dub_wobble = (function (){var iter__509__auto____3568 = (function iter__3564(s__3565){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3565__3566 = s__3565;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3565__3566)))
{var w__3567 = cljs.core.first.call(null,s__3565__3566);

return cljs.core.cons.call(null,cljs.core.ObjMap.fromObject(["﷐'label","﷐'action","﷐'param"],{"﷐'label":cljs.core.str.call(null,"w",w__3567),"﷐'action":"dub-wobble","﷐'param":w__3567}),iter__3564.call(null,cljs.core.rest.call(null,s__3565__3566)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____3568.call(null,cljs.core.range.call(null,0,8));
})();
overtoneinterface.client.main.control_buttons = cljs.core.Vector.fromArray([cljs.core.ObjMap.fromObject(["﷐'label","﷐'action","﷐'param"],{"﷐'label":"start","﷐'action":"start-dub","﷐'param":""}),cljs.core.ObjMap.fromObject(["﷐'label","﷐'action","﷐'param"],{"﷐'label":"stop","﷐'action":"stop-dub","﷐'param":""})]);
overtoneinterface.client.main.populate = (function populate(container,buttons){
var G__3569__3570 = cljs.core.seq.call(null,buttons);

if(cljs.core.truth_(G__3569__3570))
{var b__3571 = cljs.core.first.call(null,G__3569__3570);
var G__3569__3572 = G__3569__3570;

while(true){
jayq.core.append.call(null,container,overtoneinterface.client.main.button.call(null,b__3571));
var temp__3698__auto____3573 = cljs.core.next.call(null,G__3569__3572);

if(cljs.core.truth_(temp__3698__auto____3573))
{var G__3569__3574 = temp__3698__auto____3573;

{
var G__3575 = cljs.core.first.call(null,G__3569__3574);
var G__3576 = G__3569__3574;
b__3571 = G__3575;
G__3569__3572 = G__3576;
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
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$piano,overtoneinterface.client.main.piano_notes);
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$controls,overtoneinterface.client.main.control_buttons);
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$notes,overtoneinterface.client.main.dub_notes);
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$wobble,overtoneinterface.client.main.dub_wobble);
jayq.core.delegate.call(null,overtoneinterface.client.main.$body,overtoneinterface.client.main.button,"﷐'click",(function (e){
e.preventDefault();
var me__3577 = this;

var $me__3578 = jayq.core.$.call(null,me__3577);
var action__3579 = jayq.core.data.call(null,$me__3578,"﷐'action");
var param__3580 = jayq.core.data.call(null,$me__3578,"﷐'param");
var param__3581 = (cljs.core.truth_(cljs.core._EQ_.call(null,param__3580,""))?cljs.core.Vector.fromArray([]):cljs.core.Vector.fromArray([param__3580]));

return fetch.remotes.remote_callback.call(null,action__3579,param__3581);
}));
