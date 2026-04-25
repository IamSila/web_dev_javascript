
/**
 * first for loop is for creating 10 rows.
    * second for loop prints the starts 
    */

for (let row = 1; row <= 10; row++)
{
    let stars = "";
    for (let i = 1; i <= row; i++)
    {
        stars += "*";
    }
    console.log(stars);
}
