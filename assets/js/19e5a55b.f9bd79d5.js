"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[2371],{3905:(e,r,o)=>{o.d(r,{Zo:()=>u,kt:()=>v});var t=o(67294);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},u=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=a,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||n;return o?t.createElement(v,i(i({ref:r},u),{},{components:o})):t.createElement(v,i({ref:r},u))}));function v(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},10979:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var t=o(87462),a=(o(67294),o(3905));const n={id:"overview",title:"Hub de Integra\xe7\xe3o: Gerador de Spokes",pagination_label:"Vis\xe3o Geral",sidebar_label:"Vis\xe3o Geral",hide_table_of_contents:!0,draft:!1},i=void 0,s={unversionedId:"overview",id:"overview",title:"Hub de Integra\xe7\xe3o: Gerador de Spokes",description:"Introdu\xe7\xe3o",source:"@site/labs/spokegen/1-overview.md",sourceDirName:".",slug:"/overview",permalink:"/workshops/labs/spokegen/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Hub de Integra\xe7\xe3o: Gerador de Spokes",pagination_label:"Vis\xe3o Geral",sidebar_label:"Vis\xe3o Geral",hide_table_of_contents:!0,draft:!1},sidebar:"spokegen",previous:{title:"\ud83c\udfde\ufe0f Vancouver",permalink:"/workshops/labs/spokegen/vancouver"},next:{title:"Caso de Uso",permalink:"/workshops/labs/spokegen/use-case"}},c={},l=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Objetivo",id:"objetivo",level:2}],u={toc:l},p="wrapper";function d(e){let{components:r,...o}=e;return(0,a.kt)(p,(0,t.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),(0,a.kt)("p",null,"O IntegrationHub \xe9 o local central na plataforma para consumir, criar e gerenciar integra\xe7\xf5es na sua inst\xe2ncia do ServiceNow. No caso de voc\xea estar buscando conectar um fluxo de trabalho a um sistema externo, mas o ServiceNow ou os parceiros tecnol\xf3gicos do ServiceNow n\xe3o oferecem uma integra\xe7\xe3o pronta (Spoke) para isso, voc\xea pode facilmente criar a sua pr\xf3pria. O IntegrationHub fornece numerosos Passos de A\xe7\xe3o para conectar seu fluxo de trabalho a sistemas externos que utilizam protocolos como REST, PowerShell, SSH, etc. Neste laborat\xf3rio, focaremos na integra\xe7\xe3o REST."),(0,a.kt)("h2",{id:"objetivo"},"Objetivo"),(0,a.kt)("p",null,'Neste laborat\xf3rio, vamos mostrar a nova capacidade de "Gerador de Spokes". Esse recurso permite gerar novos spokes e a\xe7\xf5es de spoke para APIs de terceiros que seguem a especifica\xe7\xe3o OpenAPI. Voc\xea usar\xe1 um arquivo YAML fornecido.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Um arquivo YAML para especifica\xe7\xf5es OpenAPI \xe9 um arquivo de configura\xe7\xe3o amig\xe1vel ao usu\xe1rio que define a estrutura, endpoints e detalhes de uma API RESTful. Facilita para os desenvolvedores documentarem e comunicarem o design da API. O gerador de spoke pode utilizar automaticamente este arquivo YAML para criar a\xe7\xf5es de spoke.")),(0,a.kt)("p",null,'Este recurso inovador, o "Gerador de Spokes", reduz significativamente o tempo necess\xe1rio para criar uma nova integra\xe7\xe3o.'))}d.isMDXComponent=!0}}]);