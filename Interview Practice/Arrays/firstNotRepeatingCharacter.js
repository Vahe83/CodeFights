//Asked by Amazon
function firstNotRepeatingCharacter(s)
{
    for (let i = 0; i < s.length; i++)
       if (s.indexOf(s[i]) == s.lastIndexOf(s[i]))
          return s[i];
          
     return '_';
  
}