var Student = {
  name: "Sammy",
  class: 7,
  roll_no:21,
  favorite_subject: "coding",
  marks : [30,35,40,50]
  
};



function setup() {
  createCanvas(400, 400);

  console.log(Student.class);
  console.log(Student.name);
  console.log(Student.favorite_subject);
}

function draw() {
  background("red");
}