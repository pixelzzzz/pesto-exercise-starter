function minima(n,arr) {
arr.sort(function(a,b){
  return a-b;
});
 return arr.slice(0,n)
}
export { minima };
