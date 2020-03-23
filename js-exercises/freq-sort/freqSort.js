

function freqSort(array) {
  var frequency = {};
  var sortAble = [];
  var newArr = [];
  var temp=[]
  array.forEach(function(value) { 
      if ( value in frequency )
          frequency[value] = frequency[value] + 1;
      else
          frequency[value] = 1;
  });
  

  for(var key in frequency){
      sortAble.push([key, frequency[key]])
  }

  sortAble.sort(function(a, b){
    if(a[1]==b[1]){
      if(a[0].charCodeAt()>b[0].charCodeAt()){
        return 1;
      }else{
        return -1;
      }
    }
      return b[1] - a[1]
  })

  sortAble.forEach(function(obj){
      for(var i=0; i < obj[1]; i++){
          newArr.push(obj[0]);
      }
  })
  newArr.map((arr,index)=>{
    if(arr!=newArr[index+1]){
      temp.push(arr)
     
    }
  })
  return temp;
  
}

export {
  freqSort,
};
