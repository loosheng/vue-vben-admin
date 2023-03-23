import{a as k,au as B,aw as i,o as s,h as b,n as e,z as l,B as t,x as h,y as E,l as v,j as R}from"./index.c5a6ac2d.js";import{u as U}from"./useFormDesignState.2aea6e6b.js";import{I as _}from"./index.3be76f2a.js";import{S as w}from"./index.8f19589e.js";import{C as G}from"./index.910a6edc.js";/* empty css              *//* empty css              */import{R as g}from"./index.77af7222.js";import{F as L,a as A}from"./Form.23dbff09.js";import{C as z}from"./index.d25429ac.js";import"./Checkbox.5d3058d8.js";import"./Col.fc4aadc5.js";import"./useFlexGapSupport.5ec6054b.js";import"./_baseIteratee.9bce5e6a.js";import"./get.310887fc.js";import"./useSize.87fab6ec.js";const I=k({name:"FormProps",components:{InputNumber:_,Slider:w,Checkbox:G,RadioGroup:g.Group,RadioButton:g.Button,Form:L,FormItem:A,Col:z},setup(){const{formConfig:o}=U();return o.value=o.value||{labelCol:{span:24},wrapperCol:{span:24}},{formConfig:o,lableLayoutChange:p=>{p.target.value==="Grid"&&(o.value.layout="horizontal")}}}}),S={class:"properties-content"},N={key:0};function D(o,a,p,$,V,q){const n=i("RadioButton"),d=i("RadioGroup"),r=i("FormItem"),F=i("InputNumber"),C=i("Slider"),f=i("Checkbox"),m=i("Col"),y=i("Form");return s(),b("div",S,[e(y,{class:"properties-body","label-align":"left",layout:"vertical"},{default:l(()=>[e(r,{label:"\u8868\u5355\u5E03\u5C40"},{default:l(()=>[e(d,{"button-style":"solid",value:o.formConfig.layout,"onUpdate:value":a[0]||(a[0]=u=>o.formConfig.layout=u)},{default:l(()=>[e(n,{value:"horizontal"},{default:l(()=>[t("\u6C34\u5E73")]),_:1}),e(n,{value:"vertical",disabled:o.formConfig.labelLayout==="Grid"},{default:l(()=>[t(" \u5782\u76F4 ")]),_:1},8,["disabled"]),e(n,{value:"inline",disabled:o.formConfig.labelLayout==="Grid"},{default:l(()=>[t(" \u884C\u5185 ")]),_:1},8,["disabled"])]),_:1},8,["value"])]),_:1}),e(r,{label:"\u6807\u7B7E\u5E03\u5C40"},{default:l(()=>[e(d,{buttonStyle:"solid",value:o.formConfig.labelLayout,"onUpdate:value":a[1]||(a[1]=u=>o.formConfig.labelLayout=u),onChange:o.lableLayoutChange},{default:l(()=>[e(n,{value:"flex"},{default:l(()=>[t("\u56FA\u5B9A")]),_:1}),e(n,{value:"Grid",disabled:o.formConfig.layout!=="horizontal"},{default:l(()=>[t(" \u6805\u683C ")]),_:1},8,["disabled"])]),_:1},8,["value","onChange"])]),_:1}),h(e(r,{label:"\u6807\u7B7E\u5BBD\u5EA6\uFF08px\uFF09"},{default:l(()=>[e(F,{style:{width:"100%"},value:o.formConfig.labelWidth,"onUpdate:value":a[2]||(a[2]=u=>o.formConfig.labelWidth=u),min:0,step:1},null,8,["value"])]),_:1},512),[[E,o.formConfig.labelLayout==="flex"]]),o.formConfig.labelLayout==="Grid"?(s(),b("div",N,[e(r,{label:"labelCol"},{default:l(()=>[e(C,{value:o.formConfig.labelCol.span,"onUpdate:value":a[3]||(a[3]=u=>o.formConfig.labelCol.span=u),max:24},null,8,["value"])]),_:1}),e(r,{label:"wrapperCol"},{default:l(()=>[e(C,{value:o.formConfig.wrapperCol.span,"onUpdate:value":a[4]||(a[4]=u=>o.formConfig.wrapperCol.span=u),max:24},null,8,["value"])]),_:1}),e(r,{label:"\u6807\u7B7E\u5BF9\u9F50"},{default:l(()=>[e(d,{"button-style":"solid",value:o.formConfig.labelAlign,"onUpdate:value":a[5]||(a[5]=u=>o.formConfig.labelAlign=u)},{default:l(()=>[e(n,{value:"left"},{default:l(()=>[t("\u9760\u5DE6")]),_:1}),e(n,{value:"right"},{default:l(()=>[t("\u9760\u53F3")]),_:1})]),_:1},8,["value"])]),_:1}),e(r,{label:"\u63A7\u4EF6\u5927\u5C0F"},{default:l(()=>[e(d,{"button-style":"solid",value:o.formConfig.size,"onUpdate:value":a[6]||(a[6]=u=>o.formConfig.size=u)},{default:l(()=>[e(n,{value:"default"},{default:l(()=>[t("\u9ED8\u8BA4")]),_:1}),e(n,{value:"small"},{default:l(()=>[t("\u5C0F")]),_:1}),e(n,{value:"large"},{default:l(()=>[t("\u5927")]),_:1})]),_:1},8,["value"])]),_:1})])):v("",!0),e(r,{label:"\u8868\u5355\u5C5E\u6027"},{default:l(()=>[e(m,null,{default:l(()=>[o.formConfig.layout=="horizontal"?(s(),R(f,{key:0,checked:o.formConfig.colon,"onUpdate:checked":a[7]||(a[7]=u=>o.formConfig.colon=u)},{default:l(()=>[t("label\u540E\u9762\u663E\u793A\u5192\u53F7")]),_:1},8,["checked"])):v("",!0)]),_:1}),e(m,null,{default:l(()=>[e(f,{checked:o.formConfig.disabled,"onUpdate:checked":a[8]||(a[8]=u=>o.formConfig.disabled=u)},{default:l(()=>[t("\u7981\u7528")]),_:1},8,["checked"])]),_:1}),e(m,null,{default:l(()=>[e(f,{checked:o.formConfig.hideRequiredMark,"onUpdate:checked":a[9]||(a[9]=u=>o.formConfig.hideRequiredMark=u)},{default:l(()=>[t("\u9690\u85CF\u5FC5\u9009\u6807\u8BB0")]),_:1},8,["checked"])]),_:1})]),_:1})]),_:1})])}var eo=B(I,[["render",D]]);export{eo as default};
