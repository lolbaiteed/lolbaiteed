/**
 * Write a function that receives two strings and returns the number of characters we would need to rotate the first string forward to match the second.
 *
 * @param {String} first
 * @param {String} second
 * @return {Number}
 */

function shiftedDiff(first, second) {
	/* Work here */
  first = document.getElementById("string1").value;
  second = document.getElementById("string2").value;

  let parts = first.split("");
  let shifted = parts;
  const message = document.getElementById("message");

  for (let shift = 0; shift  < parts.length; shift ++) {
    shifted.unshift(shifted.pop());
    if (shifted.join("") === second) {
      message.innerHTML = shift + 1;
      return;
    }
    if (shift === parts.length -1 && shifted.join("") != second) {
      message.innerHTML = "-1";
      return;
    }
  }
}

const button = document.getElementById("calc");

button.onclick = () => shiftedDiff();
