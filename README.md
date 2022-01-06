Comentarios:
El lazy load y paginado se intentó hacer desde cero, sin usar librerías, se encuentra comentado debido a que ocasionaba rerenders y bugs.

Consignas:

Desarrollar usando reactjs un componente de tipo dropdown:

- Al desplegarlo consultará al backend por data buscando coincidencias según el texto escrito (o sin filtro, en caso de que no se haya escrito texto)

- Debe solicitar resultados paginados de 20 en 20, y solo deberá traer la siguiente página cuando se esté scrolleando cerca al final de la lista actual de resultados

- Debe permitir parametrizar qué atributo del objeto consultado se mostrará al usuario

- El primer resultado del dropdown debe ser una opción fija que al darle click levante un pequeño pop-up, parte del componente, que permita agregar un nuevo objeto con el texto ya ingresado.
