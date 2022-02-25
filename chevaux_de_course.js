// CHEVAUX DE COURSE https://www.codingame.com/training/easy/horse-racing-duals

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline())
tableau = []
let res = 10000001

for (let i = 0; i < N; i++) {
  const nombreActuel = parseInt(readline())
  tableau[i] = nombreActuel
}

tableau.sort(function (a, b) {
  return a - b
})
console.error(tableau)

for (let i = 0; i < N; i++) {
  if (tableau[i + 1] - tableau[i] < res) {
    res = tableau[i + 1] - tableau[i]
  }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(res)
