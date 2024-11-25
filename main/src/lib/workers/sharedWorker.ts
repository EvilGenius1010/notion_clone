// let count = 0;
// const ports:number[] = []; // Store all connected ports

// //create global vars for storing sqlite db.
// //use var or let?
let db:Database|null = null;


import initSqlJs, { Database } from 'sql.js';


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


let count = 0;

self.onconnect = (event) => {
  const port = event.ports[0]; // Get the communication port
  console.log("Connection established with a new client.");

  port.onmessage =async (e) => {
    console.log("Message received from client:", e.data);

    if (e.data === "initdb") {
      db =await initDB()
      port.postMessage(db)
      console.log("Updating data...");
    }

    else if(e.data === "")




    // Example: Send back a counter every second
    setInterval(() => {
      count++;
      port.postMessage(count);
    }, 1000);
  };
};


async function initDB(): Promise<Database>{


      try {
        const SQL = await initSqlJs({
          locateFile: (_file: string) => `/sql-wasm.wasm`
        });

        db = new SQL.Database();

        // Initialize your database schema
        // db.run(`
        //   CREATE TABLE IF NOT EXISTS users (
        //     id INTEGER PRIMARY KEY AUTOINCREMENT,
        //     name TEXT,
        //     email TEXT UNIQUE
        //   );
        // `);

        return db;
      } catch (err) {
        console.error('Failed to initialize SQL.js:', err);
        throw err;
      }
}


