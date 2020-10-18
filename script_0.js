const canvas = document.querySelector('#canvas');

const context = canvas.getContext('2d');

// A RECTANGLE'S 3 MAIN METHODS
// create a rect using fillRect() that takes 4 args: x-coordinate, y-coordinate, rect width, rect height
context.fillStyle = 'crimson';

context.fillRect(20, 20, 150, 100);

context.fillStyle = 'green';

context.fillRect(200, 20, 150, 100);

// create an rect's outline using strokeRect() that takes 4 similar args as fillRect()
context.lineWidth = 5;

context.strokeStyle = 'blue';

context.strokeRect(100, 200, 150, 100);

// to clear out a part of a rect, use clearRect(), that takes 4 similar args as the other 2
context.clearRect(25, 25, 140, 90);

// TEXT
// fillText(arg #1: the text, arg #2: x-coordinate, arg #3: y-coordinate)
context.font = '50px New Times Roman';

context.fillStyle = 'purple';

context.fillText('hi there', 400, 50);

// strokeText()
context.lineWidth = 2;

context.strokeStyle = 'pink';

context.strokeText('hello?', 400, 100);