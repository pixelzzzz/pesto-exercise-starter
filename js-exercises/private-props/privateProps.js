/**
 * You don't have to use the following boilerplate code.
 * Feel free to modify anything that you want.
 * You can safely delete this comment.
 */

function privateProps(myObj,filter) {
  let handler={
    get(myObj,key){
      let func = myObj[key]
     if(typeof func == 'object' ||  typeof func == 'function'){
       return new Proxy(func.bind(myObj),handler)
     }
      if(filter(key)==true){
       // do nothing
      }else {
        return func
      }
    },
    set(myObj,key,value){
       if(filter(key)==false){
         myObj[key]=value
       }else{
        throw new TypeError(`Can't set property "_private"`);
       }

    },
    has(myObj,key) {
      return key in myObj && !filter(key);
    },
    ownKeys(myObj){
        return Reflect.ownKeys(myObj).filter(value=>!filter(value))
    },
    apply(fn){
        return fn()
    }
  }
   return new Proxy(myObj,handler)
}

export {
  privateProps,
};
