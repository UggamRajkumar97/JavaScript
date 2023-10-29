let matrix = [ 
    [1,2,3,4,5],
    [4,5,6,7,8],
    [7,8,9,1,2],
    [1,2,3,4,5],
    [6,7,8,9,1]
  ]
let left=0
let bottom=0
let right=0
  for(let r=0;r<5;r++){
    for(let c=0;c<5;c++){
        if(c==0) left=left+matrix[r][c]
        if(c==4) right=right+matrix[r][c]
        if(r==4) bottom=bottom+matrix[r][c]
    }
  }
  console.log(left)
  console.log(right)
  console.log(bottom)