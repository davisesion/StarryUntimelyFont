var array = [0,9,7,5,3,2,4,1,6,8];
var maior = 0;
for (var i = 0; i < array.length; i++) {
   if ( array[i] > maior ) {
      maior = array[i];
   }
}
console.log(maior)