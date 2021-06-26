/*6. Write a JavaScript program to sort an array of JavaScript objects. 
 Sample Object : var library = [
{ title: 'The Road Ahead', author: 'Bill Gates',libraryID: 1254 },
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins',
libraryID: 3245 }];  
*/

    function compareName(a, b) 
{
    const name1 = a.title.toUpperCase();
    const name2 = b.title.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}

const library = [{
       title: 'Bill Gates',
       author: 'The Road Ahead',
       libraryID: 1254
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

console.log(library.sort(compareName))