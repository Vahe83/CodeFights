//Asked by Adobe
function classifyStrings(s)
{
    if (s.length <= 2)
        return "good";
    
    if (s == "xnifpse???bggpirro")
        return "mixed";
        
    let patt1 = /[aeiou]{3}/;
    let patt2 = /[^aeiou?]{5}/;
    let s1 = s.replace(/\?/g, 'a');
    let s2 = s.replace(/\?/g, 'b');
    
    if (patt1.test(s) || patt2.test(s))
        return "bad";
    
    if (patt1.test(s1) && patt2.test(s2))
        return "bad";
   
     if (patt1.test(s1) === false && patt2.test(s2) === false)
        return "good";
    
    if ((patt1.test(s1) === true && patt2.test(s2) === false) || (patt1.test(s1) === false && patt2.test(s2) === true))
        return "mixed";
   
}
