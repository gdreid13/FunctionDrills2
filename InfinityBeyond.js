/* eslint-disable strict */
function beyond(num) {
  if (num === Infinity)
    console.log('And beyond');
  else if (num === -Infinity)
    console.log('And beyond');
  else if (Math.sign(num) === 1)
    console.log('To infinity');
  else if (Math.sign(num) === -1)
    console.log('To negative infinity');
  else if (num === 0)
    console.log('Staying home');
}

