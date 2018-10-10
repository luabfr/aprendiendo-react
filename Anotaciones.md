﻿#REACT-APP
##Prerequisitos
1 - Tener instalado Node y NPM


##Instalando el entorno
1 - Instalar:
    -   npm install --save create-react-app -g 
    -   create-react-app mi-nueva-app


2 ???
    -   npm install --save react
    -   npm install --save react-dom


----------------------------------------------

PARA ACCEDER:

    - ejecutar en terminal
        npm run start

    - acceder a:
        localhost:3000

----------------------------------------------

React

 - Es DECLARATIVO (no sería imperativo)
 - Basado en COMPONENTES

 - Divide la interfaz en trozos mas pequeños y reusables.
 - Puedes crear nuevos componentes usando componentes mas pequeños.
 - Cada componente encapsula su estado.
 - Codigo mas reusable , pequeño y mantenible.
 
"Programacion reactiva"
 - Cada componente "reacciona" y se vuelve a renderizar cuando se produce un cambio de estado o le llegan nuevas propiedades.

Eventos sintéticos.
- Abstraccion de los eventos nativos de los navegadores.
- Compatibilidad cross browsing sin necesidad de mas librerias.
- Soporte para todos los eventos que puedas necesitar desde click, double click, hasta eventos moviles como touchstart y touchend.

Server Side Rendering
- Renderiza tu aplicacion de React en el servidor, perfecto para SEO y performance.


#Seccion 3, Clase 10


Esto:
    const elemento = <h1> Hola mundo </h1>

Se traduce en React como esto:
    "use strict";

    var elemento = React.createElement(
      "h1",
      null,
      " Hola mundo "
    );


- Para que una expresion de JS sea EVALUDA por REACT, solo tenemos que envolverla entre '{ }'.
    Ej:
        const elemento = <h1> Hola, tengo { 25 + 5 } anios </h1>

    Resultado:
        "use strict";

        var elemento = React.createElement(
            "h1",
            null,
            " Hola, tengo ",
            25 + 5,
            " anios "
        );
  

- Se puede utilizar CONDICIONALES TERNARIOS:
    Ej:
        function  multiplicar ( a , b ){ return a * b }
        const mostrarMultiplicacion = true

        const elemento = <h1> {mostrarMultiplicacion ? multiplicar ( 2 , 2 ) : 'Nada que mostrar' } </h1>



- Los atributos de una etiqueta se pasan como OBJETO. Si la etiqueta no tiene atributos, devuelve NULL.
Ej:
    const miImagen = <img src='http://url-com-imagen.jpg' />
Resultado:
    'use strict';

    var miImagen = React.createElement(
                      'img', 
                      { src: 'http://url-com-imagen.jpg' }
                  );

- En JSX, cada VAR solo puede contener UN ELEMENTO. El metodo 'createElement' de React solo acepta un elemento.
    -> No se pueden tener 2 DIVs separados.
    -> Si se puede tener 2 DIVs encapsulados por un DIV Padre. 
- El metodo createElemet: el 1er parametro es la etiqueta,
                          el segundo, los atributos (null u objeto),
                          el tercero, son los childrens.



#Seccion 3, Clase 11 -  Componentes ReactJS

#Seccion 3, Clase 12 -  Props I - Entendiendo las Props

#Seccion 3, Clase 13 -  Props II - Funciones y elementos como props

- Para simplificar el uso de los props, es comun utilizar la desestructuralizacion.
    - Ej: Si tenemos varios props usamos,
        const { miProp1 , miProp2 , miProp3 } = this.props
    - Ahora podemos acceder a cada una, como si fuese una variable separada.

#Seccion 3, Clase 14 -  Props III - Inmutabilidad de las Props

