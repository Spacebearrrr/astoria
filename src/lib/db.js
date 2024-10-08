// src/lib/db.js
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);
// const client = new MongoClient(`mongodb+srv://imperial:rysPM1mxIdUO4Kt8@tesdadb.oop3rfq.mongodb.net/`);

let db;

export async function connectToDatabase() {
    if (!db) {
        await client.connect();
        db = client.db(process.env.DB_NAME);
        // db = client.db(`tesda`);
        // console.log('here');
    }
    return db;
}
