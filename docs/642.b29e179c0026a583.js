"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[642],{2642:(A,l,m)=>{m.r(l),m.d(l,{ContatoModule:()=>q});var i=m(4755),s=m(7568),r=m(5030),o=m(9523);function c(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa de no m\xednimo 4 caracteres. "),o.qZA())}function f(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function d(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,c,2,0,"small",11),o.YNc(2,f,2,0,"small",11),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.nome.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.nome.hasError("required"))}}function p(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa de no m\xednimo 10 caracteres. "),o.qZA())}function u(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function C(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,p,2,0,"small",11),o.YNc(2,u,2,0,"small",11),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.assunto.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.assunto.hasError("required"))}}function g(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa de no m\xednimo 11 caracteres. "),o.qZA())}function _(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function v(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,g,2,0,"small",11),o.YNc(2,_,2,0,"small",11),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.telefone.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.telefone.hasError("required"))}}function h(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser email v\xe1lido. "),o.qZA())}function Z(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function T(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,h,2,0,"small",11),o.YNc(2,Z,2,0,"small",11),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.email.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.email.hasError("required"))}}function x(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa de no m\xednimo 20 caracteres. "),o.qZA())}function y(t,a){1&t&&(o.TgZ(0,"small",12),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function I(t,a){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,x,2,0,"small",11),o.YNc(2,y,2,0,"small",11),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.formContato.controls.mensagem.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",e.formContato.controls.nome.hasError("required"))}}const E=[{path:"",component:(()=>{class t{constructor(e){this.fb=e,this.formContato=this.fb.group({nome:["",[r.kI.minLength(4),r.kI.required]],assunto:["",[r.kI.minLength(10),r.kI.required]],telefone:["",[r.kI.minLength(11),r.kI.required]],email:["",[r.kI.email,r.kI.required]],mensagem:["",[r.kI.minLength(20),r.kI.required]]})}ngOnInit(){}enviarFormulario(){alert("A mensagem foi enviada"),this.formContato.reset()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(r.qu))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-contato"]],decls:20,vars:27,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup","ngSubmit"],["type","text","placeholder","Digite o seu nome","formControlName","nome"],[4,"ngIf"],["type","assunto","placeholder","Digite o assunto","formControlName","assunto"],["type","tel","placeholder","(00) 0 0000-0000)","formControlName","telefone"],["type","email","placeholder","Digite o email","formControlName","email"],["maxlength","300","placeholder","Digite o mensagem","rows","4","formControlName","mensagem"],["type","submit",3,"disabled"],["src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14230.300361031366!2d-49.0703074!3d-26.9169772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df18c3b4a71d65%3A0xa5ec9dd8406a6a7!2sProWay!5e0!3m2!1spt-BR!2sbr!4v1683468323197!5m2!1spt-BR!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,n){1&e&&(o.TgZ(0,"h2",0),o._uU(1,"Entre em contato"),o.qZA(),o.TgZ(2,"section",1)(3,"form",2),o.NdJ("ngSubmit",function(){return n.enviarFormulario()}),o._UZ(4,"input",3),o.YNc(5,d,3,2,"div",4),o._UZ(6,"input",5),o.YNc(7,C,3,2,"div",4),o._UZ(8,"input",6),o.YNc(9,v,3,2,"div",4),o._UZ(10,"input",7),o.YNc(11,T,3,2,"div",4),o._UZ(12,"textarea",8),o.YNc(13,I,3,2,"div",4),o.TgZ(14,"button",9),o._uU(15,"Enviar"),o.qZA()(),o.TgZ(16,"address"),o._UZ(17,"iframe",10),o.TgZ(18,"p"),o._uU(19,"R. 7 de Setembro, 1600 - 14\xba andar - Centro, Blumenau - SC, 89010-204"),o.qZA()()()),2&e&&(o.xp6(3),o.Q6J("formGroup",n.formContato),o.xp6(1),o.ekj("valid",n.formContato.controls.nome.valid)("invalid",n.formContato.controls.nome.invalid&&(n.formContato.controls.nome.touched||n.formContato.controls.nome.dirty)),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.nome.invalid&&(n.formContato.controls.nome.touched||n.formContato.controls.nome.dirty)),o.xp6(1),o.ekj("valid",n.formContato.controls.assunto.valid)("invalid",n.formContato.controls.assunto.invalid&&(n.formContato.controls.assunto.touched||n.formContato.controls.assunto.dirty)),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.assunto.invalid&&(n.formContato.controls.assunto.touched||n.formContato.controls.assunto.dirty)),o.xp6(1),o.ekj("valid",n.formContato.controls.telefone.valid)("invalid",n.formContato.controls.telefone.invalid&&(n.formContato.controls.telefone.touched||n.formContato.controls.telefone.dirty)),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.telefone.invalid&&(n.formContato.controls.telefone.touched||n.formContato.controls.telefone.dirty)),o.xp6(1),o.ekj("valid",n.formContato.controls.email.valid)("invalid",n.formContato.controls.email.invalid&&(n.formContato.controls.email.touched||n.formContato.controls.email.dirty)),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.email.invalid&&(n.formContato.controls.email.touched||n.formContato.controls.email.dirty)),o.xp6(1),o.ekj("valid",n.formContato.controls.mensagem.valid)("invalid",n.formContato.controls.mensagem.invalid&&(n.formContato.controls.mensagem.touched||n.formContato.controls.mensagem.dirty)),o.xp6(1),o.Q6J("ngIf",n.formContato.controls.mensagem.invalid&&(n.formContato.controls.mensagem.touched||n.formContato.controls.mensagem.dirty)),o.xp6(1),o.Q6J("disabled",n.formContato.invalid))},dependencies:[i.O5,r._Y,r.Fj,r.JJ,r.JL,r.nD,r.sg,r.u],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.Bz.forChild(E),s.Bz]}),t})(),q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[i.ez,b,r.UX]}),t})()}}]);