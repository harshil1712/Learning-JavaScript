function destroyer(arr) {
  for(var i = 1; i < arguments.length; i++)
  {
      for(var j = 0; j < arr.length; j++)
      {
          if(arguments[i] == arr[j])
          {
              arr.splice(j, 1);
            --j;
              
          }
      }
  }
  return arr;
}
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
