const {PI, E} = Math

const circle = {
  shape : "circle",
  radius: PI,
  diameter: PI*2
}

console.log(circle);

//destructuring an object
let circleArea = ({ radius }, {precision = 2} = {} /*optional*/) => {
    return (Math.pow(radius, 2) * PI).toFixed(precision)
}

process.stdout.write("Area = " + circleArea(circle, {precision : 5} ) + " m^2\n") //parse circle object

/*
{
  shape: 'circle',
  radius: 3.141592653589793,
  diameter: 6.283185307179586
}
Area = 31.00628 m^2
*/
