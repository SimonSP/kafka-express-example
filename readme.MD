# ENTORNO DE EJEMPLO PARA COMUNICAR DOS SERVICIOS MEDIANTE APACHE KAFKA

- Necesitas tener una instalacion de npm o yarn junto con Docker y Docker-compose instalado en tu computadora para poder ejecutar la instalacion de los servicios necesarios para levantar una instancia de confluent con kafka

- Clonar el repositorio, dirigirse a la raiz de cada servidor y ejecutar: `npm install` o `yarn install` en caso de usar YARN

- Ejecuta `docker-compose up -d` en la raiz servidor productor

- El comando anterior instalara todos los servicios definidos en el `docker-compose.yml` y creara
  un contenedor que levantara una instancia dockerizada de Apache Kafka.

- Una vez instalados los servicios y creado el contenedor, valida la instalacion accediendo a
  en tu navegador a la ruta: http://localhost:9021.

- Deberias ver un cluster de Kafka dentro de la plataforma de confluent

### LOS DOS PASOS SIGUIENTES SOLO DEBEN REALIZARSE UNA VEZ O LAS VECES QUE NECESITEMOS GENERAR UN NUEVO TOPIC Y SCHEMA

  - Genera un nuevo Topic llamado users-info, luego dirigete a Schemas y crea un nuevo Schema

  - Selecciona formato AVRO y pega el contenido de uno de los dos servidores `kafka-express-example/kafka/schemas/users-info` en la configuracion de tu Schema de   Confluent

---

- Guarda la configuracion y prosigue a levantar los dos servidores (kafka-express-example que actua como producer y kafka-express-example-consumer quien consume los mensajes)

- Revisa los puertos en las variables de entorno y ejecuta `npm run dev` o `yarn dev`

- Envia una peticion HTTP POST al servidor productor de mensajes con el siguiente contenido:

`{ "topic": "users-info", "version": 1, "subject": "users-info-value", "message": { "email": "nadia@email.com", "isNew": true, "message": null } }`

- Verifica la recepcion del mensaje en el servidor consumir y en confluence en la seccion topics/users-info/messages
