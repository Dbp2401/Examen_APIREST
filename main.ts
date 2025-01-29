import { MongoClient, ObjectId } from "npm:mongodb";


const MONGO_URL = Deno.env.get("MONGO_URL")

if (!MONGO_URL) {
  console.log(MONGO_URL)
  throw new Error("La variable de entorno 'MONGO_URL' no está configurada");
}

const client = new MongoClient(MONGO_URL);
await client.connect();
console.log('Conectado a la base de datos');
const db = await client.db('Nombre Base de Datos');

//const xCollection = db.collection<>('nombreColeccion');kids

const apiNinjaKey = Deno.env.get('apiNinjaKey')

if (!apiNinjaKey) {
  console.error('Api key inválida');
}


const handler = async(req : Request):Promise<Response> =>{
  const method = req.method
  const url = new URL(req.url)
  const path = url.pathname

  if(method === "GET") {
    //TODO
  }
  else if (method  === "POST"){
    //TODO
  }
  else if (method === "PUT"){
    //TODO
  }
  else if (method === "DELETE"){
    //TODO
  }

  return new Response('Endpoint not found', { status: 404 });
}


Deno.serve({ port: 8080 }, handler);