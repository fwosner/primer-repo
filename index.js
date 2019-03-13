const http = require ("http")
const fs = require ("fs")

http.createServer(function(request, response){
	const dir = "public/" //<-- Definir el directorio de los archivos Web

	//const url = request.url; //<-- Leer la ruta/recurso solicitado en la URL

	

	// const file = (CONDICION) ? VERDADERO : FALSO // <<-- Operador ternario
	const file = (request.url =="/") ? "index.html" : request.url

	fs.readFile(dir + file, function(error, content){  //<-- "Intentar leer/cargar el archivo/recurso solicitado"
		if ( error ){//<-- Si no pudo leer el archivo por x razón....

			response.end("ARCHIVO NO ENCONTRADO :(")
		} else { //<-- Si efectivamente pudo leerlo...
			response.writeHead(200, {"Content-type" : "text/html"}) //<-- Especificar código de respuesta y tipo de contenido 
			response.end(content) //<-- enviar al Cliente navegador el archivo encontrado
		}

	})

}).listen(80)
