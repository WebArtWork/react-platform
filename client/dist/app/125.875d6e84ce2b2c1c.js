"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[125],{3125:(M,c,o)=>{o.r(c),o.d(c,{SignModule:()=>y});var d=o(294),t=o(8256),p=o(7208),f=o(3071),g=o(8602),u=o(6895),l=o(433);const h=["email"],m=["password"];function _(s,r){1&s&&(t.TgZ(0,"i",18),t._uU(1,"visibility"),t.qZA())}function w(s,r){1&s&&(t.TgZ(0,"i"),t._uU(1,"visibility_off"),t.qZA())}function v(s,r){if(1&s){const e=t.EpF();t.TgZ(0,"div",4)(1,"span",5),t._uU(2,"Code:"),t.qZA(),t.TgZ(3,"input",19),t.NdJ("ngModelChange",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.user.code=i)}),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.user.code)}}const C=[{path:"",component:(()=>{class s{constructor(e,n,i,a,b,x){this.alert=e,this.http=n,this.hash=i,this.us=a,this.router=b,this.ui=x,this.show_password=!1,this.user={},this.reseting=!1,this.user.email=this.hash.get("email")||"ceo@webart.work",this.user.password=this.hash.get("password")||"asdasdasdasd"}email_focus(){setTimeout(()=>{this.email.nativeElement.focus()},100)}password_focus(){setTimeout(()=>{this.password.nativeElement.focus()},100)}submit(){return this.reseting&&this.user.code?this.save():this.user.email?(this.hash.set("email",this.user.email),this.user.password?void this.http.post("/api/user/status",this.user,e=>{e.email&&e.pass?this.login():e.email?this.reset():this.sign()}):(this.alert.error({text:"Enter your password"}),this.password_focus())):(this.alert.error({text:"Enter your email"}),this.email_focus())}login(){this.http.post("/api/user/login",this.user,e=>{if(!e)return this.alert.error({text:"Something went wrong"});this.us.user=e,this.http.set("token",e.token),localStorage.setItem("waw_user",JSON.stringify(e)),this.router.navigate(["/profile"])})}sign(){this.http.post("/api/user/sign",this.user,e=>{if(!e)return this.alert.error({text:"Something went wrong"});this.us.user=e,this.http.set("token",e.token),localStorage.setItem("waw_user",JSON.stringify(e)),this.router.navigate(["/profile"])})}reset(){this.http.post("/api/user/request",this.user,e=>{this.reseting=!0}),this.alert.info({text:"Mail will sent to your email"})}save(){this.http.post("/api/user/change",this.user,e=>{e?this.alert.info({text:"Password successfully changed"}):this.alert.error({text:"Wrong Code"}),this.http.post("/api/user/login",this.user,n=>{if(!n)return this.alert.error({text:"Something went wrong"});this.us.user=n,this.http.set("token",n.token),localStorage.setItem("waw_user",JSON.stringify(n)),this.router.navigate(["/profile"])})})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(p.c9),t.Y36(p.OE),t.Y36(p.ol),t.Y36(f.KD),t.Y36(g.F0),t.Y36(p.Fz))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-sign"]],viewQuery:function(e,n){if(1&e&&(t.Gf(h,5),t.Gf(m,5)),2&e){let i;t.iGM(i=t.CRH())&&(n.email=i.first),t.iGM(i=t.CRH())&&(n.password=i.first)}},decls:25,vars:13,consts:[[1,"auth-wrapper"],[1,"auth"],[1,"auth__title"],[1,"auth__forms",3,"ngSubmit"],[1,"w-forms"],[1,"w-forms__title"],["type","text","placeholder","Email","name","email",1,"w-forms__input",3,"ngModel","keydown.enter","ngModelChange"],["email",""],[1,"w-forms__input-block"],["placeholder","Password","name","password",1,"w-forms__input",3,"type","ngModel","ngModelChange"],["password",""],[1,"w-forms__toggle",3,"click"],["class","icon-visibility",4,"ngIf"],[4,"ngIf"],[1,"w-forms__level"],["class","w-forms",4,"ngIf"],[1,"auth__btn"],["type","submit",1,"w-btn","_primary"],[1,"icon-visibility"],["type","text","placeholder","Code","name","code",1,"w-forms__input",3,"ngModel","ngModelChange"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Sign In / Sign Up"),t.qZA(),t.TgZ(4,"form",3),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(5,"div",4)(6,"span",5),t._uU(7,"Email:"),t.qZA(),t.TgZ(8,"input",6,7),t.NdJ("keydown.enter",function(){return!n.user.password&&n.password_focus()})("ngModelChange",function(a){return n.user.email=a}),t.qZA()(),t.TgZ(10,"div",4)(11,"span",5),t._uU(12,"Password:"),t.qZA(),t.TgZ(13,"div",8)(14,"input",9,10),t.NdJ("ngModelChange",function(a){return n.user.password=a}),t.qZA(),t.TgZ(16,"span",11),t.NdJ("click",function(){return n.show_password=!n.show_password}),t.YNc(17,_,2,0,"i",12),t.YNc(18,w,2,0,"i",13),t.qZA()(),t.TgZ(19,"span",14),t._uU(20),t.qZA()(),t.YNc(21,v,4,1,"div",15),t.TgZ(22,"div",16)(23,"button",17),t._uU(24,"Let's go"),t.qZA()()()()()),2&e&&(t.xp6(8),t.Q6J("ngModel",n.user.email),t.xp6(6),t.Q6J("type",n.show_password?"text":"password")("ngModel",n.user.password),t.xp6(3),t.Q6J("ngIf",n.show_password),t.xp6(1),t.Q6J("ngIf",!n.show_password),t.xp6(1),t.ekj("_sky",1==n.ui.valid(n.user.password,"password"))("_orange",2==n.ui.valid(n.user.password,"password"))("_green",3==n.ui.valid(n.user.password,"password")),t.xp6(1),t.hij("Level: ",n.ui.valid(n.user.password,"password"),""),t.xp6(1),t.Q6J("ngIf",n.reseting))},dependencies:[u.O5,l._Y,l.Fj,l.JJ,l.JL,l.On,l.F],styles:['[_ngcontent-%COMP%]:root{--c-white: #fff;--c-black: #000;--c-grey: #e7e7e7;--c-grey-dark: #bfbfbf;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: red;--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #adb8c6;--c-warn: #e67e22;--c-error: #e74c3c;--c-error-hover: #d62c1a;--c-success: #14c76e;--c-info: #17a2b8;--container: 1210px;--b-radius: 8px;--b-radius-card: 10px;--b-radius-btn: 10px;--b-radius-img: 50%;--padding: 10px;--fs: 16px;--ff-bold: bold;--ff-base: "Poppins", sans-serif;--letter-spacing: .3px;--transition: .3s all ease-in-out}html.dark[_ngcontent-%COMP%]:root{--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #7a7a7a}[_nghost-%COMP%]{position:fixed;width:100%;height:100%;overflow-y:auto;display:flex;flex-direction:column}.auth-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background:var(--c-bg-primary);flex-grow:1;padding:20px}.auth[_ngcontent-%COMP%]{max-width:500px;width:100%;padding:40px;border-radius:var(--b-radius-card);box-shadow:0 0 6px var(--c-shadow);background:var(--c-white)}.auth__title[_ngcontent-%COMP%]{font-size:var(--fs)8px;font-weight:var(--ff-bold);color:var(--c-text-primary);text-align:center;margin-bottom:15px}@media (max-width: 767.9px){.auth__title[_ngcontent-%COMP%]{font-size:var(--fs)2px}}.auth__btn[_ngcontent-%COMP%]{text-align:center;margin-top:30px}.auth__btn[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin:0;width:100%}@media (max-width: 767.9px){.auth[_ngcontent-%COMP%]   .form__title[_ngcontent-%COMP%]{font-size:var(--fs)-2px}}.w-forms[_ngcontent-%COMP%]{position:relative}.w-forms__level[_ngcontent-%COMP%]{top:5px;right:5px;position:absolute;display:inline-block;color:var(--c-text-secondary);font-size:calc(var(--fs) - 6px);line-height:calc(var(--fs) + 4px);letter-spacing:var(--letter-spacing);transition:var(--transition)}.w-forms__level._sky[_ngcontent-%COMP%]{color:var(--c-info)}.w-forms__level._orange[_ngcontent-%COMP%]{color:var(--c-warn)}.w-forms__level._green[_ngcontent-%COMP%]{color:var(--c-success)}.w-forms__input[_ngcontent-%COMP%]{padding-right:35px}.w-forms__input-block[_ngcontent-%COMP%]{position:relative}.w-forms__toggle[_ngcontent-%COMP%]{display:flex;position:absolute;right:10px;top:50%;color:var(--c-placeholder);transform:translateY(-50%);cursor:pointer}.w-forms__toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:21px}.w-forms[_ngcontent-%COMP%]   .icon-visibility[_ngcontent-%COMP%]{color:var(--c-primary)}']}),s})()}];let y=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[],imports:[g.Bz.forChild(C),d.I]}),s})()}}]);