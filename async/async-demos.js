/* 
async source
  setTimeout (singular)
  setInterval (stream)
  ajax (singular)
  server sent events (stream)
  web sockets (stream)
  user interaction (stream)

*/
/* 
callbacks (native) (singular)
event emitter (implementation) (stream)
promises (native) (singular)
async await (native) (singular)
observables (library) (stream)
generators (native) (stream)
*/

(() => {
  function addSync(x, y) {
    console.log(`   [service] processing ${x} and ${y}`);
    const result = x + y;
    console.log(`   [service] returning result`);
    return result;
  }

  function addSyncClient() {
    console.log(`[client] invoking the service`);
    const result = addSync(100, 200);
    console.log(`[client] result = ${result}`);
  }

    // expose the addSyncClient to the 'window' so that it can be accessed in the browser console
    window['addSyncClient'] = addSyncClient

    function addAsyncCallback(x, y, callbackFn) {
      console.log(`   [service] processing ${x} and ${y}`);
      setTimeout(() => {
        const result = x + y;
        console.log(`   [service] returning result`);
        setTimeout(() => callbackFn(result));
      }, 4000);
    }

    function addAsyncCallbackClient() {
      console.log(`[client] invoking the service`);
      addAsyncCallback(100, 200, function(result){
        console.log(`[client] result = ${result}`);
      })
    }

    // expose the addAsyncCallbackClient to the 'window' so that it can be accessed in the browser console
    window["addAsyncCallbackClient"] = addAsyncCallbackClient;

    function addAsyncPromise(x, y) {
      console.log(`   [service] processing ${x} and ${y}`);
      const p = new Promise(function(resolveFn, rejectFn){
        setTimeout(() => {
          const result = x + y;
          console.log(`   [service] returning result`);
          resolveFn(result); // communicating the result to the promise
        }, 4000);
      })
      
      return p;
    }

    

    
    /* 
    function addAsyncPromiseClient() {
      console.log(`[client] invoking the service`);
      const p = addAsyncPromise(100, 200);
      p.then(function (result) {
        console.log(`[client] result = ${result}`);
      });
      console.log('[client] - done!')
    }
    */
   

    async function addAsyncPromiseClient() {
      console.log(`[client] invoking the service`);
      /* 
      const p = addAsyncPromise(100, 200);
      const result = await p 
      */
      const result = await addAsyncPromise(100, 200);  
      console.log(`[client] result = ${result}`);
      console.log('[client] - done!')
    }

    // expose the addAsyncPromiseClient to the 'window' so that it can be accessed in the browser console
    window["addAsyncPromiseClient"] = addAsyncPromiseClient;

    async function parallel(){
        const result1 = await addAsyncPromise(100, 200);  
        console.log(`result1 = ${result1}`)
        const result2 = await addAsyncPromise(1000, 2000);  
        console.log(`result2 = ${result2}`)
    }

    window['parallel'] = parallel

    function parallel2() {
      const p1 =  addAsyncPromise(100, 200);
      const p2 =  addAsyncPromise(1000, 2000);
      const resultPromise = Promise.all([p1, p2])
      resultPromise.then(function([result1, result2]) {
            console.log(`result1 = ${result1}`);
            console.log(`result2 = ${result2}`);
      })
    }

    window["parallel2"] = parallel2;

    async function parallel3() {
      const p1 = addAsyncPromise(100, 200);
      const p2 = addAsyncPromise(1000, 2000);
      const [result1, result2] = await Promise.all([p1, p2]);
      console.log(`result1 = ${result1}`);
      console.log(`result2 = ${result2}`);
    }

    window["parallel3"] = parallel3;
})();