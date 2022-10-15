const sentence = "hello there from lighthouse labs";
//set initial speed to 1000
let speed = 1000;
//for loop over each character
for (const char of sentence) {
  //set the timeout and write each
  setTimeout(() => {
    process.stdout.write(char);
  }, speed);
  //increment speed by 50 for each character
  speed += 50;
}
//adding the new line
setTimeout(() => {
  process.stdout.write('\n');
}, speed);