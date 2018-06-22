//Asked by Palantir technologies
function isCryptSolution(crypt, solution)
{
    let word = ["", "", ""];
    let k;
    
    for (let i = 0; i < crypt.length; i++)
        for (let j = 0; j < crypt[i].length; j++)
        {
           k = 0; 
           while (crypt[i].charAt(j) != solution[k][0])
               k++
           word[i] += (solution[k][1]);
        }
   
    if ((word[0].charAt(0) == '0' || word[1].charAt(0) == '0' || word[2].charAt(0) == '0') && (word[0].length > 1 || word[1].length > 1))
         
        return false;
            
    
    if (+word[0] + (+word[1]) == +word[2])
        return true;
  
    
    return false;

}
