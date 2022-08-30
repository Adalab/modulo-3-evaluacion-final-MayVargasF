# React -Evaluación final - Mayte Vargas

## Buscador de personajes de Harry Potter

[Pincha aquí para acceder al buscador de personajes de Harry Potter](http://beta.adalab.es/modulo-3-evaluacion-final-MayVargasF/)

### Cómo arrancar el proyecto con React

1. Abrir en el editor de código.
2. Abrir una terminal.
3. Ejecutar en ella el comando: `npm install`
4. Una vez termina de instalarse, ejecutar el comando: `npm start`
5. El proyecto se abrirá en el navegador y todos los cambios realizados en el código se reflejarán automáticamente en el navegador.

### Funcionalidades de la aplicación web

1. Al cargar la página aparecen todos los personajes de Harry Potter de la casa **Gryffindor**, seleccionada por defecto.

2. La página dispone de dos filtros. El primero es de **búsqueda por nombre** y conforme la usuaria vaya escribiendo se irán mostrando los personajes que contengan lo que la usuaria escribe. En caso de no encontrar ningún resultado, la página mostrará un mensaje informando de ello. El segundo filtro es un **selector con las distintas casas**, al seleccionar una se mostrarán los personajes de la casa, al seleccionar todas se muestran tanto los personajes de todas las casas como los personajes que no corresponden a ninguna casa.

3. La usuaria puede hacer click encima de uno de los personajes y se muestra este en detalle con más información como los nombres altenativos o si el personaje está vivo o muerto. Desde esa página tiene un enlace para poder volver atrás, a la página de inicio.

4. Los datos de búsqueda quedarán almacenados en el navegador de la usuaria de manera que, tanto al recargar la página como al volver atrás desde el detalle de un personaje, le siga apareciendo la búsqueda que realizó.

5. Los personajes que no tienen una imagen muestran una imagen por defecto que informa de ello.

6. Por último, al lado del formulario hay un botón de **reset** que borra los filtros seleccionados por la usuaria y vuelve a mostrar los personajes por defecto (los de la casa Griffindor).


### API externa utilizada para obtener la información de los personajes de Harry Potter.

[hp API](https://hp-api.herokuapp.com/)




