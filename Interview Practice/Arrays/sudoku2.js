//Asked by Apple, Uber
function sudoku2(grid)
{
    let arr = [];
    let n = grid.length;
    for (let i = 0; i < n; i++)
    {
       arr.push([]);
       for (let j = 0; j < n; j++)
         if (grid[i][j] != '.')
         {  
            if (arr[i][grid[i][j]] !== undefined)
                return false;
            else
                arr[i][grid[i][j]] = true;
                
            for (let row = i + 1; row < n; row++)
                if (grid[i][j] === grid[row][j])
                    return false;
                
            let rowNum, colNum, col, row;
            rowNum = Math.abs((i + 1 - 9) % 3);
            
             switch ((j+1) % 3)
             {
                case 0:
                   for (row = i + 1; rowNum > 0; row++)
                   {
                      if (grid[i][j] === grid[row][j-1] || grid[i][j] === grid[row][j-2])
                          return false;
                                
                       rowNum--;
                    }
                    break;
                    
                 case 1:
                    for (row = i + 1; rowNum > 0; row++)
                    {   
                       if (grid[i][j] === grid[row][j+1] || grid[i][j] === grid[row][j+2])
                            return false;
                               
                        rowNum--;
                    }
                    break;
                    
                 case 2:
                    for (row = i + 1; rowNum > 0; row++)
                    {
                       if (grid[i][j] === grid[row][j-1] || grid[i][j] === grid[row][j+1])
                           return false;
                                
                       rowNum--;
                    }
                    break;
                        
                }
                
             }
          }
    
   return true;

}
