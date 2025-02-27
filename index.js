const radius = 5;
const pi = 3.1415;
const max_area = pi * ( radius ** 2);
console.log("The maximum area of the garden is " + max_area);


let plant_count = 20;
//total area in week1 with 40 plants
plant_count *= 2;
const areaperplant = 0.8;
const area1 = areaperplant * plant_count;
console.log("The plant growth in first week " + area1 + " square meters");
if( plant_count > (0.80 * max_area))
{
    console.log("The plants must be pruned");
}
else if((plant_count > (0.50 * max_area) ) && (plant_count < (0.80 * max_area)))
{
    console.log("The plants must be monitored");
}
else if( plant_count < (0.50 * max_area))
{
    console.log("The plants can be planted");
}

//total area in week2 with 40 plants
plant_count  = plant_count * 2;
const area2 = areaperplant * plant_count;
console.log("The plant growth in second week " + area2 + " square meters");
if( plant_count > (0.80 * max_area))
{
    console.log("The plants must be pruned");
}
else if((plant_count > (0.50 * max_area) ) && (plant_count < (0.80 * max_area)))
{
    console.log("The plants must be monitored");
}
else if( plant_count < (0.50 * max_area))
{
    console.log("The plants can be planted");
}


//Total area in week3 with 80 plants
plant_count  = plant_count * 2;
const area3 = areaperplant * plant_count;
console.log("The plant growth in third week " + area3 + " square meters");
if( plant_count > (0.80 * max_area))
{
    console.log("The plants must be pruned");
}
else if((plant_count > (0.50 * max_area) ) && (plant_count < (0.80 * max_area)))
{
    console.log("The plants must be monitored");
}
else if( plant_count < (0.50 * max_area))
{
    console.log("The plants can be planted");
}

//PART2
//Amount of space additionally required if they start with 100 plants and continue till 10 weeks
plant_count = 100;
//After week 10 the space required

const exparea = areaperplant * 100;
const areaat10week = (exparea *2)*10;

console.log("Expanded area after 10 weeks " + areaat10week);
console.log("Additional space required is " + (areaat10week - max_area));

//radius of the expanded space
console.log("Radius of the expanded garden " + (Math.sqrt(areaat10week/pi)));

//part 3
//try catch
let areawith100plants;
try{
    areawith100plants = areaperplant * 100 ;
    if( areawith100plants > max_area)
    {
        throw "Error - the no of plants provided exceeds the original area provided";
    }
}
catch(err)
{
    console.log(err);
}
finally{
    console.log("The area required with 100 plants is " + areawith100plants + " which is higher than the provided area " + max_area );
}