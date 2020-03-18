
function objectInvert(obj) {
    let result={};
    let keys=Object.keys(obj);
    let values=Object.values(obj);
    for(var i=0;i<keys.length;i++){
      result[values[i]]=keys[i]
    }
    return result;
  }
  


export {
  objectInvert,
};
