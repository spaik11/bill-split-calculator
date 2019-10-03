const bill = Number(process.argv[2])
const people = Number(process.argv[3])
const tip = Number(process.argv[4])

// const result = process.argv[2].startsWith('tip')
// result
// const tip = process.argv[2].slice(-2)
// tip

console.log(`The Bill - $${bill.toFixed(2)}`);

function theTip(bill, tip) {
    result = tip * bill / 100;
    if (result > 0) {
    console.log(`The Tip - $${result.toFixed(2)}`);
} else {
    console.log(`The Tip - :(`)
}
}

theTip(bill, tip);

if (tip > 0) {
    const withTip = bill + tip * bill / 100;
    const total = withTip / people;
    console.log(`$${total.toFixed(2)} per person. Thanks for the tip!`);
} else {
    const total = bill / people;
    console.log(`$${total.toFixed(2)} per person. See you next time!`);
}


