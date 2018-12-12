//Run in browser console after injecting Ramda on page - https://adventofcode.com/2018/day/2/input

//To inject Ramda, go to Chrome Dev Tools -> Sources -> Watch tab - insert below code
/* 

(function () {
 if (typeof window.R === 'undefined') {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.25.0/ramda.min.js');
    document.body.appendChild(s);
  }
 }());
*/

const input = document.getElementsByTagName("pre")[0].innerText.split("\n").pop();

const indexedReduce = R.addIndex(R.reduce);

const isOneCharDiff = (str1, str2) => {
    return R.pipe(
        indexedReduce( (acc, curr, index) => {
            if (str2[index] !== curr) {
                acc++;
            }
            return acc;
        }, 0),
        R.ifElse(
            R.equals(1), 
            R.T, 
            R.F
        )
    )(str1);
};

const answer = R.pipe(
    indexedReduce(
        (acc, curr, i, arr) => {
            R.map((x) => { 
                if(isOneCharDiff3(x, curr)) {
                    acc.push(x, curr); 
                }
                
            })(arr);
            return acc;    
        }, 
        []
    ),
    R.difference(
        R.__,
        R.identity
    ),
	R.converge(R.intersection, [R.head, R.last]),
	R.join('')
)(array);