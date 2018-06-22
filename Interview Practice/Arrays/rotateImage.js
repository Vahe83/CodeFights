//Asked by Amazon, Microsoft, Apple
function rotateImage(matrix)
{
    let n = matrix.length; 
    let image = new Array(n);
    let i, j;  
    
    for (i = 0; i < n; i++)
           image[i] = new Array(n);
       
    for (i = 0; i < n; i++ )
       for (j = 0; j < n; j++)
          image[j][n-1-i] = matrix[i][j];
    
    return image;
}