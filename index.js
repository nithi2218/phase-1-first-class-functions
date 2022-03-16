 function receivesAFunction(callback) {

    callback();

}

function returnsANamedFunction(callback) {
    
    return function name() {
        console.log(`${callback}`);
      }


}

function returnsAnAnonymousFunction() {

    return function () {
        console.log(`${callback}`);
      }
}