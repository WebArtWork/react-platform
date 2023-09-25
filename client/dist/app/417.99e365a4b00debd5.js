"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[417],{9417:(Y,m,o)=>{o.r(m),o.d(m,{BirdsModule:()=>C});var u=o(7160),s=o(4946),f=o(5616),d=o(9754);let v=(()=>{var t;class n{new(){return{_id:"",name:"",description:""}}constructor(e,r){this.mongo=e,this.alert=r,this.birds=[],this._birds={},this.birds=e.get("bird",{},(i,a)=>{this._birds=a})}create(e=this.new(),r=(a=>{}),i="bird has been created."){e._id?this.save(e):this.mongo.create("bird",e,a=>{r(a),this.alert.show({text:i})})}doc(e){return this._birds[e]||(this._birds[e]=this.mongo.fetch("bird",{query:{_id:e}})),this._birds[e]}update(e,r=(a=>{}),i="bird has been updated."){this.mongo.afterWhile(e,()=>{this.save(e,r,i)})}save(e,r=(a=>{}),i="bird has been updated."){this.mongo.update("bird",e,()=>{i&&this.alert.show({text:i,unique:e})})}delete(e,r=(a=>{}),i="bird has been deleted."){this.mongo.delete("bird",e,()=>{i&&this.alert.show({text:i})})}}return(t=n).\u0275fac=function(e){return new(e||t)(s.LFG(d.rm),s.LFG(d.c9))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),n})();var b=o(1749),p=o(5660);let B=(()=>{var t;class n{get rows(){return this._bs.birds}constructor(e,r,i,a,w){this._translate=e,this._alert=r,this._bs=i,this._form=a,this._core=w,this.columns=["name","description"],this.form=this._form.getForm("birds",{formId:"birds",title:"Birds",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill birds title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill birds description"},{name:"Label",value:"Description"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(l,h)=>{this._bs.create(l),h()}})},update:l=>{this._form.modal(this.form,[],l).then(h=>{this._core.copy(h,l),this._bs.save(l)})},delete:l=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this cservice?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._bs.delete(l)}}]})}}}}return(t=n).\u0275fac=function(e){return new(e||t)(s.Y36(f.s),s.Y36(d.c9),s.Y36(v),s.Y36(b.o),s.Y36(d.pX))},t.\u0275cmp=s.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Birds",3,"columns","config","rows"]],template:function(e,r){1&e&&s._UZ(0,"wtable",0),2&e&&s.Q6J("columns",r.columns)("config",r.config)("rows",r.rows)},dependencies:[p.a]}),n})();var g=o(7605);const y=[{path:"",component:B}];let C=(()=>{var t;class n{}return(t=n).\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[g.Bz.forChild(y),u.I]}),n})()}}]);