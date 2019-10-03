let bill = Number(process.argv[2])
let people = Number(process.argv[3])
let tipPercent = Number(process.argv[4])

// let bill = 100;
// let people = 2;
// let tipPercent = 40;

if (tipPercent > 0) {
    const withTip = bill + tipPercent * bill / 100;
    const total = withTip / people;
    console.log(total);
} else {
    const total = bill / people;
    console.log(total);
}

Number()