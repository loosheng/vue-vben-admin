import{B as C}from"./BasicForm.e95100af.js";import"./componentMap.01c9bb76.js";import"./RadioButtonGroup.0ffeaa96.js";import{au as B,a as E,cD as P,v as b,aw as p,o as F,j as v,z as e,i as a,n as u,B as l,E as k}from"./index.c5a6ac2d.js";import{P as c}from"./index.cf80de6e.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.5b771746.js";import"./index.a927b812.js";import"./index.b36849ea.js";import"./_baseIteratee.9bce5e6a.js";import"./get.310887fc.js";import"./DeleteOutlined.e300953c.js";import"./index.da3fa321.js";import"./useRefs.1ecadabf.js";import"./Form.23dbff09.js";import"./Col.fc4aadc5.js";import"./useFlexGapSupport.5ec6054b.js";import"./useSize.87fab6ec.js";import"./index.d25429ac.js";import"./uniqBy.14ef26cd.js";import"./index.81afe79a.js";import"./useWindowSizeFn.ce9b1fe5.js";import"./FullscreenOutlined.5fbb4237.js";import"./index.b4bb2a32.js";import"./index.77af7222.js";import"./Checkbox.5d3058d8.js";import"./index.910a6edc.js";import"./index.2681a027.js";import"./index.0ed806ce.js";import"./index.3be76f2a.js";import"./index.5a2538d2.js";import"./index.8f19589e.js";import"./useFormItem.c6578430.js";import"./index.3717cd8f.js";import"./eagerComputed.21f065a9.js";import"./transButton.44651a30.js";import"./index.426f65ba.js";import"./index.e54e1137.js";import"./index.43520366.js";import"./isNumber.7cc949c0.js";import"./uuid.2b29000c.js";import"./download.8cc675c4.js";import"./base64Conver.08b9f4ec.js";import"./index.1705c8dd.js";import"./index.7aac466a.js";import"./index.3075eddf.js";import"./index.985dfdcb.js";import"./useContentViewHeight.63c6efde.js";import"./ArrowLeftOutlined.e8abd0b9.js";import"./index.3f590a7b.js";const $=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:t=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}],D=E({components:{BasicForm:C,CollapseContainer:P,PageWrapper:c},setup(){const t=b(null),{createMessage:o}=k();return{formElRef:t,schemas:$,handleSubmit:n=>{o.success("click search,values:"+JSON.stringify(n))},setProps(n){const i=t.value;!i||i.setProps(n)}}}}),A={class:"mb-4"},g={class:"mb-4"};function S(t,o,n,i,w,W){const s=p("a-button"),m=p("BasicForm"),d=p("CollapseContainer"),f=p("PageWrapper");return F(),v(f,{title:"Ref\u64CD\u4F5C\u793A\u4F8B"},{default:e(()=>[a("div",A,[u(s,{onClick:o[0]||(o[0]=r=>t.setProps({labelWidth:150})),class:"mr-2"},{default:e(()=>[l(" \u66F4\u6539labelWidth ")]),_:1}),u(s,{onClick:o[1]||(o[1]=r=>t.setProps({labelWidth:120})),class:"mr-2"},{default:e(()=>[l(" \u8FD8\u539FlabelWidth ")]),_:1}),u(s,{onClick:o[2]||(o[2]=r=>t.setProps({size:"large"})),class:"mr-2"},{default:e(()=>[l(" \u66F4\u6539Size ")]),_:1}),u(s,{onClick:o[3]||(o[3]=r=>t.setProps({size:"default"})),class:"mr-2"},{default:e(()=>[l(" \u8FD8\u539FSize ")]),_:1}),u(s,{onClick:o[4]||(o[4]=r=>t.setProps({disabled:!0})),class:"mr-2"},{default:e(()=>[l(" \u7981\u7528\u8868\u5355 ")]),_:1}),u(s,{onClick:o[5]||(o[5]=r=>t.setProps({disabled:!1})),class:"mr-2"},{default:e(()=>[l(" \u89E3\u9664\u7981\u7528 ")]),_:1}),u(s,{onClick:o[6]||(o[6]=r=>t.setProps({compact:!0})),class:"mr-2"},{default:e(()=>[l(" \u7D27\u51D1\u8868\u5355 ")]),_:1}),u(s,{onClick:o[7]||(o[7]=r=>t.setProps({compact:!1})),class:"mr-2"},{default:e(()=>[l(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD ")]),_:1}),u(s,{onClick:o[8]||(o[8]=r=>t.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:e(()=>[l(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E ")]),_:1})]),a("div",g,[u(s,{onClick:o[9]||(o[9]=r=>t.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:e(()=>[l(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE ")]),_:1}),u(s,{onClick:o[10]||(o[10]=r=>t.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:e(()=>[l(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE ")]),_:1}),u(s,{onClick:o[11]||(o[11]=r=>t.setProps({showResetButton:!1})),class:"mr-2"},{default:e(()=>[l(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(s,{onClick:o[12]||(o[12]=r=>t.setProps({showResetButton:!0})),class:"mr-2"},{default:e(()=>[l(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(s,{onClick:o[13]||(o[13]=r=>t.setProps({showSubmitButton:!1})),class:"mr-2"},{default:e(()=>[l(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE ")]),_:1}),u(s,{onClick:o[14]||(o[14]=r=>t.setProps({showSubmitButton:!0})),class:"mr-2"},{default:e(()=>[l(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE ")]),_:1}),u(s,{onClick:o[15]||(o[15]=r=>t.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:e(()=>[l(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(s,{onClick:o[16]||(o[16]=r=>t.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:e(()=>[l(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ")]),_:1})]),u(d,{title:"\u4F7F\u7528ref\u8C03\u7528\u8868\u5355\u5185\u90E8\u51FD\u6570\u793A\u4F8B"},{default:e(()=>[u(m,{schemas:t.schemas,ref:"formElRef",labelWidth:100,onSubmit:t.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var wo=B(D,[["render",S]]);export{wo as default};
