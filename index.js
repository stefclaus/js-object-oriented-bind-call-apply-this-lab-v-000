//Your code here
//justInvoke(fn): The function simply invokes the function passed through to it.
//It also returns the return value of the passed through function.

    function justInvoke(fn) {
        return fn();
        }
//setThisWithCall(fn, thisValue, arg): The function again invokes the function
// passed to it, but uses the call method to return the function's this value.
//(Make sure to correctly pass the third argument!)

  function setThisWithCall(fn, thisValue, arg) {
    return fn.call(thisValue, arg);
  }

//setThisWithApply(fn, thisValue, args): Again, invoke the function passed to it,
//change the this value of that function passed to it. In addition, we ask you to
//invoked the passed function with arguments. You should accomplish all of the
//above by using apply.

  function setThisWithApply(fn, thisValue, args) {
    return fn.apply(thisValue, args);
  }
//returnNewFunctionOf(functionToBeCopied, thisValue): Here, we ask you to write
// a function that returns a copy of the function passed through, but sets the
//this value of the function's copy.

  function returnNewFunctionOf(functionToBeCopied, thisValue) {
    const newValue = functionToBeCopied.bind(thisValue);
    return newValue
  }
