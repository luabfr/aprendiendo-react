<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>JSON a Js y Js a JSON</title>
</head>
<body>
	<script>

    // Ejemplo stringify
    // 1) Objeto Js
    const usuario = {
      username: 'pepe',
      password: '12345',
      email: 'pepe@gmail.com',
      casado: true,
      hijos: ['maria', 'juan']
    }


    // 2) Crea un Objeto JSON
    const usuarioJSON = JSON.stringify(usuario); // retorna un JSON del objeto usuario

    console.log("usuarioJSON");
    console.log(usuarioJSON);
    /*
    {
      "username":"pepe",
      "password":"12345",
      "email":"pepe@gmail.com",
      "casado":true,
      "hijos":["maria","juan"]
    }
    */




    // Ejemplo parse
    // 3) Crea un Js utilizando un JSON
    const usuarioDeJSONaJS = JSON.parse(usuarioJSON); // retorna un objeto de ECMAScript

    console.log("usuarioDeJSONaJS");
    console.log(usuarioDeJSONaJS);
    /*
    {
      username: "pepe", 
      password: "12345", 
      email: "pepe@gmail.com", 
      casado: true, 
      hijos: ["maria", "juan"]
    }
    */

	</script>
</body>
</html>


