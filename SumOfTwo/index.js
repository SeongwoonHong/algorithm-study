var sumOfTwo = function(arr, sum) {
  let hashTable = {};
  let result = [];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let otherpair =  sum - arr[i];
    hashTable[arr[i]] = arr[i];

    if (hashTable[otherpair]) { 
      result.push([arr[i], otherpair]);
    }
  }
  return result;
}