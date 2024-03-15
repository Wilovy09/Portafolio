<script setup lang="ts">
	import { RouterLink } from "vue-router";

	const indice = [
		{
			id: "qué-es-docker",
			titulo: "¿Qué es docker?",
			subtemas: [
				{
					subtitulo: "¿Son máquinas virtuales?",
					id: "son-máquinas-virtuales",
				},
				{ subtitulo: "Alternativas", id: "alternativas" },
				{ subtitulo: "¿Porqué usar docker?", id: "porqué-usar-docker" },
				{ subtitulo: "¿Cuando usar Docker?", id: "cuándo-usar-docker" },
			],
		},
		{
			id: "instalación-de-docker",
			titulo: "Instalación de Docker",
			subtemas: [
				{ subtitulo: "Windows & Mac", id: "windows-y-mac" },
				{ subtitulo: "Linux", id: "linux" },
			],
		},
		{
			id: "hola-mundo",
			titulo: "Hola Mundo",
		},
		{
			id: "docker-hub",
			titulo: "Docker Hub",
		},
		{
			id: "imágenes-y-contenedores",
			titulo: "Imágenes y Contenedores",
			subtemas: [
				{
					subtitulo: "Descargar una imagen",
					id: "descargar-una-imagen",
				},
				{
					subtitulo: "Ver imagenes descargadas",
					id: "ver-imagenes-descargadas",
				},
				{ subtitulo: "Crear contenedor", id: "crear-contenedor" },
			],
		},
		{
			id: "etiquetas",
			titulo: "Etiquetas",
		},
		{
			id: "mapeo-de-puertos",
			titulo: "Mapeo de Puertos",
		},
		{
			id: "docker-run",
			titulo: "Docker run",
			subtemas: [
				{
					subtitulo: "Docker run con puerto y nombre",
					id: "docker-run-con-puerto-y-nombre",
				},
			],
		},
		{
			id: "docker-logs",
			titulo: "Docker logs",
			subtemas: [
				{ subtitulo: "Detalles", id: "detalles" },
				{ subtitulo: "En escucha", id: "en-escucha" },
			],
		},
		{
			id: "environments",
			titulo: "Environments",
		},
		{
			id: "docker--springboot--postgresql",
			titulo: "Docker + springboot + postgresql",
		},
		{
			id: "dockerfile",
			titulo: "Dockerfile",
		},
		{
			id: "docker-network",
			titulo: "Docker network",
		},
		{
			id: "docker-compose",
			titulo: "Docker compose",
		},
		{
			id: "subiendo-imágen-a-docker-hub",
			titulo: "Subiendo imágen a Docker Hub",
		},
		{
			id: "comandos-de-docker",
			titulo: "Comandos de Docker",
			subtemas: [
				{
					subtitulo: "Descargar una imagen",
					id: "descargar-una-imagen",
				},
				{
					subtitulo: "Listar imagenes descargadas",
					id: "listar-imagenes",
				},
				{ subtitulo: "Crear un contenedor", id: "crear-un-contenedor" },
				{
					subtitulo: "Activar un contenedor",
					id: "activar-un-contenedor",
				},
				{
					subtitulo: "Ver contenedores activos",
					id: "ver-contenedores-activos",
				},
				{
					subtitulo: "Ver todos los contenedores de tu computadora",
					id: "ver-todos-los-contenedores-de-tu-computadora",
				},
				{
					subtitulo: "Eliminar un contenedor creado",
					id: "eliminar-un-contenedor-creado",
				},
				{ subtitulo: "Eliminar una imagen", id: "eliminar-una-imagen" },
				{
					subtitulo: "Detener un contenedor",
					id: "detener-un-contenedor",
				},
				{
					subtitulo: "Descargar imagen con etiqueta",
					id: "descargar-imagen-con-etiqueta",
				},
				{
					subtitulo: "Eliminar imagen con etiqueta",
					id: "eliminar-imagen-con-etiqueta",
				},
				{
					subtitulo: "Eliminar multiples imagenes",
					id: "eliminar-multiples-imagenes",
				},
				{ subtitulo: "Querys", id: "querys" },
				{ subtitulo: "Eliminar con querys", id: "eliminar-con-query" },
				{
					subtitulo: "Crear contenedores más rapido",
					id: "crear-contenedores-más-rapido",
				},
				{
					subtitulo: "Crear contenedores con nombre",
					id: "crear-contenederoes-con-nombre",
				},
				{ subtitulo: "Docker Run", id: "dockerrun" },
				{ subtitulo: "Con puerto y nombre", id: "con-puerto-y-nombre" },
				{ subtitulo: "Docker logs", id: "dockerlogs" },
				{ subtitulo: "Detalles", id: "detalles" },
				{ subtitulo: "En escucha", id: "en-escucha" },
			],
		},
		{
			id: "recurso",
			titulo: "Recurso",
		},
	];
