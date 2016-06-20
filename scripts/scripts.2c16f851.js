"use strict";angular.module("centroEureApp",["ngAnimate","ngAria","ngResource","ngRoute","ngSanitize","ngMaterial"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"vm"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"vm"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("centroEureApp").controller("MainCtrl",function(){}),angular.module("centroEureApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("centroEureApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<html lang="en"> <head> <meta charset="utf-8"> </head> <body ng-app="firstApplication" style="overflow-y:visible;overflow-x:hidden"> <style>body {overflow-x:hidden;}</style> <div id="toolbarContainer" layout="column" ng-cloak> <md-content> <md-toolbar style="background-color: white; height: 100px; position: fixed"> <div class="md-toolbar-tools" style="margin-top:20px; margin-left: 50px"> <img src="Eure.png" style="width:195px;height:50px"> <div class="rightcontent"> <a style="margin-left: 20px;color:black" target="_self" href="http://localhost:9000/">HOME</a> <md-menu-bar class="buttondrop" style="margin-left: 35px"> <md-menu> <p ng-click="$mdOpenMenu()" style="color:black">QUIENES SOMOS▾</p> <md-menu-content> <md-menu-item> <p>CV CENTRO EURE</p> </md-menu-item> <md-menu-divider></md-menu-divider> <md-menu-item> <p>EQUIPO DE TRABAJO</p> </md-menu-item> <md-menu-divider></md-menu-divider> <md-menu-item> <p>ALIANZAS</p> </md-menu-item> <md-menu-divider></md-menu-divider> <md-menu-item> <p>CONTACTO</p> </md-menu-item> </md-menu-content> </md-menu> </md-menu-bar> <p style="margin-left: 24px; color:black">SERVICIOS</p> <p style="margin-left: 31px; color:black">PROYECTOS</p> <md-menu-bar class="buttondrop" style="margin-left: 32px"> <md-menu> <p ng-click="$mdOpenMenu()" style="color:black">PUBLICACIONES▾</p> <md-menu-content> <md-menu-item> <p>link 1</p> </md-menu-item> <md-menu-divider></md-menu-divider> <md-menu-item> <p>link 2</p> </md-menu-item> <md-menu-divider></md-menu-divider> <md-menu-item> <p>link 3</p> </md-menu-item> <md-menu-divider></md-menu-divider> </md-menu-content> </md-menu> </md-menu-bar> <md-menu-bar class="buttondrop" style="margin-left: 31px"> <md-menu> <p ng-click="$mdOpenMenu()" style="color:black">BIBLIOTECA▾</p> <md-menu-content> <md-menu-item> <p>link 1</p> </md-menu-item> <md-menu-divider></md-menu-divider> <md-menu-item> <p>link 2</p> </md-menu-item> <md-menu-divider></md-menu-divider> <md-menu-item> <p>link 3</p> </md-menu-item> <md-menu-divider></md-menu-divider> </md-menu-content> </md-menu> </md-menu-bar> </div> <md-button aria-label="More" style="background-color: #C46868;  margin-left: 125px; margin-top:8px"> <p style="color:white; font-size: 14px; font-family: Arial; font-weight: bold; margin: 2px 15px">CONTACTO</p> </md-button> </div> </md-toolbar> </md-content> </div> <div id="Textoslide" style="background-image:url(map.jpg);margin-top:-450px; background-position:absolute"> <span><br><br><br><br><br><br><br></span> <p style="position:inherit;color:white;margin-left: 275px; margin-top:550px; font-size: 70px;font-weight: bold">Programa Metropolitano <br> <span style="color:white;margin-left: -40px; margin-top:200px; font-size: 55px; font-weight: bold">para Mérida y sus zonas conurbadas</span> </p> <p style="color:white;margin-left: 250px; font-size: 28px; margin-top: -60px"> Identifica los grandes problemas y potenciales de la zona y propone <br> una estrategia integrada y de largo plazo para su desarrollo así como <br> los proyectos estratégicos y los instrumentos para ejecutarla, desde la <br> <center style="position:absolute;margin-left:500px;color:white;font-size: 28px; margin-top:-25px"> óptica de las sustentabilidad</center> <md-button aria-label="More" style="border-radius:7px; height: 50px;width:150px ;background-color:#A80000;margin-top:40px; margin-left: 600px"> <p style="font-family:Arial; color:white; font-size:15px; font-weight:bold">LEER MÁS</p> </md-button> <!--\n\n\n        <md-button aria-label="More" class="w3-center w3section we-large w3-text-white w3-display-middle" style="border-radius:7px; height: 90px;width:120px ;background-color:#45D331;margin-top:-140px;position:absolute; margin-left:619px">\n\n               <p class="material-icons" style="color:black">SIG</p>\n\n         </md-button>\n\n          \n\n        <md-button aria-label="More" class="w3-center w3section we-large w3-text-white w3-display-middle" style="border-radius:7px; height: 90px;width:120px ;background-color:#45D331;margin-top:-140px;position:absolute; margin-left:-762px">\n\n               <p class="material-icons" style="color:black">PREV</p>\n\n         </md-button>\n         \n--> <br><br><br><br><br><br><br><br><br><br><br><br> </p> </div>  <div> <hr style="background-color:#45D331; margin-top:-30px; ;width:100%; height:50px"> </div> <div id="CentroEure"> <p style="font-family:Arial; color:#404040 ; font-size: 30px; font-weight:bold; margin-left:590px; margin-top:50px"> Centro Eure</p> <hr style="position:absolute;margin-left:610px;margin-top:-25px" noshade color="#A80000" size="2.5px" width="10%"> <p style="color: grey; font-family:Arial; font-size: 20px; margin-left:250px; margin-top:45px"> Es una sociedad civil con 30 años de experiencia, dedicada a la investigación aplicada, así como a la<br> &nbsp;&nbsp;&nbsp;asesoría y consultoría especializadas y a la formación y divulgación del conocimiento en Estudios <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Territoriales, planeación y evolución de políticas públicas.<br> Es un espacio de análisis, reflexión y diálogo y de formulación de propuestas sobre los fenómenos y<br>&nbsp;problemas del desarrollo urbano-metropolitano y regional, del ambiente y en general de la sociedad. </p> <md-button aria-label="More" style="margin-left:600px;height: 50px; border:solid; width:150px;border-radius:7px; background-color: white; border-color:#003399; border-width:2.5px"> <p style="color:#003399"> LEER MÁS </p> </md-button> <br><br><br><br> </div> <div id="gpart" style="background-color:#F9F9F9"> <br><br><br><br> <h1 style="font-family:Arial; color:#404040 ; font-size: 30px; font-weight:bold; margin-left:490px; margin-top:10px"> Áreas de Especialización</h1> <hr style="position:absolute;margin-left:570px;margin-top:-15px" noshade color="#A80000" size="2.5px" width="15%"> <!-- Insertar imagenes--> <img src="DesarrolloUrbano.png" alt="" style="height:120px; width:190px; margin-left:200px; margin-top:150px"> <img src="Regional.png" alt="" style="height:120px; width:190px; margin-left:200px; margin-bottom:0px"> <img src="EstrategiasEspecificas.png" alt="" style="height:120px; width:190px; margin-left:170px; margin-bottom:0px"> <p style="color: grey; font-weight:bold; font-size: 17px; margin-left:200px; margin-top: 20px"> DESARROLLO URBANO - <br> &nbsp;&nbsp;&nbsp;METROPOLITANO: </p> <p style="color: grey; font-weight:bold; font-size: 17px; margin-left:625px; margin-top: -57px"> DESARROLLO<br>&nbsp;&nbsp;&nbsp;REGIONAL </p> <p style="color: grey; font-weight:bold; font-size: 17px; margin-left:950px; margin-top: -57px"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ESTUDIOS Y <br>ESTRATEGIAS ESPECIFICAS </p> <img src="PoliticaPublica.png" alt="" style="height:120px; width:190px; margin-left:190px; margin-top: 15px"> <img src="IntervencionesUrbanas.png" alt="" style="height:120px; width:190px; margin-left:200px;margin-top: 15px"> <img src="GeografiaIndicadores.png" alt="" style="height:120px; width:190px; margin-left:200px;margin-top: 15px"> <!-- Comienzan segundos, insertar imagenes--> <p style="color: grey; font-weight:bold; font-size: 17px; margin-left:250px; margin-top: 15px"> POLITICA <br>&nbsp;PUBLICA </p> <p style="color: grey; font-weight:bold; font-size: 17px; margin-left:605px; margin-top: -57px"> INTERVENCIONES<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;URBANAS </p> <p style="color: grey; font-weight:bold; font-size: 17px; margin-left:990px; margin-top: -57px"> SISTEMAS DE INFO.<br>&nbsp;&nbsp;&nbsp;GEOGRÁFICA<br> &nbsp;&nbsp;&nbsp;E INDICADORES </p> <span><br><br><br><br><br><br></span> </div> <div style="background-color:#003366"> <br><br><br><br> <h1 style="font-family:Arial; color:white; font-size: 30px; font-weight:bold; margin-left:600px; margin-top:0px"> Actualidad</h1> <hr style="position:absolute; margin-left:550px;margin-top:-15px" noshade color="#009933" size="2.5px" width="18%"> <ul> <li style="color:green;margin-left:265px"><p style="font-family:Arial;position: relative; font-weight: bold; color: white; margin-left:15px; margin-top:50px"> En la oficina del historiador de La Habana, el Director de Centro EURE ofreció un curso sobre instrum-<br>mentos de suelo urbano ante la posibilidad de apertura del mercado inmobiliario en Cuba.</p> </li> <li style="color:green; margin-left:265px; margin-top:10px"> <p style="font-family:Arial; font-weight: bold; color: white; margin-left:15px; margin-top:0px"> Centro EURE, con la Fundación Plan Estratégico de Yucatán, publicará el libro Mérida metropolitana: <br> una propuesta integral para su desarrollo. </p> </li> <li style="color:green;margin-left:265px; margin-top:10px"> <p style="font-family:Arial; font-weight: bold; color: white; margin-left:15px; margin-top:0px"> Alfonso Iracheta, Director General de Centro EURE, fue nombrado por Joan Clos, Subsecretario Gen-<br>eral de la ONU y Director Ejecutivo de ONU Hábitat, como miembro del Consejo Global Asesor del Re-<br>porte sobre el estado de las ciudades en el mundo, 2012-1013. </p> </li> <li style="color:green; margin-left:265px; margin-top:10px"> <p style="font-family:Arial; font-weight: bold; color: white; margin-left:15px; margin-top:0px"> Centro EURE, con el Instituto de Políticas para el Transporte y el Desarrollo, ITDP México, está elabo-<br> rando una metodología para la planeación de la movilidad y el desarrollo urbano. </p> </li> <li style="color:green;margin-left:265px; margin-top:10px"> <p style="font-family:Arial; font-weight: bold; color: white; margin-left:15px; margin-top:0px"> Alfonso Iracheta, Director General de Centro EURE, dará un curso en Cochabamba, Bolivia, sobre las <br> metodologías de planeación diseñadas en Centro EURE.</p> </li> </ul> <br><br><br><br><br><br> </div> <div> <hr style="background-color:#45D331; margin-top:-30px; ;width:100%; height:110px"> </div> <div> <img style="position:absolute; margin-top: -92px; margin-left: 430px" src="Googleplus.png" alt="" style="margin-top:-1px"> <img style="position:absolute; margin-top: -92px; margin-left: 530px" src="Facebooklogo.png" alt="" style="margin-top:-1px"> <img style="position:absolute; margin-top: -92px; margin-left: 630px" src="Linkedin.png" alt="" style="margin-top:-1px"> <img style="position:absolute; margin-top: -92px; margin-left: 730px" src="Twitterlogo.png" alt="" style="margin-top:-1px"> <img style="position:absolute; margin-top: -92px; margin-left: 830px" src="Instagramlogo.png" alt="" style="margin-top:-1px"> </div> <div back-ground:="white"> <br><br> <p style="font-family:Arial; color:#404040 ; font-size: 30px; font-weight:bold; margin-left:610px; margin-top:50px"> Contacto</p> <hr style="position:absolute;margin-left:535px;margin-top:-25px" noshade color="#A80000" size="1.5px" width="20%"> <form action="main_submit" method="get" accept-charset="utf-8"> <input type="text" style="position:absolute; margin-left:150px; margin-top: 100px;width:400px" name="NombreUsuario" placeholder="Nombre*:"> <input type="email" style="position:absolute; margin-left:150px; margin-top: 150px;width:400px" name="Email" placeholder="Correo Electrónico*:"> <input type="text" style="position:absolute; margin-left:150px; margin-top: 200px;width:400px" name="Title" placeholder="Título*:"> <input type="text" style="position:absolute; margin-left:150px; margin-top: 250px;width:400px;height:50px" name="Message" placeholder="Mensaje*:"> </form> <md-button aria-label="More" style="position:absolute;border-radius:7px; height: 50px;width:150px ;background-color:#A80000;margin-top:330px; margin-left: 150px"> <p style="font-family:Arial; color:white; font-size:15px; font-weight:bold">ENVIAR</p> </md-button> <p style="font-family:arial;position:absolute;margin-top:90px;margin-left:650px;font-family:Arial; color:#A80000; font-size:20px; font-weight:bold">DETALLES DE CONTACTO</p> <p style="font-family:Arial;position:absolute;margin-top:130px;margin-left:785px;font-family:Arial; color:grey; font-size:20px; font-weight:bold">TELÉFONO:</p> <p style="font-family:Arial;position:absolute;margin-top:155px;margin-left:785px;font-family:Arial; color:grey; font-size:20px; font-weight:bold">+52 (728) 282 20 72 <br> +52 (728) 282 26 98</p> <p style="font-family:Arial;position:absolute;margin-top:220px;margin-left:785px;font-family:Arial; color:grey; font-size:20px; font-weight:bold">E-MAIL</p> <p style="font-family:Arial;position:absolute;margin-top:245px;margin-left:785px;font-family:Arial; color:grey; font-size:20px; font-weight:bold"> contacto@cetroeure.org.mx </p> <img style="position:absolute; margin-top:135px; margin-left:650px" src="Teléfono.png" alt=""> <img style="position:absolute; margin-top:215px; margin-left:650px" src="Email.png" alt=""> </div> <div> <hr style="background-color:#383838 ; font-weight:bold;margin-top:500px; ;width:100%; height:80px"> <p style="font-weight:bold;margin-top:-55px;position:absolute;color:#808080 ; font-family: arial;size:2.5px"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2015 Centro Eure / Designed by </p> <p style="font-weight:bold;margin-top:-55px;margin-left:329px;position:absolute;color:#D0D0D0  ; font-family: arial;size:2.5px"> &nbsp;&nbsp;Spaceshiplabs. ALL RIGHTS RESERVED. </p> <a style="margin-top:-55px;margin-left:785px;position:absolute;color:#A80000 ;font-weight: bold; font-family: arial;size:2px; text-decoration:none" href="http://localhost:9000/" target="_self"> HOME </a> <a style="margin-top:-55px;margin-left:845px;position:absolute;color:white ;font-weight: bold; font-family: arial;size:2px; text-decoration:none" href="http://localhost:9000/" target="_self"> Quiénes somos </a> <a style="margin-top:-55px;margin-left:975px;position:absolute;color:white ;font-weight: bold; font-family: arial;size:2px; text-decoration:none" href="http://localhost:9000/" target="_self"> Servicios </a> <a style="margin-top:-55px;margin-left:1055px;position:absolute;color:white ;font-weight: bold; font-family: arial;size:2px; text-decoration:none" href="http://localhost:9000/" target="_self"> Proyectos </a> <a style="margin-top:-55px;margin-left:1140px;position:absolute;color:white ;font-weight: bold; font-family: arial;size:2px; text-decoration:none" href="http://localhost:9000/" target="_self"> Publicaciones </a> <a style="margin-top:-55px;margin-left:1255px;position:absolute;color:white ;font-weight: bold; font-family: arial;size:2px; text-decoration:none" href="http://localhost:9000/" target="_self"> Biblioteca </a> </div> </body> </html>'),a.put("views/pagdesalineada.html",'<html lang="en"> <head> <meta charset="utf-8"> </head> <body ng-app="firstApplication" style="overflow-y:visible;overflow-x:hidden"> <style>body {overflow-x:hidden;}</style> <div id="toolbarContainer" layout="column" ng-cloak> <md-content> <md-toolbar style="background-color: white; height: 100px; position: fixed"> <div class="md-toolbar-tools" style="margin-top:20px; margin-left: 50px"> <img src="Eure.png" style="width:195px;height:50px"> <div class="rightcontent"> <a style="margin-left: 20px;color:black" target="_self" href="http://localhost:9000/">HOME</a> <md-menu-bar class="buttondrop" style="margin-left: 35px"> <md-menu> <p ng-click="$mdOpenMenu()" style="color:black">QUIENES SOMOS▾</p> <md-menu-content> <md-menu-item> <p>CV CENTRO EURE</p> </md-menu-item> <md-menu-divider></md-menu-divider> <md-menu-item> <p>EQUIPO DE TRABAJO</p> </md-menu-item> <md-menu-divider></md-menu-divider> <md-menu-item> <p>ALIANZAS</p> </md-menu-item> <md-menu-divider></md-menu-divider> <md-menu-item> <p>CONTACTO</p> </md-menu-item> </md-menu-content> </md-menu> </md-menu-bar> <p style="margin-left: 24px; color:black">SERVICIOS</p> <p style="margin-left: 31px; color:black">PROYECTOS</p> <md-menu-bar class="buttondrop" style="margin-left: 32px"> <md-menu> <p ng-click="$mdOpenMenu()" style="color:black">PUBLICACIONES▾</p> <md-menu-content> <md-menu-item> <p>link 1</p> </md-menu-item> <md-menu-divider></md-menu-divider> <md-menu-item> <p>link 2</p> </md-menu-item> <md-menu-divider></md-menu-divider> <md-menu-item> <p>link 3</p> </md-menu-item> <md-menu-divider></md-menu-divider> </md-menu-content> </md-menu> </md-menu-bar> <md-menu-bar class="buttondrop" style="margin-left: 31px"> <md-menu> <p ng-click="$mdOpenMenu()" style="color:black">BIBLIOTECA▾</p> <md-menu-content> <md-menu-item> <p>link 1</p> </md-menu-item> <md-menu-divider></md-menu-divider> <md-menu-item> <p>link 2</p> </md-menu-item> <md-menu-divider></md-menu-divider> <md-menu-item> <p>link 3</p> </md-menu-item> <md-menu-divider></md-menu-divider> </md-menu-content> </md-menu> </md-menu-bar> </div> <md-button aria-label="More" style="background-color: #C46868;  margin-left: 125px; margin-top:8px"> <p style="color:white; font-size: 14px; font-family: Arial; font-weight: bold; margin: 2px 15px">CONTACTO</p> </md-button> </div> </md-toolbar> </md-content> </div> <div id="Textoslide" style="background-image:url(map.jpg);margin-top:-450px; background-position:absolute"> <span><br><br><br><br><br><br><br></span> <p style="position:inherit;color:white;margin-left: 275px; margin-top:550px; font-size: 70px;font-weight: bold">Programa Metropolitano <br> <span style="color:white;margin-left: -40px; margin-top:200px; font-size: 55px; font-weight: bold">para Mérida y sus zonas conurbadas</span> </p> <p style="color:white;margin-left: 250px; font-size: 28px; margin-top: -60px"> Identifica los grandes problemas y potenciales de la zona y propone <br> una estrategia integrada y de largo plazo para su desarrollo así como <br> los proyectos estratégicos y los instrumentos para ejecutarla, desde la <br> <center style="position:absolute;margin-left:500px;color:white;font-size: 28px; margin-top:-25px"> óptica de las sustentabilidad</center> <md-button aria-label="More" style="border-radius:7px; height: 50px;width:150px ;background-color:#A80000;margin-top:40px; margin-left: 600px"> <p style="font-family:Arial; color:white; font-size:15px; font-weight:bold">LEER MÁS</p> </md-button> <!--\n\n\n        <md-button aria-label="More" class="w3-center w3section we-large w3-text-white w3-display-middle" style="border-radius:7px; height: 90px;width:120px ;background-color:#45D331;margin-top:-140px;position:absolute; margin-left:619px">\n\n               <p class="material-icons" style="color:black">SIG</p>\n\n         </md-button>\n\n          \n\n        <md-button aria-label="More" class="w3-center w3section we-large w3-text-white w3-display-middle" style="border-radius:7px; height: 90px;width:120px ;background-color:#45D331;margin-top:-140px;position:absolute; margin-left:-762px">\n\n               <p class="material-icons" style="color:black">PREV</p>\n\n         </md-button>\n         \n--> <br><br><br><br><br><br><br><br><br><br><br><br> </p> </div>  <div> <hr style="background-color:#45D331; margin-top:-30px; ;width:100%; height:50px"> </div> <div id="CentroEure"> <p style="font-family:Arial; color:#404040 ; font-size: 30px; font-weight:bold; margin-left:590px; margin-top:50px"> Centro Eure</p> <hr style="position:absolute;margin-left:610px;margin-top:-25px" noshade color="#A80000" size="2.5px" width="10%"> <p style="color: grey; font-family:Arial; font-size: 20px; margin-left:250px; margin-top:45px"> Es una sociedad civil con 30 años de experiencia, dedicada a la investigación aplicada, así como a la<br> &nbsp;&nbsp;&nbsp;asesoría y consultoría especializadas y a la formación y divulgación del conocimiento en Estudios <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Territoriales, planeación y evolución de políticas públicas.<br> Es un espacio de análisis, reflexión y diálogo y de formulación de propuestas sobre los fenómenos y<br>&nbsp;problemas del desarrollo urbano-metropolitano y regional, del ambiente y en general de la sociedad. </p> <md-button aria-label="More" style="margin-left:600px;height: 50px; border:solid; width:150px;border-radius:7px; background-color: white; border-color:#003399; border-width:2.5px"> <p style="color:#003399"> LEER MÁS </p> </md-button> <br><br><br><br> </div> <div id="gpart" style="background-color:#F9F9F9"> <br><br><br><br> <h1 style="font-family:Arial; color:#404040 ; font-size: 30px; font-weight:bold; margin-left:490px; margin-top:10px"> Áreas de Especialización</h1> <hr style="position:absolute;margin-left:570px;margin-top:-15px" noshade color="#A80000" size="2.5px" width="15%"> <!-- Insertar imagenes--> <img src="DesarrolloUrbano.png" alt="" style="height:120px; width:190px; margin-left:200px; margin-top:150px"> <img src="Regional.png" alt="" style="height:120px; width:190px; margin-left:200px; margin-bottom:0px"> <img src="EstrategiasEspecificas.png" alt="" style="height:120px; width:190px; margin-left:170px; margin-bottom:0px"> <p style="color: grey; font-weight:bold; font-size: 17px; margin-left:200px; margin-top: 20px"> DESARROLLO URBANO - <br> &nbsp;&nbsp;&nbsp;METROPOLITANO: </p> <p style="color: grey; font-weight:bold; font-size: 17px; margin-left:625px; margin-top: -57px"> DESARROLLO<br>&nbsp;&nbsp;&nbsp;REGIONAL </p> <p style="color: grey; font-weight:bold; font-size: 17px; margin-left:950px; margin-top: -57px"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ESTUDIOS Y <br>ESTRATEGIAS ESPECIFICAS </p> <img src="PoliticaPublica.png" alt="" style="height:120px; width:190px; margin-left:190px; margin-top: 15px"> <img src="IntervencionesUrbanas.png" alt="" style="height:120px; width:190px; margin-left:200px;margin-top: 15px"> <img src="GeografiaIndicadores.png" alt="" style="height:120px; width:190px; margin-left:200px;margin-top: 15px"> <!-- Comienzan segundos, insertar imagenes--> <p style="color: grey; font-weight:bold; font-size: 17px; margin-left:250px; margin-top: 15px"> POLITICA <br>&nbsp;PUBLICA </p> <p style="color: grey; font-weight:bold; font-size: 17px; margin-left:605px; margin-top: -57px"> INTERVENCIONES<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;URBANAS </p> <p style="color: grey; font-weight:bold; font-size: 17px; margin-left:990px; margin-top: -57px"> SISTEMAS DE INFO.<br>&nbsp;&nbsp;&nbsp;GEOGRÁFICA<br> &nbsp;&nbsp;&nbsp;E INDICADORES </p> <span><br><br><br><br><br><br></span> </div> <div style="background-color:#003366"> <br><br><br><br> <h1 style="font-family:Arial; color:white; font-size: 30px; font-weight:bold; margin-left:600px; margin-top:0px"> Actualidad</h1> <hr style="position:absolute; margin-left:550px;margin-top:-15px" noshade color="#009933" size="2.5px" width="18%"> <ul> <li style="color:green;margin-left:265px"><p style="font-family:Arial;position: relative; font-weight: bold; color: white; margin-left:15px; margin-top:50px"> En la oficina del historiador de La Habana, el Director de Centro EURE ofreció un curso sobre instrum-<br>mentos de suelo urbano ante la posibilidad de apertura del mercado inmobiliario en Cuba.</p> </li> <li style="color:green; margin-left:265px; margin-top:10px"> <p style="font-family:Arial; font-weight: bold; color: white; margin-left:15px; margin-top:0px"> Centro EURE, con la Fundación Plan Estratégico de Yucatán, publicará el libro Mérida metropolitana: <br> una propuesta integral para su desarrollo. </p> </li> <li style="color:green;margin-left:265px; margin-top:10px"> <p style="font-family:Arial; font-weight: bold; color: white; margin-left:15px; margin-top:0px"> Alfonso Iracheta, Director General de Centro EURE, fue nombrado por Joan Clos, Subsecretario Gen-<br>eral de la ONU y Director Ejecutivo de ONU Hábitat, como miembro del Consejo Global Asesor del Re-<br>porte sobre el estado de las ciudades en el mundo, 2012-1013. </p> </li> <li style="color:green; margin-left:265px; margin-top:10px"> <p style="font-family:Arial; font-weight: bold; color: white; margin-left:15px; margin-top:0px"> Centro EURE, con el Instituto de Políticas para el Transporte y el Desarrollo, ITDP México, está elabo-<br> rando una metodología para la planeación de la movilidad y el desarrollo urbano. </p> </li> <li style="color:green;margin-left:265px; margin-top:10px"> <p style="font-family:Arial; font-weight: bold; color: white; margin-left:15px; margin-top:0px"> Alfonso Iracheta, Director General de Centro EURE, dará un curso en Cochabamba, Bolivia, sobre las <br> metodologías de planeación diseñadas en Centro EURE.</p> </li> </ul> <br><br><br><br><br><br> </div> <div> <hr style="background-color:#45D331; margin-top:-30px; ;width:100%; height:110px"> </div> <div> <img style="position:absolute; margin-top: -92px; margin-left: 430px" src="Googleplus.png" alt="" style="margin-top:-1px"> <img style="position:absolute; margin-top: -92px; margin-left: 530px" src="Facebooklogo.png" alt="" style="margin-top:-1px"> <img style="position:absolute; margin-top: -92px; margin-left: 630px" src="Linkedin.png" alt="" style="margin-top:-1px"> <img style="position:absolute; margin-top: -92px; margin-left: 730px" src="Twitterlogo.png" alt="" style="margin-top:-1px"> <img style="position:absolute; margin-top: -92px; margin-left: 830px" src="Instagramlogo.png" alt="" style="margin-top:-1px"> </div> <div back-ground:="white"> <br><br> <p style="font-family:Arial; color:#404040 ; font-size: 30px; font-weight:bold; margin-left:610px; margin-top:50px"> Contacto</p> <hr style="position:absolute;margin-left:535px;margin-top:-25px" noshade color="#A80000" size="1.5px" width="20%"> <form action="main_submit" method="get" accept-charset="utf-8"> <input type="text" style="position:absolute; margin-left:150px; margin-top: 100px;width:400px" name="NombreUsuario" placeholder="Nombre*:"> <input type="email" style="position:absolute; margin-left:150px; margin-top: 150px;width:400px" name="Email" placeholder="Correo Electrónico*:"> <input type="text" style="position:absolute; margin-left:150px; margin-top: 200px;width:400px" name="Title" placeholder="Título*:"> <input type="text" style="position:absolute; margin-left:150px; margin-top: 250px;width:400px;height:50px" name="Message" placeholder="Mensaje*:"> </form> <md-button aria-label="More" style="position:absolute;border-radius:7px; height: 50px;width:150px ;background-color:#A80000;margin-top:330px; margin-left: 150px"> <p style="font-family:Arial; color:white; font-size:15px; font-weight:bold">ENVIAR</p> </md-button> <p style="font-family:arial;position:absolute;margin-top:90px;margin-left:650px;font-family:Arial; color:#A80000; font-size:20px; font-weight:bold">DETALLES DE CONTACTO</p> <p style="font-family:Arial;position:absolute;margin-top:130px;margin-left:785px;font-family:Arial; color:grey; font-size:20px; font-weight:bold">TELÉFONO:</p> <p style="font-family:Arial;position:absolute;margin-top:155px;margin-left:785px;font-family:Arial; color:grey; font-size:20px; font-weight:bold">+52 (728) 282 20 72 <br> +52 (728) 282 26 98</p> <p style="font-family:Arial;position:absolute;margin-top:220px;margin-left:785px;font-family:Arial; color:grey; font-size:20px; font-weight:bold">E-MAIL</p> <p style="font-family:Arial;position:absolute;margin-top:245px;margin-left:785px;font-family:Arial; color:grey; font-size:20px; font-weight:bold"> contacto@cetroeure.org.mx </p> <img style="position:absolute; margin-top:135px; margin-left:650px" src="Teléfono.png" alt=""> <img style="position:absolute; margin-top:215px; margin-left:650px" src="Email.png" alt=""> </div> <div> <hr style="background-color:#383838 ; font-weight:bold;margin-top:500px; ;width:100%; height:80px"> <p style="font-weight:bold;margin-top:-55px;position:absolute;color:#808080 ; font-family: arial;size:2.5px"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2015 Centro Eure / Designed by </p> <p style="font-weight:bold;margin-top:-55px;margin-left:329px;position:absolute;color:#D0D0D0  ; font-family: arial;size:2.5px"> &nbsp;&nbsp;Spaceshiplabs. ALL RIGHTS RESERVED. </p> <a style="margin-top:-55px;margin-left:785px;position:absolute;color:#A80000 ;font-weight: bold; font-family: arial;size:2px; text-decoration:none" href="http://localhost:9000/" target="_self"> HOME </a> <a style="margin-top:-55px;margin-left:845px;position:absolute;color:white ;font-weight: bold; font-family: arial;size:2px; text-decoration:none" href="http://localhost:9000/" target="_self"> Quiénes somos </a> <a style="margin-top:-55px;margin-left:975px;position:absolute;color:white ;font-weight: bold; font-family: arial;size:2px; text-decoration:none" href="http://localhost:9000/" target="_self"> Servicios </a> <a style="margin-top:-55px;margin-left:1055px;position:absolute;color:white ;font-weight: bold; font-family: arial;size:2px; text-decoration:none" href="http://localhost:9000/" target="_self"> Proyectos </a> <a style="margin-top:-55px;margin-left:1140px;position:absolute;color:white ;font-weight: bold; font-family: arial;size:2px; text-decoration:none" href="http://localhost:9000/" target="_self"> Publicaciones </a> <a style="margin-top:-55px;margin-left:1255px;position:absolute;color:white ;font-weight: bold; font-family: arial;size:2px; text-decoration:none" href="http://localhost:9000/" target="_self"> Biblioteca </a> </div> </body> </html>')}]);