//
// In mathematics, the Fibonacci numbers or Fibonacci sequence are the numbers in the following integer sequence:[1][2]
//
// 1,\;1,\;2,\;3,\;5,\;8,\;13,\;21,\;34,\;55,\;89,\;144,\; \ldots\;
// or (often, in modern usage):
//
// 0,\;1,\;1,\;2,\;3,\;5,\;8,\;13,\;21,\;34,\;55,\;89,\;144,\; \ldots\; OEIS A000045.
//
// The Fibonacci spiral: an approximation of the golden spiral created by drawing circular arcs connecting the opposite corners of squares in the Fibonacci tiling;[3] this one uses squares of sizes 1, 1, 2, 3, 5, 8, 13, 21, and 34.
// By definition, the first two numbers in the Fibonacci sequence are either 1 and 1, or 0 and 1, depending on the chosen starting point of the sequence, and each subsequent number is the sum of the previous two.


var a = 1;
var b = 0;
var c = 0;

while (c<200) {
  console.log(c);
  c=a+b;
  a=b;
  b=c;
}
