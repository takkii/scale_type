function* createNumbers(): Generator<number>{
    let n = 0
    while (1) {
	yield n++
    }
}

let a: number
let b: number
let c: number

let numbers: number = createNumbers()
a = numbers.next()
b = numbers.next()
c = numbers.next()

console.info(a)
console.info(b)
console.info(c)
