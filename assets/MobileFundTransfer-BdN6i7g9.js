import{r as t,j as e}from"./index-DCobZ8SW.js";import{S as s}from"./serviceInput-B5GKTlVF.js";import{S as u,f as a,s as l}from"./ServiceTitle-Bl5UuIvb.js";import{S as o}from"./Selector-BQaBeR8M.js";import{D as x}from"./DocumentPicker-CB5rKIBX.js";import{S as f}from"./SubmitButton-B5zo8snj.js";import"./ThemeProvider-D3iz_VcB.js";import"./TransitionWrapper-BJDHpGJ0.js";import"./iconBase-Bd-WnOzw.js";const m=[{walletID:213,walletName:"Bkash LTD."},{walletID:234,walletName:"Nagad"},{bankID:272,walletName:"Upay"}];function C(){const[r,n]=t.useState(null),[i,c]=t.useState(!1),[d,p]=t.useState(!1);return e.jsxs("div",{className:"container-fluid d-flex flex-column mt-4 vh-100 w-100",children:[e.jsxs("div",{className:"d-flex flex-column px-5",style:{flexGrow:.5},children:[e.jsx(u,{label:"MFS"}),e.jsx("label",{className:`${a} mt-2`,style:{fontFamily:"K2d-Bold"},children:"Document"}),e.jsx(x,{document:r,setDocument:n,label:"Attach Deposit Document"}),e.jsx("label",{className:`${a}`,style:{fontFamily:"K2d-Bold"},children:"Amount"}),e.jsx(s,{value:"",placeholder:"Deposit Amount",onChange:()=>{},className:l,style:{borderColor:"#526D82",fontFamily:"k2d-regular"}}),e.jsx(o,{label:"Select Deposit wallet",placeholder:"Deposit Wallet ",dropDownItems:m,className:`${l} py-2 px-2`,nameKey:"walletName",valueKey:"walletID",show:i,setShow:c}),e.jsx(o,{label:"Select Client Wallet",placeholder:"Client Wallet",dropDownItems:m,className:`${l} py-2 px-2`,nameKey:"walletName",valueKey:"walletID",show:d,setShow:p}),e.jsx("label",{className:`${a} mt-2`,style:{fontFamily:"K2d-Bold"},children:"Wallet No."}),e.jsx(s,{value:"",placeholder:"Mobile Number",onChange:()=>{},className:l,style:{borderColor:"#526D82",fontFamily:"k2d-regular"}})]}),e.jsx("div",{className:"flex-column px-5 my-2",style:{display:"flex",justifyContent:"center"},children:e.jsx(f,{label:"Submit"})})]})}export{C as default};
