import{B as d}from"./TableImg.f17ae26c.js";import{k as F}from"./componentMap.01c9bb76.js";import{u as B}from"./useTable.3d11d12a.js";import{P as C}from"./index.cf80de6e.js";import{getBasicColumns as f}from"./tableData.ef97c0fc.js";import{d as b}from"./table.b89dcb41.js";import{au as E,a as g,aw as i,o as m,j as a,z as e,n as _,i as T,t as w,l as A}from"./index.c5a6ac2d.js";import"./index.77af7222.js";import"./Checkbox.5d3058d8.js";import"./index.910a6edc.js";import"./index.3717cd8f.js";import"./eagerComputed.21f065a9.js";import"./BasicForm.e95100af.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.5b771746.js";import"./index.a927b812.js";import"./index.b36849ea.js";import"./_baseIteratee.9bce5e6a.js";import"./get.310887fc.js";import"./DeleteOutlined.e300953c.js";import"./index.da3fa321.js";import"./useRefs.1ecadabf.js";import"./Form.23dbff09.js";import"./Col.fc4aadc5.js";import"./useFlexGapSupport.5ec6054b.js";import"./useSize.87fab6ec.js";import"./index.d25429ac.js";import"./uniqBy.14ef26cd.js";import"./index.81afe79a.js";import"./useWindowSizeFn.ce9b1fe5.js";import"./FullscreenOutlined.5fbb4237.js";import"./index.b4bb2a32.js";import"./useForm.5cee6549.js";import"./RadioButtonGroup.0ffeaa96.js";import"./useFormItem.c6578430.js";import"./index.3be76f2a.js";import"./index.5a2538d2.js";import"./index.0ed806ce.js";import"./index.2681a027.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.4283e21d.js";import"./index.43520366.js";import"./isNumber.7cc949c0.js";import"./fromPairs.84aabb58.js";import"./scrollTo.125870d2.js";import"./index.9a2053ec.js";import"./index.8f19589e.js";import"./transButton.44651a30.js";import"./index.426f65ba.js";import"./index.e54e1137.js";import"./download.8cc675c4.js";import"./base64Conver.08b9f4ec.js";import"./index.1705c8dd.js";import"./index.7aac466a.js";import"./index.3075eddf.js";import"./index.985dfdcb.js";import"./useContentViewHeight.63c6efde.js";import"./ArrowLeftOutlined.e8abd0b9.js";import"./index.3f590a7b.js";import"./select.6ddf6d79.js";const D=g({components:{BasicTable:d,TableAction:F,PageWrapper:C},setup(){const[o]=B({api:b,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function r(n){}function p(n){}return{registerTable:o,handleDelete:r,handleOpen:p}}});function k(o,r,p,n,h,x){const l=i("TableAction"),s=i("BasicTable"),c=i("PageWrapper");return m(),a(c,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:e(()=>[_(s,{onRegister:o.registerTable},{expandedRowRender:e(({record:t})=>[T("span",null,"No: "+w(t.no),1)]),bodyCell:e(({column:t,record:u})=>[t.key==="action"?(m(),a(l,{key:0,stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,u)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,u)}}]},null,8,["actions","dropDownActions"])):A("",!0)]),_:1},8,["onRegister"])]),_:1})}var Oo=E(D,[["render",k]]);export{Oo as default};