- Funciones Puras:
    -   Siempre devuelve el mismo valor, para los mismos parametros de entrada
    -   El efecto de la funcion, no produce efectos colaterales fuera de ella:
            function sumaPura( a , b ){
                return a + b ;
            }

    -   Esta funcion Impura, siempre devolvera un valor distinto pese a que los parametros de entrada sean siempre los mismos:
            function sumaImpura( a , b ){
                return a + b + Math.random()
            }

    -   Otra Funcion impura. Utiliza una variable externa + el parametro, para la suma. 
        Modificando el resultado que devuelve la funcion, dado un mismo parametro:
            let b = 2
            function sumaImpura2( a ){
                b = a + b 
                return b
            }

-   React, no permite que se MODIFIQUEN las PROPS, son de SOLO LECTURA, son INMUTABLES. No podemos alterar su valor.
    EJ:
        this.props.miTitulo = <h1> Soy un titulo</h1>
        // Esto tira ERROR. No podemos modificar una PROPS.

->  Todos los componentes que hagamos en REACT, tienen que actuar como FUNCIONES PURAS y NO modificar sus PROPIEDADES.

#Seccion 3, Clase 15 -  Props por defecto
- Para que las props tengan un valor por default, existen las .defaultProps .
- Si no existe valor asignado a un determinado props, cuando se renderice, estará vacío.
- defaultProps: Le pasamos un objeto indicando que valor por defecto queremos para cada props.
    MiTitle.defaultProps = {
        miTexto : 'Titulo por default'
    }


#Seccion 3, Clase 16 - State I - Gestión del estado de ReactJS

- Debido a la INMUTABILIDAD de las props (no se pueden cambiar las props una vez declaradas), debemos usar STATE para trabajarlas. 
- Las PROPS que le pasamos a un COMPONENTE cambian su renderizado.
- Para que los COMONENTES sean REACTIVOS, y reaccionen a los cambios, necesitamos usar el STATE.



#Seccion 3, Clase 17 - State II - Actualizar estado mediante setState()

- React es DECLARATIVO y REACTIVO.
    DECLARATIVO porque NO le indicamos COMO debe renderizar, sino QUE debe renderizar.
    REACTIVO porque reacciona a los cambios de los componentes.
- No se debe mutar el STATE de nuestros componentes, porque  REACT funciona de manera que optimiza cuando debe hacer los cambios en el arbol de elementos del navegador.
  Para ello, tiene una cola en la que va priorizando el trabajo que debe realizar para reflejar los cambios de nuestros componentes. Si reescribiesemos todo el tiempo cambios en los STATE, no podría realizar este trabajo.
- setState() es un metodo ASINCRONO, por lo que no podemos esperar que el cambio de estado ocurra al instante. 




#Seccion 3, Clase 18 - State III - Propagación del estado a componentes 
>>>>>>>>>>NO ENTENDI BIEN ESTE CAPITULO

- React tiene un flujo UNIDIRECCIONAL, esto es: de PADRE a HIJO.
- Esto supone que si un componente PADRE cambia su estado, sus componentes HIJOS se vuelven a renderizar.


#Seccion 3, Clase 19 - State IV - Inicializando el estado mediante Props

--- 



#Seccion 4, Clase 20 - CONDICIONALES - Intro

- modificar el contenido que renderiza un componente de react según sus props y su states es la base para crear aplicaciones reactivas.
- Es lo que se conoce como RENDERIZADO CONDICIONAL.



# Seccion 4, Clase 21 - CONDICIONALES - Condicionales en el método Render



# Seccion 4, Clase 22 - CONDICIONALES - Utilizando ternarias



# Seccion 4, Clase 23 - CONDICIONALES - Practica



# Seccion 4, Clase 24 - CONDICIONALES - Trabajando con listas

- listas, colecciones, array.

- Cada descendiente de un ARRAY debe tener una PROPS especial KEY.
    - La KEY sirve para ayudar a REACT para identificar los elementos y saber cual ha sido actualizado, añadido, o eliminado.
    - Se debe utilizar una KEY UNICA cuando iteramos un ARRAY.
    - Puede utilizarse como KEY, el mismo NUMERO del ARRAY 




