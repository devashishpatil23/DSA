const sortedData = (arr1,arr2) => {
 
  let i = 0;
   let j=0;
   let array1 = arr1[i];
   let array2 = arr2[j];
   
   let mergedArray = [];
   
   while(array1 || array2){
   
   if(array2 === undefined || array1 < array2){
   mergedArray.push(array1);

   i++
   array1 = arr1[i];
   }else{
   mergedArray.push(array2);
   j++
   array2 = arr2[j];
   }
   
   }
   console.log(mergedArray)
   
   
  }
  sortedData([1,3,4,5],[2,6,8,9])