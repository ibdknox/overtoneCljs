goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____3132 = reader;

if(cljs.core.truth_(and__3546__auto____3132))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____3132;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____3133 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____3133))
{return or__3548__auto____3133;
} else
{var or__3548__auto____3134 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____3134))
{return or__3548__auto____3134;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____3135 = reader;

if(cljs.core.truth_(and__3546__auto____3135))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____3135;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____3136 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____3136))
{return or__3548__auto____3136;
} else
{var or__3548__auto____3137 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____3137))
{return or__3548__auto____3137;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__3138 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__3138.buffer_atom))))
{var idx__3139 = cljs.core.deref.call(null,this__3138.index_atom);

cljs.core.swap_BANG_.call(null,this__3138.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__3138.s,idx__3139);
} else
{var buf__3140 = cljs.core.deref.call(null,this__3138.buffer_atom);

cljs.core.swap_BANG_.call(null,this__3138.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__3140);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__3141 = this;
return cljs.core.swap_BANG_.call(null,this__3141.buffer_atom,(function (p1__3131_SHARP_){
return cljs.core.cons.call(null,ch,p1__3131_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____3142 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____3142))
{return or__3548__auto____3142;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____3143 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____3143))
{return or__3548__auto____3143;
} else
{var and__3546__auto____3145 = (function (){var or__3548__auto____3144 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____3144))
{return or__3548__auto____3144;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____3145))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__3146 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__3146);
return next_ch__3146;
})());
} else
{return and__3546__auto____3145;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__3147){
var rdr = cljs.core.first(arglist__3147);
var msg = cljs.core.rest(arglist__3147);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____3148 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____3148))
{var and__3546__auto____3149 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____3149))
{var and__3546__auto____3150 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____3150))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____3150;
}
} else
{return and__3546__auto____3149;
}
} else
{return and__3546__auto____3148;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__3151 = (new goog.string.StringBuffer(initch));
var ch__3152 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3153 = cljs.core.nil_QMARK_.call(null,ch__3152);

if(cljs.core.truth_(or__3548__auto____3153))
{return or__3548__auto____3153;
} else
{var or__3548__auto____3154 = cljs.reader.whitespace_QMARK_.call(null,ch__3152);

if(cljs.core.truth_(or__3548__auto____3154))
{return or__3548__auto____3154;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__3152);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__3152);
return sb__3151.toString();
} else
{{
var G__3155 = (function (){sb__3151.append(ch__3152);
return sb__3151;
})();
var G__3156 = cljs.reader.read_char.call(null,rdr);
sb__3151 = G__3155;
ch__3152 = G__3156;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__3157 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____3158 = cljs.core._EQ_.call(null,ch__3157,"n");

if(cljs.core.truth_(or__3548__auto____3158))
{return or__3548__auto____3158;
} else
{var or__3548__auto____3159 = cljs.core._EQ_.call(null,ch__3157,"r");

if(cljs.core.truth_(or__3548__auto____3159))
{return or__3548__auto____3159;
} else
{return cljs.core.nil_QMARK_.call(null,ch__3157);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__3160 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__3161 = cljs.core.nth.call(null,groups__3160,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____3162 = (void 0 === group3__3161);

if(cljs.core.truth_(or__3548__auto____3162))
{return or__3548__auto____3162;
} else
{return (group3__3161.length < 1);
}
})())))
{return 0;
} else
{var negate__3164 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__3160,1)))?-1:1);
var vec__3163__3165 = (cljs.core.truth_(cljs.core.nth.call(null,groups__3160,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3160,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3160,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3160,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3160,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3160,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__3160,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__3160,7),parseInt.call(null,cljs.core.nth.call(null,groups__3160,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__3166 = cljs.core.nth.call(null,vec__3163__3165,0,null);
var radix__3167 = cljs.core.nth.call(null,vec__3163__3165,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__3166)))
{return null;
} else
{return (negate__3164 * parseInt.call(null,n__3166,radix__3167));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__3168 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__3169 = cljs.core.nth.call(null,groups__3168,1);
var denominator__3170 = cljs.core.nth.call(null,groups__3168,2);

return (parseInt.call(null,numinator__3169) / parseInt.call(null,denominator__3170));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__3171 = cljs.reader.read_char.call(null,reader);
var mapresult__3172 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__3171);

if(cljs.core.truth_(mapresult__3172))
{return mapresult__3172;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3173 = cljs.core._EQ_.call(null,"u",ch__3171);

if(cljs.core.truth_(or__3548__auto____3173))
{return or__3548__auto____3173;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__3171);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__3171);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__3171);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__3174 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__3174)))
{{
var G__3175 = cljs.reader.read_char.call(null,rdr);
ch__3174 = G__3175;
continue;
}
} else
{return ch__3174;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__3176 = cljs.core.Vector.fromArray([]);

while(true){
var ch__3177 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__3177))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__3177)))
{return a__3176;
} else
{var temp__3695__auto____3178 = cljs.core.get.call(null,cljs.reader.macros,ch__3177);

if(cljs.core.truth_(temp__3695__auto____3178))
{var macrofn__3179 = temp__3695__auto____3178;

var mret__3180 = macrofn__3179.call(null,rdr,ch__3177);

{
var G__3182 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__3180,rdr))?a__3176:cljs.core.conj.call(null,a__3176,mret__3180));
a__3176 = G__3182;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__3177);
var o__3181 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__3183 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__3181,rdr))?a__3176:cljs.core.conj.call(null,a__3176,o__3181));
a__3176 = G__3183;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__3184 = cljs.reader.read_char.call(null,rdr);
var dm__3185 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__3184);

