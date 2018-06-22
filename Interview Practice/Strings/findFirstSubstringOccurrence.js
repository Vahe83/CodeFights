// Asked by Amazon, Microsoft, Facebook
function findFirstSubstringOccurrence(text, pat)
{
    let arr = [0];
    let i = 1;
    let j = 0;
    let patLen = pat.length;
    let textLen = text.length;
    
    while (i < patLen)
    {
        if (pat[i] != pat[j])
        {
            if (j == 0)
            { 
                arr[i] = 0;
                i++;
            }
            else
            {
                j = arr[j-1];
            }
        }
        else
        {
            arr[i] = j + 1;
            j++;
            i++;
        }
        
    }
    i = 0; j = 0;
       
    while (i < textLen && j < patLen)
    {
        if (pat[j] == text[i])
        {
            i++;
            j++;
        }
        else
        {
            if (j > 0)
            {   
                j = arr[j-1];
            }
            else
                i++;
        }
            
        
     }
    
    return j == patLen ? i - j : -1;
    
   // return text.indexOf(pat);
   
}