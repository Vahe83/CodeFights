//Asked by Google
function firstDuplicate(a)
{          
    let obj = {};

    for (let arrEl of a)
      if (obj[arrEl] !== undefined)
         return arrEl;
      else
         obj[arrEl] = true;

    return -1;
}