</script>

<template>
	<section class="p-4">
		<RouterLink to="/notes" class="bg-[#161616] text-center p-1 rounded-xl"
			>Regresar</RouterLink
		>

		<h1 class="text-center text-2xl font-bold">Docker desde 0 nota</h1>
		<section class="mx-2 lg:mx-8">
			<p class="mt-4">
				Seguramente has vivido que cuando tienes un proyecto que
				necesita distintas dependendencias y cuando lo quieres llevar a
				produccion o que otra persona lo ejecute "<i
					>Oye pero en mi maquina si funcionaba</i
				>", para esto sirve Docker, empaqueta todo en un
				<b>Contenedor</b> para evitar estos problemas.
			</p>
			<h2>Índice</h2>
			<section class="flex justify-center">
				<section class="columns-1">
					<template v-for="item in indice">
						<div class="bg-[#121212] rounded-xl p-2 grid text-white mb-4">
							<a class="titulo" :href="'#' + item.id">{{item.titulo}}</a>
							<div class="grid ml-6">
								<template v-if="item.subtemas">
									<template v-for="subtema in item.subtemas">
										<a class="subtitulo" :href="'#' + subtema.id">{{ subtema.subtitulo }}</a>
									</template>
								</template>
							</div>
						</div>
					</template>
				</section>
			</section>
			<!-- ----- -->
			<section class="contenido">
				<section id="qué-es-docker">
					<h2>¿Qué es docker?</h2>
					<p>
						<a href="https://www.docker.com/" target="_blank"
							>Docker</a
						>
						es una plataforma de software empaquetada en
						contenedores para tener más productividad y fácil
						administración.
					</p>

					<section id="son-máquinas-virtuales">
						<h3>¿Son máquinas virtuales?</h3>
						<p>
							No, si bien Docker trabaja con el kernel de Linux,
							no significa que tengamos las mismas opciones que
							instalando un Linux en una computadora. Tenemos solo
							una pequeño trozo de Linux.
						</p>
						<p>
							Docker está diseñado para proporcionar una forma
							ligera y portátil de empaquetar y ejecutar
							aplicaciones en un entorno aislado y reproducible.
						</p>
						<p>
							Docker pertenece a la empresa
							<a
								href="https://www.linkedin.com/company/docker/?trk=public_profile_result-card_subtitle-click&originalSubdomain=mx"
								target="_blank"
								>Docker</a
							>.
						</p>
					</section>

					<section id="alternativas">
						<h3>Alternativas</h3>
						<p>
							Una alternativa a Docker es
							<a href="https://podman.io/" target="_blank"
								>Podman</a
							>.
						</p>
					</section>

					<section id="porqué-usar-docker">
						<h3>¿Porqué usar Docker?</h3>
						<ul>
							<li>Envío de software más rápido.</li>
							<li>Estandarización de operaciones.</li>
							<li>Ahorro de dinero.</li>
							<li>
								Transferencia de manera sencilla de las
								aplicaciones.
							</li>
						</ul>
					</section>

					<section id="cuándo-usar-docker">
						<h3>¿Cuando usar Docker?</h3>
						<ul>
							<li>
								Cuando tenemos una arquitectura orientada a
								<a
									href="https://aws.amazon.com/es/microservices/#:~:text=Los%20microservicios%20son%20un%20enfoque,servicios%20son%20equipos%20peque%C3%B1os%20independientes."
									target="_blank"
									>Microservicios</a
								>.
							</li>
							<li>Integración y entrega continua.</li>
							<li>Procesamiento de datos.</li>
							<li>Contenedores como servicio.</li>
						</ul>
					</section>
				</section>

				<section id="instalación-de-docker">
					<h2>Instalación de Docker</h2>

					<section id="windows-y-mac">
						<h3>Windows & Mac</h3>
						<p>
							Para instalar Docker en Windows, debemos instalar
							<a
								href="https://www.docker.com/products/docker-desktop/"
								target="_blank"
								>Docker desktop</a
							>.
						</p>
						<p>Si estamos en <b>Windows</b>:</p>
						<ul>
							<li>Seleccionamos WSL 2</li>
						</ul>
						<blockquote>
							<p>
								<strong>Nota:</strong> En algunas
								configuraciones Docker necesitará que tengas
								activado el Hyper-V o la virtualización.
							</p>
						</blockquote>
						<p>
							Una vez terminada la instalación, reiniciamos el
							ordenador.
						</p>
					</section>

					<section id="linux">
						<h3>Linux</h3>
						<p>
							Puedes seguir la
							<a
								href="https://docs.docker.com/desktop/install/linux-install/"
								target="_blank"
								>guía de instalación oficial</a
							>.
						</p>
					</section>
				</section>

				<section id="hola-mundo">
					<h2>Hola Mundo</h2>
					<p>Abrimos la terminal y ejecutamos:</p>
					<pre>
                        <code>
