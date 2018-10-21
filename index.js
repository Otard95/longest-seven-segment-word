
const fs = require('fs');
let words = fs.readFileSync('words_alpha.txt', { encoding: 'utf8' });
words = words.split('\n');

console.log(`Checking ${words.length} words...`);

const bad_chars = /[gkmqvwxz]/g;

let words_by_length = new Array(40);
words_by_length.fill(undefined);

words.forEach(word => {
  if (word.match(bad_chars)) return;
  let len = word.length;
  
  if (words_by_length.length < len) throw new Error('increse array size');
  if (!words_by_length[len]) words_by_length[len] = [];
  words_by_length[len].push(word);
});

for (let i = words_by_length.length; i >= 0; i--) {

  if (!words_by_length[i]) continue;
  console.log(`\n-----------------Words of length ${i-1}-----------------`);
  
  for (let j = 0; j < words_by_length[i].length; j++) {
    if (j > 10) {
      console.log(`And ${words_by_length[i].length - j} more words...`);
      break;
    }
    console.log(words_by_length[i][j]);
  }

}
