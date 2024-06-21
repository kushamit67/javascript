const kingName = {
    username: "Amit",
    price: 999,

    welcomeMessage: function message(){
        console.log(`${this.username}, Welcome to the Platform`)
        console.log(this)
    }
}

kingName.welcomeMessage()

// function codeMe(){
//     let username= "Amit"
//     console.log(this.username)
// }
// codeMe()

// const addOne= (num1, num2)=> {
//     return num1 + num2
// }
// console.log(addOne(3,7))

const addOne= (num1, num2)=> num1 + num2

console.log(addOne(3,7))
const addTwo= (num1, num2)=> (num1 + num2)
console.log(addTwo(10,34))