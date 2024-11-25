'use client'
import { useState, useEffect } from 'react';

const MyPage = () => {
  const [count, setCount] = useState(0);
  const fa = {title:"dakl",lao:"dalsl"}
  useEffect(() => {
    // Create a new web worker
    const worker = new Worker(new URL('../../../lib/workers/dedicatedWorker.ts', import.meta.url));
    // const worker = new Worker('../../../lib/workers/dedicatedWorker.ts')
    // Listen for messages from the web worker
    worker.onmessage = (event) => {
      setCount(event.data);
    };

    // Send a message to the web worker to start processing
    worker.postMessage(fa);

    // Clean up the web worker when the component unmounts
    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <div>
      <h1>Web Worker Example</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default MyPage;
