var _=Object.defineProperty,h=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var v=(t,o,r)=>o in t?_(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,C=(t,o)=>{for(var r in o||(o={}))V.call(o,r)&&v(t,r,o[r]);if(c)for(var r of c(o))g.call(o,r)&&v(t,r,o[r]);return t},M=(t,o)=>h(t,A(o));var b=(t,o,r)=>new Promise((l,n)=>{var u=i=>{try{e(r.next(i))}catch(p){n(p)}},a=i=>{try{e(r.throw(i))}catch(p){n(p)}},e=i=>i.done?l(i.value):Promise.resolve(i.value).then(u,a);e((r=r.apply(t,o)).next())});import k from"./index.2fe1a174.js";import{a as D}from"./index.f59aaee9.js";import S from"./JsonModal.2b100fe3.js";import{a as U,dG as $,v as y,w as B,bc as E,au as G,aw as f,o as J,j as O,z as F,n as d}from"./index.c5a6ac2d.js";import"./FormRender.62219845.js";import"./index.c846cab7.js";import"./formItemConfig.c9ee79d4.js";import"./componentMap.01c9bb76.js";import"./index.77af7222.js";import"./Checkbox.5d3058d8.js";import"./index.910a6edc.js";import"./index.2681a027.js";import"./index.0ed806ce.js";import"./index.3be76f2a.js";import"./index.5a2538d2.js";import"./index.8f19589e.js";import"./index.a927b812.js";import"./useFormItem.c6578430.js";import"./RadioButtonGroup.0ffeaa96.js";import"./get.310887fc.js";import"./index.3717cd8f.js";import"./eagerComputed.21f065a9.js";import"./index.b36849ea.js";import"./_baseIteratee.9bce5e6a.js";import"./DeleteOutlined.e300953c.js";import"./index.da3fa321.js";import"./useRefs.1ecadabf.js";import"./Form.23dbff09.js";import"./Col.fc4aadc5.js";import"./useFlexGapSupport.5ec6054b.js";import"./useSize.87fab6ec.js";import"./transButton.44651a30.js";import"./index.426f65ba.js";import"./index.81afe79a.js";import"./useWindowSizeFn.ce9b1fe5.js";import"./FullscreenOutlined.5fbb4237.js";import"./index.e54e1137.js";import"./index.43520366.js";import"./isNumber.7cc949c0.js";import"./uuid.2b29000c.js";import"./download.8cc675c4.js";import"./base64Conver.08b9f4ec.js";import"./index.1705c8dd.js";import"./index.7aac466a.js";/* empty css              */import"./useFormDesignState.2aea6e6b.js";import"./index.d25429ac.js";import"./index.b4bb2a32.js";/* empty css              */import"./PreviewCode.2c89efa9.js";import"./index.3d5dad19.js";const j=U({name:"VFormPreview",components:{JsonModal:S,VFormCreate:k,Modal:$},setup(){const t=y(null),o=B({formModel:{},formConfig:{},visible:!1,fApi:{}}),r=e=>{D(e.schemas),o.formConfig=e,o.visible=!0},l=()=>{o.visible=!1,o.formModel={}},n=()=>b(this,null,function*(){var i,p,m,s;const e=yield(p=(i=o.fApi).submit)==null?void 0:p.call(i);(s=(m=t.value)==null?void 0:m.showModal)==null||s.call(m,e)}),u=e=>{},a=()=>{o.formModel={}};return M(C({handleGetData:n,handleCancel:l},E(o)),{showModal:r,jsonModal:t,onSubmit:u,onCancel:a})}});function N(t,o,r,l,n,u){const a=f("a-input"),e=f("VFormCreate"),i=f("JsonModal"),p=f("Modal");return J(),O(p,{title:"\u9884\u89C8(\u652F\u6301\u5E03\u5C40)",visible:t.visible,onOk:t.handleGetData,onCancel:t.handleCancel,okText:"\u83B7\u53D6\u6570\u636E",cancelText:"\u5173\u95ED",style:{top:"20px"},destroyOnClose:!0,width:900},{default:F(()=>[d(e,{"form-config":t.formConfig,fApi:t.fApi,"onUpdate:fApi":o[0]||(o[0]=m=>t.fApi=m),formModel:t.formModel,"onUpdate:formModel":o[1]||(o[1]=m=>t.formModel=m),onSubmit:t.onSubmit},{slotName:F(({formModel:m,field:s})=>[d(a,{value:m[s],"onUpdate:value":w=>m[s]=w,placeholder:"\u6211\u662F\u63D2\u69FD\u4F20\u9012\u7684\u8F93\u5165\u6846"},null,8,["value","onUpdate:value"])]),_:1},8,["form-config","fApi","formModel","onSubmit"]),d(i,{ref:"jsonModal"},null,512)]),_:1},8,["visible","onOk","onCancel"])}var No=G(j,[["render",N]]);export{No as default};
