"use strict";(self.webpackChunkdocudocu=self.webpackChunkdocudocu||[]).push([[465],{868:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(4848),r=n(8453);const i={sidebar_position:3},o="Manual de Instalaci\xf3n",l={id:"tutorial-basics/Docker-Script-SSL",title:"Manual de Instalaci\xf3n",description:"Docker + GitLab + SSL",source:"@site/docs/tutorial-basics/Docker-Script-SSL.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Docker-Script-SSL",permalink:"/documentacion/docs/tutorial-basics/Docker-Script-SSL",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/Docker-Script-SSL.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n del Facturador",permalink:"/documentacion/docs/tutorial-basics/SSL-Externa-Independiente"},next:{title:"Manual de Instalaci\xf3n Linux",permalink:"/documentacion/docs/tutorial-basics/Linux-Valet"}},c={},d=[{value:"Docker + GitLab + SSL",id:"docker--gitlab--ssl",level:3},{value:"PRO1 | PRO2",id:"pro1--pro2",level:5},{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Requisitos previos",id:"requisitos-previos",level:2},{value:"Pasos",id:"pasos",level:2}];function t(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"manual-de-instalaci\xf3n",children:"Manual de Instalaci\xf3n"}),"\n",(0,a.jsx)(s.h3,{id:"docker--gitlab--ssl",children:"Docker + GitLab + SSL"}),"\n",(0,a.jsx)(s.h5,{id:"pro1--pro2",children:"PRO1 | PRO2"}),"\n",(0,a.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(s.p,{children:"Hemos elaborado un script para uso en instancias Linux, este es un archivo .sh que actualiza el sistema, instala las herramientas, sus dependencias, configura un certificado SSL renovable cada 90 d\xedas que debe ser confirmado en el proceso con su dominio y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos , su ejecuci\xf3n es muy sencilla."}),"\n",(0,a.jsx)(s.h2,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Tener acceso a su servidor, vps, m\xe1quina virtual o local via SSH, en las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave ssh que puede ser un archivo .ppk o .pem."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Tener instalado una versi\xf3n de ssh en su m\xe1quina para conectarse de manera remota, puede utilizar putty, filezilla o una consola terminal."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Es importante configurar su dominio apuntando a la IP de su instancia para que durante la ejecuci\xf3n del script se valide el certificado SSL y al finalizar la ejecuci\xf3n no tenga errores y todo est\xe9 listo para realizar pruebas. Edite los r\xe9cords A y CNAME donde A debe contener su IP y CNAME el valor * (asterisco) para que se tomen los subdominios registrados por la herramienta."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Alt text",src:n(9972).A+"",width:"1152",height:"648"})}),"\n",(0,a.jsxs)(s.ol,{start:"4",children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Durante la ejecuci\xf3n del script deber\xe1 almacenar en su dominio dos registros TXT con unos valores que se mostrar\xe1n en pantalla, estos registros son validados en directo y no pueden tardar m\xe1s de 2 minutos en validarse en su dominio."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasar\xe1n a usarse con el aplicativo y los contenedores de Docker."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"pasos",children:"Pasos"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Acceder a su instancia v\xeda SSH."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Loguearse como super usuario"}),"\n",(0,a.jsx)(s.p,{children:"Ejecute:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"sudo su\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Ubicarse en la carpeta del usuario, por ejemplo:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"cd /home/ubuntu/\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Crear el archivo install."}),"\n",(0,a.jsx)(s.p,{children:"Ejecute:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"touch install.sh\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Editar el archivo con su editor preferido."}),"\n",(0,a.jsx)(s.p,{children:"Ejecute:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nano install.sh\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"En el archivo debe agregar el contenido del siguiente enlace:"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://gitlab.com/-/snippets/1852652",children:"https://gitlab.com/snippets/1852652"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"Observar\xe1 a una p\xe1gina como la siguiente, donde debe copiar el contenido del script y pegarlo en su archivo install.sh, es importante que mantenga las estructura del mismo."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Alt text",src:n(1192).A+"",width:"602",height:"363"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Para salir de editor y guardar puede presionar \u201c",(0,a.jsx)(s.strong,{children:"ctrl + x"}),"\u201d seguidamente se le consultar\xe1 si desea guardar los cambios, confirme con \u201c",(0,a.jsx)(s.strong,{children:"y"}),"\u201d y luego \u201c",(0,a.jsx)(s.strong,{children:"enter"}),"\u201d."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Debe darle permisos de ejecuci\xf3n al archivo:"}),"\n",(0,a.jsx)(s.p,{children:"Ejecute:"}),"\n",(0,a.jsx)(s.p,{children:"chmod +x install.sh"}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"El comando a utilizar requiere de dos par\xe1metros principalmente:"}),"\n",(0,a.jsx)(s.p,{children:"./install.sh [repositorio] [dominio]"}),"\n",(0,a.jsx)(s.p,{children:"Por ejemplo:"}),"\n",(0,a.jsxs)(s.p,{children:["./install.sh ",(0,a.jsx)(s.a,{href:"https://gitlab.com/rash07/facturadorpro2",children:"https://gitlab.com/rash07/facturadorpro2"})," elfacturador.com"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Una vez ejecutado el comando se iniciar\xe1 un proceso donde debe ir aceptando las preguntas y que le mostrar\xe1 en pantalla los valores que debe a\xf1adir en los 2 r\xe9cords tipo TXT de su dominio con nombre."}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"_acme-challenge.example.com"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"_acme-challenge"})," (casos como godday y puntope)\r\nen la siguiente imagen le muestran el valor como v703JW.... debera copiarlo y a\xf1adirlo al primer record TXT, seguidamente pulsar enter, se le mostrar\xe1 en pantalla un segundo valor para el segundo TXT"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Alt text",src:n(5442).A+"",width:"576",height:"144"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Editados los r\xe9cords en su dominio, deber\xe1 aceptar para continuar y que el proceso verifique que sea exitoso, de ser exitoso obtendr\xe1 una pantalla similar a la siguiente:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Alt text",src:n(8349).A+"",width:"615",height:"302"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Continuar\xe1 el proceso de actualizaci\xf3n del sistema, se le solicitar\xe1 el usuario y contrase\xf1a de GitLab, para que se pueda clonar/descargar el proyecto en su instancia, luego culminar\xe1 y tendr\xe1 los accesos listos en su dominio:"}),"\n",(0,a.jsxs)(s.p,{children:["Correo: ",(0,a.jsx)(s.a,{href:"mailto:admin@gmail.com",children:"admin@gmail.com"}),(0,a.jsx)(s.br,{}),"\n","Contrase\xf1a: 123456"]}),"\n",(0,a.jsx)(s.p,{children:"Una vez finalizado, puede proseguir con el manual de pruebas o dem\xe1s documentaci\xf3n de cada proyecto, sus URL son:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.admonition,{title:"Recomendado",type:"info",children:(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Luego de instalar el facturador puede cambiar algunos par\xe1metros en el archivo .env como:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"La direcci\xf3n de env\xedo de correos que utiliza el facturador para enviar los archivos pdf, xml y cdr a sus clientes"}),"\n",(0,a.jsx)(s.li,{children:"Cambiar algunas configuraciones de plantillas de los pdf entre otros"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Recuerde que siempre que se edita el archivo .env debe utilizar el comando \u201cphp artisan config",":cache","\u201d dentro del contenedor de fpm1, para m\xe1s detalles puede observar el manual de actualizaci\xf3n ",(0,a.jsx)(s.a,{href:"https://docs.google.com/document/d/11PI1a9yjCPfH9CCuWmJSrdj1V8IEUffqurqvdkw29co/edit#heading=h.5gkh9djmh9b",children:"aqui"})]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"La ruta donde ejecute el script ser\xe1 donde se clone el repositorio, debe verificar que los usuarios del servidor tengan permisos a dicha ruta si desea acceder desde ftp o scp."}),"\n"]}),"\n"]})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},5442:(e,s,n)=>{n.d(s,{A:()=>a});const a="data:image/jpeg;base64,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"},8349:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/Deploy-2-4c4e61792e0ca2cdb4d182f80db44704.jpg"},1192:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/Facturador-PRO2-24b4b9c7c96903b38b7ff47ad9872128.jpg"},9972:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/Facturador-dns-5dd7914f79a9e892b53b63674752e0da.jpg"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var a=n(6540);const r={},i=a.createContext(r);function o(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);