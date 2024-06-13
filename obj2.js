//const tenderUser = new Object()

const tinderUser = {}

tinderUser.name = "Amit"
tinderUser.email = "amit.kush@outlook.com"
tinderUser.IsloggedIn = false
console.log(tinderUser);

obj1 = {1:"a", 2:"b", 3:"c"}
obj2 = {4:"d", 5:"e", 6:"f"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2);

//const obj3 = {...obj1, ...obj2}
//console.log(obj3)
console.log(Object.values(tinderUser))
console.log(Object.keys(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("email"))// to check the keys or values in arrya or database