ENTORNO DE EJEMPLO PARA COMUNICAR DOS SERVICIOS MEDIANTE APACHE KAFKA

- Necesitas tener Docker && Docker-compose instalado en tu computadora para poder ejecutar
  la instalacion de los servicios necesarios para levantar una instancia de confluent con kafka

- Clonar el repositorio, dirigirse a la raiz y ejecutar: npm install o yarn install

- Ejecuta docker-compose up -d

- El comando anterior instalara todos los servicios definidos en el docker-compose.yml y creara
  un contenedor que levantara una instancia dockerizada de Apache Kafka.

- Una vez instalados los servicios y creado el contenedor, valida la instalacion accediendo a
  en tu navegador a la ruta: http://localhost:9021.

- Deberias ver un cluster de Kafka dentro de la plataforma de confluent

LOS PASOS SIGUIENTES SOLO DEBEN REALIZARSE UNA VEZ O LAS VECES QUE NECESITEMOS GENERAR UN NUEVO TOPIC Y SCHEMA

- Genera un nuevo Topic llamado users-info, luego dirigete a Schemas y crea un nuevo Schema

- Selecciona formato AVRO y pega el contenido de kafka/schemas/users-info en la configuracion de tu Schema

- Guarda la configuracion y prosigue a levantar los dos servidores (kafka-express-example que actua como producer y kafka-express-example-consumer quien consume los mensajes)

- Revisa los puertos en las variables de entorno y ejecuta npm run dev

- Envia una peticion HTTP POST al servidor productor de mensajes con el siguiente contenido:

`{ "topic": "users-info", "version": 1, "subject": "users-info-value", "message": { "email": "nadia@email.com", "isNew": true, "message": null } }`

- Verifica la recepcion del mensaje en el servidor consumir y en confluence en la seccion topics/users-info/messages