# Seccion 4, Clase 25 - CONDICIONALES - Listas de Array de Objetos

- No se puede acceder a la KEY como a una PROPS normal.






# Seccion 6, Clase 33 - EVENTOS  - Eventos soportados

- React pose gran cantidad de EVENTOS soportados.
- Para ver todos los eventos puede verse la documentaciòn.
    - onClick,
    - onDrag,
    - onMouseEnter,
    - imagen ya cargo,
    - otros...


# Seccion 6, Clase 36 - EVENTOS - Entendiendo REF

- Todos los COMPONENTES en REACT tienen un ATRIBUTO especial llamado REF
- REF, sirve para recuperar la referencia del elemento en el DOM.
- Hay mejores formas de manejar Formularios SIN utilizar REF.

# Seccion 6, Clase 38 - EVENTOS y FORMULARIOS - Componentes Controlados

- A la forma mas básica y similar a la forma de HTML de manejar formularios, se le llama: COMPONENTES DESCONTROLADOS.
    - Se le llama asi, porque no tenemos ningun control en el componente sobre el valor de los campos, y para recuperarlos, tenemos que consultar al arbol de elementos.

- En REACT, existe otra forma de controlar los formularios llamado COMPONENTES CONTROLADOS.
- Este es la forma mas recomendada de trabajar con formularios en REACT.




# Seccion 7 , Clase 39/40/41 - CHILDREN - De los componentes de ReactJS

- Children es un PROP ESPECIAL que nos devuelve  el contenido que se encuentra dentro de nuestras etiquetas de apertura y cierre.
    - Se suele utililzar para construir Layout o plantillas.
    - Util para componentes de UI reusables.
- PropTypes: Una forma de validar los ipos de datos que le pasamos a nuestros componentes.
    - (Similar a cuando declaramos un TIPO de variable: string, int, etc.)



# Seccion 7, clase 42 - PROPTYPES - Desarrollando con PropTypes

- Sirven para saber que TIPO de valor es un PROPS.
- Es una DEPENDENCIA EXTERNA.
    - npm install prop-types -SE
                           ('-SE' es igual a '--save')


# Seccion 8, Clase 43 / 44 - CICLO DE VIDA 

- Diferentes estados de los componetes de React, y como ejecutatr cada uno de ellos.

// DIFERENTS FASES DE EJECUCIÒN POR LAS QUE PASA UN COMPONENTE DE REACT
- El Ciclo de Vida de los componentes se divide en 3 FASES:
    -   Fase de MONTAJE
    -   Fase de ACTUALIZACION
    -   Fase de DESMONTAJE

Fase de Montaje:
    - Es la primera que se ejecuta.
    - Se ejecuta siempre, y solo lo hace una vez.
    - Es la encargada de construir el componente, con su estado inicial, y obtener las props que se la han pasado.
    - Como buena practica: si estamos utilizando metodos de clase que accedan al contexto, tenemos que BINDEARLO aqui.
    - Primera ejecucion de render().
    - Termina con el componente montado en el DOM.

Fase de Actualizaciòn:
    - Pro defecto, se ejecuta cada vez que recibe props o se actualiza un state.
    - Podemos controlar cuando el componente necesita renderizarse de nuevo. 


Fase de Desmontaje:
    - Sirve para eliminar cualquier LISTENERS que hayamos creado.
    - Sirve para eliminar metodos que hagan referencias a elementos que puedan NO estar disponibles en el DOM.
    - AMBAS, sirven para evitar ERRORES si se llaman a elementos que ya NO estàn disponibles.


