import b from"./CollapseItem.7054af9f.js";import G from"./FormComponentPanel.faa37419.js";import V from"./JsonModal.2b100fe3.js";import j from"./index.4790e935.js";import q from"./useForm.61b5021c.js";import N from"./Toolbar.8f99a57b.js";import Q from"./PropsPanel.e8b92422.js";import U from"./ImportJsonModal.6d284932.js";import X from"./CodeModal.d0038553.js";import"./index.3d5dad19.js";import{au as Y,a as Z,b as oo,v as l,fA as eo,a4 as c,o as to,h as ro,n,z as i,k as s,fB as B,q as K,cD as k,fC as no,ay as so,az as ao,aA as lo,aB as io,aC as mo,bI as po,F as uo,ah as f}from"./index.c5a6ac2d.js";import{g,f as co}from"./index.f59aaee9.js";import{b as fo,c as vo,l as ho}from"./formItemConfig.c9ee79d4.js";import{g as yo}from"./formItemPropsConfig.bef9c7f5.js";import"./vuedraggable.umd.33aa224d.js";import"./LayoutItem.99abb45b.js";import"./FormNode.2b5e5a17.js";import"./FormNodeOperate.bcda96c7.js";import"./useFormDesignState.2aea6e6b.js";import"./index.c846cab7.js";import"./index.a927b812.js";/* empty css              */import"./Form.23dbff09.js";import"./Col.fc4aadc5.js";import"./useFlexGapSupport.5ec6054b.js";import"./_baseIteratee.9bce5e6a.js";import"./get.310887fc.js";import"./useSize.87fab6ec.js";import"./index.b36849ea.js";import"./DeleteOutlined.e300953c.js";import"./index.da3fa321.js";import"./useRefs.1ecadabf.js";import"./index.d25429ac.js";import"./index.b4bb2a32.js";/* empty css              */import"./PreviewCode.2c89efa9.js";import"./index.2fe1a174.js";import"./FormRender.62219845.js";import"./BasicForm.e95100af.js";import"./FormItem.vue_vue_type_script_lang.5b771746.js";import"./componentMap.01c9bb76.js";import"./index.77af7222.js";import"./Checkbox.5d3058d8.js";import"./index.910a6edc.js";import"./index.2681a027.js";import"./index.0ed806ce.js";import"./index.3be76f2a.js";import"./index.5a2538d2.js";import"./index.8f19589e.js";import"./useFormItem.c6578430.js";import"./RadioButtonGroup.0ffeaa96.js";import"./index.3717cd8f.js";import"./eagerComputed.21f065a9.js";import"./transButton.44651a30.js";import"./index.426f65ba.js";import"./index.81afe79a.js";import"./useWindowSizeFn.ce9b1fe5.js";import"./FullscreenOutlined.5fbb4237.js";import"./index.e54e1137.js";import"./index.43520366.js";import"./isNumber.7cc949c0.js";import"./uuid.2b29000c.js";import"./download.8cc675c4.js";import"./base64Conver.08b9f4ec.js";import"./index.1705c8dd.js";import"./index.7aac466a.js";import"./uniqBy.14ef26cd.js";import"./useForm.5cee6549.js";import"./FormProps.6b3a8fdc.js";import"./FormItemProps.c0cd64ee.js";import"./RuleProps.34567427.js";import"./ComponentProps.a7887af0.js";import"./FormOptions.b0fc34ab.js";import"./FormItemColumnProps.b3bdf900.js";import"./index.b507814a.js";import"./PlusOutlined.4bf9c6da.js";import"./index.199b69f4.js";const go=Z({__name:"index",props:{title:{type:String,default:"v-form-antd\u8868\u5355\u8BBE\u8BA1\u5668"}},setup(Po){const{prefixCls:F}=oo("form-design"),z=l(null),A=l(null),I=l(null),M=l(null),w=l(null),L=l(null),S=l({}),t=l({schemas:[],layout:"horizontal",labelLayout:"flex",labelWidth:100,labelCol:{},wrapperCol:{},currentItem:{component:"",componentProps:{}},activeKey:1}),D=e=>{e.schemas=e.schemas||[],e.schemas.forEach(o=>{o.colProps=o.colProps||{span:24},o.componentProps=o.componentProps||{},o.itemProps=o.itemProps||{}}),t.value=e},J=eo(t,{deep:!0,capacity:20,parse:e=>{const o=f(e),{currentItem:r,schemas:a}=o,d=a&&a.find(m=>m.key===(r==null?void 0:r.key));return d&&(o.currentItem=d),o}}),p=e=>{t.value.currentItem=e,W(e.key?t.value.activeKey===1?2:t.value.activeKey:1)},E=e=>{e.colProps=e.colProps||{},e.colProps.span=yo.span},v=(e,o)=>{},P=e=>{const o=f(e);return E(o),g(o),o},h=e=>{var r;const o=f(e);if(E(o),g(o),!((r=t.value.currentItem)!=null&&r.key)){p(o),t.value.schemas&&t.value.schemas.push(o);return}H(o,!1)},T=e=>{const o=f(e);return o.component==="Grid"&&co([e],r=>{g(r)}),o},H=(e=t.value.currentItem,o=!0)=>{var d;const r=(d=t.value.currentItem)==null?void 0:d.key,a=m=>{m.some((y,C)=>{var x;if(y.key===r){o?m.splice(C,0,T(y)):m.splice(C+1,0,e);const _={newIndex:C+1};return $(_,m,o),!0}["Grid","Tabs"].includes(y.component)&&((x=y.columns)==null||x.forEach(_=>{a(_.children)}))})};t.value.schemas&&a(t.value.schemas)},$=({newIndex:e},o,r=!1)=>{const a=o[e];r&&g(a),p(a)},u=e=>{const o=f(t.value);e==null||e.showModal(o)},W=e=>{t.value.activeKey=e},O=()=>{t.value.schemas=[],p({component:""})},R=(e,o)=>S.value[e]=o;return c("formModel",S),c("setFormModelMethod",R),c("formConfig",t),c("historyReturn",J),c("formDesignMethods",{handleBeforeColAdd:$,handleCopy:H,handleListPush:h,handleSetSelectItem:p,handleAddAttrs:v,setFormConfig:D}),(e,o)=>(to(),ro(uo,null,[n(s(po),null,{default:i(()=>[n(s(B),{class:K(`left ${s(F)}-sider`),collapsible:"",collapsedWidth:"0",width:"270",zeroWidthTriggerStyle:{"margin-top":"-70px","background-color":"gray"},breakpoint:"md"},{default:i(()=>[n(s(k),{title:"\u57FA\u7840\u63A7\u4EF6"},{default:i(()=>[n(b,{list:s(fo),handleListPush:P,onAddAttrs:v,onHandleListPush:h},null,8,["list"])]),_:1}),n(s(k),{title:"\u81EA\u5B9A\u4E49\u63A7\u4EF6"},{default:i(()=>[n(b,{list:s(vo),onAddAttrs:v,handleListPush:P,onHandleListPush:h},null,8,["list"])]),_:1}),n(s(k),{title:"\u5E03\u5C40\u63A7\u4EF6"},{default:i(()=>[n(b,{list:s(ho),handleListPush:P,onAddAttrs:v,onHandleListPush:h},null,8,["list"])]),_:1})]),_:1},8,["class"]),n(s(no),null,{default:i(()=>[n(N,{onHandleOpenJsonModal:o[0]||(o[0]=r=>u(A.value)),onHandleOpenImportJsonModal:o[1]||(o[1]=r=>u(I.value)),onHandlePreview:o[2]||(o[2]=r=>u(M.value)),onHandlePreview2:o[3]||(o[3]=r=>u(w.value)),onHandleOpenCodeModal:o[4]||(o[4]=r=>u(L.value)),onHandleClearFormItems:O}),n(G,{"current-item":t.value.currentItem,data:t.value,onHandleSetSelectItem:p},null,8,["current-item","data"])]),_:1}),n(s(B),{class:K(`right ${s(F)}-sider`),collapsible:"",reverseArrow:!0,collapsedWidth:"0",width:"270",zeroWidthTriggerStyle:{"margin-top":"-70px","background-color":"gray"},breakpoint:"lg"},{default:i(()=>[n(Q,{ref_key:"propsPanel",ref:z,activeKey:t.value.activeKey},so({_:2},[ao(t.value.schemas,r=>({name:`${r.component}Props`,fn:i(a=>[lo(e.$slots,`${r.component}Props`,io(mo({formItem:a,props:a.componentProps})),void 0,!0)])}))]),1032,["activeKey"])]),_:3},8,["class"])]),_:3}),n(V,{ref_key:"jsonModal",ref:A},null,512),n(X,{ref_key:"codeModal",ref:L},null,512),n(U,{ref_key:"importJsonModal",ref:I},null,512),n(j,{ref_key:"eFormPreview",ref:M,formConfig:t.value},null,8,["formConfig"]),n(q,{ref_key:"eFormPreview2",ref:w,formConfig:t.value},null,8,["formConfig"])],64))}});var Re=Y(go,[["__scopeId","data-v-2ab61a74"]]);export{Re as default};
