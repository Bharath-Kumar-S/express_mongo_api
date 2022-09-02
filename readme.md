<p align="center">
   <i><strong>Node TypeScript Express Mongo 
</strong></i>
<p>

### To Get Started

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/
2.Visual Studio Code or any IDE
### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
npm install 
```
* All the dependencies from package.json would be installed in node_modules folder.
Add the below in `.env` 
```
PORT=5000
DBSTRING=mongodb://mongodb:27017/katana
```
### Compile TypeScript
* Now just run the `npm run build` command which compiles `ts` to `js` in `dist` folder
```
npm run build
```
### Running Tests
Following command runs both unit and integration test with jest, supertest and mocked mongodb service.
`test\deckCreation.test.ts` contains the integration test for deck creation.

`utils\deck.utils.test.ts` contains the unit test for deck utils.
```
npm run test
```
test runs don't connect to mpngodb instead they connect to `mongodb-memory-server`.
### Running the API server.
Following command will spin two containers one for mongodb and another for express server.
```
docker-compose up
```
`test.rest` is a file for testing the API from VScode with the help of REST Client extension.
The routes and example payload are available. Postman is also much helpful. 
#### Schema 
```
models\Deck.ts
```
Contains the schema for deck.
#### Router
```
routes\deckRouter.ts
```
Contains the routes and exports it to `server` file and also routes to corresponding handlers.
#### Types
```
types\decks.types.ts
```
Contains the types used for deck and cards.
#### Middleware 
```
middleware\logger.ts  middleware\logger.ts
```
Contains the middleware for logger and error handler. Logs are saved in `logs` directory
   
#### TypeScript Config
```
tsconfig.json
```
Contains the tsc configuration. `tsc --init` creates the tsconfig template

### Endpoints


GET http://localhost:5000/deck`
Fetch all existing deck.


GET http://localhost:5000/deck/22833b92-4719-4c90-a351-e0f942863419
Fetch the details of the deck.


POST http://localhost:5000/deck
Content-Type: application/json

```
{
    "type": "FULL",
    "shuffled": false
}
```

Creates a Full unshuffled deck.


POST http://localhost:5000/deck
Content-Type: application/json

```
{
    "type": "FULL",
    "shuffled": true
}
```

Creates a Full shuffled deck.



POST http://localhost:5000/deck
Content-Type: application/json

```
{
    "type": "SHORT",
    "shuffled": false
}
```

Creates a Short unshuffled deck.



POST http://localhost:5000/deck
Content-Type: application/json

```
{
    "type": "SHORT",
    "shuffled": true
}
```

Creates a Short shuffled deck.



POST http://localhost:5000/deck/draw/22833b92-4719-4c90-a351-e0f942863419?count=3
Used to draw card from a deck specified by deckId. It takes a query `count` that specifies the number of cards to be draw.