docker run hello-world
                        </code>
                    </pre>
					<p>Esto nos mostrará algo así:</p>
					<pre>
                        <code>
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
1. The Docker client contacted the Docker daemon.
2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
$ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
<a href="https://hub.docker.com/" target="_blank">https://hub.docker.com/</a>

For more examples and ideas, visit:
<a href="https://docs.docker.com/get-started/" target="_blank">https://docs.docker.com/get-started/</a>
                        </code>
                    </pre>
					<p>Si nos aparece eso, todo está bien!</p>
				</section>

				<section id="docker-hub">
					<h2>Docker Hub</h2>
					<p>
						<a href="https://hub.docker.com/" target="_blank"
							>Docker Hub</a
						>
						es un lugar donde podremos encontrar distintas imágenes
						de personas y empresas de alrededor del mundo.
					</p>
				</section>

				<section id="imágenes-y-contenedores">
					<h2>Imágenes y Contenedores</h2>

					<section id="descargar-una-imagen">
						<h3>Descargar una imagen de Docker Hub</h3>
						<p>
							Para descargar una imagen de Docker Hub, primero
							necesitamos abrir
							<a href="https://hub.docker.com/" target="_blank"
								>Docker Hub</a
							>
							y buscar la imagen deseada, por ejemplo,
							<a
								href="https://hub.docker.com/_/mongo"
								target="_blank"
								>Mongo</a
							>. Luego, hacemos clic en el resultado y nos
							aparecerá un comando como este:
						</p>
						<pre><code>docker pull mongo</code></pre>
						<p>
							Lo ejecutamos en nuestra terminal para descargar la
							imagen en nuestro ordenador.
						</p>
					</section>

					<section id="ver-imagenes-descargadas">
						<h3>Ver imágenes descargadas</h3>
						<p>
							Para ver las imágenes que tenemos descargadas en
							nuestro ordenador, ejecutamos en una terminal:
						</p>
						<pre><code>docker images</code></pre>
						<p>
							Esto nos mostrará una lista de imágenes con sus
							detalles, incluyendo el repositorio, la etiqueta, el
							ID de la imagen, la fecha de creación y el tamaño.
						</p>
					</section>

					<section id="crear-contenedor">
						<h3>Crear contenedor</h3>
						<p>
							Una vez verificado que tenemos la imagen descargada,
							podemos crear un contenedor. Para ello, ejecutamos:
						</p>
						<pre><code>docker container create mongo</code></pre>
						<p>
							Esto nos dará un identificador único para el
							contenedor. Luego, podemos iniciar la instancia del
							contenedor con el comando:
						</p>
						<pre><code>docker start af955a</code></pre>
						<p>
							Para verificar que nuestra instancia está activa,
							ejecutamos:
						</p>
						<pre><code>docker ps</code></pre>
						<p>
							Y esto nos mostrará una lista de contenedores en
							ejecución.
						</p>
					</section>
				</section>

				<section id="etiquetas">
					<h2>Etiquetas</h2>
					<p>
						Las etiquetas sirven para definir qué versión de una
						imagen queremos descargar. Por defecto, al ejecutar
						<code>docker pull NOMBRE_DE_LA_IMAGEN</code>Se usará la
						etiqueta <code>:latest</code>
					</p>
					<p>
						Para definir qué etiqueta queremos descargar, podemos ir
						a la
						<a href="https://hub.docker.com/_/mongo" target="_blank"
							>imagen de Mongo en Docker Hub</a
						>
						y ver que tiene un apartado de etiquetas. Luego, podemos
						ejecutar el siguiente comando:
					</p>
					<pre><code>docker pull mongo:windowsservercore-ltsc2022</code></pre>

					<h3>Eliminar imágenes que tienen etiqueta</h3>
					<pre><code>docker image rm IMAGEN:ETIQUETA</code></pre>

					<h3>Eliminar imágenes en una sola línea</h3>
					<pre><code>docker rmi IMAGEN:ETIQUETA IMAGEN:ETIQUETA</code></pre>

					<h3>
						Eliminar imágenes sin necesidad de escribir cada una
					</h3>
					<p>
						Si ejecutamos <code>docker images -q</code>Obtendremos
						un listado de las ID de nuestras imágenes. Para
						eliminarlas todas, podemos ejecutar:
					</p>
					<pre><code>docker rmi $(docker images -q)</code></pre>
				</section>

				<section id="mapeo-de-puertos">
					<h2>Mapeo de Puertos</h2>
					<p>
						Para poder acceder a un contenedor, como por ejemplo a
						una base de datos MongoDB, necesitamos exponer el puerto
						adecuado. Esto se hace mediante el mapeo de puertos.
					</p>
					<p>
						Por ejemplo, para crear un contenedor de MongoDB y
						exponer el puerto 27017 en el contenedor y el host,
						podemos ejecutar el siguiente comando:
					</p>
					<pre><code>docker create -p 27017:27017 --name mongodb mongo</code></pre>
					<p>
						Con esto, podemos empezar a establecer la conexión con
						nuestro contenedor MongoDB.
					</p>
				</section>

				<section id="docker-run">
					<h2>Docker run</h2>
					<p>
						El comando <code>docker run IMAGEN</code> ejecuta tres
						pasos: busca la imagen y, si no la encuentra, la
						descarga; crea el contenedor; e inicia el contenedor.
					</p>

					<section id="docker-run-con-puerto-y-nombre">
						<h3>Docker run con puerto y nombre</h3>
						<p>
							Para ejecutar un contenedor con un puerto específico
							y un nombre personalizado, podemos utilizar el
							siguiente comando:
						</p>
						<pre><code>docker run -p 27017:27017 --name NOMBRE -d IMAGEN</code></pre>
						<p>
							Con este comando, especificamos el mapeo de puertos
							entre el puerto del host y el del contenedor,
							establecemos un nombre personalizado para el
							contenedor y lo ejecutamos en segundo plano
							<b>-d</b>.
						</p>
					</section>
				</section>

				<section id="docker-logs">
					<h2>Docker logs</h2>

					<section id="detalles">
						<h3>Detalles</h3>
						<p>
							Para ver más detalles en los logs de un contenedor,
							podemos utilizar el siguiente comando:
						</p>
						<pre><code>docker logs IDENTIFICADOR --details</code></pre>
					</section>

					<section id="en-escucha">
						<h3>En escucha</h3>
						<p>
							Para seguir el log conforme va sucediendo, podemos
							utilizar el siguiente comando:
						</p>
						<pre><code>docker logs --follow IDENTIFICADOR</code></pre>
						<p>
							Con este comando, la terminal se quedará
							"escuchando" y nos irá mostrando lo que va
							sucediendo en tiempo real.
						</p>
					</section>
				</section>

				<section id="environments">
					<h2>Environments</h2>
					<p>
						Algunas imágenes de contenedores pueden requerir
						variables de entorno para funcionar correctamente. Para
						establecer estas variables de entorno, podemos utilizar
						la opción <code>-e</code>Al ejecutar el comando
						<code>docker run</code>
					</p>
					<p>
						Por ejemplo, para ejecutar un contenedor de PostgreSQL y
						establecer la contraseña y la base de datos, podemos
						usar el siguiente comando:
					</p>
					<pre><code>docker run -p 5432:5432 --name postgredb -e POSTGRES_PASSWORD=123 -e POSTGRES_DB=demodb -d postgres</code></pre>
					<p>
						Con este comando, estamos exponiendo el puerto 5432,
						estableciendo el nombre del contenedor como "postgredb"
						y configurando las variables de entorno para la
						contraseña y la base de datos.
					</p>
				</section>

				<section id="docker--springboot--postgresql">
					<h2>Docker + Spring Boot + PostgreSQL</h2>
					<p>
						Para propósitos prácticos, usaremos el repositorio del
						<a
							href="https://youtu.be/rmty_WNvJvA?si=S-Vbc1ndoHxq00Ga&t=2595"
							target="_blank"
							>video</a
						>
						de donde se está extrayendo toda esta información.
					</p>

					<p>
						<strong>Repositorio:</strong>
						<a
							href="https://github.com/mitocode21/dockerdesdecero.git"
							target="_blank"
							>Link del repo</a
						>
					</p>

					<p>
						Primero, clonaremos el repositorio con el siguiente
						comando:
					</p>
					<pre><code>git clone https://github.com/mitocode21/dockerdesdecero.git</code></pre>

					<p>
						Una vez clonado, eliminaremos los archivos
						<code>Dockerfile</code> y
						<code>docker-compose.yml</code>, ya que la idea es
						aprender a usar Docker y crearlos nosotros mismos.
					</p>
				</section>

				<section id="dockerfile">
					<h3>Dockerfile</h3>
					<p>
						Antes de dockerizar la aplicación, necesitamos "build"
						la aplicación con el siguiente comando:
					</p>
					<pre><code>mvn clean package</code></pre>

					<p>
						Luego, creamos un archivo llamado
						<code>Dockerfile</code> en la raíz del proyecto con el
						siguiente contenido:
					</p>
					<pre><code>
