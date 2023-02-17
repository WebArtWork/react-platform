"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[181],{4181:(M,l,r)=>{r.r(l),r.d(l,{ProfileModule:()=>i});var f=r(2090),g=r(297),a=r(4780),p=r(9095),t=r(8256),m=r(4367),u=r(6895),h=r(212);function _(o,e){if(1&o&&(t.TgZ(0,"h1",5),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Oqu(n.title)}}function x(o,e){if(1&o&&(t.TgZ(0,"span",6),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Oqu(n.subtitle)}}function w(o,e){if(1&o&&(t.TgZ(0,"p",7),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Oqu(n.text)}}class s{constructor(){this.padding=!1,this.align="center"}}s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["wcard"]],inputs:{padding:"padding",align:"align",image:"image",title:"title",subtitle:"subtitle",text:"text"},ngContentSelectors:["*"],decls:6,vars:6,consts:[[1,"w-card"],["alt","",1,"w-card__img",3,"src"],["class","w-card__title",4,"ngIf"],["class","w-card__subtitle",4,"ngIf"],["class","w-card__text",4,"ngIf"],[1,"w-card__title"],[1,"w-card__subtitle"],[1,"w-card__text"]],template:function(e,n){1&e&&(t.F$t(),t.TgZ(0,"div",0),t._UZ(1,"img",1),t.YNc(2,_,2,1,"h1",2),t.YNc(3,x,2,1,"span",3),t.YNc(4,w,2,1,"p",4),t.Hsn(5),t.qZA()),2&e&&(t.ekj("_pd",n.padding),t.xp6(1),t.s9C("src",n.image,t.LSH),t.xp6(1),t.Q6J("ngIf",n.title),t.xp6(1),t.Q6J("ngIf",n.subtitle),t.xp6(1),t.Q6J("ngIf",n.text))},dependencies:[u.O5],styles:[".w-card[_ngcontent-%COMP%]{background:var(--c-bg-secondary);border-radius:var(--b-radius-card);box-shadow:0 0 6px var(--c-shadow)}.w-card._pd[_ngcontent-%COMP%]{padding:30px}.w-card._align[_ngcontent-%COMP%]{text-align:center}.w-card__title[_ngcontent-%COMP%]{font-size:24px;font-weight:700;margin-bottom:10px}.w-card__subtitle[_ngcontent-%COMP%]{font-size:18px;font-weight:500;margin-bottom:10px}.w-card__text[_ngcontent-%COMP%]{font-size:14px}.w-card__img[_ngcontent-%COMP%]{width:100%}"]});var C=r(5911);function P(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"wform",14,15),t.NdJ("wChange",function(O){t.CHM(n);const T=t.oxw();return t.KtG(T.update(O))}),t.qZA()}if(2&o){const n=t.oxw();t.Q6J("config",n.formProfile)}}class c{constructor(e,n,d){this._form=e,this._core=n,this.us=d,this.buttonTypes=g.q,this.inputTypes=p.o,this.formPassword={title:"Change password",components:[{module:a.xG.INPUT,type:p.o.PASSWORD,placeholder:"Type password",label:"Current",input:"oldPass",focused:!0},{module:a.xG.INPUT,type:p.o.PASSWORD,placeholder:"Type password",label:"New",input:"newPass"},{module:a.xG.BUTTON,type:g.q.PRIMARY,label:"Change"}]},this.formProfile={components:[{set:this.us.user.name,module:a.xG.INPUT,placeholder:"fill your name",label:"Name",input:"name"},{set:this.us.user.data.phone,module:a.xG.INPUT,placeholder:"fill your phone",label:"Phone",input:"phone"},{set:this.us.user.data.bio,module:a.xG.INPUT,type:p.o.TEXTAREA,placeholder:"fill your bio",label:"Biography",input:"bio"}]},this.showForm=!1,this._core.next("us.user",()=>{this.formProfile.components[0].set=this.us.user.name,this.formProfile.components[1].set=this.us.user.data.phone,this.formProfile.components[2].set=this.us.user.data.bio,this.showForm=!0})}update(e){this.us.user.name=e.name,this.us.user.data.phone=e.phone,this.us.user.data.bio=e.bio,this.us.update()}change_password(){this._form.modal(this.formPassword,e=>{this.us.change_password(e.oldPass,e.newPass)})}}c.\u0275fac=function(e){return new(e||c)(t.Y36(a.oL),t.Y36(m.pX),t.Y36(f.KD))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-profile"]],decls:22,vars:5,consts:[[1,"container"],[3,"padding"],[1,"profile__header","w-card__header"],[1,"avatar","_profile"],["width","50","height","50","alt","User Avatar",1,"avatar__img",3,"src"],["for","userAvatarUrl",1,"avatar__upload"],[1,"material-icons","avatar__icon"],[1,"profile__body"],[3,"config","wChange",4,"ngIf"],[1,"profile__footer"],[1,"profile__logout"],[3,"type","click"],[1,"material-icons"],[1,"profile__password"],[3,"config","wChange"],["form",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"wcard",1)(2,"div",2)(3,"div"),t._uU(4,"Profile Settings"),t.qZA(),t.TgZ(5,"div")(6,"div",3),t._UZ(7,"img",4),t.TgZ(8,"label",5)(9,"i",6),t._uU(10,"edit"),t.qZA()()()()(),t.TgZ(11,"div",7),t.YNc(12,P,2,1,"wform",8),t.TgZ(13,"div",9)(14,"div",10)(15,"wbutton",11),t.NdJ("click",function(){return n.us.logout()}),t.TgZ(16,"span",12),t._uU(17,"logout"),t.qZA(),t._uU(18," Logout "),t.qZA()(),t.TgZ(19,"div",13)(20,"wbutton",11),t.NdJ("click",function(){return n.change_password()}),t._uU(21," Change Password "),t.qZA()()()()()()),2&e&&(t.xp6(1),t.Q6J("padding",!0),t.xp6(6),t.Q6J("src",n.us.user.thumb||"assets/default.png",t.LSH),t.xp6(5),t.Q6J("ngIf",n.showForm),t.xp6(3),t.Q6J("type",n.buttonTypes.DANGER),t.xp6(5),t.Q6J("type",n.buttonTypes.LINK))},dependencies:[u.O5,h.r,s,C.U],styles:['[_ngcontent-%COMP%]:root{--c-white: #fff;--c-black: #000;--c-grey: #e7e7e7;--c-grey-dark: #bfbfbf;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: red;--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #adb8c6;--c-warn: #e67e22;--c-error: #e74c3c;--c-error-hover: #d62c1a;--c-success: #14c76e;--c-info: #17a2b8;--container: 1210px;--b-radius: 8px;--b-radius-card: 10px;--b-radius-btn: 10px;--b-radius-img: 50%;--padding: 10px;--fs: 16px;--ff-bold: bold;--ff-base: "Poppins", sans-serif;--letter-spacing: .3px;--transition: .3s all ease-in-out}html.dark[_ngcontent-%COMP%]:root{--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #7a7a7a}[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   wcard[_ngcontent-%COMP%]{width:100%;padding:20px 260px 0 20px;transition:all .3s;display:block}@media screen and (max-width: 767px){[_nghost-%COMP%]   wcard[_ngcontent-%COMP%]{padding:20px}}.showTable   [_nghost-%COMP%]   wcard[_ngcontent-%COMP%]{padding:20px!important}.container[_ngcontent-%COMP%]{padding:unset}.profile__header[_ngcontent-%COMP%]{letter-spacing:0;line-height:23px;font-weight:500;font-size:20px;color:var(--c-text-primary);display:flex;justify-content:space-between;align-items:center;border-radius:var(--b-radius)}.profile__footer[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}@media (max-width: 767.9px){.profile__footer[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.profile__footer[_ngcontent-%COMP%]   .profile__logout[_ngcontent-%COMP%]{order:2;margin-top:20px}}.profile__logout[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin:0;display:flex;justify-content:space-between;align-items:center}.profile__logout[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{margin-right:10px}.avatar[_ngcontent-%COMP%]{border-radius:var(--b-radius-img);border:1px solid var(--c-border);position:relative;margin:0 auto;padding:3px}.avatar._profile[_ngcontent-%COMP%]{width:60px;height:60px}.avatar__img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:var(--b-radius-img)}.avatar__upload[_ngcontent-%COMP%]{cursor:pointer;position:absolute;right:0;bottom:0;width:24px;height:24px;border-radius:var(--b-radius-img);background:var(--c-primary);display:flex;justify-content:center;align-items:center;transition:var(--transition)}.avatar__icon[_ngcontent-%COMP%]{color:var(--c-white);font-size:var(--fs)}']});var y=r(2887);const v=[{path:"",component:c}];class i{}i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[y.Bz.forChild(v),f.IR]})}}]);