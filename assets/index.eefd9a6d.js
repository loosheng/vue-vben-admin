import{au as x,a as I,cG as M,b7 as k,bs as b,aE as $,b as U,s as N,f as O,aw as r,o as n,h as S,n as t,z as m,j as h,l as g,i as a,q as s,t as A,F as E,c as P,aN as R}from"./index.c5a6ac2d.js";import{D as V}from"./siteSetting.68e5b367.js";import{c as C,u as z}from"./index.b6398d39.js";import{b as B}from"./index.81afe79a.js";import{h as T}from"./header.d801b988.js";import"./FullscreenOutlined.5fbb4237.js";import"./index.8140ece0.js";import"./useWindowSizeFn.ce9b1fe5.js";import"./useContentViewHeight.63c6efde.js";import"./uniqBy.14ef26cd.js";import"./_baseIteratee.9bce5e6a.js";import"./get.310887fc.js";import"./index.5671b99d.js";import"./index.b507814a.js";import"./useRefs.1ecadabf.js";import"./PlusOutlined.4bf9c6da.js";import"./RedoOutlined.4283e21d.js";import"./index.199b69f4.js";import"./lock.ee5e0b99.js";const F=I({name:"UserDropdown",components:{Dropdown:M,Menu:k,MenuItem:C(()=>b(()=>import("./DropMenuItem.44b6b304.js"),["assets/DropMenuItem.44b6b304.js","assets/index.c5a6ac2d.js","assets/index.3e9a5c09.css"])),MenuDivider:k.Divider,LockAction:C(()=>b(()=>import("./LockModal.ca6f36a5.js"),["assets/LockModal.ca6f36a5.js","assets/LockModal.0068f88c.css","assets/index.86d55544.css","assets/index.a18cc309.css","assets/index.c5a6ac2d.js","assets/index.3e9a5c09.css","assets/index.81afe79a.js","assets/index.d0b877f3.css","assets/useWindowSizeFn.ce9b1fe5.js","assets/FullscreenOutlined.5fbb4237.js","assets/BasicForm.e95100af.js","assets/BasicForm.fca7963c.css","assets/FormItem.vue_vue_type_script_lang.5b771746.js","assets/index.a927b812.js","assets/index.3a3c1369.css","assets/componentMap.01c9bb76.js","assets/componentMap.08c8b028.css","assets/index.77af7222.js","assets/index.cb0992d5.css","assets/Checkbox.5d3058d8.js","assets/index.910a6edc.js","assets/index.695a0c50.css","assets/index.2681a027.js","assets/index.9a4d3b51.css","assets/index.0ed806ce.js","assets/index.49ada229.css","assets/index.3be76f2a.js","assets/index.47f7c782.css","assets/index.5a2538d2.js","assets/index.579bd49e.css","assets/index.8f19589e.js","assets/index.ff4ce442.css","assets/useFormItem.c6578430.js","assets/RadioButtonGroup.0ffeaa96.js","assets/get.310887fc.js","assets/index.3717cd8f.js","assets/index.560eb672.css","assets/eagerComputed.21f065a9.js","assets/index.b36849ea.js","assets/index.aeeee80c.css","assets/_baseIteratee.9bce5e6a.js","assets/DeleteOutlined.e300953c.js","assets/index.da3fa321.js","assets/index.8f5fe29a.css","assets/useRefs.1ecadabf.js","assets/Form.23dbff09.js","assets/Col.fc4aadc5.js","assets/useFlexGapSupport.5ec6054b.js","assets/useSize.87fab6ec.js","assets/transButton.44651a30.js","assets/index.426f65ba.js","assets/index.cd256673.css","assets/index.e54e1137.js","assets/index.9d09be4d.css","assets/index.43520366.js","assets/index.b1363280.css","assets/isNumber.7cc949c0.js","assets/uuid.2b29000c.js","assets/download.8cc675c4.js","assets/base64Conver.08b9f4ec.js","assets/index.1705c8dd.js","assets/index.cb030764.css","assets/index.7aac466a.js","assets/index.7b8b5e30.css","assets/index.d25429ac.js","assets/uniqBy.14ef26cd.js","assets/index.b4bb2a32.js","assets/useForm.5cee6549.js","assets/lock.ee5e0b99.js","assets/header.d801b988.js"]))},props:{theme:$.oneOf(["dark","light"])},setup(){const{prefixCls:e}=U("header-user-dropdown"),{t:f}=P(),{getShowDoc:_,getUseLockPage:v}=z(),d=N(),w=O(()=>{const{realName:u="",avatar:y,desc:L}=d.getUserInfo||{};return{realName:u,avatar:y||T,desc:L}}),[o,{openModal:i}]=B();function p(){i(!0)}function l(){d.confirmLoginOut()}function c(){R(V)}function D(u){switch(u.key){case"logout":l();break;case"doc":c();break;case"lock":p();break}}return{prefixCls:e,t:f,getUserInfo:w,handleMenuClick:D,getShowDoc:_,register:o,getUseLockPage:v}}}),j=["src"];function q(e,f,_,v,d,w){const o=r("MenuItem"),i=r("MenuDivider"),p=r("Menu"),l=r("Dropdown"),c=r("LockAction");return n(),S(E,null,[t(l,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[t(p,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(n(),h(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):g("",!0),e.getShowDoc?(n(),h(i,{key:1})):g("",!0),e.getUseLockPage?(n(),h(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):g("",!0),t(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[a("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,j),a("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},A(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),t(c,{onRegister:e.register},null,8,["onRegister"])],64)}var le=x(F,[["render",q]]);export{le as default};
