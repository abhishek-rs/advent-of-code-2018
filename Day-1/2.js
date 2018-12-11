//Run in browser console on page - https://adventofcode.com/2018/day/1/input

let total2 = 0;
let freqArray = [];
let doubles = [];

while (!done) {
    total = array.reduce( (total, i) => {
        let value = parseInt(i);
        total = total + value;
        if ( freqArray.indexOf(total) !== -1) { 
            doubles.push(total); 
            done = true;
        }
        freqArray.push(total);
        return total; 
    }, 
    total2);
};

const answer = doubles[0];
