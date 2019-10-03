const bill = Number(process.argv[2])
const people = Number(process.argv[3])
const tipPercent = Number(process.argv[4])

console.log(`$${bill.toFixed(2)} - Bill`);

function theTip(bill, tipPercent) {
    result = tipPercent * bill / 100;
    console.log(`$${result.toFixed(2)} - The Tip`);
}

theTip(bill, tipPercent);

if (tipPercent > 0) {
    const withTip = bill + tipPercent * bill / 100;
    const total = withTip / people;
    console.log(`$${total.toFixed(2)} each. Thanks for the tip!`);
} else {
    const total = bill / people;
    console.log(`$${total.toFixed(2)} each. See you next time!`);
}


