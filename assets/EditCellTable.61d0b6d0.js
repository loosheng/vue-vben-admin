var m=(t,n,r)=>new Promise((d,a)=>{var p=e=>{try{u(r.next(e))}catch(i){a(i)}},o=e=>{try{u(r.throw(e))}catch(i){a(i)}},u=e=>e.done?d(e.value):Promise.resolve(e.value).then(p,o);u((r=r.apply(t,n)).next())});import{B as s}from"./TableImg.f17ae26c.js";import"./componentMap.01c9bb76.js";import{u as c}from"./useTable.3d11d12a.js";import{o as l}from"./select.6ddf6d79.js";import{d as C}from"./table.b89dcb41.js";import{t as F}from"./tree.2da3e79a.js";import{au as E,a as f,aw as b,o as h,h as B,n as D,bS as x,E as w}from"./index.c5a6ac2d.js";import{P as A}from"./index.da3fa321.js";import"./index.77af7222.js";import"./Checkbox.5d3058d8.js";import"./index.910a6edc.js";import"./index.3717cd8f.js";import"./eagerComputed.21f065a9.js";import"./BasicForm.e95100af.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.5b771746.js";import"./index.a927b812.js";import"./index.b36849ea.js";import"./_baseIteratee.9bce5e6a.js";import"./get.310887fc.js";import"./DeleteOutlined.e300953c.js";import"./Form.23dbff09.js";import"./Col.fc4aadc5.js";import"./useFlexGapSupport.5ec6054b.js";import"./useSize.87fab6ec.js";import"./index.d25429ac.js";import"./uniqBy.14ef26cd.js";import"./index.81afe79a.js";import"./useWindowSizeFn.ce9b1fe5.js";import"./FullscreenOutlined.5fbb4237.js";import"./index.b4bb2a32.js";import"./useForm.5cee6549.js";import"./RadioButtonGroup.0ffeaa96.js";import"./useFormItem.c6578430.js";import"./index.cf80de6e.js";import"./index.3075eddf.js";import"./index.985dfdcb.js";import"./useContentViewHeight.63c6efde.js";import"./ArrowLeftOutlined.e8abd0b9.js";import"./index.3f590a7b.js";import"./transButton.44651a30.js";import"./index.3be76f2a.js";import"./index.5a2538d2.js";import"./index.0ed806ce.js";import"./index.2681a027.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.4283e21d.js";import"./index.43520366.js";import"./isNumber.7cc949c0.js";import"./fromPairs.84aabb58.js";import"./scrollTo.125870d2.js";import"./index.9a2053ec.js";import"./index.8f19589e.js";import"./index.426f65ba.js";import"./index.e54e1137.js";import"./download.8cc675c4.js";import"./base64Conver.08b9f4ec.js";import"./index.1705c8dd.js";import"./index.7aac466a.js";import"./useRefs.1ecadabf.js";const v=[{title:"\u8F93\u5165\u6846",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",edit:!0,editRule:t=>m(void 0,null,function*(){return t==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""}),width:200},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200,editComponentProps:()=>({max:100,min:0}),editRender:({text:t})=>x(A,{percent:Number(t)})},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:l,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name8",edit:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:F,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"\u52FE\u9009\u6846",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:t=>t?"\u662F":"\u5426",width:200},{title:"\u5F00\u5173",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:t=>t?"\u5F00":"\u5173",width:200},{title:"\u5355\u9009\u6846",dataIndex:"radio1",edit:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u5355\u9009\u6309\u94AE\u6846",dataIndex:"radio2",edit:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u5355\u9009\u6846",dataIndex:"radio3",edit:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:l,resultField:"list",labelField:"name",valueField:"id"},width:200}],I=f({components:{BasicTable:s},setup(){const[t]=c({title:"\u53EF\u7F16\u8F91\u5355\u5143\u683C\u793A\u4F8B",api:C,columns:v,showIndexColumn:!1,bordered:!0}),{createMessage:n}=w();function r({record:o,index:u,key:e,value:i}){return!1}function d({value:o,key:u,id:e}){return n.loading({content:`\u6B63\u5728\u6A21\u62DF\u4FDD\u5B58${u}`,key:"_save_fake_data",duration:0}),new Promise(i=>{setTimeout(()=>{o===""?(n.error({content:"\u4FDD\u5B58\u5931\u8D25\uFF1A\u4E0D\u80FD\u4E3A\u7A7A",key:"_save_fake_data",duration:2}),i(!1)):(n.success({content:`\u8BB0\u5F55${e}\u7684${u}\u5DF2\u4FDD\u5B58`,key:"_save_fake_data",duration:2}),i(!0))},2e3)})}function a(Lt){return m(this,arguments,function*({record:o,index:u,key:e,value:i}){return yield d({id:o.id,key:e,value:i})})}function p(){}return{registerTable:t,handleEditEnd:r,handleEditCancel:p,beforeEditSubmit:a}}}),_={class:"p-4"};function P(t,n,r,d,a,p){const o=b("BasicTable");return h(),B("div",_,[D(o,{onRegister:t.registerTable,onEditEnd:t.handleEditEnd,onEditCancel:t.handleEditCancel,beforeEditSubmit:t.beforeEditSubmit},null,8,["onRegister","onEditEnd","onEditCancel","beforeEditSubmit"])])}var Ht=E(I,[["render",P]]);export{Ht as default};
