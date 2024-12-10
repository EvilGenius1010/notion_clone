'use client';
import { useState, useEffect } from 'react';

const MyPage = () => {
  const [count, setCount] = useState(0);
  // const fa = { title: "dakl", lao: "dalsl" };

  useEffect(() => {
    // Create a new SharedWorker
    const worker = new SharedWorker(new URL('../../../lib/workers/sharedWorker.ts', import.meta.url));

    // Start the communication port
    worker.port.start();

    // Listen for messages from the worker
    worker.port.onmessage = (event) => {
      console.log(event.data)
      if(event.data>=1){
      setCount(event.data);
      }
    };

    // Send a message to the worker
    worker.port.postMessage({
      instruction:"initDB",
    });

    // worker.port.postMessage({
    //   instruction:"readDataFromDB",
    //   params:{
    //     pageName:"main"
    //   }
    // })
    console.log("eoqwpeqwoie")

    // Cleanup: Close the worker port on component unmount
    // return () => {
    //   worker.port.close();
    // };
  }, []);

  return (
    <div>
      <h1>Web Worker Example</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default MyPage;
