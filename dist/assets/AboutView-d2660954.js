import{c as p,i as d,e as o,p as u,a as f,h as g,b as h,l as _,d as m,g as b,o as x,f as y,w as r,j as t}from"./index-beaf21e3.js";import{_ as Q,Q as C,a as $,b as n,c as v}from"./_plugin-vue_export-helper-607b9efe.js";const w=p({name:"QPageContainer",setup(i,{slots:s}){const{proxy:{$q:c}}=b(),e=d(_,o);if(e===o)return console.error("QPageContainer needs to be child of QLayout"),o;u(m,!0);const l=f(()=>{const a={};return e.header.space===!0&&(a.paddingTop=`${e.header.size}px`),e.right.space===!0&&(a[`padding${c.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(a.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(a[`padding${c.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),a});return()=>g("div",{class:"q-page-container",style:l.value},h(s.default))}}),R={};function z(i,s){return x(),y(C,{view:"hHh lpR fFf"},{default:r(()=>[t(w),t(v,{reveal:"",elevated:"",class:"bg-warning text-black"},{default:r(()=>[t($,{align:"center"},{default:r(()=>[t(n,{to:"/character",name:"character",icon:"person",label:"Character"}),t(n,{to:"/dog",name:"dog",icon:"pets",label:"Dog"}),t(n,{to:"/shop",name:"shop",icon:"shopping_bag",label:"Shop"})]),_:1})]),_:1})]),_:1})}const B=Q(R,[["render",z]]);export{B as default};
