// TEMPERATURES https://www.codingame.com/training/easy/temperatures

const n = parseInt(readline()) // the number of temperatures to analyse
let inputs = readline().split(' ')

let resPos = 0
let resNeg = 0
let res = ''

if (inputs != 0 && inputs[1]) {
  resPos = 5526
  resNeg = -273
} else if (inputs != 0) {
  resPos = inputs[0]
  resNeg = inputs[0]
}

for (let i = 0; i < n; i++) {
  const t = parseInt(inputs[i]) // a temperature expressed as an integer ranging from -273 to 5526
  if (t > 0 && t < resPos) {
    resPos = t
  } else if (t < 0 && t > resNeg) {
    resNeg = t
  }
}

if (resPos <= -resNeg) {
  res = resPos
} else {
  res = resNeg
}

console.log(res)
