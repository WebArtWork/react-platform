"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[468],{6468:(C,l,r)=>{r.r(l),r.d(l,{ProfileModule:()=>x});var d=r(5198),e=r(4946),f=r(7839),p=r(9754),u=r(3934),g=r(2515),m=r(6814),h=r(2812),v=r(8610),P=r(8383);function _(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"wform",16),e.NdJ("wChange",function(n){e.CHM(a);const s=e.oxw();return e.KtG(s.update(n))}),e.qZA()}if(2&t){const a=e.oxw();e.Q6J("config",a.formProfile)("submition",a.user)}}let w=(()=>{var t;class i{constructor(o,n,s){this._form=o,this._core=n,this.us=s,this.formProfile=this._form.getForm("profile",{formId:"profile",title:"Profile Settings",components:[{name:"Text",key:"name",root:!0,focused:!0,fields:[{name:"Placeholder",value:"Enter your name"},{name:"Label",value:"Name"}]},{name:"Text",key:"phone",fields:[{name:"Placeholder",value:"Enter your phone"},{name:"Label",value:"Phone"}]},{name:"Text",key:"bio",fields:[{name:"Placeholder",value:"Enter your bio"},{name:"Label",value:"Bio"}]}]}),this.formPassword=this._form.getForm("change password",{formId:"change password",title:"Change password",components:[{name:"Password",key:"oldPass",root:!0,focused:!0,fields:[{name:"Placeholder",value:"Enter your old password"},{name:"Label",value:"Old Password"}]},{name:"Password",key:"newPass",root:!0,fields:[{name:"Placeholder",value:"Enter your new password"},{name:"Label",value:"New Password"}]}]}),this._core.next("us.user",()=>{const c={};this._core.copy(this.us.user,c),console.log(c,this.us.user),this.user=c})}update(o){this._core.copy(o,this.us.user),this.us.update()}change_password(){this._form.modal(this.formPassword,{label:"Change",click:(o,n)=>{this.us.change_password(o.oldPass,o.newPass),n()}}).then(o=>{this.us.change_password(o.oldPass,o.newPass)})}}return(t=i).\u0275fac=function(o){return new(o||t)(e.Y36(f.o),e.Y36(p.pX),e.Y36(u.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile"]],decls:21,vars:3,consts:[[1,"container"],[3,"padding"],[1,"profile__header","w-card__header"],[1,"avatar","_profile"],["width","50","height","50","alt","User Avatar",1,"avatar__img",3,"src"],["for","userAvatarUrl",1,"avatar__upload"],[1,"material-icons","avatar__icon"],[1,"profile__body"],[3,"config","submition","wChange",4,"ngIf"],[1,"profile__footer"],[1,"profile__logout"],["type","danger",3,"click"],[1,"material-icons"],["translate",""],[1,"profile__password"],["type","link","translate","",3,"click"],[3,"config","submition","wChange"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"wcard",1)(2,"div",2)(3,"div")(4,"div",3),e._UZ(5,"img",4),e.TgZ(6,"label",5)(7,"i",6),e._uU(8,"edit"),e.qZA()()()()(),e.TgZ(9,"div",7),e.YNc(10,_,1,2,"wform",8),e.TgZ(11,"div",9)(12,"div",10)(13,"wbutton",11),e.NdJ("click",function(){return n.us.logout()}),e.TgZ(14,"span",12),e._uU(15,"logout"),e.qZA(),e.TgZ(16,"span",13),e._uU(17,"Profile.Logout"),e.qZA()()(),e.TgZ(18,"div",14)(19,"wbutton",15),e.NdJ("click",function(){return n.change_password()}),e._uU(20," Profile.Change Password "),e.qZA()()()()()()),2&o&&(e.xp6(1),e.Q6J("padding",!0),e.xp6(4),e.Q6J("src",n.us.user.thumb||"assets/default.png",e.LSH),e.xp6(5),e.Q6J("ngIf",n.user))},dependencies:[g.P,m.O5,h.r,v.A,P.U],styles:['[_ngcontent-%COMP%]:root{--c-white: #fff;--c-black: #000;--c-grey: #e7e7e7;--c-grey-dark: #bfbfbf;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: red;--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #adb8c6;--c-warn: #e67e22;--c-error: #e74c3c;--c-error-hover: #d62c1a;--c-success: #14c76e;--c-info: #17a2b8;--container: 1210px;--b-radius: 8px;--b-radius-card: 10px;--b-radius-btn: 10px;--b-radius-img: 50%;--padding: 10px;--fs: 16px;--ff-bold: bold;--ff-base: "Poppins", sans-serif;--letter-spacing: .3px;--transition: .3s all ease-in-out}html.dark[_ngcontent-%COMP%]:root{--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #7a7a7a}[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   wcard[_ngcontent-%COMP%]{width:100%;transition:all .3s;display:block}.container[_ngcontent-%COMP%]{padding:unset}.profile__header[_ngcontent-%COMP%]{z-index:9;top:10px;position:absolute;right:25px;letter-spacing:0;line-height:23px;font-weight:500;font-size:20px;color:var(--c-text-primary);display:flex;justify-content:space-between;align-items:center;border-radius:var(--b-radius)}.profile__footer[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}@media (max-width: 767.9px){.profile__footer[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.profile__footer[_ngcontent-%COMP%]   .profile__logout[_ngcontent-%COMP%]{order:2;margin-top:20px}}.profile__logout[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin:0;display:flex;justify-content:space-between;align-items:center}.profile__logout[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{margin-right:10px}.avatar[_ngcontent-%COMP%]{border-radius:var(--b-radius-img);border:1px solid var(--c-border);position:relative;margin:0 auto;padding:3px}.avatar._profile[_ngcontent-%COMP%]{width:60px;height:60px}.avatar__img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:var(--b-radius-img)}.avatar__upload[_ngcontent-%COMP%]{cursor:pointer;position:absolute;right:0;bottom:0;width:24px;height:24px;border-radius:var(--b-radius-img);background:var(--c-primary);display:flex;justify-content:center;align-items:center;transition:var(--transition)}.avatar__icon[_ngcontent-%COMP%]{color:var(--c-white);font-size:var(--fs)}.profile__password[_ngcontent-%COMP%]{cursor:pointer}']}),i})();var b=r(7605);const y=[{path:"",component:w}];let x=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[b.Bz.forChild(y),d.I]}),i})()}}]);