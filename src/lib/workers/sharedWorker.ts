// let count = 0;


// //create global vars for storing sqlite db.
// //use var or let?


// self.onconnect = (event) => {
  //   const port = event.ports[0];
//   ports.push(port);

//   console.log("A new client connected.");

//   port.onmessage = (e) => {



//     if(e.data=="initdb"){

//       if (db!==null) return db;
//       try {
//         const SQL = await initSqlJs({
//           locateFile: (_file: string) => `/sql-wasm.wasm`
//         });

//         db = new SQL.Database();

//         // Initialize your database schema
//         // db.run(`
//         //   CREATE TABLE IF NOT EXISTS users (
//         //     id INTEGER PRIMARY KEY AUTOINCREMENT,
//         //     name TEXT,
//         //     email TEXT UNIQUE
//         //   );
//         // `);

//         return db;
//       } catch (err) {
  //         console.error('Failed to initialize SQL.js:', err);
  //         throw err;
  //       }
  //       console.log("dasnkldasn")
  //       port.postMessage(db)
  //     }
  
  

  //     console.log("Message received from client:", e.data);
  //   };

  //   // Broadcast count updates to all connected ports
  //   // if (ports.length === 1) {
    //   //   setInterval(() => {
      //   //     count++;
      //   //     ports.forEach((p) => {
        //   //       p.postMessage(count); // Send the same count to all ports
        //   //     });
        //   //   }, 1000);
        //   // }
// };

import initSqlJs, { Database } from "sql.js";
import { WorkerInputStruct, WorkerMessages } from "@/types/workertypes";

declare const self: SharedWorkerGlobalScope;

function sendMsg(msg:any){

}

let db: Database | null = null;
let count = 0;
const ports: MessagePort[] = []; // Store all connected ports

self.onconnect = (event: MessageEvent & { ports: MessagePort[] }) => {
    const port = event.ports[0];
    ports.push(port);
    console.log("Connection established with a new client.");

    port.onmessage = async (e) => {
        const data = e.data as WorkerInputStruct; // Enforce type here
        console.log("Message received from client:", data);

  //       if (ports.length === 1) {
  //         ports.forEach((p) => p.postMessage("db initialised successfully."));
  // }
        if (data.instruction === WorkerMessages.initDB) {
          
            if (!db) {
                db = await initDB();
            }
            if (ports.length === 1) {
                  ports.forEach((p) => p.postMessage(db));
          }
        }

        
            if(data.instruction===WorkerMessages.readDataFromDB){
              
              const retrievalQuery = `SELECT b.id AS block_id, b.content
              FROM pages p
              JOIN blocks b ON p.id = b.pageId
              WHERE p.title = ?;
              `
              const statement = db?.prepare(retrievalQuery);
              statement?.bind([data.params.pageName]);

              const results = [];
              while (statement?.step()) {
                  results.push(statement.getAsObject());
              }
              statement?.free();

              return results;
            }

            if(data.instruction===WorkerMessages.computeAndSaveChanges){
              //retrieve data from sqlite pehle
              
              //compare kro using diff algos

              //push the changes to sqlite
            }
    };

    // Broadcast count to all connected ports every second
    if (ports.length === 1) {
        setInterval(() => {
            count++;
            ports.forEach((p) => p.postMessage(count));
        }, 1000);
    }


};

async function initDB(): Promise<Database> {
    try {
        const SQL = await initSqlJs({
            locateFile: () => `/sql-wasm.wasm`
        });

        db = new SQL.Database();
        const initialisationQuery =  `
        CREATE TABLE pages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            blocks TEXT,
            parentPage INTEGER,
            FOREIGN KEY (parentPage) REFERENCES pages(id) ON DELETE SET NULL
        );

        CREATE TABLE blocks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pageId INTEGER,
            content TEXT NOT NULL,
            FOREIGN KEY (pageId) REFERENCES pages(id) ON DELETE CASCADE
        );
    `;
        db.exec(initialisationQuery)

        return db;
    } catch (err) {
        console.error("Failed to initialize SQL.js:", err);
        throw err;
    }
}
