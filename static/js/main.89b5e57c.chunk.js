(this["webpackJsonpnetwork-configuration"]=this["webpackJsonpnetwork-configuration"]||[]).push([[0],{2:function(e,a,t){e.exports={wrapper:"App_wrapper__20t3c",form:"App_form__2G1OM",settingsContainer:"App_settingsContainer__1k1QZ",buttons:"App_buttons__2o24w",wrapperEthernet:"App_wrapperEthernet__1MAiI",star:"App_star__1gwaZ",wirelessNetworkName:"App_wirelessNetworkName__1LhvU",btnRefresh:"App_btnRefresh__2WM6p",btnDisabled:"App_btnDisabled__3aEJB",disabled:"App_disabled__3AzUz",settingTitle:"App_settingTitle__1v8Zz",radioGroup:"App_radioGroup__2GWB8",inputs:"App_inputs__1W2K9",labelForInputs:"App_labelForInputs__a5mYw",securityKey:"App_securityKey__cM2NO",message:"App_message__3_hTm",error:"App_error__2fozo"}},49:function(e,a,t){e.exports=t(63)},54:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),l=t(17),r=t.n(l),i=(t(54),t(13)),c=t(2),o=t.n(c),d=t(9),u=t(86),m=t(87),b=t(84),p=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,E=/^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/;function v(e){var a;return e?p.test(e)||(a="Invalid IP"):a="Required",a}function D(e){var a;return e?E.test(e)||(a="Invalid Subnet Mask"):a="Required",a}function N(e){var a;return e?p.test(e)||(a="Invalid Gateway"):a=null,a}function h(e){var a;return e?p.test(e)||(a="Invalid DNS"):a="Required",a}function y(e){var a;return e?p.test(e)||(a="Invalid DNS"):a=null,a}function f(e){var a;return e?e.length<8&&(a="Must be at least 8 symbols"):a="Required",a}function g(e){var a;return e||(a="Select name"),a}var S=function(e){var a=e.onChange,t=e.ipAddress,s=e.subnetMask,l=e.defaultGateway,r=e.setting,i=e.disabledWireless,c=e.disabled,p=e.setDisabled,E=e.value,h=e.setValue,y=e.setErrors,f=e.setFieldValue;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:o.a.radioGroup},n.a.createElement(u.a,{value:E,onChange:function(e){h(e.target.value)}},n.a.createElement(m.a,{value:M,control:n.a.createElement(b.a,{color:"primary",size:"small"}),label:M,onClick:function(){p(!0),f("".concat(r,".ipAddress"),""),f("".concat(r,".subnetMask"),""),f("".concat(r,".defaultGateway"),""),setTimeout((function(){y({})}),0)},disabled:i}),n.a.createElement(m.a,{value:j,control:n.a.createElement(b.a,{color:"primary",size:"small"}),label:j,onClick:function(){p(!1)},disabled:i}))),n.a.createElement("div",{className:o.a.inputs},n.a.createElement("div",null,n.a.createElement(d.a,{component:"span",name:"".concat(r,".ipAddress"),className:o.a.error}),n.a.createElement("label",{className:"".concat(o.a.labelForInputs," ").concat(!0===c?o.a.disabled:""),htmlFor:"".concat(r,".ipAddress")},"IP address:",n.a.createElement("span",{className:o.a.star},"*")),n.a.createElement(d.b,{type:"text",id:"".concat(r,".ipAddress"),name:"".concat(r,".ipAddress"),onChange:a,value:t,validate:c?null:v,disabled:c})),n.a.createElement("div",null,n.a.createElement(d.a,{component:"span",name:"".concat(r,".subnetMask"),className:o.a.error}),n.a.createElement("label",{className:"".concat(o.a.labelForInputs," ").concat(!0===c?o.a.disabled:""),htmlFor:"".concat(r,".subnetMask")},"Subnet Mask:",n.a.createElement("span",{className:o.a.star},"*")),n.a.createElement(d.b,{type:"text",id:"".concat(r,".subnetMask"),name:"".concat(r,".subnetMask"),onChange:a,value:s,validate:c?null:D,disabled:c})),n.a.createElement("div",null,n.a.createElement(d.a,{component:"span",name:"".concat(r,".defaultGateway"),className:o.a.error}),n.a.createElement("label",{className:"".concat(o.a.labelForInputs," ").concat(!0===c?o.a.disabled:""),htmlFor:"".concat(r,".defaultGateway")},"Default Gateway:"),n.a.createElement(d.b,{type:"text",id:"".concat(r,".defaultGateway"),name:"".concat(r,".defaultGateway"),onChange:a,value:l,validate:c?null:N,disabled:c}))))},w=function(e){var a=e.onChange,t=e.preferredDNS,s=e.alternativeDNS,l=e.setting,r=e.disabledWireless,i=e.disabled,c=e.setDisabled,p=e.value,E=e.setValue,v=e.setErrors,D=e.setFieldValue;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:o.a.radioGroup},n.a.createElement(u.a,{value:p,onChange:function(e){E(e.target.value)}},n.a.createElement(m.a,{value:z,control:n.a.createElement(b.a,{color:"primary",size:"small"}),label:z,onClick:function(){c(!0),D("".concat(l,".preferredDNS"),""),D("".concat(l,".alternativeDNS"),""),setTimeout((function(){v({})}),0)},disabled:r}),n.a.createElement(m.a,{value:T,control:n.a.createElement(b.a,{color:"primary",size:"small"}),label:T,onClick:function(){c(!1)},disabled:r}))),n.a.createElement("div",{className:o.a.inputs},n.a.createElement("div",null,n.a.createElement(d.a,{component:"span",name:"".concat(l,".preferredDNS"),className:o.a.error}),n.a.createElement("label",{className:"".concat(o.a.labelForInputs," ").concat(!0===i?o.a.disabled:""),htmlFor:"".concat(l,".preferredDNS")},"Preferred DNS server:",n.a.createElement("span",{className:o.a.star},"*")),n.a.createElement(d.b,{type:"text",id:"".concat(l,".preferredDNS"),name:"".concat(l,".preferredDNS"),onChange:a,value:t,validate:i?null:h,disabled:i})),n.a.createElement("div",null,n.a.createElement(d.a,{component:"span",name:"".concat(l,".alternativeDNS"),className:o.a.error}),n.a.createElement("label",{className:"".concat(o.a.labelForInputs," ").concat(!0===i?o.a.disabled:""),htmlFor:"".concat(l,".alternativeDNS")},"Alternative DNS server:"),n.a.createElement(d.b,{type:"text",id:"".concat(l,".alternativeDNS"),name:"".concat(l,".alternativeDNS"),onChange:a,value:s,validate:i?null:y,disabled:i}))))},k=function(e){var a=e.onChange,t=e.ipAddress,s=e.subnetMask,l=e.defaultGateway,r=e.preferredDNS,i=e.alternativeDNS,c=e.disabledEthernetIp,d=e.setDisabledEthernetIp,u=e.valueEthernetIp,m=e.setValueEthernetIp,b=e.setting,p=e.setValueEthernetDns,E=e.disabledEthernetDns,v=e.setDisabledEthernetDns,D=e.valueEthernetDns,N=e.setErrors,h=e.setFieldValue;return n.a.createElement("div",{className:o.a.wrapperEthernet},n.a.createElement("div",{className:o.a.settingTitle},n.a.createElement("span",null,"Ethernet Settings")),n.a.createElement(S,{onChange:a,ipAddress:t,subnetMask:s,defaultGateway:l,setting:b,disabled:c,setDisabled:d,value:u,setValue:m,setErrors:N,setFieldValue:h}),n.a.createElement(w,{onChange:a,preferredDNS:r,alternativeDNS:i,setting:b,disabled:E,setDisabled:v,value:D,setValue:p,setErrors:N,setFieldValue:h}))},_=t(85),W=t(42),I=t.n(W),V=function(e){var a=e.onChange,t=e.wirelessNetworkName,s=e.securityKey,l=e.setting,r=e.disabled,i=e.changeDisabled,c=e.disabledKey,u=e.setDisabledKey,m=e.setErrors,b=e.setFieldValue,p=e.setDisabledWirelessIp,E=e.setDisabledWirelessDns,v=e.setValueWirelessIp,D=e.setValueWirelessDns;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement(_.a,{color:"primary",inputProps:{"aria-label":"secondary checkbox"},id:"enableWifi",onClick:function(){i(),u(!0),p(!0),E(!0),v(M),D(z),b("".concat(l,".securityKey"),""),b("".concat(l,".wirelessNetworkName"),""),b("".concat(l,".ipAddress"),""),b("".concat(l,".subnetMask"),""),b("".concat(l,".defaultGateway"),""),b("".concat(l,".preferredDNS"),""),b("".concat(l,".alternativeDNS"),""),setTimeout((function(){m({})}),0)},checked:!r}),n.a.createElement("label",{htmlFor:"enableWifi"},"Enable wifi:")),n.a.createElement(d.a,{component:"div",name:"".concat(l,".wirelessNetworkName"),className:o.a.error}),n.a.createElement("div",{className:o.a.wirelessNetworkName},n.a.createElement("div",null,n.a.createElement("label",{className:"".concat(o.a.labelForInputs," ").concat(!0===r?o.a.disabled:"")},"Wireless Network Name: ",n.a.createElement("span",{className:o.a.star},"*"))),n.a.createElement("div",null,n.a.createElement(d.b,{as:"select",name:"".concat(l,".wirelessNetworkName"),onChange:a,value:t,disabled:r,validate:r?null:g},n.a.createElement("option",{value:""},"Please select"),n.a.createElement("option",{value:"name one"},"name one"),n.a.createElement("option",{value:"name two",name:"name two"},"name two"),n.a.createElement("option",{value:"name three",name:"name three"},"name three"))),n.a.createElement("div",null,n.a.createElement("button",{className:"".concat(o.a.btnRefresh,"  ").concat(!0===r?o.a.btnDisabled:""),type:"button",disabled:r,onClick:function(){}},n.a.createElement(I.a,{color:"primary",variant:"outlined",size:"small"})))),n.a.createElement("div",null,n.a.createElement(_.a,{color:"primary",inputProps:{"aria-label":"secondary checkbox"},id:"security",disabled:r,checked:!c,onClick:function(){c?u(!1):(u(!0),m(null)),b("".concat(l,".securityKey"),""),setTimeout((function(){m({})}),0)}}),n.a.createElement("label",{htmlFor:"security",className:"".concat(!0===r?o.a.disabled:"")},"Enable Wireless Security:")),n.a.createElement("div",{className:o.a.securityKey},n.a.createElement(d.a,{component:"span",name:"".concat(l,".securityKey"),className:o.a.error}),n.a.createElement("label",{className:"".concat(o.a.labelForInputs," ").concat(!0===c?o.a.disabled:""),htmlFor:"".concat(l,".securityKey")},"Security key:",n.a.createElement("span",{className:o.a.star},"*")),n.a.createElement(d.b,{type:"text",id:"".concat(l,".securityKey"),name:"".concat(l,".securityKey"),onChange:a,value:s,validate:c?null:f,disabled:c})))},A=function(e){var a=e.onChange,t=e.wirelessNetworkName,s=e.securityKey,l=e.ipAddress,r=e.subnetMask,i=e.defaultGateway,c=e.preferredDNS,d=e.alternativeDNS,u=e.setting,m=e.disabledKey,b=e.setDisabledKey,p=e.disabledWireless,E=e.changeDisabled,v=e.disabledWirelessIp,D=e.setDisabledWirelessIp,N=e.valueWirelessIp,h=e.setValueWirelessIp,y=e.valueWirelessDns,f=e.setValueWirelessDns,g=e.disabledWirelessDns,k=e.setDisabledWirelessDns,_=e.setErrors,W=e.setFieldValue;return n.a.createElement("div",{className:o.a.wrapperWireless},n.a.createElement("div",{className:o.a.settingTitle},n.a.createElement("span",null,"Wireless Settings")),n.a.createElement(V,{onChange:a,wirelessNetworkName:t,securityKey:s,setting:u,disabled:p,changeDisabled:E,disabledKey:m,setDisabledKey:b,setErrors:_,setFieldValue:W,setDisabledWirelessIp:D,setDisabledWirelessDns:k,setValueWirelessDns:f,setValueWirelessIp:h}),n.a.createElement(S,{onChange:a,ipAddress:l,subnetMask:r,defaultGateway:i,setting:u,disabledWireless:p,disabled:v,setDisabled:D,value:N,setValue:h,setErrors:_,setFieldValue:W}),n.a.createElement(w,{onChange:a,preferredDNS:c,alternativeDNS:d,setting:u,disabledWireless:p,disabled:g,setDisabled:k,value:y,setValue:f,setErrors:_,setFieldValue:W}))},C=t(83),F=t(35),O=t.n(F),G=function(e){var a=e.errors,t=e.handleReset,l=e.touched,r=e.setDisabledEthernetIp,c=e.setValueEthernetIp,d=e.setValueEthernetDns,u=e.setDisabledEthernetDns,m=e.setDisabledKey,b=e.setDisabledWireless,p=e.setDisabledWirelessIp,E=e.setValueWirelessIp,v=e.setValueWirelessDns,D=e.setDisabledWirelessDns,N=Object(s.useState)(""),h=Object(i.a)(N,2),y=h[0],f=h[1];return n.a.createElement("div",{className:o.a.buttons},n.a.createElement(C.a,{type:"submit",variant:"contained",size:"small",color:"primary",onClick:function(){f("your settings are saved")},disabled:!O.a.isEmpty(a)&&!O.a.isEmpty(l)},"Save"),n.a.createElement(C.a,{type:"button",variant:"outlined",size:"small",color:"primary",onClick:function(){c(M),r(!0),d(z),u(!0),m(!0),b(!0),p(!0),E(M),v(z),D(!0),t(),f("your settings are reset(or redirect)")}},"Cancel"),n.a.createElement("span",{className:o.a.message},y))},K=function(){var e=Object(s.useState)(!0),a=Object(i.a)(e,2),t=a[0],l=a[1],r=Object(s.useState)(M),c=Object(i.a)(r,2),u=c[0],m=c[1],b=Object(s.useState)(z),p=Object(i.a)(b,2),E=p[0],v=p[1],D=Object(s.useState)(!0),N=Object(i.a)(D,2),h=N[0],y=N[1],f=Object(s.useState)(!0),g=Object(i.a)(f,2),S=g[0],w=g[1],_=Object(s.useState)(!0),W=Object(i.a)(_,2),I=W[0],V=W[1],C=Object(s.useState)(!0),F=Object(i.a)(C,2),O=F[0],K=F[1],j=Object(s.useState)(M),T=Object(i.a)(j,2),x=T[0],P=T[1],R=Object(s.useState)(z),B=Object(i.a)(R,2),q=B[0],J=B[1],U=Object(s.useState)(!0),Z=Object(i.a)(U,2),$=Z[0],H=Z[1],L=function(){V(!I)};return n.a.createElement("div",{className:o.a.wrapper},n.a.createElement(d.d,{initialValues:{ethernetSettings:{ipAddress:"",subnetMask:"",defaultGateway:"",preferredDNS:"",alternativeDNS:""},wirelessSettings:{wirelessNetworkName:"",securityKey:"",ipAddress:"",subnetMask:"",defaultGateway:"",preferredDNS:"",alternativeDNS:""}},onSubmit:function(e){console.log("SETTINGS:",JSON.stringify([e],null,2))},validateOnChange:!0,validateOnBlur:!0,validateOnMount:!0},(function(e){var a=e.handleSubmit,s=e.handleChange,r=e.values,i=e.errors,c=e.handleReset,b=e.touched,p=e.setErrors,D=e.setFieldValue;return n.a.createElement(d.c,{onSubmit:a,className:o.a.form},n.a.createElement("div",{className:o.a.settingsContainer},n.a.createElement(k,{onChange:s,ipAddress:r.ethernetSettings.ipAddress,subnetMask:r.ethernetSettings.subnetMask,defaultGateway:r.ethernetSettings.defaultGateway,preferredDNS:r.ethernetSettings.preferredDNS,alternativeDNS:r.ethernetSettings.alternativeDNS,disabledEthernetIp:t,setDisabledEthernetIp:l,valueEthernetIp:u,setValueEthernetIp:m,setting:"ethernetSettings",valueEthernetDns:E,setValueEthernetDns:v,disabledEthernetDns:h,setDisabledEthernetDns:y,setErrors:p,setFieldValue:D}),n.a.createElement(A,{onChange:s,wirelessNetworkName:r.wirelessSettings.wirelessNetworkName,securityKey:r.wirelessSettings.securityKey,ipAddress:r.wirelessSettings.ipAddress,subnetMask:r.wirelessSettings.subnetMask,defaultGateway:r.wirelessSettings.defaultGateway,preferredDNS:r.wirelessSettings.preferredDNS,alternativeDNS:r.wirelessSettings.alternativeDNS,setting:"wirelessSettings",disabledKey:S,setDisabledKey:w,disabledWireless:I,changeDisabled:L,disabledWirelessIp:O,setDisabledWirelessIp:K,valueWirelessIp:x,setValueWirelessIp:P,valueWirelessDns:q,setValueWirelessDns:J,disabledWirelessDns:$,setDisabledWirelessDns:H,setErrors:p,setFieldValue:D})),n.a.createElement(G,{errors:i,handleReset:c,touched:b,setDisabledEthernetIp:l,setValueEthernetIp:m,setValueEthernetDns:v,setDisabledEthernetDns:y,setDisabledKey:w,setDisabledWireless:V,setDisabledWirelessIp:K,setValueWirelessIp:P,setValueWirelessDns:J,setDisabledWirelessDns:H}))})))},M="Obtain an IP address automatically (DHCP/BootP)",j="Use the following IP address:",z="Obtain DNS server address automatically",T="Use the following DS server address:",x=function(){return n.a.createElement(K,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.89b5e57c.chunk.js.map