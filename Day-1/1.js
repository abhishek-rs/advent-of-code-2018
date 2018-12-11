//Run in browser console on page - https://adventofcode.com/2018/day/1/input

const array = document.getElementsByTagName("pre")[0].innerText.split("\n")

const answer = array.reduce( (total, i) => {
    let value = parseInt(i);
    total = total + value;	
    return total; 
}, 0);
