# MappSeum
¡Bienvenido al Museo de Esculturas, MappSeum!

## CONTENIDO

- [DESCRIPCIÓN](#DESCRIPCIÓN)
- [ESTRUCTURA DEL PROYECTO](#ESTRUCTURA-DEL-PROYECTO)
- [LENGUAJES Y HERRAMIENTAS UTILIZADAS](#LENGUAJES-Y-HERRAMIENTAS-UTILIZADAS)
- [INSTALACIÓN](#INSTALACIÓN)
- [COLABORADORAS](#COLABORADORAS)

## DESCRIPCIÓN

Esta aplicación web fue desarrollada con React y permite gestionar esculturas mediante operaciones CRUD. A continuación, encontrarás detalles adicionales sobre la estructura, funcionalidades y pasos específicos para el CRUD.

## ESTRUCTURA DEL PROYECTO

### Página Principal (Listado de Esculturas):

Muestra un listado de esculturas obtenidas de la API simulada.
Cada tarjeta (card) contiene información detallada sobre una escultura, incluyendo descripción, ubicación, material, etc.
Cada tarjeta incluye botones para eliminar y modificar la escultura correspondiente.

![Tarjeta de Escultura](src/assets/readme-img/card.PNG)

Al hacer clic en "Eliminar" nos aparecerá una confirmación preguntándonos si queremos eliminar la escultura correspondiente. Se elimina de la API y de la página principal.

### Página de Edición (Modificar Escultura):

![Botones](src/assets/readme-img/card-buttons.png)

Accesible desde la página principal al hacer clic en el botón "Modificar" de una escultura.

Muestra un formulario prellenado con los datos actuales de la escultura seleccionada.

![Página de Edición](src/assets/readme-img/edit-form.png)

Permite realizar modificaciones y guardar los cambios mediante el método PUT..

### Página de Agregar (Nueva Escultura):

![Botón Agregar](src/assets/readme-img/add-button.png)

Accesible desde la página principal haciendo clic en el botón "Agregar Escultura".

Proporciona un formulario para agregar una nueva escultura al museo.

![Página de Edición](src/assets/readme-img/add-form.png)

Al agregar una nueva escultura, esta se refleja en la página principal. Al rellenar el formulario y añadir una nueva escultura, nos redirigirá a la página principal.

La página principal muestra un listado completo de esculturas con detalles específicos. Explora cada tarjeta para obtener información detallada sobre cada obra en el museo.

## LENGUAJES Y HERRAMIENTAS UTILIZADAS
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg" title="VSCode" alt="VSCode" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" title="GIT" alt="GIT" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;   
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" title="css3" alt="css3" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/github/github-original.svg" title="Github" alt="Github" width="40" height="40"/>&nbsp;   
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-plain.svg" title="Javascript" title="Javascript" width="40" height="40">    
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="React" alt="React" width="40" height="40"/>&nbsp;     
  <img src="https://github.com/devicons/devicon/blob/master/icons/json/json-original.svg" title="JSON" alt="JSON" width="40" height="40"/>&nbsp;    
  <img src="https://github.com/devicons/devicon/blob/master/icons/reactrouter/reactrouter-original.svg" title="ReactRouter" alt="ReactRouter" width="40" height="40"/>&nbsp;  
  <img src="https://github.com/devicons/devicon/blob/master/icons/trello/trello-original.svg" title="Trello" alt="Trello" width="40" height="40"/>&nbsp; 
  <img src="https://github.com/devicons/devicon/blob/master/icons/vitejs/vitejs-original.svg" title="Vite" alt="Vite" width="40" height="40"/>&nbsp; 
  <img src="https://github.com/devicons/devicon/blob/master/icons/vitest/vitest-original.svg" title="Vitest" alt="Vitest" width="40" height="40"/>&nbsp; 
  <img src="https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg" title="Figma" alt="Figma" width="40" height="40"/>&nbsp;
</div>

## INSTALACIÓN

### Clonar el repositorio:

```bash
$ git clone https://github.com/BeatrizCPerez/MappSeum
```

```bash
$ cd MappSeum
```

### Instalar las dependencias:

1. Asegúrate de tener Node.js instalado.
2. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
$ npm install
```

### Iniciar la API Simulada:

Utiliza json-server para simular una API.
```bash
$ npm run api
```   

### Iniciar el Servidor de Desarrollo:
```bash
$ npm run dev
```

## COLABORADORAS
- Scrum Master: [Leite](https://github.com/leiteway)
- Product Owner: [Beatriz](https://github.com/BeatrizCPerez)
- Web developer: [Kris](https://github.com/krisneiras)
- Web developer: [Maria](https://github.com/mariandrean)
