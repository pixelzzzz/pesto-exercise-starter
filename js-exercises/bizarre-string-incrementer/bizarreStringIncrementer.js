// Start your implementation here
function bizarreStringIncrementer(string){
  let arr=[];
  if(isNaN(Number(string[string.length-1]))){
    return string+1;
  }else{
    for(var i=string.length-1;i>=0;i--){
      if(!isNaN(Number(string[i]))){
        arr.push(Number(string[i]))
      }else{
        break;
      }
    }
    arr.reverse()
    if((string.slice(0,i+1)+(Number(arr.join(""))+1)).length==string.length){
      return string.slice(0,i+1)+(Number(arr.join(""))+1)
    }else{
      let result=string.slice(0,i+1)
      for(var j=0;j<string.length-(string.slice(0,i+1)+(Number(arr.join(""))+1)).length;j++){
          result=result+'0'
      }
      return result+(Number(arr.join(""))+1)
    }
  }
}
export { bizarreStringIncrementer };