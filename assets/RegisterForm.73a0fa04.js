var x=(y,n,i)=>new Promise((t,d)=>{var p=s=>{try{m(i.next(s))}catch(u){d(u)}},c=s=>{try{m(i.throw(s))}catch(u){d(u)}},m=s=>s.done?t(s.value):Promise.resolve(s.value).then(p,c);m((i=i.apply(y,n)).next())});import{u as z,a as I,b as S,L as R,_ as P}from"./LoginFormTitle.1ab54ec0.js";import{a as B,I as f,c as U,v as w,w as L,f as E,k as e,o as N,h as V,n as a,z as r,B as g,t as v,C as k,F as T,l as D}from"./index.c5a6ac2d.js";/* empty css              *//* empty css              */import{C as G}from"./index.910a6edc.js";import{S as M}from"./index.1705c8dd.js";import{C as $}from"./index.7aac466a.js";import{F as C}from"./Form.23dbff09.js";import"./Checkbox.5d3058d8.js";import"./useFormItem.c6578430.js";import"./Col.fc4aadc5.js";import"./useFlexGapSupport.5ec6054b.js";import"./_baseIteratee.9bce5e6a.js";import"./get.310887fc.js";import"./useSize.87fab6ec.js";const le=B({__name:"RegisterForm",setup(y){const n=C.Item,i=f.Password,{t}=U(),{handleBackLogin:d,getLoginState:p}=z(),c=w(),m=w(!1),s=L({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:u}=I(s),{validForm:b}=S(c),F=E(()=>e(p)===R.REGISTER);function _(){return x(this,null,function*(){yield b()})}return(h,o)=>e(F)?(N(),V(T,{key:0},[a(P,{class:"enter-x"}),a(e(C),{class:"p-4 enter-x",model:s,rules:e(u),ref_key:"formRef",ref:c},{default:r(()=>[a(e(n),{name:"account",class:"enter-x"},{default:r(()=>[a(e(f),{class:"fix-auto-fill",size:"large",value:s.account,"onUpdate:value":o[0]||(o[0]=l=>s.account=l),placeholder:e(t)("sys.login.userName")},null,8,["value","placeholder"])]),_:1}),a(e(n),{name:"mobile",class:"enter-x"},{default:r(()=>[a(e(f),{size:"large",value:s.mobile,"onUpdate:value":o[1]||(o[1]=l=>s.mobile=l),placeholder:e(t)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),a(e(n),{name:"sms",class:"enter-x"},{default:r(()=>[a(e($),{size:"large",class:"fix-auto-fill",value:s.sms,"onUpdate:value":o[2]||(o[2]=l=>s.sms=l),placeholder:e(t)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),a(e(n),{name:"password",class:"enter-x"},{default:r(()=>[a(e(M),{size:"large",value:s.password,"onUpdate:value":o[3]||(o[3]=l=>s.password=l),placeholder:e(t)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),a(e(n),{name:"confirmPassword",class:"enter-x"},{default:r(()=>[a(e(i),{size:"large",visibilityToggle:"",value:s.confirmPassword,"onUpdate:value":o[4]||(o[4]=l=>s.confirmPassword=l),placeholder:e(t)("sys.login.confirmPassword")},null,8,["value","placeholder"])]),_:1}),a(e(n),{class:"enter-x",name:"policy"},{default:r(()=>[a(e(G),{checked:s.policy,"onUpdate:checked":o[5]||(o[5]=l=>s.policy=l),size:"small"},{default:r(()=>[g(v(e(t)("sys.login.policy")),1)]),_:1},8,["checked"])]),_:1}),a(e(k),{type:"primary",class:"enter-x",size:"large",block:"",onClick:_,loading:m.value},{default:r(()=>[g(v(e(t)("sys.login.registerButton")),1)]),_:1},8,["loading"]),a(e(k),{size:"large",block:"",class:"mt-4 enter-x",onClick:e(d)},{default:r(()=>[g(v(e(t)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1},8,["model","rules"])],64)):D("",!0)}});export{le as default};
