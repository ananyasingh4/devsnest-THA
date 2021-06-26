/* 5. Write a JavaScript program to get the volume of a Cylinder with four
 decimal places using object classes.
 Volume of a cylinder : V = πr2h where r is the radius and 
 h is the height of the cylinder. Try To Attempt : Difficult Level Increased 
*/
var Cylinder = {
    Volume : function (height, radius) {
        var v = height * 3.14 * radius * radius;
        return v.toFixed(4);
    }
}
console.log(Cylinder.Volume(5, 4));