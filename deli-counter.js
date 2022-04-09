// 1. Write your functions here
function line(deliArr) {
    if (deliArr.length === 0) {
        console.log("The line is currently empty.")
    }
    if (deliArr.length !== 1) {
        const newArr = deliArr.map(el => `${[deliArr.indexOf(el) + 1]}.  ${el}`)
        console.log(`"The line is currently: ${newArr.join(' ')}"`)
    }
    // [deliArr.indexOf(el) + 1] + '.' + ' ' + el
}
// input: arr, name
// output:string with current place 
// side affect:name is added in the arr

// 1.put the name in the arr
// 2. return string with current place
function takeANumber(deliArr, name) {
    // 1.put the name in the arr
    deliArr.push(name)
    // 2. return string with current place
    console.log(`Welcome, ${name}. You are number ${deliArr.length} in line.`)
}



function nowServing(deliArr) {
    if (deliArr.length === 0) {
        console.log("There is nobody waiting to be served!")
    }
    if (deliArr.length !== 0) {
        console.log(`"Currently serving ${deliArr[0]}."`)
        deliArr.shift()
    }
}


// 2. Example Usage

const katzDeli = []

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"