<span class="comentario"># Aquí especificamos la imagen base desde la que construiremos nuestra aplicación</span>
FROM openjdk:latest

<span class="comentario"># Especificamos el autor</span>
LABEL author="TUNOMBRE"

<span class="comentario"># Copiamos el archivo JAR generado por Maven a la imagen y lo renombramos como app.jar</span>
COPY target/springboot-docker-0.0.1-SNAPSHOT.jar app.jar

<span class="comentario"># Especificamos el comando que se ejecutará cuando el contenedor se inicie</span>
ENTRYPOINT [ "java", "-jar", "/app.jar" ]
                </code></pre>

					<p>
						Luego de haber creado el archivo Dockerfile, construimos
						la imagen con el siguiente comando:
					</p>
					<pre><code>docker build -t springbootdemo:1 .</code></pre>

					<p>
						Una vez completado este proceso, podemos ejecutar
						<code>docker images</code> para verificar que nuestra
						imagen esté presente.
					</p>
				</section>

				<section id="docker-network">
					<h2>Docker network</h2>
					<p>
						En esta situación, necesitamos que ambos contenedores
						apunten a un mismo lugar. Para lograr esto, utilizaremos
						una red Docker.
					</p>

					<p>
						Primero, creamos una red Docker con el siguiente
						comando:
					</p>
					<pre><code>docker network create NOMBRE</code></pre>

					<p>
						Luego de haber creado la red, podemos crear los
						contenedores y conectarlos a la red creada. Por ejemplo:
					</p>

					<p>Para el contenedor de Spring Boot:</p>
					<pre><code>docker run -p 8080:8080 --name springbootcontainer -d --network=NOMBRE springbootdemo:1</code></pre>

					<p>Para el contenedor de PostgreSQL:</p>
					<pre><code>docker run -p 5432:5432 --name postgredb -e POSTGRES_PASSWORD=123 -e POSTGRES_DB=demodb -d --network=NOMBRE postgres</code></pre>

					<p>
						Con estos comandos, creamos los contenedores y los
						conectamos a la misma red, lo que permitirá que se
						comuniquen entre sí.
					</p>
				</section>

				<section id="docker-compose">
					<h2>Docker compose</h2>
					<p>
						Para utilizar Docker Compose, primero debemos
						asegurarnos de que nuestro archivo
						<code>src/main/resources/application.properties</code>
						de nuestra aplicación Spring Boot tenga las siguientes
						variables de entorno:
					</p>
					<pre><code>
