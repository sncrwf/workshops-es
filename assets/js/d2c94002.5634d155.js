"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[534],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=l(e.components);return r.createElement(c.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||n;return t?r.createElement(f,s(s({ref:a},u),{},{components:t})):r.createElement(f,s({ref:a},u))}));function f(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92392:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const n={id:"use-case",title:"Caso de Uso",pagination_label:"Caso de Uso",sidebar_label:"Caso de Uso",hide_table_of_contents:!0,draft:!1},s=void 0,i={unversionedId:"use-case",id:"use-case",title:"Caso de Uso",description:"A ACME Inc. atualmente utiliza um sistema de terceiros para gerenciar o acesso e a autoriza\xe7\xe3o de visitantes aos seus edif\xedcios, que \xe9 supervisionado por uma empresa de Seguran\xe7a e Gest\xe3o de Propriedades. A ACME Inc. visa melhorar a experi\xeancia tanto para visitantes quanto para funcion\xe1rios. Eles utilizam o ServiceNow e pretendem automatizar o processo de verifica\xe7\xe3o de acesso de visitantes e impress\xe3o de crach\xe1s atrav\xe9s de fluxos de trabalho no ServiceNow. A ACME Inc. desenvolveu uma experi\xeancia modernizada usando a plataforma ServiceNow, permitindo que os visitantes fa\xe7am o check-in de forma independente atrav\xe9s de quiosques localizados na recep\xe7\xe3o de cada edif\xedcio.",source:"@site/labs/spokegen/2-use-case.md",sourceDirName:".",slug:"/use-case",permalink:"/workshops-es/labs/spokegen/use-case",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"use-case",title:"Caso de Uso",pagination_label:"Caso de Uso",sidebar_label:"Caso de Uso",hide_table_of_contents:!0,draft:!1},sidebar:"spokegen",previous:{title:"Vis\xe3o Geral",permalink:"/workshops-es/labs/spokegen/overview"},next:{title:"Criar o Spoke",permalink:"/workshops-es/labs/spokegen/create-the-spoke"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:a,...t}=e;return(0,o.kt)(d,(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ACME Inc. atualmente utiliza um sistema de terceiros para gerenciar o acesso e a autoriza\xe7\xe3o de visitantes aos seus edif\xedcios, que \xe9 supervisionado por uma empresa de Seguran\xe7a e Gest\xe3o de Propriedades. A ACME Inc. visa melhorar a experi\xeancia tanto para visitantes quanto para funcion\xe1rios. Eles utilizam o ServiceNow e pretendem automatizar o processo de verifica\xe7\xe3o de acesso de visitantes e impress\xe3o de crach\xe1s atrav\xe9s de fluxos de trabalho no ServiceNow. A ACME Inc. desenvolveu uma experi\xeancia modernizada usando a plataforma ServiceNow, permitindo que os visitantes fa\xe7am o check-in de forma independente atrav\xe9s de quiosques localizados na recep\xe7\xe3o de cada edif\xedcio."),(0,o.kt)("p",null,"No entanto, n\xe3o existem integra\xe7\xf5es pr\xe9-constru\xeddas dispon\xedveis para o aplicativo de Acesso de Visitantes, que \xe9 hospedado e gerenciado externamente \xe0 Plataforma ServiceNow. Como desenvolvedores do ServiceNow, nossa tarefa \xe9 criar essa integra\xe7\xe3o (Spoke) para que possamos recuperar informa\xe7\xf5es desse sistema remoto atrav\xe9s de um fluxo de trabalho acionado quando um visitante faz o check-in no quiosque."),(0,o.kt)("p",null,"Nesse cen\xe1rio, voc\xea teve uma reuni\xe3o com o administrador do aplicativo de acesso de visitantes de terceiros, que forneceu a seguinte documenta\xe7\xe3o da API: ",(0,o.kt)("a",{parentName:"p",href:"https://quentincloudsnow.github.io/userlookup/#/default/get_checkUser"},"Link para Documenta\xe7\xe3o da API"),". Voc\xea pode clicar no link para entender como essa API funciona."),(0,o.kt)("p",null,"Essa API \xe9 relativamente simples. Como voc\xea pode observar, consiste em apenas um m\xe9todo de API, 'checkUser', e esse m\xe9todo requer tr\xeas entradas:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Campo"),(0,o.kt)("th",{parentName:"tr",align:null},"Tipo"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"firstname"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lastname"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dateofbirth"),(0,o.kt)("td",{parentName:"tr",align:null},"YYYY-MM-DD")))),(0,o.kt)("p",null,"Ao fornecer as informa\xe7\xf5es do usu\xe1rio, a API retornar\xe1 uma mensagem indicando se um usu\xe1rio existe ou n\xe3o. Se o usu\xe1rio existir, tamb\xe9m fornecer\xe1 informa\xe7\xf5es adicionais que voc\xea precisar\xe1 utilizar dentro de um fluxo de trabalho no ServiceNow. Voc\xea pode consultar o exemplo de resposta retornado pela API para esclarecimento:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "0",\n  "message": "User exists",\n  "user": {\n    "guest_title": "Guest",\n    "phone": "123-456-7890",\n    "host_name": "Jane Smith",\n    "host_id_number": "987654",\n    "host_email": "jane@example.com",\n    "guest_email": "john@example.com",\n    "building_location": "Building A",\n    "access_expiration": "2023-12-31"\n  }\n}\n')))}p.isMDXComponent=!0}}]);