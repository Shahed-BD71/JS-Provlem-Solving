// Print the multiplication tables with numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
   printTable(i)
   console.log(" ") //just for spacing blew...
}

function printTable(num) {
  for (let i = 1; i <= 10; i++) {
      let row = num + '*' + i + ' = ' + num * i;
      console.log(row) //only print parameter value here
  }
}
console.log(printTable(20))


