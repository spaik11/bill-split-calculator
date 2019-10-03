let bill = process.argv[2]
let people = process.argv[3]
let tipPercent = process.argv[4]

// let bill = 100;
// let people = 2;
// let tipPercent = '';

if (tipPercent > 0) {
    const totalWithTip = bill + (tipPercent * bill) / 100;
    const total = totalWithTip / people;
    console.log(total);
} else {
    const total = bill / people;
    console.log(total);
}