spring.datasource.url=${DATABASE_URL}
spring.datasource.username=${DATABASE_USERNAME}
spring.datasource.password=${DATABASE_PASSWORD}
                    </code></pre>

					<p>
						Luego, en la raíz de nuestro proyecto, crearemos un
						archivo llamado <code>docker-compose.yml</code> con el
						siguiente contenido:
					</p>

					<pre><code><span class="comentario"># Con esto especificamos la versión de Docker Compose que usaremos</span>
version: "3.8"
<span class="comentario"># Declaramos los servicios</span>
services:
<span class="comentario"># Para nuestra aplicación Spring Boot</span>
app:
    <span class="comentario"># Nombre del contenedor</span>
    container_name: "sbcontainer"
    <span class="comentario"># Indicamos que use el Dockerfile de la misma ubicación</span>
    build: .
    <span class="comentario"># Puerto que expondremos</span>
    ports:
        - "8080:8080"
    <span class="comentario"># Variables de entorno</span>
    environment:
        - DATABASE_URL=jdbc:postgresql://
        postgres_db:5432/demodb
        - DATABASE_USERNAME=postgres
        - DATABASE_PASSWORD=123
    <span class="comentario"># Este servicio depende del servicio postgres_db</span>
    depends_on:
        - postgres_db

    <span class="comentario"># Servicio para la base de datos PostgreSQL</span>
    postgres_db:
        <span class="comentario"># Nombre del contenedor</span>
        container_name: "postgres_db"
        <span class="comentario"># Imagen a utilizar</span>
        image: "postgres"
        <span class="comentario"># Puerto que expondremos</span>
        ports:
            - "5432:5432"
        <span class="comentario"># Variables de entorno</span>
        environment:
            POSTGRES_USER: "postgres"
            POSTGRES_PASSWORD: "123"
            POSTGRES_DB: "demodb"
