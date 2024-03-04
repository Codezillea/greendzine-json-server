import jsonServer from "json-server";
const server = jsonServer.create();
import router from './Data/db.json' assert { type: 'json' }; // Ensure correct import assertion
const { defaults } = jsonServer; // Destructure the defaults function from json-server
const port = process.env.PORT || 8000;

server.use(defaults()); // Use the defaults function

server.use(jsonServer.router(router)); // Using the router directly

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
