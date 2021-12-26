array_1=['bottle',' pen','book','mobile ']
random_number=Math.floor((Math.random()*array_1.length)+1);
element_of_array=array_1[random_number];
console.log("quick draw data set!");
document.getElementById("sketch_to_be_drawn").innerHTML=element_of_array;
timer_counter=0;
timer_check="";
drawn_sketch="";
answer_string="";
score=0;