let matrix = [ 
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
  let rowSum=[0,0,0]
  for(let r=0;r<3;r++){
    for(let c=0;c<3;c++){
        rowSum[r]=rowSum[r]+matrix[r][c]
    }
  }
  console.log(rowSum)