//No numbers are provided: not beep at all and end immediately
// An input is a negative number: Ignore/skip any numbers that are negative.
// An input is not a number: Ignore/skip these as well,



const alramTime = process.argv.slice(2);

for (let i = 0; i < alramTime.length; i++) {
  if (alramTime[i] >=0 && alramTime[i] !== NaN) {
    setTimeout(() => {
      process.stdout.write('\x07'); // makes the terminal produce a sound
    }, alramTime[i] * 1000);
  }
}