if(cljs.core.truth_(dm__3185))
{return dm__3185.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__3184);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__3186 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__3186))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__3186);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__3187 = (new goog.string.StringBuffer(initch));
var ch__3188 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3189 = cljs.core.nil_QMARK_.call(null,ch__3188);

if(cljs.core.truth_(or__3548__auto____3189))
{return or__3548__auto____3189;
} else
{var or__3548__auto____3190 = cljs.reader.whitespace_QMARK_.call(null,ch__3188);

if(cljs.core.truth_(or__3548__auto____3190))
{return or__3548__auto____3190;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__3188);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__3188);
var s__3191 = buffer__3187.toString();

var or__3548__auto____3192 = cljs.reader.match_number.call(null,s__3191);

if(cljs.core.truth_(or__3548__auto____3192))
{return or__3548__auto____3192;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__3191,"]");
}
} else
{{
var G__3193 = (function (){buffer__3187.append(ch__3188);
return buffer__3187;
})();
var G__3194 = cljs.reader.read_char.call(null,reader);
buffer__3187 = G__3193;
ch__3188 = G__3194;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__3195 = (new goog.string.StringBuffer());
var ch__3196 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__3196)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__3196)))
{{
var G__3197 = (function (){buffer__3195.append(cljs.reader.escape_char.call(null,buffer__3195,reader));
return buffer__3195;
})();
var G__3198 = cljs.reader.read_char.call(null,reader);
buffer__3195 = G__3197;
ch__3196 = G__3198;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__3196)))
{return buffer__3195.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__3199 = (function (){buffer__3195.append(ch__3196);
return buffer__3195;
})();
var G__3200 = cljs.reader.read_char.call(null,reader);
buffer__3195 = G__3199;
ch__3196 = G__3200;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__3201 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__3201,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__3201,0,token__3201.indexOf("/")),cljs.core.subs.call(null,token__3201,(token__3201.indexOf("/") + 1),token__3201.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__3201,cljs.core.symbol.call(null,token__3201));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__3203 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__3202__3204 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__3203);
var token__3205 = cljs.core.nth.call(null,vec__3202__3204,0,null);
var ns__3206 = cljs.core.nth.call(null,vec__3202__3204,1,null);
var name__3207 = cljs.core.nth.call(null,vec__3202__3204,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____3209 = (function (){var and__3546__auto____3208 = cljs.core.not.call(null,(void 0 === ns__3206));

if(cljs.core.truth_(and__3546__auto____3208))
{return (ns__3206.substring((ns__3206.length - 2),ns__3206.length) === ":/");
} else
{return and__3546__auto____3208;
}
})();

if(cljs.core.truth_(or__3548__auto____3209))
{return or__3548__auto____3209;
} else
{var or__3548__auto____3210 = ((name__3207[(name__3207.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____3210))
{return or__3548__auto____3210;
} else
{return cljs.core.not.call(null,(token__3205.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__3205);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__3206.substring(0,ns__3206.indexOf("/")),name__3207);
} else
{return cljs.core.keyword.call(null,token__3205);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("﷐'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__3211 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__3211)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__3212 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__445__auto____3213 = o__3212;

if(cljs.core.truth_((function (){var and__3546__auto____3214 = x__445__auto____3213;

if(cljs.core.truth_(and__3546__auto____3214))
{var and__3546__auto____3215 = x__445__auto____3213.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____3215))
{return cljs.core.not.call(null,x__445__auto____3213.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____3215;
}
} else
{return and__3546__auto____3214;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__445__auto____3213);
}
})()))
{return cljs.core.with_meta.call(null,o__3212,cljs.core.merge.call(null,cljs.core.meta.call(null,o__3212),m__3211));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"﷑'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"﷑'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__3216 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__3216)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__3216)))
{{
var G__3218 = reader;
var G__3219 = eof_is_error;
var G__3220 = sentinel;
var G__3221 = is_recursive;
reader = G__3218;
eof_is_error = G__3219;
sentinel = G__3220;
is_recursive = G__3221;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__3216)))
{{
var G__3222 = cljs.reader.read_comment.call(null,reader,ch__3216);
var G__3223 = eof_is_error;
var G__3224 = sentinel;
var G__3225 = is_recursive;
reader = G__3222;
eof_is_error = G__3223;
sentinel = G__3224;
is_recursive = G__3225;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__3217 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__3216))?cljs.reader.macros.call(null,ch__3216).call(null,reader,ch__3216):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__3216))?cljs.reader.read_number.call(null,reader,ch__3216):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__3216):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__3217,reader)))
{{
var G__3226 = reader;
var G__3227 = eof_is_error;
var G__3228 = sentinel;
var G__3229 = is_recursive;
reader = G__3226;
eof_is_error = G__3227;
sentinel = G__3228;
is_recursive = G__3229;
continue;
}
} else
{return res__3217;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__3230 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__3230,true,null,false);
});