# Seccion 8, Clase 45 - CICLO DE VIDA / El Constructor

 - En FASE DE MONTAJE: El primer método que se ejecuta es el CONSTRUCTOR.
    - Se Ejecuta antes de montal el componente.
    - Inicializar el state del componente.
    - Bindear contexto de los metodos.
    - NO SE DEBE LLAMAR A setState(), ya que el STATE no puede ser todavia actualizado.
    - Aunque no declaremos el constructor, implicitamente viene declarado, solo con el metodo super().
    - super() : Es necesario que tambien le pasemos las PROPS.
        constructor( misProps ){
            super( misProps )
            this.state : {...}
        }
    
    -BIND: Sirve para enlazar el contexto para las funciones que necesiten acceder a las propiedades de la clase cuando se ejecuta en un contexto diferente.
        - this.miFuncion = this.miFuncion.bind(this) 
        - Suele ser necesario en los metodos que manejan eventos.
        - Esto tambien se soluciona utilizando ARROW FUNCTION.

# Seccion 8, Clase 45 - CICLO DE VIDA / ComponentWillMount

- Se ejecuta una sola vez.
- Se invoca justo antes de montar el componente y antes de render()
- Todavìa no tenes el componente disponible en el DOM, por lo que si intenamos acceder desde aqui a algun ELEMENTO (ref, children), quizàs este, no estè disponible aun.
- Se recomienda usar el constructor en su lugar. 
- Se puede utilizar el setState() aqui, y al realizarse este antes del render(), el setState no provocarìa un nuevo renderizado, sino que esperaria a realizar la actualizacion del setState, antes de renderizar el componente.
- Si quisieramos utilizar un API, para renderizarla, necesitamos primero tener acceso al elemento del DOM. Para esto es util que primero se ejecute el RENDER, asi luego podemos utilizar los datos de la API para actualizar los STATE del componente y re-renderizar el componente actualizado.  



# Seccion 8, Clase 47 - CICLO DE VIDA / Render

- El unico metodo obligatorio en nuestro componente.
- Retorna los elementos que queremos mostrar en la interfaz.
- NO SE DEBE LLAMAR a setState, provocaria un loop infinito.
- Debe ser simpre puro.
- Solo se debe encargar de convertir nuestras proprs y state en una representacioon visual en nuestra aplicacion.
- Evitar operaciones y evaluacion, pues penaliza el rendimiento de la app.
- No necesariamente tiene que devolver (return) un elemento HTML.
- Tambien puede devolver:
    - un NUMERO, 
    - un NULL, 
    - un CONDICIONAL, 
    - un ARRAY (FRAGMENTOS) 
        - Renderizado de FRAGMENTOS: Se renderiza una lista de elmentos (mediante un array).
        - Esto evita que tengamos que agregar un DIV que sirva solo de contenedor de los compoententes y elementos que queremos agregar.
    - etc.


# Seccion 8, Clase 48 - CICLO DE VIDA / ComponentDidMount

- Se ejecuta tras el RENDERIZADO del componente.
- Cuando se ejecuta, significa que existe una representacion (de nuestro componente) en el DOM.
- Sirve para añadir llamadas para recuprar datos del servidor y APIs
- Se pueden escuchar eventos. Y si lo hacemos, tenemos que borrar esta suscripcion en el metodo ComponenDidUnmount (que se ejecuta antes de desmontar el componente)
- Se puede ejecutar setState()
    - Si ejecutamos setState(), se vuelve a ejecutar RENDER.

- La suscripcion a un EVENTO (listeners) en ComponentDidMount, no serà eliminada automatica por REACT, cuando este componente desaparezca. 
    - Osea: si se elemina ese COMPONENTE, el LISTENER del EVENTO, sigue andando.

DEBUGGER: sirve para ver en el navegador, paso a paso lo que va sucediendo. (Pausa la carga, y tiene un botn PLAY para seguir)




# Seccion 8, Clase 49 - CICLO DE VIDA / Fetch API

- Fetch, de JS, provee una interfaz para peticion de recursos remotos. 
- Compatible con todos los navegadores modernos.
- Gestiona la respuesta en forma de PROMESAS.
- El uso mas tipico es pedir informacion a una API.


// probando git credential manager for window