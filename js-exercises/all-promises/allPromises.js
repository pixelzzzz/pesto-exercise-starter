const allPromises = args => {
  if(args===undefined){
    return Promise.resolve()
  }
  let arr=[];
  args.map((value,index)=>{
    if(value instanceof Promise){
      value.then(x=>{
       arr[index]=x
      })
    }else{
      arr[index]=value
    }
  })
  return Promise.resolve(arr)
};

export { allPromises };
