|![](Aspose.Words.53f63bd4-d4d3-4b5a-9f4c-283218ed5087.001.jpeg) |**VICERRECTORADO DOCENTE** |**Código:** GUIA-PRL-001** |
| -: | :-: | :- |
||CONSEJO ACADÉMICO |**Aprobación:** 2016/04/06 |
|**Formato:** Guía de Práctica de Laboratorio / Talleres / Centros de Simulación** |

**


|<p>![](Aspose.Words.53f63bd4-d4d3-4b5a-9f4c-283218ed5087.002.jpeg)**FORMATO DE INFORME DE PRÁCTICA DE LABORATORIO / TALLERES /** </p><p>**CENTROS DE SIMULACIÓN – PARA ESTUDIANTES** </p><p>** </p><p>** </p>|
| -: |
|**CARRERA**:COMPUTACION  |**ASIGNATURA**: Sistemas Distribuidos|
|**NRO. PRÁCTICA**: |30 |**TÍTULO PRÁCTICA**:   1|
|<p></p><p></p><p></p><p></p>|
|<p>`		`**ACTIVIDADES DESARROLLADAS** </p><p></p><p>**Modelo Relacional de la base datos** </p><p></p><p>![Interfaz de usuario gráfica, Diagrama, Tabla

Descripción generada automáticamente](Aspose.Words.53f63bd4-d4d3-4b5a-9f4c-283218ed5087.003.png)</p><p></p><p></p><p></p><p>**Modelo Físico**</p><p></p><p></p><p></p><p>![Diagrama

Descripción generada automáticamente](Aspose.Words.53f63bd4-d4d3-4b5a-9f4c-283218ed5087.004.png)</p><p></p><p></p><p></p><p></p><p>**En cuanto a la implementación a la implementación usamos como FrontEnd Ionic y como ESB mulesfot, el cliente hace las peticiones desde Ionic, según el banco que hayamos elegido para poder hacer la transacción interbancaria comunicará con las respectivas bases de datos usando como intermediario el ESB que nos ayuda a comunicarnos con las API’s de los bancos, nosotros elegimos el banco usando la una API que esta en la nube esta nos proporciona el nombre de los bancos.**</p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p>**El primer Flow nos ayuda a obtener id del usuario usando el correo y la contraseña usando la siguiente sentencia:**</p><p></p><p>“SELECT idUsuario FROM usuario where correo = :correo AND contra = :contra”</p><p></p><p></p><p>![Diagrama

Descripción generada automáticamente](Aspose.Words.53f63bd4-d4d3-4b5a-9f4c-283218ed5087.005.png)</p><p></p><p></p><p>**Este servicio ayuda con la autenticación del usuario, cada vez que se inicie sesión el sistema enviará un código de verificación al correo electrónico en el cual el usuario tendrá 30 segundos para poder ingresar el código de verificación y así poder ingresar a su cuenta**</p><p></p><p>![Diagrama

Descripción generada automáticamente](Aspose.Words.53f63bd4-d4d3-4b5a-9f4c-283218ed5087.006.png)</p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p>**Este servicio usa una api la cual nos proporciona los nombres de los bancos elegirlo y poder realizar una transacción.**</p><p></p><p>![Imagen que contiene Interfaz de usuario gráfica

Descripción generada automáticamente](Aspose.Words.53f63bd4-d4d3-4b5a-9f4c-283218ed5087.007.png)</p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p>**Para poder mostrar el historial de transacciones hechas por el usuario se utiliza la siguiente sentencia:**</p><p></p><p>**“SELECT** fecha, hora, monto, </p><p>(Select info.nombreInstitucion FROM informacionremitente as info WHERE info.idInformacionRemitente = fk\_remitente) as nombreBanco, </p><p>(Select info.numeroCuenta FROM informacionremitente as info </p><p>WHERE info.idInformacionRemitente = fk\_remitente) as numeroCuenta, </p><p>(Select info.tipoCuenta FROM informacionremitente as info WHERE info.idInformacionRemitente = fk\_remitente) as tipoCuenta , </p><p>(Select info.nombre FROM informacionremitente as info WHERE info.idInformacionRemitente = fk\_remitente) as nombre, </p><p>(Select info.numeroDocumento FROM informacionremitente as info WHERE info.idInformacionRemitente = fk\_remitente) as CI </p><p></p><p>**FROM** transaccion </p><p>**where** fk\_cuenta = (Select idCuenta from cuenta where fk\_user=:idUser);**”**</p><p></p><p>**Lo que hace esta sentencia es que tomar elementos de dos tablas diferentes:** _“información remitente” **y** “transaccion” **en cada SELECT**_  **extra que se puede observar obtiene los datos que queremos de la tabla “información remitente” cuyo id del  usuario sea igual al que tenga en la tabla de transacción definimos un nombre para la salida del dato y como resultado final tenemos la información de las transacciones que ha hecho el usuario**</p><p></p><p></p><p>![Diagrama

Descripción generada automáticamente](Aspose.Words.53f63bd4-d4d3-4b5a-9f4c-283218ed5087.008.png)</p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p>**En este Flow podemos observar los 3 servicios principales que sirven para poder hacer transacciones interbancarias cada uno es para un solo banco estos se comunican a través del choice que nos ofrece mulesoft, el choice es activado según el nombre del banco al que queramos hacer una transacción el proceso de la transacción es igual para los 3 bancos en la cual el funcionamiento es el siguiente:**</p><p></p><p>1. **Se guardan obtienen las variables que son enviadas que vienen por el front end estas son: monto, receptor(quien hace la transacción), fecha, hora, id del usuario y por último  número de cuenta.**</p><p>2. **Se inserta la información del remitente** </p><p></p><p></p><p></p><p>3. **Se obtiene la id de la operación anterior para poder hacer las siguientes operaciones**</p><p>4. **Se crea una nueva transacción**  </p><p>5. **Se hace un update a la cuenta del remitente restando el monto de su saldo menos el monto de la transacción**</p><p>6. **Se realiza un update a la cuenta del banco adicionando el monto de la transacción** </p><p>7. **Finaliza el proceso**</p><p></p><p></p><p>![Interfaz de usuario gráfica, Aplicación

Descripción generada automáticamente](Aspose.Words.53f63bd4-d4d3-4b5a-9f4c-283218ed5087.009.png)</p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>|



|<p></p><p>** </p>|
| :- |
||


\*** 

***Nombre de estudiante*:  Bryam Guzman, Adrian Tena Christian Yunga**
\***


***Firma de estudiante*:** 
Formato aprobado con Res. C.S. N° 076-04-2016-04-20   	 Página  ***PAGE   \\* MERGEFORMAT* 7** de  ***NUMPAGES   \\* MERGEFORMAT* 7**  
