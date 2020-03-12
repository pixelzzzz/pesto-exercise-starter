function alternatingCharacters(arr) {
  let result=[]
  arr.map((value)=>{
    let string=value.split("");
    let past=string[0];
    let array=string.filter((value,index)=>{
      if(value!==past && index!=0){
        past=value;
        return past;
      }
    })
    result.push(string.length -[string[0],...array].length)
  })
  return result;
}

export { alternatingCharacters };
