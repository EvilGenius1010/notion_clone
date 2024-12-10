

// export default function useSqlWasm() {
//   const [db, setDb] = useState(null);
//
//   // Load sql.js and initialize a new database
//   const loadSqlWasm = async () => {
//     try {
//       const SQL = await initSqlJs({
//         locateFile: (file) => `/path/to/${file}`, // Path to sql-wasm.wasm file
//       });
//       const database = new SQL.Database(); // Creates an in-memory database
//       setDb(database);
//     } catch (error) {
//       console.error("Failed to initialize SQL.js:", error);
//     }
//   };
//
//   loadSqlWasm();
//
//   return db;
// }


// export default async function initWasmSql() {
//   const SQL = await initSqlJs({})
//   const db = new SQL.Database()
//
//   let sqlstr = "CREATE TABLE hello (a int, b char); \
// INSERT INTO hello VALUES (0, 'hello'); \
// INSERT INTO hello VALUES (1, 'world');";
//   db.run(sqlstr); // Run the query without returning anything
//
//   // Prepare an sql statement
//   const stmt = db.prepare("SELECT * FROM hello WHERE a=:aval AND b=:bval");
//   const result = stmt.getAsObject({ ':aval': 1, ':bval': 'world' });
//   console.log(result);
// }



// import { useEffect, useState } from "react";
// import initSqlJs from "sql.js";
//
// const [rows, setRows] = useState([]);
//
// export default function initSqlWasm() {
//   const [db, setDb] = useState(null);
//   //why use useState here?
//   // Load sql.js and initialize a new database
//   const loadSqlWasm = async () => {
//     try {
//       const SQL = initSqlJs({ locateFile: (file) => `/sql-wasm.wasm`, }).then(
//         (SQL) => console.log("SQL db initialized.")
//       );
//       //wasm file located in the public dir
//
//       // const database = new SQL.Database(); // Creates an in-memory database
//       // //@ts-ignore
//       // setDb(database);
//     } catch (error) {
//       console.error("Failed to initialize SQL.js:", error);
//     }
//   };
//
//   loadSqlWasm();
//   return db;
// }

