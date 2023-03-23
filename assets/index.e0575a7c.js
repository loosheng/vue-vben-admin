import{B as b}from"./TableImg.f17ae26c.js";import{k as C}from"./componentMap.01c9bb76.js";import{u as g}from"./useTable.3d11d12a.js";import{c as _}from"./system.9e1e536f.js";import{u as w}from"./index.9ebf7648.js";import{R as D,c as B,s as T}from"./RoleDrawer.96cee942.js";import{au as R,a as k,aw as e,o as d,h as y,n as m,z as a,B as S,j as E,l as v}from"./index.c5a6ac2d.js";import"./index.77af7222.js";import"./Checkbox.5d3058d8.js";import"./index.910a6edc.js";import"./index.3717cd8f.js";import"./eagerComputed.21f065a9.js";import"./BasicForm.e95100af.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.5b771746.js";import"./index.a927b812.js";import"./index.b36849ea.js";import"./_baseIteratee.9bce5e6a.js";import"./get.310887fc.js";import"./DeleteOutlined.e300953c.js";import"./index.da3fa321.js";import"./useRefs.1ecadabf.js";import"./Form.23dbff09.js";import"./Col.fc4aadc5.js";import"./useFlexGapSupport.5ec6054b.js";import"./useSize.87fab6ec.js";import"./index.d25429ac.js";import"./uniqBy.14ef26cd.js";import"./index.81afe79a.js";import"./useWindowSizeFn.ce9b1fe5.js";import"./FullscreenOutlined.5fbb4237.js";import"./index.b4bb2a32.js";import"./useForm.5cee6549.js";import"./RadioButtonGroup.0ffeaa96.js";import"./useFormItem.c6578430.js";import"./index.cf80de6e.js";import"./index.3075eddf.js";import"./index.985dfdcb.js";import"./useContentViewHeight.63c6efde.js";import"./ArrowLeftOutlined.e8abd0b9.js";import"./index.3f590a7b.js";import"./transButton.44651a30.js";import"./index.3be76f2a.js";import"./index.5a2538d2.js";import"./index.0ed806ce.js";import"./index.2681a027.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.4283e21d.js";import"./index.43520366.js";import"./isNumber.7cc949c0.js";import"./fromPairs.84aabb58.js";import"./scrollTo.125870d2.js";import"./index.9a2053ec.js";import"./index.8f19589e.js";import"./index.426f65ba.js";import"./index.e54e1137.js";import"./download.8cc675c4.js";import"./base64Conver.08b9f4ec.js";import"./index.1705c8dd.js";import"./index.7aac466a.js";import"./index.5671b99d.js";import"./index.797e9a22.js";import"./useContextMenu.12c75ef1.js";const A=k({name:"RoleManagement",components:{BasicTable:b,RoleDrawer:D,TableAction:C},setup(){const[o,{openDrawer:r}]=w(),[p,{reload:s}]=g({title:"\u89D2\u8272\u5217\u8868",api:_,columns:B,formConfig:{labelWidth:120,schemas:T},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function i(t){}function n(){s()}return{registerTable:p,registerDrawer:o,handleCreate:l,handleEdit:c,handleDelete:i,handleSuccess:n}}});function F(o,r,p,s,l,c){const i=e("a-button"),n=e("TableAction"),t=e("BasicTable"),f=e("RoleDrawer");return d(),y("div",null,[m(t,{onRegister:o.registerTable},{toolbar:a(()=>[m(i,{type:"primary",onClick:o.handleCreate},{default:a(()=>[S(" \u65B0\u589E\u89D2\u8272 ")]),_:1},8,["onClick"])]),bodyCell:a(({column:h,record:u})=>[h.key==="action"?(d(),E(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"]),m(f,{onRegister:o.registerDrawer,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var qo=R(A,[["render",F]]);export{qo as default};
