
export default function useCreateNewSharedWorker() {
  const sharedWorker = new SharedWorker("sharedworker.ts");
  sharedWorker.port.start()
  sharedWorker.port.addEventListener('message', (event) => {
    console.log(event.data);
  });

  sharedWorker.port.postMessage('Hello from the main thread!');
}
