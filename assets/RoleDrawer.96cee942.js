var _=Object.defineProperty;var h=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var g=(e,a,t)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,F=(e,a)=>{for(var t in a||(a={}))S.call(a,t)&&g(e,t,a[t]);if(h)for(var t of h(a))C.call(a,t)&&g(e,t,a[t]);return e};var d=(e,a,t)=>new Promise((o,r)=>{var c=u=>{try{n(t.next(u))}catch(s){r(s)}},l=u=>{try{n(t.throw(u))}catch(s){r(s)}},n=u=>u.done?o(u.value):Promise.resolve(u.value).then(c,l);n((t=t.apply(e,a)).next())});import{B as k}from"./BasicForm.e95100af.js";import"./componentMap.01c9bb76.js";import{u as I}from"./useForm.5cee6549.js";import"./RadioButtonGroup.0ffeaa96.js";import{bS as R,E,a as y,v as w,f as P,k as f,au as T,aw as D,o as x,j as N,z as B,n as b,ax as $}from"./index.c5a6ac2d.js";import{S as V}from"./index.5a2538d2.js";import{s as L,d as M}from"./system.9e1e536f.js";import{B as O,a as U}from"./index.9ebf7648.js";import{_ as j}from"./index.797e9a22.js";const ae=[{title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",width:200},{title:"\u89D2\u8272\u503C",dataIndex:"roleValue",width:180},{title:"\u6392\u5E8F",dataIndex:"orderNo",width:50},{title:"\u72B6\u6001",dataIndex:"status",width:120,customRender:({record:e})=>(Reflect.has(e,"pendingStatus")||(e.pendingStatus=!1),R(V,{checked:e.status==="1",checkedChildren:"\u5DF2\u542F\u7528",unCheckedChildren:"\u5DF2\u7981\u7528",loading:e.pendingStatus,onChange(a){e.pendingStatus=!0;const t=a?"1":"0",{createMessage:o}=E();L(e.id,t).then(()=>{e.status=t,o.success("\u5DF2\u6210\u529F\u4FEE\u6539\u89D2\u8272\u72B6\u6001")}).catch(()=>{o.error("\u4FEE\u6539\u89D2\u8272\u72B6\u6001\u5931\u8D25")}).finally(()=>{e.pendingStatus=!1})}}))},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180},{title:"\u5907\u6CE8",dataIndex:"remark"}],ue=[{field:"roleNme",label:"\u89D2\u8272\u540D\u79F0",component:"Input",colProps:{span:8}},{field:"status",label:"\u72B6\u6001",component:"Select",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]},colProps:{span:8}}],A=[{field:"roleName",label:"\u89D2\u8272\u540D\u79F0",required:!0,component:"Input"},{field:"roleValue",label:"\u89D2\u8272\u503C",required:!0,component:"Input"},{field:"status",label:"\u72B6\u6001",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]}},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu",component:"Input"}],q=y({name:"RoleDrawer",components:{BasicDrawer:O,BasicForm:k,BasicTree:j},emits:["success","register"],setup(e,{emit:a}){const t=w(!0),o=w([]),[r,{resetFields:c,setFieldsValue:l,validate:n}]=I({labelWidth:90,baseColProps:{span:24},schemas:A,showActionButtonGroup:!1}),[u,{setDrawerProps:s,closeDrawer:m}]=U(i=>d(this,null,function*(){c(),s({confirmLoading:!1}),f(o).length===0&&(o.value=yield M()),t.value=!!(i!=null&&i.isUpdate),f(t)&&l(F({},i.record))})),p=P(()=>f(t)?"\u7F16\u8F91\u89D2\u8272":"\u65B0\u589E\u89D2\u8272");function v(){return d(this,null,function*(){try{const i=yield n();s({confirmLoading:!0}),m(),a("success")}finally{s({confirmLoading:!1})}})}return{registerDrawer:u,registerForm:r,getTitle:p,handleSubmit:v,treeData:o}}});function z(e,a,t,o,r,c){const l=D("BasicTree"),n=D("BasicForm"),u=D("BasicDrawer");return x(),N(u,$(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:B(()=>[b(n,{onRegister:e.registerForm},{menu:B(({model:s,field:m})=>[b(l,{value:s[m],"onUpdate:value":p=>s[m]=p,treeData:e.treeData,fieldNames:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"\u83DC\u5355\u5206\u914D"},null,8,["value","onUpdate:value","treeData"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var G=T(q,[["render",z]]),se=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{G as R,se as a,ae as c,ue as s};
