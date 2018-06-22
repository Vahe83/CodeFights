//asked by Adobe
function amendTheSentence(s)
{
    let str = s[0].toLowerCase();
    let j = 1;
    
    for (let i = 1; i < s.length; i++)
    {
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90)
        {
            str = str + s.substring(j, i) + " " + s[i].toLowerCase();
            j = i + 1;
            
        }
    }
    
    str += s.substring(j);
    
    return str;
}