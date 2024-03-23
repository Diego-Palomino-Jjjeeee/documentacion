"use strict";(self.webpackChunkdocudocu=self.webpackChunkdocudocu||[]).push([[222],{6385:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var a=s(4848),i=s(8453);const r={sidebar_position:1},c="Manual para Script de Instalaci\xf3n",l={id:"tutorial-basics/Docker-Script-PRO4",title:"Manual para Script de Instalaci\xf3n",description:"Docker | GitLab | Opci\xf3n SSL | Opci\xf3n SSH",source:"@site/docs/tutorial-basics/Docker-Script-PRO4.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Docker-Script-PRO4",permalink:"/documentacion/docs/tutorial-basics/Docker-Script-PRO4",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/Docker-Script-PRO4.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Documentacion del facturador",permalink:"/documentacion/docs/category/documentacion-del-facturador"},next:{title:"Instalaci\xf3n del Facturador",permalink:"/documentacion/docs/tutorial-basics/SSL-Externa-Independiente"}},o={},t=[{value:"Docker | GitLab | Opci\xf3n SSL | Opci\xf3n SSH",id:"docker--gitlab--opci\xf3n-ssl--opci\xf3n-ssh",level:3},{value:"Facturador PRO4",id:"facturador-pro4",level:5},{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Requisitos previos",id:"requisitos-previos",level:2},{value:"Pasos",id:"pasos",level:2},{value:"Enlaces de Inter\xe9s",id:"enlaces-de-inter\xe9s",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"manual-para-script-de-instalaci\xf3n",children:"Manual para Script de Instalaci\xf3n"}),"\n",(0,a.jsx)(n.h3,{id:"docker--gitlab--opci\xf3n-ssl--opci\xf3n-ssh",children:"Docker | GitLab | Opci\xf3n SSL | Opci\xf3n SSH"}),"\n",(0,a.jsx)(n.h5,{id:"facturador-pro4",children:"Facturador PRO4"}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Hemos elaborado un script para uso en instancias Linux con Ubuntu 18 o superior, este es un archivo que actualiza el sistema, instala las herramientas, sus dependencias y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos (siempre y cuando el dominio ya est\xe9 configurado hacia la instancia), su ejecuci\xf3n es muy sencilla."}),"\n",(0,a.jsx)(n.h2,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Tener acceso a su ",(0,a.jsx)(n.strong,{children:"servidor"}),", ",(0,a.jsx)(n.strong,{children:"vps"}),",",(0,a.jsx)(n.strong,{children:"m\xe1quina virtual o local via SSH"}),", en las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave ssh que puede ser un archivo .ppk o .pem, recuerde almacenarlas en su equipo local."]}),"\n",(0,a.jsxs)(n.li,{children:["Tener instalado una versi\xf3n de ssh en su m\xe1quina para conectarse de manera remota, puede utilizar putty, filezilla o una consola terminal. para mayor informaci\xf3n sobre el acceso SSH visite los siguientes manuales:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#heading=h.nezjsyganf1w",children:"Gu\xeda para acceder con Putty (gesti\xf3n de servidor)"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.google.com/document/d/1Xpri2102N4b5C-dG-FVPXW5ZWjEz5S4iDjpvl7Zwq2E/edit#heading=h.nezjsyganf1w",children:"Gu\xeda para acceder con Winscp (gesti\xf3n de archivos con aplicaci\xf3n de escritorio)"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Si es posible ",(0,a.jsx)(n.strong,{children:"configurar su dominio apuntando a su instancia para que al finalizar la instalaci\xf3n se encuentre disponible el aplicativo"}),". Edite los r\xe9cords A y CNAME donde A debe contener su IP y CNAME el valor * (asterisco) para que se tomen los subdominios registrados por la herramienta."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Alt text",src:s(9972).A+"",width:"1152",height:"648"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasar\xe1n a usar el aplicativo con los contenedores de Docker."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"pasos",children:"Pasos"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Acceder a su instancia v\xeda SSH."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Loguearse como super usuario."}),"\n",(0,a.jsx)(n.p,{children:"Ejecute:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo su\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Clonar el snippet de gitlab que contiene el script."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://gitlab.com/snippets/2079063.git script\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Ingrese a la carpeta clonada."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd script\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Dar permisos de ejecuci\xf3n al script."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"chmod +x install.sh\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"El comando a utilizar para iniciar el despliegue requiere de un par\xe1metro principalmente:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./install.sh [dominio]\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Por ejemplo:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./install.sh facturador.pro\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Una vez ejecutado el comando iniciar\xe1 el proceso de actualizaci\xf3n del sistema, en el proceso se le solicitar\xe1:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"El usuario y contrase\xf1a de GitLab, para que se pueda descargar el proyecto en su instancia"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Si desea instalar  SSL gratuito, tenga en cuenta que este debe ser actualizado cada 90 d\xedas, el mensaje ser\xe1 el siguiente:"}),"\n",(0,a.jsx)(n.p,{children:"Instalar con SSL? (debe tener acceso al panel de su dominio para editar/agregar records TXT). si[s] no[n]"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Deber\xe1 contestar con \u201cs\u201d o \u201cn\u201d para continuar"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Si selecciona ",(0,a.jsx)(n.strong,{children:"S\xcd"}),", deber\xe1 contestar las siguientes preguntas con \u201cy\u201d, son 2 en total, seguidamente se le ofrecer\xe1 un c\xf3digo que debe a\xf1adir en un r\xe9cord tipo TXT en su dominio quedando como ",(0,a.jsx)(n.strong,{children:"_acme-challenge.example.com"})," o simplemente ",(0,a.jsx)(n.strong,{children:"_acme-challenge"})," depender\xe1 de su proveedor."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Alt text",src:s(4940).A+"",width:"456",height:"112"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Para continuar presione ",(0,a.jsx)(n.strong,{children:"enter"}),", luego deber\xe1 repetir las acciones para a\xf1adir un segundo c\xf3digo y habr\xe1 finalizado la configuraci\xf3n, si el proceso es exitoso la ejecuci\xf3n del script continuar\xe1."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Si desea obtener y gestionar actualizaciones autom\xe1ticas, deber\xe1 disponer de su sesi\xf3n de gitlab al momento"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Configurar clave SSH para actualizaci\xf3n autom\xe1tica? (requiere acceso a https://gitlab.com/profile/keys). si[s] no[n]\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Deber\xe1 contestar con \u201cs\u201d o \u201cn\u201d para continuar"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"De seleccionar S\xcd, al final del despliegue se le dar\xe1 un extracto de texto que debe a\xf1adir a su configuraci\xf3n de gitlab"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Alt text",src:s(5978).A+"",width:"459",height:"289"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Finalizado el script y dependiendo de sus selecciones anteriores, se le entregar\xe1 varios datos que debe guardar, como:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Usuario administrador"}),"\n",(0,a.jsx)(n.li,{children:"Contrase\xf1a para usuario administrador"}),"\n",(0,a.jsx)(n.li,{children:"Url del proyecto"}),"\n",(0,a.jsx)(n.li,{children:"Ubicaci\xf3n del proyecto dentro del servidor"}),"\n",(0,a.jsx)(n.li,{children:"Clave ssh para a\xf1adir a gitlab (obligatorio para quienes seleccionan la instalaci\xf3n de SSH)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"enlaces-de-inter\xe9s",children:"Enlaces de Inter\xe9s"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://gitlab.com/b.mendoza/facturadorpro3/-/snippets/1955372",children:"Actualizaci\xf3n de SSL"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://gitlab.com/b.mendoza/facturadorpro3/-/wikis/Script-Update-Docker",children:"Actualizaci\xf3n mediante ejecuci\xf3n Script para instalaciones Docker"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.google.com/document/d/1D87YJ9fq9yHiAauu6SGVugiC3m_i42DrFUt6VKYXuDI/edit#heading=h.5gkh9djmh9b",children:"Gesti\xf3n de SSL independiente, no el que incorpora el Script"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://gitlab.com/b.mendoza/facturadorpro3/-/snippets/1971490",children:"Gu\xeda gitlab para la instalaci\xf3n, contiene el script usado en el presente manual"})," adem\xe1s posee los par\xe1metros extras que pueden usarse en la ejecuci\xf3n del paso"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4940:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/Deploy-9a2e90c29f9b9401542dee76f93dca5e.jpg"},9972:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/Facturador-dns-5dd7914f79a9e892b53b63674752e0da.jpg"},5978:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/ssh-keys-21539f5d476da90f953c6119915ee621.jpg"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var a=s(6540);const i={},r=a.createContext(i);function c(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);