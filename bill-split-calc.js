const bill = Number(process.argv[2])
const people = Number(process.argv[3])
const tipPercent = Number(process.argv[4])

// let bill = 100;
// let people = 2;
// let tipPercent = 40;

// if (bill !== Number) {
//     console.log('Please input a number for the bill!');
// } else if (people !== Number) {
//     console.log('Please input a number for people!')
// } else {
//     console.log('Please input a number for the tip!')
// }

if (tipPercent > 0) {
    const withTip = bill + tipPercent * bill / 100;
    const total = withTip / people;
    console.log(total + ' Thanks for the tip!');
} else {
    const total = bill / people;
    console.log(total);
}


