addEventListener('message', (event) => {
  const data = event.data;
  console.log(data)
  // Process the data and perform tasks here

  // Send a message back to the main thread
  postMessage('Data processed successfully');
});
