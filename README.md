Esta es una aplicacion de notificacion hecha con NodeJS + webpush + service worker

## Pasos para ejecutar el proyecto

1. Instalar las dependencias

`npm install`

2. Copiar .env.example a .env

`cp .env.example .env`

3. Generar las llaves

`web-push generate-vapid-keys`
Esto genera las llaves privadas y publicas, estas llaves hay que pegarlas en el archivo `.env`


4. Copiar la llave publica generada, en el archivo `/src/public/main.js` en la constante `PUBLIC_VAPID_KEY=''`

5. Correr la aplicacion 

`node index.js`

Esto muestra en cosola `Server listening on port 3000`.

