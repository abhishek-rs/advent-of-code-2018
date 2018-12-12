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

const array = document.getElementsByTagName("pre")[0].innerText.split("\n").pop();
const containsTuples = R.contains(2, R.__);
const containsTriples = R.contains(3, R.__);
const countTrues = R.pipe(
                        R.countBy(R.identity), 
                        R.prop(true)
                    );                   

const numberOfTuples = R.pipe( 
                            R.map( 
                                R.pipe( 
                                    R.countBy(R.identity), 
                                    R.values, 
                                    containsTuples
                                )
                            ), 
                            countTrues
                        );

const numberOfTriples = R.pipe( 
                            R.map( 
                                R.pipe( 
                                    R.countBy(R.identity), 
                                    R.values, 
                                    containsTriples
                                )
                            ), 
                            countTrues
                        );

const answer = R.converge(R.multiply, [numberOfTuples, numberOfTriples])(array);