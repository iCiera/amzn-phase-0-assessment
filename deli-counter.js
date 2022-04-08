// 1. Write your functions here

function line(arr){
  if(arr.length === 0) {
    return 'The line is currently empty'
  }
    let arrToString = '' 
    for(let i = 0; i < arr.length; i++) {
      arrToString += `${i+1}. ${arr[i]}, ` 
    }
  return `The line is currently: ` + arrToString.slice(0, -2)
  }
  
  function takeANumber(arr, name) {
    arr.push(name);
    return `Welcome, ${name}. You are number ${arr.indexOf(name) + 1} in line.`
  };

  function nowServing(arr) {

    if (arr.length == 0) {
      return 'There is nobody waiting to be served!'
    }
    let current = arr[0]
    arr.shift()
    return `Currently serving ${current}. `
  }

// 2. Example Usage

const katzDeli = []

 //console.log(takeANumber(katzDeli, "Ada")) //=> Welcome, Ada. You are number 1 in line.
 //console.log(takeANumber(katzDeli, "Grace")) //=> Welcome, Grace. You are number 2 in line.
 //console.log(takeANumber(katzDeli, "Kent")) //=> Welcome, Kent. You are number 3 in line.

 //console.log(line(katzDeli)) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

 //console.log(nowServing(katzDeli)) //=> "Currently serving Ada."

 //console.log(line(katzDeli)) //=> "The line is currently: 1. Grace 2. Kent"

 //console.log(takeANumber(katzDeli, "Matz")) //=> Welcome, Matz. You are number 3 in line.

 //console.log(line(katzDeli)) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

 //console.log(nowServing(katzDeli)) //=> "Currently serving Grace."

 //console.log(line(katzDeli)) //=> "The line is currently: 1. Kent 2. Matz"