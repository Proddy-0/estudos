function a() {
    var a = 1
    while (a <= 10) {
        console.log(`Passo ${a}`)
        a++
    }
    console.log(`FIM`)
}
function b() {
    for (var b = 1; b <= 10; b++) {
        console.log(`Passo ${b}`)
    }
    console.log(`FIM`)
}
function c () {
    var c = 1
    do {
        console.log(`Passo ${c}`)
        c++
    } while (c <= 10)
    console.log(`FIM`)
}

a()
b()
c()