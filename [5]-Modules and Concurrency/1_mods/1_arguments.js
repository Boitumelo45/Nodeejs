function args(){
  console.log(arguments); //dynamic number of arguments
  return arguments
}

args(0,1,2,3,4,5)
//[Arguments] { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }
let obj = args("John", "Doe", 23, "Engineer")
//[Arguments] { '0': 'John', '1': 'Doe', '2': 23, '3': 'Engineer' }
console.log(Object.values(obj)); //values of a hash table
