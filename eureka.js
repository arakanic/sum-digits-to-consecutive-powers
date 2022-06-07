// This function looks at the range of numbers between two given integers a & b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the following property:

// 1 = 1^1
// 2 = 2^1
// 3 = 3^1
// 89 = 8^1 + 9^2
// 135 = 1^1 + 3^2 + 5^3

// Let's see some cases:
// sumDigPow(1, 10) -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// sumDigPow(1, 100) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// sumDigPow(90, 100) -> []

function sumDigPow(a, b) {
    let eureka = []
    // for (let n = a; n <= b; n++) {
    //   let nDigits = n.toString().split("")
    //   let sdp = 0
    //   for (let j = 0; j < nDigits.length; j++) {
    //     sdp += nDigits[j] ** (j + 1)
    //   }
    //   if (sdp == n) {
    //       eureka.push(n)
    //   }
    // }
    while (a <= b) {
        if (a.toString().split("").reduce((x, y, i) => Number(x) + (Number(y) ** (i + 1)), 0) == a) {
            eureka.push(a)
        }
        a++
    }
    return eureka
  }

sumDigPow(1, 10) // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100) // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
sumDigPow(10, 100) // -> [89]
sumDigPow(90, 100) // -> []
sumDigPow(90, 150) // -> [135]
sumDigPow(50, 150) // -> [89, 135]
sumDigPow(10, 150) // -> [89, 135]
