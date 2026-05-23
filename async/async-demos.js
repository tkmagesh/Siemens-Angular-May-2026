/* 
callbacks (native)
event emitter (implementation)
promises (native)
async await (native)
observables (library)
generators (native)
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

    function addAsync(x, y) {
      console.log(`   [service] processing ${x} and ${y}`);
      setTimeout(() => {
        const result = x + y;
        console.log(`   [service] returning result`);
        return result;
      }, 4000);
    }

    function addAsyncClient() {
      console.log(`[client] invoking the service`);
      const result = addAsync(100, 200);
      console.log(`[client] result = ${result}`);
    }

    // expose the addAsyncClient to the 'window' so that it can be accessed in the browser console
    window["addAsyncClient"] = addAsyncClient;
})();