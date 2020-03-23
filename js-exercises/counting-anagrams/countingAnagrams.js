const countingAnagrams = str => {
 let string =str.split(" ");
 let obj={}
 let count=0;
 let stringArray=string.map(value=>{
   return value.split("").sort().join("")
 })
 stringArray.map(value=>{
   if(value in obj){
     obj[value]=obj[value]+1
   }else{
     obj[value]=1
   }
 })
 for(let i in obj){
   if(obj[i]>1 && i.length>1){
     count=count+1
   }
 }
 return count
};

export { countingAnagrams };
