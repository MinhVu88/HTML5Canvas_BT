const canvas = document.querySelector('#canvas');

const context = canvas.getContext('2d');

// PATHS (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
// draw triangle #1
context.beginPath();

context.moveTo(50, 50); // starting points: x = 50 (horizontal) | y = 50 (vertical)

context.lineTo(150, 50); // horizontal line: x = 150 (50 -> 150) | y = 50

context.lineTo(100, 100); // downward line: x = 100 (50 <-> [100] <-> 150) | y = 100 (50 -> 100)

context.lineTo(50, 50); // upward line: x = 50 (100 -> 50) | y = 50 (100 -> 50) => complete the triangle

// context.closePath(); // an alternative way to complete the triangle

context.stroke(); // call this to get the lines shown

context.fillStyle = 'coral';

context.fill();

// draw a triangle #2
context.beginPath();

context.moveTo(150, 50);

context.lineTo(100, 100);

context.lineTo(200, 100);

context.lineTo(150, 50);

context.stroke();

context.fillStyle = 'black';

context.fill();

// draw rectangle 
context.beginPath();

context.rect(200, 50, 100, 50);

context.fillStyle = 'green';

context.fill();

// draw arcs (circles)
context.beginPath();

// Math.PI = a half circle | Math.PI * 2 = a full circle 
// context.arc(200, 75, 40, 0, Math.PI * 2);

// draw a circular face at the center of the canvas (face's diameter = canvas width)
let face_X = canvas.width / 2; // 300
let face_Y = canvas.height / 2; // 300
let face_diameter = canvas.width;
let face_radius = face_diameter / 2;

const startAngle = 0;
const half_circle = Math.PI;
const fullCircle_endAngle = Math.PI * 2;

context.arc(face_X, face_Y, face_radius, startAngle, fullCircle_endAngle);

// draw mouth
let mouth_X = face_X + 150;
let mouth_Y = face_Y;
let mouth_radius = face_radius / 2;

context.moveTo(mouth_X, mouth_Y); // mouth coordinates: x = 450 | y = 300

context.arc(face_X, face_Y, mouth_radius, startAngle, half_circle, false);

// draw left eye
let left_eye_X = face_X - 100;
let left_eye_Y = face_Y - 100;
let left_eye_radius = 20

context.moveTo(left_eye_X, left_eye_Y);

context.arc(face_X - 120, face_Y - 100, left_eye_radius, startAngle, fullCircle_endAngle);

// draw right eye
let right_eye_X = face_X + 140;
let right_eye_Y = left_eye_Y;
let right_eye_radius = left_eye_radius;

context.moveTo(right_eye_X, right_eye_Y);

context.arc(face_X + 120, face_Y - 100, right_eye_radius, startAngle, fullCircle_endAngle);

// context.fillStyle = 'yellow';

// context.fill();

context.stroke();