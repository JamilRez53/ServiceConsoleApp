import{r as s,j as e}from"./index-DCobZ8SW.js";import{S as r}from"./serviceInput-B5GKTlVF.js";/* empty css                                     */import{D as m}from"./DocumentPicker-CB5rKIBX.js";import{S as i}from"./SubmitButton-B5zo8snj.js";import"./ThemeProvider-D3iz_VcB.js";import"./iconBase-Bd-WnOzw.js";const j=()=>{const[o,l]=s.useState(null),[t,a]=s.useState(!1);return e.jsxs("div",{className:"container d-flex flex-column mx-auto",style:{minHeight:"100vh"},children:[e.jsx("label",{className:"serviceConsoleFormLabel mb-2",children:"TIN Number"}),e.jsx(r,{value:"09857948561",rightIcon:"pencil-square",rightIconPress:()=>a(!t),style:{borderColor:"#526D82"}}),t&&e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"serviceConsoleFormLabel mt-2 mb-2",children:"Enter New TIN Number"}),e.jsx(r,{value:"",onChange:()=>{},style:{borderColor:"#526D82"}})]}),e.jsx("label",{className:"serviceConsoleFormLabel mt-2",children:"TIN Certificate"}),e.jsx(m,{document:o,setDocument:l,label:"Attach TIN Certificate"}),e.jsx("div",{className:"mt-auto mb-2",children:e.jsx(i,{label:"Submit"})})]})};export{j as default};