<span class="comentario"># Volumen para persistencia de datos de PostgreSQL</span>
volumes:
    postgres-data:</code></pre>

					<p>
						Este archivo de Docker Compose define dos servicios: uno
						para nuestra aplicación Spring Boot y otro para la base
						de datos PostgreSQL. Además, especifica las variables de
						entorno necesarias y la dependencia entre los servicios.
					</p>
				</section>

				<section id="subiendo-imágen-a-docker-hub">
					<h2>Subiendo imagen a Docker Hub</h2>
					<p>
						Para subir una imagen a Docker Hub, primero debemos
						crear una imagen utilizando nuestro usuario de Docker
						Hub:
					</p>
					<pre><code>
<span class="comentario"># Donde . es la ubicación del archivo Dockerfile</span>
docker build TU_USUARIO/NOMBRE .</code></pre>

					<p>
						Luego, debemos iniciar sesión en Docker Hub ejecutando
						el siguiente comando:
					</p>
					<pre><code>docker login</code></pre>

					<p>
						Si no te has logeado en Docker Desktop, te pedirá tu
						usuario y contraseña de tu cuenta de Docker Hub.
					</p>

					<p>Finalmente, para subir la imagen, ejecutamos:</p>
					<pre><code>docker push NOMBRE_DE_LA_IMAGEN_CREADA</code></pre>

					<p>
						Con estos pasos, podrás subir tu imagen creada
						localmente a Docker Hub para que esté disponible para
						otros usuarios.
					</p>
				</section>

				<section id="comandos-de-docker">
					<h2>Comandos de Docker</h2>
					<section id="descargar-una-imagen">
						<h3>Descargar una imagen</h3>
						<pre><code>docker pull NOMBRE_DE_LA_IMAGEN</code></pre>
					</section>
					<section id="listar-imagenes">
						<h3>Listar imagenes descargadas</h3>
						<pre><code>docker images</code></pre>
					</section>
					<section id="crear-un-contenedor">
						<h3>Crear un contenedor</h3>
						<pre><code>docker container create NOMBRE_DE_LA_IMAGEN</code></pre>
					</section>
					<section id="activar-un-contenedor">
						<h3>Activar un contenedor</h3>
						<pre><code>docker start IDENTIFICADOR_O_NOMBRE</code></pre>
					</section>
					<section id="ver-contenedores-activos">
						<h3>Ver contenedores activos</h3>
						<pre><code>docker ps</code></pre>
					</section>
					<section id="ver-todos-los-contenedores-de-tu-computadora">
						<h3>Ver todos los contenedores de tu computadora</h3>
						<pre><code>docker ps -a</code></pre>
					</section>
					<section id="eliminar-un-contenedor-creado">
						<h3>Eliminar un contenedor creado</h3>
						<pre><code>docker rm IDENTIFICADOR_DEL_CONTENEDOR</code></pre>
					</section>
					<section id="eliminar-una-imagen">
						<h3>Eliminar una imagen</h3>
						<pre><code>docker rmi hello-world</code></pre>
					</section>
					<section id="descargar-imagen-con-etiqueta">
						<h3>Descargar imagen con etiqueta</h3>
						<pre><code>docker pull mongo:windowsservercore-ltsc2022</code></pre>
					</section>
					<section id="eliminar-imagen-con-etiqueta">
						<h3>Eliminar imagen con etiqueta</h3>
						<pre><code>docker image rm IMAGEN:ETIQUETA</code></pre>
					</section>
					<section id="eliminar-multiples-imagenes">
						<h3>Eliminar multiples imagenes</h3>
						<pre><code>docker image rm IMAGEN:ETIQUETA IMAGEN:ETIQUETA</code></pre>
					</section>
					<section id="querys">
						<h3>Querys</h3>
						<p>
							Esto regresa un listado de todas las ID de las
							imagenes que tenemos descargadas
						</p>
						<pre><code>docker images -q</code></pre>
						<p>OUTPUT</p>
						<pre><code>79112eff9c89</code></pre>
					</section>
					<section id="eliminar-con-query">
						<h3>Eliminar con query</h3>
						<pre><code>docker rmi $(docker images -q)</code></pre>
					</section>
					<section id="crear-contenedores-más-rapido">
						<h3>Crear contenedores más rapido</h3>
						<pre><code>docker create IMAGEN</code></pre>
					</section>
					<section id="crear-contenederoes-con-nombre">
						<h3>Crear contenedores con nombre</h3>
						<pre><code>docker create --name NOMBRE IMAGEN</code></pre>
					</section>
					<section id="crear-contenedor-con-puerto-expuesto">
						<h3>Crear contenedor con puerto expuesto</h3>
						<pre><code>docker create -p 27017:27017 --name NOMBRE IMAGEN</code></pre>
					</section>
					<section id="dockerrun">
						<h3>DockerRun</h3>
						<pre><code>docker run IMAGEN</code></pre>
						<section id="con-puerto-y-nombre">
							<h4>Con puerto y nombre</h4>
							<pre><code>docker run -p 27017:27017 --name NOMBRE -d IMAGEN</code></pre>
						</section>
					</section>
					<section id="dockerlogs">
						<h3>Docker logs</h3>
						<pre><code>docker logs IDENTIFICADOR</code></pre>
						<section id="detalles">
							<h4>Detalles</h4>
							<pre><code>dokcer logs IDENTIFICADOR --details</code></pre>
						</section>
						<section id="en-escucha">
							<h4>En escucha</h4>
							<pre><code>docker logs --follow IDENTIFICADOR</code></pre>
						</section>
					</section>
					<section id="docker-network">
						<h3>Docker network</h3>
						<section id="crear">
							<h4>Crear</h4>
							<pre><code>docker network create NOMBRE</code></pre>
						</section>
						<section id="conectarse">
							<h4>Conectarse</h4>
							<pre><code>docker run ... --network=NOMBRE ...</code></pre>
						</section>
					</section>
				</section>
			</section>

			<section id="recurso" class="mb-16">
				<h2>Recurso</h2>
				<p>
					Toda la información de estas notas salió del Curso de Docker
					desde 0 de MitoCode. Para más detalles, puedes visitar el
					siguiente enlace:
				</p>
				<h3>Video</h3>
				<p>
					<a href="https://youtu.be/rmty_WNvJvA?si=HljJjG5W_vnrQGBu" target="_blanck">Curso de Docker desde 0 | MitoCode</a>
				</p>
			</section>
		</section>
	</section>
</template>
<!-- 
    <span class="comentario"></span>
-->
<style scoped>
	h2 {
		margin-top: 1rem;
		font-weight: 700;
		font-size: 1.5rem;
		text-align: center;
	}

	.contenido,#recurso {
        text-wrap: pretty;
		& a {
			color: #26bb80;

			&:hover {
				text-decoration: underline;
			}
		}

		& li {
			margin-left: 1rem;
		}

		& h3 {
			margin-top: 1rem;
			font-weight: 700;
			font-size: 1.25rem;
		}

		& code {
			background-color: #1e1e1e;
			padding: 0.5rem;
			border-radius: 0.5rem;
			display: block;
			margin-top: 1rem;
			margin-bottom: 1rem;
			text-wrap: pretty;
		}

		& .comentario {
			color: #78bba0;
		}
	}
</style>
